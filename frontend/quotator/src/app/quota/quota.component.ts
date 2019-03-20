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

import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import * as _ from 'lodash';
import { ManageQuotasService, Quota } from '../manage-quotas.service';
import { TranslateService } from '../translation/translation.service';
import { Observable, Subscription, timer } from 'rxjs';


@Component({
  selector: 'q-quota',
  templateUrl: './quota.component.html',
  styleUrls: ['./quota.component.scss']
})
export class QuotaComponent implements OnInit, OnDestroy {
  _quotas: Quota[] = [];

  private timer: Observable<number>;
  private timerSubscription: Subscription;

  get quotas(): Quota[] {
    return this._quotas;
  }

  set quotas(quotas: Quota[]) {
    this._quotas = _.sortBy(quotas, 'policy.name');
  }

  constructor(
    private service: ManageQuotasService,
    private i18n: TranslateService,
    private toast: MatSnackBar,
    private dialog: MatDialog,
  ) {
    this.service.getQuota().subscribe(
      quotas => this.quotas = quotas,
      this.httpError()
    );
  }

  ngOnInit() {
    this.timer = timer(1000, 1000);
    this.timerSubscription = this.timer.subscribe(() => {
      this.service.listQuotas().subscribe(qs => this.quotas = qs);
    });
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }

  httpError(): () => void {
    return () => {
      const str = 'Connection error.';
      const message = this.i18n.instant(str);
      this.toast.open(message, null, { duration: 2000 });
    };
  }
}
