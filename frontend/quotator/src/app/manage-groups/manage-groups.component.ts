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
import { MatSnackBar } from '@angular/material';
import * as _ from 'lodash';
import { flatMap } from 'rxjs/operators';
import { Group, ManageGroupsService } from '../manage-groups.service';
import { TranslateService } from '../translation/translation.service';

@Component({
  selector: 'q-manage-groups',
  templateUrl: './manage-groups.component.html',
  styleUrls: ['./manage-groups.component.scss']
})
export class ManageGroupsComponent {
  filter = '';
  newGroup: Group = { 'name': '' };
  _groups: Group[] = [];

  get groups(): Group[] {
    return this._groups;
  }

  set groups(groups: Group[]) {
    this._groups = _.sortBy(groups, 'name');
  }

  constructor(
    private service: ManageGroupsService,
    private i18n: TranslateService,
    private toast: MatSnackBar
  ) {
    this.service.listGroups().subscribe(
      groups => this.groups = groups,
      this.httpError()
    );
  }

  addGroup() {
    if (this.newGroup.name.length === 0) {
      return;
    }

    this.service.addGroup(this.newGroup).pipe(flatMap(() => this.service.listGroups())).subscribe(
      groups => {
        this.groups = groups;
        this.newGroup.name = '';
      },
      this.httpError()
    );
  }

  edit(group: Group) {
    const name = prompt(this.i18n.instant('Name'), group['name']);
    group.name = name;
    if (name != null && name.length > 0) {
      this.service.updateGroup(group).pipe(flatMap(() => this.service.listGroups())).subscribe(
        groups => {
          this.groups = groups;
          this.newGroup.name = '';
        },
        this.httpError()
      );
    }
  }

  remove(group: Group) {
    const msg = 'Are you sure that you want to delete this item?';
    if (confirm(this.i18n.instant(msg))) {
      this.service.deleteGroup(group).pipe(flatMap(() => this.service.listGroups())).subscribe(
        groups => {
          this.groups = groups;
          this.newGroup.name = '';
        },
        this.httpError()
      );
    }
  }

  filteredGroups(): Group[] {
    return _.filter(this.groups, g => _.lowerCase(_.deburr(g.name)).includes(this.filter));
  }

  httpError(): () => void {
    return () => {
      const str = 'Connection error.';
      const message = this.i18n.instant(str);
      this.toast.open(message, null, { duration: 2000 });
    };
  }
}
