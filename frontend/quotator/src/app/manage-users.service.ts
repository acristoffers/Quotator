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

export interface User {
  _id?: string;
  name: string;
  username: string;
  password?: string;
  groups: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ManageUsersService extends APIBase {
  protected constructor(protected http: HttpClient) {
    super(http);
  }

  addUser(user: User): Observable<void> {
    const url = this.urlFor('/user/add');
    return this.doPost<void>(url, { 'user': user });
  }

  setUser(user: User): Observable<void> {
    const url = this.urlFor('/user/update');
    return this.doPost<void>(url, { 'user': user });
  }

  deleteUser(user: User): Observable<void> {
    const url = this.urlFor('/user/remove');
    return this.doPost<void>(url, { 'user': user });
  }

  listUsers(): Observable<User[]> {
    const url = this.urlFor('/user');
    return this.doGet<User[]>(url);
  }
}
