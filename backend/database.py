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

import copy
import hashlib
import subprocess
import time
import uuid

from pymongo import MongoClient


class Database(object):
    """
    Database class. Connects to MongoDB and abstracts all communication with it.
    """

    def __init__(self):
        self.client = MongoClient()
        self.db = self.client.quotator
        self.token_lifespan = 1800
        self.set_setting('version', '1.0')
        if len(list(self.admin_list())) == 0:
            ps = ['manage_users', 'manage_admins', 'manage_quotas', 'reports']
            u = {
                'username': 'admin',
                'password': 'admin',
                'name': 'Administrator',
                'permissions': ps
            }
            self.admin_add(u)

    def close(self):
        self.client.close()

    def log(self, user, action, params):
        params = copy.deepcopy(params)
        if 'password' in params:
            params['password'] = 'redacted'
        self.db.logs.insert_one({
            'user': user,
            'action': action,
            'params': params,
            'time': time.time()
        })

    def set_setting(self, key, value):
        db = self.db.settings
        db.replace_one({"key": key}, {"key": key, "value": value}, upsert=True)

    def get_setting(self, key):
        db = self.db.settings
        document = db.find_one({"key": key})
        if document:
            return document['value']
        else:
            return None

    def admin_add(self, user):
        p = self.db.admins.find_one({'username': user['username']})
        if p:
            return
        hasher = hashlib.sha512()
        hasher.update(bytes(user['password'], 'utf-8'))
        user['password'] = hasher.hexdigest()
        self.db.admins.insert_one(user)

    def admin_set(self, user):
        if 'password' in user:
            hasher = hashlib.sha512()
            hasher.update(bytes(user['password'], 'utf-8'))
            user['password'] = hasher.hexdigest()
        self.db.admins.update_one({'_id': user['_id']}, {'$set': user})

    def admin_del(self, user):
        self.db.admins.remove({'_id': user['_id']})

    def admin_list(self):
        return list(self.db.admins.find(projection={'password': False}))

    def admin_get(self, username):
        p = {'password': False}
        u = self.db.admins.find_one({'username': username}, projection=p)
        return u

    def auth_admin(self, username, password):
        hasher = hashlib.sha512()
        hasher.update(bytes(password, 'utf-8'))
        password = hasher.hexdigest()
        user = self.db.admins.find_one({'username': username})
        if user is not None and user['password'] == password:
            del user['_id']
            del user['password']
            return user, self.generate_token(user['username'])
        return None, None

    def auth_user(self, username, password):
        hasher = hashlib.sha512()
        hasher.update(bytes(password, 'utf-8'))
        password = hasher.hexdigest()
        user = self.db.users.find_one({'username': username})
        if user is not None and user['password'] == password:
            del user['_id']
            del user['password']
            return user, self.generate_token(user['username'])
        return None, None

    def generate_token(self, username):
        t = self.db.tokens.find_one({'user': username})
        if t:
            t['time'] = time.time()
            self.db.tokens.update_one({'_id': t['_id']},
                                      {'$set': {
                                          'time': t['time']
                                      }})
            return t['token']
        t = {'token': uuid.uuid4().hex, 'time': time.time(), 'user': username}
        self.db.tokens.insert_one(t)
        return t['token']

    def verify_token(self, token):
        ts = self.db.tokens.find(projection={'_id': False})
        ts = [t for t in ts if t['time'] + self.token_lifespan > time.time()]
        self.db.tokens.remove(ts)
        t = self.db.tokens.find_one({'token': token})
        if t:
            t['time'] = time.time()
            self.db.tokens.update_one({'_id': t['_id']},
                                      {'$set': {
                                          'time': t['time']
                                      }})
            user = self.admin_get(t['user'])
            if user:
                return user
            return self.db.users.find_one({'username': t['user']},
                                          projection={'password': False})

    def group_add(self, group):
        g = self.db.groups.find_one(group)
        if not g:
            self.db.groups.insert_one(group)

    def group_set(self, group):
        self.db.groups.update_one({'_id': group['_id']}, {'$set': group})

    def group_del(self, group):
        self.db.groups.remove({'_id': group['_id']})

    def group_list(self):
        return list(self.db.groups.find())

    def policy_add(self, policy):
        p = self.db.polices.find_one({'name': policy['name']})
        if p:
            return
        self.db.polices.insert_one(policy)

    def policy_set(self, policy):
        self.db.polices.update_one({'_id': policy['_id']}, {'$set': policy})

    def policy_del(self, policy):
        self.db.polices.remove({'_id': policy['_id']})

    def policy_list(self):
        return list(self.db.polices.find())

    def policy_get(self, _id):
        return self.db.polices.find_one({'_id': _id})

    def user_add(self, user):
        p = self.db.users.find_one({'username': user['username']})
        if p:
            return
        subprocess.Popen([
            '/usr/bin/sudo', '/opt/user_add', user['username'], user['name'],
            user['password']
        ])
        hasher = hashlib.sha512()
        hasher.update(bytes(user['password'], 'utf-8'))
        user['password'] = hasher.hexdigest()
        self.db.users.insert_one(user)

    def user_set(self, user):
        if 'password' in user:
            subprocess.Popen([
                '/usr/bin/sudo', '/opt/user_add', user['username'],
                user['name'], user['password']
            ])
            hasher = hashlib.sha512()
            hasher.update(bytes(user['password'], 'utf-8'))
            user['password'] = hasher.hexdigest()
        self.db.users.update_one({'_id': user['_id']}, {'$set': user})

    def user_del(self, user):
        subprocess.Popen(['/usr/bin/sudo', '/opt/user_del', user['username']])
        self.db.users.remove({'_id': user['_id']})

    def user_list(self):
        return list(self.db.users.find(projection={'password': False}))

    def quota_add(self, quota):
        q = self.db.quotas.find_one({
            'user': quota['user'],
            'policy': quota['policy']
        })
        if q:
            return
        self.db.quotas.insert_one(quota)

    def quota_set(self, quota):
        self.db.quotas.update_one({'_id': quota['_id']}, {'$set': quota})

    def quota_del(self, quota):
        self.db.quotas.remove({'_id': quota['_id']})

    def quota_list(self):
        return list(self.db.quotas.find())

    def quota_get(self, user):
        return list(self.db.quotas.find({'user': user}))

    def job_list(self):
        return list(self.db.jobs.find())

    def job_get(self, username):
        return list(self.db.jobs.find({'user': username}))

    def report_list(self):
        return list(self.db.logs.find())
