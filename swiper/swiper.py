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
import re
import shutil
import subprocess
import time
import uuid

from pymongo import MongoClient

import cups

client = MongoClient()
db = client.quotator


def print_file(user, file):
    copies = 1
    fout = os.path.dirname(file) + '/' + uuid.uuid4().hex + '.ps'
    gsopts = [
        '-dNOPAUSE', '-dBATCH', '-sDEVICE=ps2write', '-sPAPERSIZE=a4',
        '-sOutputFile=' + fout
    ]
    cmd = ['/sbin/runuser', '-u', user, '--', '/usr/bin/gs', *gsopts, file]
    p = subprocess.Popen(cmd)
    p.wait()
    conn = cups.Connection()
    ps = conn.getPrinters()
    ps = list(ps.keys())
    lpopts = ['-o', 'media=A4', '-t', os.path.basename(file)]
    lpopts += [
        '-o', 'page-left=0 page-right=0 page-top=0 page-bottom=0 scaling=94'
    ]
    m = re.search('copias=([0-9]+)', file)
    if m:
        lpopts += ['-n', m.groups(1)[0]]
    if 'dupla-face' in file:
        lpopts += ['-o', 'sides=two-sided-long-edge']
    m = [p for p in ps if p in file]
    if m:
        lpopts += ['-d', max(m)]
    cmd = ['/sbin/runuser', '-u', user, '--', '/usr/bin/lp', *lpopts, fout]
    p = subprocess.Popen(cmd)
    p.wait()
    remove(fout)


def remove(file):
    if os.path.isdir(file):
        shutil.rmtree(file, ignore_errors=True, onerror=None)
    else:
        os.remove(file)


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
