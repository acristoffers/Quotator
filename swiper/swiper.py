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

import os
import shutil
import subprocess
import time

from pymongo import MongoClient

client = MongoClient()
db = client.quotator


def print_file(user, file):
    cmd = ['/sbin/runuser', '-u', user, '/usr/bin/lp', '-o', 'media=A4', file]
    p = subprocess.Popen(cmd)
    p.wait()


def remove(file):
    try:
        os.remove(file)
    except Exception as e:
        print(e)
    try:
        shutil.rmtree(file, ignore_errors=True, onerror=None)
    except Exception as e:
        print(e)


while True:
    time.sleep(5)
    us = {u['username'] for u in db.users.find()}
    ds = set(os.listdir('/home'))
    ds = us.intersection(ds)
    for d in ds:
        user = d
        d = os.path.join('/home', d)
        fs = os.listdir(d)
        for f in fs:
            fp = os.path.join(d, f)
            if f.startswith('.') or not f.endswith('.pdf'):
                remove(fp)
            else:
                print_file(user, fp)
                remove(fp)
