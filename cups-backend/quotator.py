#!/usr/bin/env python3
# -*- coding: utf-8; -*-
#
# Copyright (c) 2016 Álan Crístoffer
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
import subprocess
import sys
import time

from pymongo import MongoClient

client = MongoClient()
db = client.quotator


def log(msg, severity='error'):
    db.log.insert_one({'message': msg, 'severity': severity})


def list_exec_backends():
    cwd = os.path.dirname(__file__)
    cwf = os.path.basename(__file__)
    bs = (b for b in os.listdir(cwd) if os.access(b, os.X_OK))
    blacklist = [cwf, 'ibquota', 'ibquota2', 'ibquota3']
    return [os.path.join(cwd, b) for b in bs if b not in blacklist]


def wrap_backend(raw_output):
    cwf = os.path.basename(__file__)
    r = '(\\S+)\\s(\\S+)\\s"([^"]+)"\\s"([^"]+)"\\s?("[^"]+")?\\s?("[^"]+")?'
    r = re.compile(r)
    m = r.match(raw_output)
    a = [g for g in m.groups() if g]
    a.insert(1, cwf)
    a = tuple(a)
    if len(a) == 5:
        device = '%s %s:%s "%s" "%s (Quotator)"' % a
    elif len(a) == 6:
        device = '%s %s:%s "%s" "%s (Quotator)" %s' % a
    elif len(a) == 7:
        device = '%s %s:%s "%s" "%s (Quotator)" %s %s' % a
    else:
        return None
    log('Adding: %s' % device, severity='info')
    return device


def run(process, args=[]):
    p = subprocess.PIPE
    subp = subprocess.Popen([process, *args], stdin=p, stderr=p, stdout=p)
    out, _ = subp.communicate()
    return out.decode('utf8')


def list_wrapped():
    bs = list_exec_backends()
    rs = (o for b in bs for o in run(b).split('\n') if o)
    return (w for w in map(wrap_backend, rs) if w)


def auth_mongodb(username, page_count, printer):
    user = db.users.find_one({'username': username})
    if not user:
        return False
    ps = list(
        db.polices.find({
            'groups': {
                '$in': user['groups']
            },
            'printers': printer
        }))
    if any([p['ifty_quota'] for p in ps]):
        return True
    qs = list(
        db.quotas.find({
            'user': str(user['_id']),
            'policy': {
                '$in': [str(p['_id']) for p in ps]
            }
        }))
    for q in qs:
        if q['quantity'] >= page_count:
            db.quotas.update_one(
                {'_id': q['_id']},
                {'$set': {
                    'quantity': q['quantity'] - page_count
                }})
            return True
    return False


def count_pages(filename):
    ret = run('/usr/bin/pkpgcounter', [filename])
    return int(ret.strip())


def main(argv):
    cwd = os.path.dirname(__file__)
    cwf = os.path.basename(__file__)

    if len(argv) == 1:
        # discovery mode
        out = open(1, 'w', encoding='utf-8', closefd=False)  # fd 1 is stdout
        for p in db.printers.find():
            print(p['str'], file=out, flush=True)
    elif '--gen' in argv:
        # find devices and populate database
        db.printers.drop()
        db.printers.insert_many([{'str': p} for p in list_wrapped()])
    elif len(argv) in [6, 7]:
        # check user quota and print if ok
        next_backend = os.environ['DEVICE_URI'].replace(cwf + ':', '')
        os.environ['DEVICE_URI'] = next_backend
        _, jobid, cupsuser, jobtitle, jobcopies, joboptions, *jobfile = argv
        jobcopies = int(jobcopies)
        if jobfile:
            jobfile = jobfile[0]
        else:
            jobfile = os.environ['TMPDIR'] + '/job' + jobid
            data = sys.stdin.buffer.read()
            if not data:
                return 0
            with open(jobfile, 'wb+') as f:
                f.write(data)
                f.flush()
        pages = jobcopies * count_pages(jobfile)
        printer = os.environ['PRINTER']
        if auth_mongodb(cupsuser, pages, printer):
            cmd = os.path.join(cwd, next_backend.split(':')[0])
            args = jobid, cupsuser, jobtitle, str(
                jobcopies), joboptions, jobfile
            db.jobs.insert_one({
                'status': 'sucess',
                'user': cupsuser,
                'job': jobid,
                'title': jobtitle,
                'copies': jobcopies,
                'pages': pages,
                'env': os.environ,
                'time': time.time()
            })
            run(cmd, args)
            return 0
        else:
            db.jobs.insert_one({
                'status': 'fail',
                'user': cupsuser,
                'job': jobid,
                'title': jobtitle,
                'copies': jobcopies,
                'pages': pages,
                'env': os.environ,
                'time': time.time()
            })
            return 5
    else:
        log('Wrong number of arguments: ' + len(argv))
        return 1
    return 0


if __name__ == '__main__':
    exit(main(sys.argv))
