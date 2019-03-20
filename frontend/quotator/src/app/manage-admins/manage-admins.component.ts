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

import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import * as _ from 'lodash';
import { Observable, Subscription, timer } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { ManageAdminsDialogComponent } from '../manage-admins-dialog/manage-admins-dialog.component';
import { Admin, ManageAdminsService } from '../manage-admins.service';
import { TranslateService } from '../translation/translation.service';

@Component({
  selector: 'q-manage-admins',
  templateUrl: './manage-admins.component.html',
  styleUrls: ['./manage-admins.component.scss']
})
export class ManageAdminsComponent implements OnInit, OnDestroy {
  filter = '';
  _users: Admin[] = [];

  private timer: Observable<number>;
  private timerSubscription: Subscription;

  get users(): Admin[] {
    return this._users;
  }

  set users(users: Admin[]) {
    this._users = _.sortBy(users, 'username');
  }

  constructor(
    private service: ManageAdminsService,
    private i18n: TranslateService,
    private toast: MatSnackBar,
    private dialog: MatDialog,
  ) {
    this.service.listAdmins().subscribe(
      users => this.users = users,
      this.httpError()
    );
  }

  ngOnInit() {
    this.timer = timer(1000, 1000);
    this.timerSubscription = this.timer.subscribe(() => {
      this.service.listAdmins().subscribe(us => this.users = us);
    });
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }

  addUser() {
    const dialogRef = this.dialog.open(ManageAdminsDialogComponent);
    dialogRef.componentInstance.user = {
      name: '',
      username: '',
      permissions: []
    };
    dialogRef.updateSize('70%');
    dialogRef.afterClosed()
      .pipe(flatMap(p => {
        if (p != null) {
          return this.service.addAdmin(p);
        } else {
          return timer(1);
        }
      }))
      .pipe(flatMap(() => this.service.listAdmins()))
      .subscribe(
        users => this.users = users,
        this.httpError()
      );
  }

  edit(user: Admin) {
    const dialogRef = this.dialog.open(ManageAdminsDialogComponent);
    dialogRef.componentInstance.user = _.cloneDeep(user);
    dialogRef.updateSize('70%');
    dialogRef.afterClosed()
      .pipe(flatMap(p => {
        if (p != null) {
          return this.service.setAdmin(p);
        } else {
          return timer(1);
        }
      }))
      .pipe(flatMap(() => this.service.listAdmins()))
      .subscribe(
        users => this.users = users,
        this.httpError()
      );
  }

  remove(user: Admin) {
    const msg = 'Are you sure that you want to delete this item?';
    if (confirm(this.i18n.instant(msg))) {
      this.service.deleteAdmin(user).pipe(flatMap(() => this.service.listAdmins())).subscribe(
        users => this.users = users,
        this.httpError()
      );
    }
  }

  filteredUsers(): Admin[] {
    return _.filter(this.users, u => {
      return _.lowerCase(_.deburr(u.name)).includes(this.filter) ||
        _.lowerCase(_.deburr(u.username)).includes(this.filter);
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
