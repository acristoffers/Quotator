#!/usr/bin/env python3
# -*- coding: utf-8; -*-
#
# Copyright (c) 2019 Álan Crístoffer
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.

import bson.json_util as json
from bson.objectid import ObjectId
from flask import Flask, request
from flask_cors import CORS

import cups
from database import Database

app = Flask(__name__)
CORS(app)
db = Database()


def crud(resource, permission):
    def flist():
        user = verify_token()
        if not user or permission not in user['permissions']:
            return '{}', 403
        f = getattr(db, f'{resource}_list')
        es = [{**e, '_id': str(e['_id'])} for e in f()]
        return json.dumps(es)

    def fadd():
        user = verify_token()
        if not user or permission not in user['permissions']:
            return '{}', 403
        f = getattr(db, f'{resource}_add')
        obj = json.loads(request.data)
        r = obj[resource]
        db.log(user, f'{resource}_add', r)
        return json.dumps(f(r))

    def fset():
        user = verify_token()
        if not user or permission not in user['permissions']:
            return '{}', 403
        f = getattr(db, f'{resource}_set')
        obj = json.loads(request.data)
        r = obj[resource]
        r['_id'] = ObjectId(r['_id'])
        db.log(user, f'{resource}_set', r)
        return json.dumps(f(r))

    def fdel():
        user = verify_token()
        if not user or permission not in user['permissions']:
            return '{}', 403
        f = getattr(db, f'{resource}_del')
        obj = json.loads(request.data)
        r = obj[resource]
        r['_id'] = ObjectId(r['_id'])
        db.log(user, f'{resource}_del', r)
        return json.dumps(f(r))

    app.add_url_rule(
        f'/{resource}',
        view_func=flist,
        endpoint=f'{resource}',
        methods=['GET'])
    app.add_url_rule(
        f'/{resource}/add',
        view_func=fadd,
        endpoint=f'{resource}_add',
        methods=['POST'])
    app.add_url_rule(
        f'/{resource}/update',
        view_func=fset,
        endpoint=f'{resource}_update',
        methods=['POST'])
    app.add_url_rule(
        f'/{resource}/remove',
        view_func=fdel,
        endpoint=f'{resource}_remove',
        methods=['POST'])


crud('group', 'manage_users')
crud('policy', 'manage_users')
crud('user', 'manage_users')
crud('admin', 'manage_admins')
crud('quota', 'manage_quotas')


@app.after_request
def add_header(response):
    response.headers['Cache-Control'] = 'no-store'
    return response


@app.route('/auth', methods=['POST'])
def authenticate():
    """
    Authenticates the user.
    Should be called with a POST request containing the following body:

    {
        username: string
        password: string
    }

    @returns:
        On success, HTTP 200 Ok and body:

        {
            'user': User,
            'token': string
        }

        On failure, HTTP 403 Unauthorized and body:

        {}
    """
    username = request.json.get('username', '')
    password = request.json.get('password', '')
    user, token = db.auth_admin(username, password)
    if user:
        return json.dumps({'user': user, 'token': token})
    user, token = db.auth_user(username, password)
    if user:
        return json.dumps({'user': user, 'token': token})
    return '{}', 403


@app.route('/set-own-password', methods=['POST'])
def set_own_password():
    """
    Change your own password.

    {
        password: string
    }

    @returns:
        On success, HTTP 200 Ok and body:

        {}

        On failure, HTTP 403 Unauthorized and body:

        {}
    """
    user = verify_token()
    if not user:
        return '{}', 403
    user['password'] = request.json.get('password', '')
    if 'permissions' in user:  # admin user
        db.admin_set(user)
    else:  # os user
        db.user_set(user)
    return '{}'


@app.route('/printers', methods=['GET'])
def printers():
    """
    List printers

    @returns:
        On success, HTTP 200 Ok and body:

        string[]

        On failure, HTTP 403 Unauthorized and body:

        {}
    """
    user = verify_token()
    if not user or 'manage_users' not in user['permissions']:
        return '{}', 403
    conn = cups.Connection()
    ps = conn.getPrinters()
    ps = [{'id': k, 'name': v['printer-info']} or k for k, v in ps.items()]
    return json.dumps(ps)


@app.route('/quota/get', methods=['GET'])
def quota_get():
    user = verify_token()
    if not user:
        return '{}', 403
    qs = db.quota_get(str(user['_id']))
    for q in qs:
        del q['user']
        q['policy'] = db.policy_get(ObjectId(q['policy']))
    return json.dumps(qs)


@app.route('/job/get', methods=['GET'])
def job_get():
    user = verify_token()
    if not user:
        return '{}', 403
    js = db.job_get(user['username'])
    return json.dumps(js)


@app.route('/job', methods=['GET'])
def job_list():
    user = verify_token()
    if not user or 'reports' not in user['permissions']:
        return '{}', 403
    js = db.job_list()
    return json.dumps(js)


@app.route('/report', methods=['GET'])
def report_list():
    user = verify_token()
    if not user or 'reports' not in user['permissions']:
        return '{}', 403
    js = db.report_list()
    return json.dumps(js)


def verify_token():
    """
    Verifies the token sent as a HTTP Authorization header.
    """
    try:
        authorization = request.headers.get('Authorization')
        token = authorization.split(' ')[-1]
        return db.verify_token(token)
    except Exception as e:
        return


if __name__ == "__main__":
    app.run(host='0.0.0.0')
