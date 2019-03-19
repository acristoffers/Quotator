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
###                          Configuração do Debian                          ###
###                                                                          ###
################################################################################

sudo apt update
sudo apt-get dist-upgrade -y
sudo apt-get autoremove -y
sudo apt install -y vim git build-essential net-tools

sudo addgroup nologin
sudo usermod -aG lpadmin $(whoami)

echo 'DenyGroups nologin\nPermitRootLogin no' | sudo tee -a /etc/ssh/sshd_config

pushd ~
tee -a .bashrc << EOF
if [ -d "$HOME/bin" ] ; then
    PATH="$HOME/bin:$PATH"
fi

if [[ $- == *i* ]]
then
    bind '"\e[A": history-search-backward'
    bind '"\e[B": history-search-forward'
fi
EOF
mv .bashrc .profile
popd

################################################################################
###                                                                          ###
###                           Configuração do CUPS                           ###
###                                                                          ###
################################################################################

sudo apt install -y cups

sudo sed -i -e 's/Listen localhost:631/Listen 631/g' /etc/cups/cupsd.conf
sudo sed -i -e 's/<Location \/>/<Location \/>\n  Allow all/g' /etc/cups/cupsd.conf
sudo sed -i -e 's/<Location \/admin>/<Location \/admin>\n  Allow all/g' /etc/cups/cupsd.conf
sudo sed -i -e 's/<Location \/admin\/conf>/<Location \/admin\/conf>\n  Allow all/g' /etc/cups/cupsd.conf
sudo sed -i -e 's/BrowseRemoteProtocols/BrowseRemoteProtocols none\n#BrowseRemoteProtocols/g' /etc/cups/cups-browsed.conf

echo "DefaultEncryption Never" | sudo tee -a /etc/cups/cupsd.conf > /dev/null

################################################################################
###                                                                          ###
###                          Configuração do SAMBA                           ###
###                                                                          ###
################################################################################

sudo apt install -y samba smbclient

sudo tee /etc/samba/smb.conf << EOF
[global]
  printing = cups
  printcap = cups
  rpc_server:spoolss = external
  rpc_daemon:spoolssd = fork
  security = user
  server string = Servidor de Impressão do DA
  ntlm auth = yes
  workgroup = WORKGROUP
  dns proxy = no
  log file = /var/log/samba/log.%m
  max log size = 1000
  panic action = /usr/share/samba/panic-action %d
  server role = standalone server
  passdb backend = tdbsam
  obey pam restrictions = yes
  unix password sync = yes
  passwd program = /usr/bin/passwd %u
  passwd chat = *Enter\snew\s*\spassword:* %n\n *Retype\snew\s*\spassword:* %n\n *password\supdated\ssuccessfully* .
  pam password change = yes
  map to guest = bad user
  usershare allow guests = no
  admin users = $USER

[homes]
  comment = Home Directories
  browseable = no
  writable = yes

[printers]
  comment = All Printers
  browseable = no
  path = /var/spool/samba
  printable = yes
  guest ok = no
  read only = yes
  create mask = 0700
  valid users = +samba

[print$]
  comment = Printer Drivers
  path = /var/lib/samba/printers
  browseable = yes
  read only = yes
  guest ok = no
  valid users = +samba

[public]
  path = /srv/samba/public
  read only = no
  guest ok = no
  valid users = +samba

[fix_me]
  path = /srv/samba/fix_me
  read only = yes
  guest ok = no
  valid users = +samba
EOF

sudo addgroup samba

sudo mkdir -p /var/spool/samba
sudo chmod 1777 /var/spool/samba
sudo mkdir -p /srv/samba/public
sudo chmod 1777 /srv/samba/public
sudo mkdir -p /srv/samba/fix_me
sudo chmod 1777 /srv/samba/fix_me

tee /srv/samba/fix_me/win8print.reg << EOF
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows NT\Printers]
"ForceCSREMFDespooling"=dword:00000000
EOF

################################################################################
###                                                                          ###
###                         Configuração do Quotator                         ###
###                                                                          ###
################################################################################

umask 000

sudo apt install -y build-essential libssl-dev libffi-dev libcups2-dev curl \
                    libbz2-dev nginx openssl mongodb python3 python3-pip \
                    pkpgcounter

sudo pip3 install pymongo

curl https://pyenv.run | bash
~/.pyenv/bin/pyenv install 3.7.2
~/.pyenv/versions/3.7.2/bin/pip3 install --upgrade pip
~/.pyenv/versions/3.7.2/bin/pip3 install wheel uwsgi Flask Flask-Cors pycups pymongo

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

mkdir release/.ssl
openssl req -new -x509 -days 1825 -nodes -out release/.ssl/quotator.pem -keyout release/.ssl/quotator.key

sudo rm -r /var/www/quotator
sudo cp -r release /var/www/quotator
sudo chown www-data -R /var/www/quotator
sudo chgrp www-data -R /var/www/quotator
sudo chmod 554 -R /var/www/quotator

sudo systemctl start quotator
sudo systemctl enable quotator

sudo tee /etc/nginx/nginx.conf << EOF
user www-data;
worker_processes auto;
pid /run/nginx.pid;

include /etc/nginx/main.d/*.conf;

events {
  worker_connections 768;
}

http {
  include /etc/nginx/conf.d/*.conf;

  include /etc/nginx/mime.types;
  default_type application/octet-stream;

  sendfile on;
  tcp_nopush on;
  tcp_nodelay on;
  keepalive_timeout 65;
  types_hash_max_size 2048;

  access_log /var/log/nginx/access.log;
  error_log /var/log/nginx/error.log;

  gzip on;
  gzip_comp_level 9;
  gzip_disable "msie6";
  gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

  server_tokens off;
  add_header X-Frame-Options DENY;
  add_header X-Content-Type-Options nosniff;
  add_header X-XSS-Protection "1; mode=block";
  add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; img-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'; object-src 'none'";

  server {
    listen       443 ssl default deferred;
    server_name  da-impressora;

    ssl_certificate      /var/www/quotator/.ssl/quotator.pem;
    ssl_certificate_key  /var/www/quotator/.ssl/quotator.key;

    ssl_session_cache    shared:SSL:1m;
    ssl_session_timeout  5m;

    ssl_stapling on;
    ssl_stapling_verify on;

    ssl_prefer_server_ciphers on;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers "EECDH+AESGCM EECDH+AES RSA+AES !RC4 !aNULL !eNULL !LOW !3DES !MD5 !EXP !PSK !SRP !DSS";

    add_header Strict-Transport-Security "max-age=31536000;";

    charset utf-8;

    root /var/www/quotator/quotator;

    location / {
      try_files \$uri /index.html;
      expires 1w;
      add_header Cache-Control public;
      gzip_static on;
      add_header ETag "";
      break;
    }

    location /api {
      rewrite  ^/api/(.*) /\$1 break;
      include uwsgi_params;
      uwsgi_pass unix:/tmp/quotator.sock;
    }
  }

  server {
    listen         80;
    server_name    da-impressora;
    
    location / {
      return  307 https://\$host\$request_uri;
    }
  }
}
EOF

sudo systemctl restart nginx

sudo cp cups-backend/quotator.py /usr/lib/cups/backend/quotator
sudo chmod 700 /usr/lib/cups/backend/*

pushd /usr/lib/cups/backend
sudo ./quotator --gen
popd

sudo tee /opt/user_add << EOF
#!/bin/bash

# \$1 username
# \$2 full name
# \$3 password

sudo adduser --disabled-password --shell /bin/false --gecos "\$2,,,," \$1
sudo usermod -aG samba \$1
sudo usermod -aG nologin \$1
(echo \$3; echo \$3) | sudo smbpasswd -s -a \$1
echo "$1:$3" | sudo chpasswd
EOF

sudo tee /opt/user_set << EOF
#!/bin/bash

# \$1 username
# \$2 password

(echo \$2; echo \$2) | sudo smbpasswd -s \$1
echo "$1:$2" | sudo chpasswd
EOF

sudo tee /opt/user_del << EOF
#!/bin/bash

# \$1 username

sudo smbpasswd -x \$1
sudo deluser \$1
sudo delgroup \$1
EOF

sudo chmod 555 /opt/*
sudo chown www-data /opt/*
sudo chgrp www-data /opt/*

sudo tee -a /etc/sudoers << EOF
www-data ALL=(ALL) NOPASSWD: /opt/user_add
www-data ALL=(ALL) NOPASSWD: /opt/user_set
www-data ALL=(ALL) NOPASSWD: /opt/user_del
EOF

sudo systemctl start quotator-swiper
sudo systemctl enable quotator-swiper

# Adicionar drivers Windows:
#   https://wiki.samba.org/index.php/Setting_up_Automatic_Printer_Driver_Downloads_for_Windows_Clients#Supported_Windows_Printer_Drivers
#   https://ubuntuforums.org/showthread.php?t=2191772
#   https://wiki.samba.org/index.php/Setting_up_Automatic_Printer_Driver_Downloads_for_Windows_Clients
