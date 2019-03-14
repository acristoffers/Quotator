#!/usr/bin/env bash

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

echo 'DenyGroups nologin\nPermitRootLogin no' | sudo tee -a /etc/ssh/sshd_config

mkdir bin
tee bin/newuser << EOF
#!/bin/bash

sudo adduser --no-create-home --shell /bin/false $1
sudo usermod -aG samba $1
sudo usermod -aG nologin $1
sudo smbpasswd -a $1
EOF
chmod +x bin/newuser

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

sudo apt install -y samba

sudo tee /etc/samba/smb.conf << EOF
[global]
  printing = CUPS
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
                    libbz2-dev nginx openssl mongodb

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

# Adicionar usuário:
# newuser g201315500060

# Adicionar drivers Windows: https://wiki.samba.org/index.php/Setting_up_Automatic_Printer_Driver_Downloads_for_Windows_Clients#Supported_Windows_Printer_Drivers
