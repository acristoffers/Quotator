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
import { timer } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { ManageUsersDialogComponent } from '../manage-users-dialog/manage-users-dialog.component';
import { ManageUsersService, User } from '../manage-users.service';
import { TranslateService } from '../translation/translation.service';


@Component({
  selector: 'q-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent {
  filter = '';
  _users: User[] = [];

  get users(): User[] {
    return this._users;
  }

  set users(users: User[]) {
    this._users = _.sortBy(users, 'username');
  }

  constructor(
    private service: ManageUsersService,
    private i18n: TranslateService,
    private toast: MatSnackBar,
    private dialog: MatDialog,
  ) {
    this.service.listUsers().subscribe(
      users => this.users = users,
      this.httpError()
    );
  }

  addUser() {
    const dialogRef = this.dialog.open(ManageUsersDialogComponent);
    dialogRef.componentInstance.user = {
      name: '',
      username: '',
      groups: []
    };
    dialogRef.updateSize('70%');
    dialogRef.afterClosed()
      .pipe(flatMap(p => {
        if (p != null) {
          return this.service.addUser(p);
        } else {
          return timer(1);
        }
      }))
      .pipe(flatMap(() => this.service.listUsers()))
      .subscribe(
        users => this.users = users,
        this.httpError()
      );
  }

  edit(user: User) {
    const dialogRef = this.dialog.open(ManageUsersDialogComponent);
    dialogRef.componentInstance.user = _.cloneDeep(user);
    dialogRef.updateSize('70%');
    dialogRef.afterClosed()
      .pipe(flatMap(p => {
        if (p != null) {
          return this.service.setUser(p);
        } else {
          return timer(1);
        }
      }))
      .pipe(flatMap(() => this.service.listUsers()))
      .subscribe(
        users => this.users = users,
        this.httpError()
      );
  }

  remove(user: User) {
    const msg = 'Are you sure that you want to delete this item?';
    if (confirm(this.i18n.instant(msg))) {
      this.service.deleteUser(user).pipe(flatMap(() => this.service.listUsers())).subscribe(
        users => this.users = users,
        this.httpError()
      );
    }
  }

  filteredUsers(): User[] {
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
