#!/usr/bin/env bash

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

################################################################################
###                                                                          ###
###                         Configuração do Quotator                         ###
###                                                                          ###
################################################################################

git pull

umask 000

tee release/quotator.ini << EOF
[uwsgi]
module = wsgi:app

master = true
processes = 5

socket = /tmp/quotator.sock
uid = www-data
gid = www-data
chown-socket = www-data
chgrp-socket = www-data
chmod-socket = 660
vacuum = true

die-on-term = true
EOF

sudo tee /etc/systemd/system/quotator.service << EOF
[Unit]
Description=Quotator uWSGI
After=network.target

[Service]
User=www-data
Group=www-data
WorkingDirectory=/var/www/quotator
Environment="PATH=/var/www/quotator"
ExecStart=$HOME/.pyenv/versions/3.7.2/bin/uwsgi --ini quotator.ini

[Install]
WantedBy=multi-user.target
EOF

sudo tee /etc/systemd/system/quotator-swiper.service << EOF
[Unit]
Description=Quotator Swiper
After=network.target

[Service]
User=root
Group=root
WorkingDirectory=/var/quotator-swiper
Environment="PATH=/var/quotator-swiper"
ExecStart=$HOME/.pyenv/versions/3.7.2/bin/python3 /var/quotator-swiper/swiper.py

[Install]
WantedBy=multi-user.target
EOF

sudo mkdir -p /var/quotator-swiper
sudo cp swiper/swiper.py /var/quotator-swiper/swiper.py

sudo rm -r /var/www/quotator
sudo cp -r release /var/www/quotator
sudo chown www-data -R /var/www/quotator
sudo chgrp www-data -R /var/www/quotator
sudo chmod 554 -R /var/www/quotator

sudo systemctl daemon-reload
sudo systemctl restart quotator
sudo systemctl restart nginx
sudo systemctl restart quotator-swiper

sudo cp cups-backend/quotator.py /usr/lib/cups/backend/quotator
sudo chmod 700 /usr/lib/cups/backend/*

pushd /usr/lib/cups/backend
sudo ./quotator --gen
popd
