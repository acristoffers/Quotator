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

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { ConnectComponent } from './connect/connect.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TRANSLATION_PROVIDERS } from './translation/translation';
import { TranslatePipe } from './translation/translation.pipe';
import { TranslateService } from './translation/translation.service';

import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule,
  MatIconModule, MatInputModule, MatListModule, MatSelectModule,
  MatSidenavModule, MatSnackBarModule, MatToolbarModule, MatMenuModule, MatSlideToggleModule, MatTableModule, MatTabsModule
} from '@angular/material';
import { ManageGroupsComponent } from './manage-groups/manage-groups.component';
import { ManagePolicesComponent } from './manage-polices/manage-polices.component';
import { ManagePolicesDialogComponent } from './manage-polices-dialog/manage-polices-dialog.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageUsersDialogComponent } from './manage-users-dialog/manage-users-dialog.component';
import { ManageAdminsComponent } from './manage-admins/manage-admins.component';
import { ManageAdminsDialogComponent } from './manage-admins-dialog/manage-admins-dialog.component';
import { ManageQuotasDialogComponent } from './manage-quotas-dialog/manage-quotas-dialog.component';
import { ManageQuotasComponent } from './manage-quotas/manage-quotas.component';
import { QuotaComponent } from './quota/quota.component';
import { JobsComponent } from './jobs/jobs.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    ToolbarComponent,
    SidebarComponent,
    ConnectComponent,
    ManageGroupsComponent,
    ManagePolicesComponent,
    ManagePolicesDialogComponent,
    ManageUsersComponent,
    ManageUsersDialogComponent,
    ManageAdminsComponent,
    ManageAdminsDialogComponent,
    ManageQuotasDialogComponent,
    ManageQuotasComponent,
    QuotaComponent,
    JobsComponent,
    ReportsComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatSidenavModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTableModule,
    MatTabsModule
  ],
  providers: [
    TRANSLATION_PROVIDERS,
    TranslateService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ManagePolicesDialogComponent, ManageUsersDialogComponent, ManageAdminsDialogComponent, ManageQuotasDialogComponent]
})
export class AppModule { }
