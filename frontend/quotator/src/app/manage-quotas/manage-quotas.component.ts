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

import { Component } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import * as _ from 'lodash';
import { timer, zip } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { ManagePolicesService, Policy } from '../manage-polices.service';
import { ManageQuotasDialogComponent } from '../manage-quotas-dialog/manage-quotas-dialog.component';
import { ManageQuotasService, Quota } from '../manage-quotas.service';
import { ManageUsersService, User } from '../manage-users.service';
import { TranslateService } from '../translation/translation.service';

@Component({
  selector: 'q-manage-quotas',
  templateUrl: './manage-quotas.component.html',
  styleUrls: ['./manage-quotas.component.scss']
})
export class ManageQuotasComponent {
  filter = '';
  quotas: Quota[] = [];
  users: User[] = [];
  polices: Policy[] = [];

  constructor(
    private service: ManageQuotasService,
    private i18n: TranslateService,
    private usersService: ManageUsersService,
    private policyService: ManagePolicesService,
    private toast: MatSnackBar,
    private dialog: MatDialog,
  ) {
    const quotasSubscription = this.service.listQuotas();
    const usersSubscription = this.usersService.listUsers();
    const policesSubscription = this.policyService.listPolices();

    zip(quotasSubscription, usersSubscription, policesSubscription).subscribe(
      ([quotas, users, polices]) => {
        this.quotas = quotas;
        this.users = users;
        this.polices = polices;
      },
      this.httpError()
    );
  }

  addQuota() {
    const dialogRef = this.dialog.open(ManageQuotasDialogComponent);
    dialogRef.componentInstance.quota = {
      user: '',
      policy: '',
      quantity: 0
    };
    dialogRef.updateSize('70%');
    dialogRef.afterClosed()
      .pipe(flatMap(p => {
        if (p != null) {
          return this.service.addQuota(p);
        } else {
          return timer(1);
        }
      }))
      .pipe(flatMap(() => this.service.listQuotas()))
      .subscribe(
        quotas => this.quotas = quotas,
        this.httpError()
      );
  }

  edit(quota: Quota) {
    const dialogRef = this.dialog.open(ManageQuotasDialogComponent);
    dialogRef.componentInstance.quota = _.cloneDeep(quota);
    dialogRef.updateSize('70%');
    dialogRef.afterClosed()
      .pipe(flatMap(p => {
        if (p != null) {
          return this.service.setQuota(p);
        } else {
          return timer(1);
        }
      }))
      .pipe(flatMap(() => this.service.listQuotas()))
      .subscribe(
        quotas => this.quotas = quotas,
        this.httpError()
      );
  }

  remove(quota: Quota) {
    const msg = 'Are you sure that you want to delete this item?';
    if (confirm(this.i18n.instant(msg))) {
      this.service.deleteQuota(quota).pipe(flatMap(() => this.service.listQuotas())).subscribe(
        quotas => this.quotas = quotas,
        this.httpError()
      );
    }
  }

  findUser(id: string): User {
    return _.first(_.filter(this.users, u => u._id === id));
  }

  findPolicy(id: string): Policy {
    return _.first(_.filter(this.polices, p => p._id === id));
  }

  filteredQuotas(): Quota[] {
    return _.filter(this.quotas, quota => {
      const user = this.findUser(quota.user);
      const policy = this.findPolicy(quota.policy);
      return user.name.includes(this.filter) ||
        user.username.includes(this.filter) ||
        policy.name.includes(this.filter);
    });
  }

  httpError(): () => void {
    return () => {
      const str = 'Connection error.';
      const message = this.i18n.instant(str);
      this.toast.open(message, null, { duration: 2000 });
    };
  }
}
