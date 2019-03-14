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
import { ManagePolicesDialogComponent } from '../manage-polices-dialog/manage-polices-dialog.component';
import { ManagePolicesService, Policy } from '../manage-polices.service';
import { TranslateService } from '../translation/translation.service';

@Component({
  selector: 'q-manage-polices',
  templateUrl: './manage-polices.component.html',
  styleUrls: ['./manage-polices.component.scss']
})
export class ManagePolicesComponent {
  filter = '';
  polices: Policy[] = [];

  constructor(
    private service: ManagePolicesService,
    private i18n: TranslateService,
    private toast: MatSnackBar,
    private dialog: MatDialog,
  ) {
    this.service.listPolices().subscribe(
      polices => this.polices = polices,
      this.httpError()
    );
  }

  addPolicy() {
    const dialogRef = this.dialog.open(ManagePolicesDialogComponent);
    dialogRef.componentInstance.policy = {
      name: '',
      groups: [],
      printers: [],
      ifty_quota: false
    };
    dialogRef.updateSize('70%');
    dialogRef.afterClosed()
      .pipe(flatMap(p => {
        if (p != null) {
          return this.service.addPolicy(p);
        } else {
          return timer(1);
        }
      }))
      .pipe(flatMap(() => this.service.listPolices()))
      .subscribe(
        polices => this.polices = polices,
        this.httpError()
      );
  }

  edit(policy: Policy) {
    const dialogRef = this.dialog.open(ManagePolicesDialogComponent);
    dialogRef.componentInstance.policy = _.cloneDeep(policy);
    dialogRef.updateSize('70%');
    dialogRef.afterClosed()
      .pipe(flatMap(p => {
        if (p != null) {
          return this.service.setPolicy(p);
        } else {
          return timer(1);
        }
      }))
      .pipe(flatMap(() => this.service.listPolices()))
      .subscribe(
        polices => this.polices = polices,
        this.httpError()
      );
  }

  remove(policy: Policy) {
    const msg = 'Are you sure that you want to delete this item?';
    if (confirm(this.i18n.instant(msg))) {
      this.service.deletePolices(policy).pipe(flatMap(() => this.service.listPolices())).subscribe(
        polices => this.polices = polices,
        this.httpError()
      );
    }
  }

  filteredPolices(): Policy[] {
    return _.filter(this.polices, p => p.name.includes(this.filter));
  }

  httpError(): () => void {
    return () => {
      const str = 'Connection error.';
      const message = this.i18n.instant(str);
      this.toast.open(message, null, { duration: 2000 });
    };
  }
}
