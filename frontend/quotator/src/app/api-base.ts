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

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './connect.service';

export class APIBase {
  static accessToken = null;

  static token: BehaviorSubject<string> = new BehaviorSubject(null);
  static user: BehaviorSubject<User> = new BehaviorSubject(null);

  protected constructor(protected http: HttpClient) {
    APIBase.token.subscribe(token => APIBase.accessToken = token);
  }

  protected doGet<T>(url: string): Observable<T> {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${APIBase.accessToken}`
    });
    const options = { headers: headers };
    const observable = this.http.get<T>(url, options);
    return observable.pipe(map(res => JSON.parse(JSON.stringify(res))));
  }

  protected doPost<T>(url: string, data: any, type: string = 'application/json'): Observable<T> {
    const headers = new HttpHeaders({
      'Accept': type,
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${APIBase.accessToken}`
    });
    const options = { headers: headers };
    const observable = this.http.post<T>(url, data, options);
    return observable.pipe(map(res => JSON.parse(JSON.stringify(res))));
  }

  protected urlFor(path: string): string {
    // return `http://localhost:5000${path}`; // development
    return `/api${path}`; // production
  }
}
