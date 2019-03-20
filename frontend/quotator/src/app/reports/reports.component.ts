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

import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSnackBar, MatTableDataSource } from '@angular/material';
import * as _ from 'lodash';
import { Observable, Subscription, timer } from 'rxjs';
import { Job, JobsService } from '../jobs.service';
import { Report, ReportsService } from '../reports.service';
import { TranslateService } from '../translation/translation.service';

@Component({
  selector: 'q-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['user', 'action', 'params', 'time'];
  reportsDataSource = new MatTableDataSource<Report>([]);

  displayedJobsColumns: string[] = ['status', 'user', 'job', 'title', 'copies', 'pages', 'time'];
  jobsDataSource = new MatTableDataSource<Job>([]);

  private timer: Observable<number>;
  private timerSubscription: Subscription;

  @ViewChild('resourcesPaginator') reportsPaginator: MatPaginator;
  @ViewChild('jobsPaginator') jobsPaginator: MatPaginator;

  constructor(
    private service: ReportsService,
    private jobService: JobsService,
    private i18n: TranslateService,
    private toast: MatSnackBar
  ) {
    this.service.listReports().subscribe(
      reports => {
        reports = _.map(reports, r => _.assign(r, { time: new Date(r.time * 1000) }));
        this.reportsDataSource.data = _.orderBy(reports, 'time', 'desc');
      },
      this.httpError()
    );

    this.jobService.listJobs().subscribe(
      jobs => {
        jobs = _.map(jobs, r => _.assign(r, { time: new Date(r.time * 1000) }));
        return this.jobsDataSource.data = _.orderBy(jobs, 'time', 'desc');
      },
      this.httpError()
    );
  }

  ngOnInit() {
    this.jobsDataSource.paginator = this.jobsPaginator;
    this.reportsDataSource.paginator = this.reportsPaginator;

    this.timer = timer(1000, 1000);
    this.timerSubscription = this.timer.subscribe(() => {
      this.service.listReports().subscribe(
        reports => {
          reports = _.map(reports, r => _.assign(r, { time: new Date(r.time * 1000) }));
          this.reportsDataSource.data = _.orderBy(reports, 'time', 'desc');
        },
        this.httpError()
      );

      this.jobService.listJobs().subscribe(
        jobs => {
          jobs = _.map(jobs, r => _.assign(r, { time: new Date(r.time * 1000) }));
          return this.jobsDataSource.data = _.orderBy(jobs, 'time', 'desc');
        },
        this.httpError()
      );
    });
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }

  dumps(obj: any): string {
    return JSON.stringify(obj);
  }

  httpError(): () => void {
    return () => {
      const str = 'Connection error.';
      const message = this.i18n.instant(str);
      this.toast.open(message, null, { duration: 2000 });
    };
  }
}
