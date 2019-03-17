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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectComponent } from './connect/connect.component';
import { ManageAdminsComponent } from './manage-admins/manage-admins.component';
import { ManageGroupsComponent } from './manage-groups/manage-groups.component';
import { ManagePolicesComponent } from './manage-polices/manage-polices.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageQuotasComponent } from './manage-quotas/manage-quotas.component';
import { QuotaComponent } from './quota/quota.component';
import { JobsComponent } from './jobs/jobs.component';
import { ReportsComponent } from './reports/reports.component';
import { RouteGuard } from './route-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'connect',
    pathMatch: 'full'
  },
  {
    path: 'connect',
    component: ConnectComponent
  },
  {
    path: 'manage-groups',
    component: ManageGroupsComponent,
    canActivate: [RouteGuard],
    data: {
      permission: 'manage_users'
    }
  },
  {
    path: 'manage-polices',
    component: ManagePolicesComponent,
    canActivate: [RouteGuard],
    data: {
      permission: 'manage_users'
    }
  },
  {
    path: 'manage-users',
    component: ManageUsersComponent,
    canActivate: [RouteGuard],
    data: {
      permission: 'manage_users'
    }
  },
  {
    path: 'manage-admins',
    component: ManageAdminsComponent,
    canActivate: [RouteGuard],
    data: {
      permission: 'manage_admins'
    }
  },
  {
    path: 'manage-quotas',
    component: ManageQuotasComponent,
    canActivate: [RouteGuard],
    data: {
      permission: 'manage_quotas'
    }
  },
  {
    path: 'reports',
    component: ReportsComponent,
    canActivate: [RouteGuard],
    data: {
      permission: 'reports'
    }
  },
  {
    path: 'quota',
    component: QuotaComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
