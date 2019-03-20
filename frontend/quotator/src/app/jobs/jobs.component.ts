/*
 * Copyright (c) 2019 Álan Crístoffer
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSnackBar, MatTableDataSource, MatTable } from '@angular/material';
import * as _ from 'lodash';
import { Observable, Subscription, timer } from 'rxjs';
import { Job, JobsService } from '../jobs.service';
import { TranslateService } from '../translation/translation.service';

@Component({
  selector: 'q-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements AfterViewInit, OnInit, OnDestroy {
  displayedColumns: string[] = ['status', 'user', 'job', 'title', 'copies', 'pages', 'time'];
  dataSource = new MatTableDataSource<Job>([]);

  private timer: Observable<number>;
  private timerSubscription: Subscription;

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('jobsTable') jobsTable: MatTable<any>;

  constructor(
    private service: JobsService,
    private i18n: TranslateService,
    private toast: MatSnackBar
  ) {
    this.service.getJobs().subscribe(
      jobs => {
        jobs = _.map(jobs, r => _.assign(r, { time: new Date(r.time * 1000) }));
        this.dataSource.data = _.orderBy(jobs, 'time', 'desc');
      },
      this.httpError()
    );
  }

  ngOnInit() {
    this.timer = timer(1000, 1000);
    this.timerSubscription = this.timer.subscribe(() => {
      this.service.listJobs().subscribe(jobs => {
        jobs = _.map(jobs, r => _.assign(r, { time: new Date(r.time * 1000) }));
        this.dataSource.data = _.orderBy(jobs, 'time', 'desc');
        this.jobsTable.renderRows();
      });
    });
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  httpError(): () => void {
    return () => {
      const str = 'Connection error.';
      const message = this.i18n.instant(str);
      this.toast.open(message, null, { duration: 2000 });
    };
  }
}
