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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIBase } from './api-base';

export interface Admin {
  _id?: string;
  username: string;
  password?: string;
  name: string;
  permissions: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ManageAdminsService extends APIBase {
  protected constructor(protected http: HttpClient) {
    super(http);
  }

  addAdmin(admin: Admin): Observable<void> {
    const url = this.urlFor('/admin/add');
    return this.doPost<void>(url, { 'admin': admin });
  }

  setAdmin(admin: Admin): Observable<void> {
    const url = this.urlFor('/admin/update');
    return this.doPost<void>(url, { 'admin': admin });
  }

  deleteAdmin(admin: Admin): Observable<void> {
    const url = this.urlFor('/admin/remove');
    return this.doPost<void>(url, { 'admin': admin });
  }

  listAdmins(): Observable<Admin[]> {
    const url = this.urlFor('/admin');
    return this.doGet<Admin[]>(url);
  }
}
