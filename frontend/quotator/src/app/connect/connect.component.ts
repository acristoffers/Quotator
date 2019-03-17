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

import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConnectService, User } from '../connect.service';
import { TranslateService } from '../translation/translation.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'q-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent {
  username: string;
  password: string;
  confPassword: string;
  working = false;

  constructor(
    private service: ConnectService,
    private i18n: TranslateService,
    private router: Router,
    private toast: MatSnackBar) {
  }

  isLoggedIn(): boolean {
    return ConnectService.accessToken != null;
  }

  connect() {
    this.service.auth(this.username, this.password).subscribe(
      ret => {
        const user = ret['user'];
        const token = ret['token'];

        ConnectService.user.next(user);
        ConnectService.token.next(token);

        this.password = '';
        this.confPassword = '';

        if (ConnectService.lastUrl != null) {
          this.router.navigateByUrl(ConnectService.lastUrl);
        }
      },
      this.httpError());
  }
  setPassword() {
    if (this.password.length < 4 || this.password !== this.confPassword) {
      return;
    }

    this.service.setOwnPassword(this.password).subscribe(
      () => {
        const message = this.i18n.instant('Done');
        this.toast.open(message, null, { duration: 2000 });
        this.password = this.confPassword = '';
      },
      this.httpError()
    );
  }

  httpError(): (res: HttpErrorResponse) => void {
    const self: ConnectComponent = this;
    return (error: HttpErrorResponse) => {
      this.working = false;
      if (!error.ok) {
        let str: string;
        if (error.status === 403) {
          str = 'Wrong password.';
        } else {
          str = 'Error when connecting. Check address and try again.';
        }
        const message = self.i18n.instant(str);
        self.toast.open(message, null, { duration: 2000 });
      }
    };
  }
}
