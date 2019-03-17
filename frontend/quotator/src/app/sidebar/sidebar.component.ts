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

import * as _ from 'lodash';
import { Component } from '@angular/core';
import { ConnectService, User } from '../connect.service';

@Component({
  selector: 'q-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isLoggedIn = false;
  user: User = null;
  token: string = null;

  private bs = [
    { text: 'Manage Users', route: 'manage-users', permission: 'manage_users' },
    { text: 'Manage Groups', route: 'manage-groups', permission: 'manage_users' },
    { text: 'Manage Polices', route: 'manage-polices', permission: 'manage_users' },
    { text: 'Manage Admins', route: 'manage-admins', permission: 'manage_admins' },
    { text: 'Manage Quotas', route: 'manage-quotas', permission: 'manage_quotas' },
    { text: 'Reports', route: 'reports', permission: 'reports' },
    { text: 'My Quota', route: 'quota' },
    { text: 'My Jobs', route: 'jobs' }
  ];

  constructor() {
    ConnectService.token.subscribe(token => this.isLoggedIn = token != null);
    ConnectService.user.subscribe(user => this.user = user);
  }

  buttons() {
    if (!this.isLoggedIn) {
      return [];
    }

    return _.filter(this.bs, b => b.permission == null ||
      this.user != null &&
      this.user.permissions != null &&
      _.includes(this.user.permissions, b.permission));
  }
}
