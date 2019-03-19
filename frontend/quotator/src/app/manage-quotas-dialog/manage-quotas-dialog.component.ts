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
import { MatDialogRef, MatSnackBar } from '@angular/material';
import * as _ from 'lodash';
import { ManagePolicesService, Policy } from '../manage-polices.service';
import { Quota } from '../manage-quotas.service';
import { ManageUsersService, User } from '../manage-users.service';
import { TranslateService } from '../translation/translation.service';

@Component({
  selector: 'q-manage-quotas-dialog',
  templateUrl: './manage-quotas-dialog.component.html',
  styleUrls: ['./manage-quotas-dialog.component.scss']
})
export class ManageQuotasDialogComponent {
  quota: Quota = { user: '', policy: '', quantity: 0 };
  polices: Policy[] = [];
  _users: User[] = [];
  filter = '';

  get users(): User[] {
    const us = _.filter(this._users, u => u.name.includes(this.filter) || u.username.includes(this.filter));
    return _.sortBy(us, 'name');
  }

  set users(users: User[]) {
    this._users = _.sortBy(users, 'name');
  }

  constructor(
    public dialogRef: MatDialogRef<ManageQuotasDialogComponent>,
    private usersService: ManageUsersService,
    private policyService: ManagePolicesService,
    private i18n: TranslateService,
    private toast: MatSnackBar,
  ) {
    this.usersService.listUsers().subscribe(
      users => this.users = users,
      this.httpError()
    );

    this.policyService.listPolices().subscribe(
      polices => this.polices = _.sortBy(polices, 'name'),
      this.httpError()
    );
  }

  save() {
    if (this.quota.user.length < 1 || this.quota.policy.length < 1) {
      return;
    }

    this.dialogRef.close(this.quota);
  }

  cancel() {
    this.dialogRef.close(null);
  }

  userPolices(): Policy[] {
    const user = _.first(_.filter(this.users, u => u._id === this.quota.user));

    if (user == null) {
      return [];
    }

    return _.filter(this.polices, p => _.intersection(user.groups, p.groups).length > 0);
  }

  httpError(): () => void {
    return () => {
      const str = 'Connection error.';
      const message = this.i18n.instant(str);
      this.toast.open(message, null, { duration: 2000 });
    };
  }
}
