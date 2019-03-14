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

sudo apt install -y python3-pip python3-dev build-essential libssl-dev\
                    libffi-dev python3-setuptools libcups2-dev

sudo pip3 install wheel uwsgi Flask Flask-Cors pycups

tee dist/quotator.ini << EOF
[uwsgi]
module = wsgi:app

master = true
processes = 5

socket = quotator.sock
chmod-socket = 660
vacuum = true

die-on-term = true
EOF

tee dist/quotator.service << EOF
[Unit]
Description=Quotator uWSGI
After=network.target

[Service]
User=www
Group=www-data
WorkingDirectory=/var/www/quotator
Environment="PATH=/var/www/quotator"
ExecStart=/usr/local/bin/uwsgi --ini myproject.ini

[Install]
WantedBy=multi-user.target
EOF

sudo cp dist /var/www/quotator
sudo cp dist/quotator.service /etc/systemd/system/

sudo systemctl start quotator
sudo systemctl enable quotator

# Adicionar usuário:
# newuser g201315500060

# Adicionar drivers Windows: https://wiki.samba.org/index.php/Setting_up_Automatic_Printer_Driver_Downloads_for_Windows_Clients#Supported_Windows_Printer_Drivers
