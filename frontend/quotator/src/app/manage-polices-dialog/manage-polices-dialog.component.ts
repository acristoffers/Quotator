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
import { ManagePolicesService, Policy, Printer } from '../manage-polices.service';
import { TranslateService } from '../translation/translation.service';
import { ManageGroupsService, Group } from '../manage-groups.service';

@Component({
  selector: 'q-manage-polices-dialog',
  templateUrl: './manage-polices-dialog.component.html',
  styleUrls: ['./manage-polices-dialog.component.scss']
})
export class ManagePolicesDialogComponent {
  policy: Policy = { name: '', groups: [], printers: [], ifty_quota: false };
  printers: Printer[] = [];
  groups: Group[] = [];

  constructor(
    public dialogRef: MatDialogRef<ManagePolicesDialogComponent>,
    private service: ManagePolicesService,
    private groupsService: ManageGroupsService,
    private i18n: TranslateService,
    private toast: MatSnackBar,
  ) {
    this.service.printers().subscribe(
      printers => this.printers = printers,
      this.httpError()
    );

    this.groupsService.listGroups().subscribe(
      groups => this.groups = groups,
      this.httpError()
    );
  }

  save() {
    if (this.policy.name.length < 1) {
      return;
    }

    this.dialogRef.close(this.policy);
  }

  cancel() {
    this.dialogRef.close(null);
  }

  httpError(): () => void {
    return () => {
      const str = 'Connection error.';
      const message = this.i18n.instant(str);
      this.toast.open(message, null, { duration: 2000 });
    };
  }
}
