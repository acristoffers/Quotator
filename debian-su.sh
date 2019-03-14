#!/usr/bin/env bash

################################################################################
###                                                                          ###
###                          Configuração do Debian                          ###
###                                                                          ###
################################################################################

apt update
apt install sudo

sh -c "sed --regexp-extended --expression='

   1  {
         i\
# This file lists locales that you wish to have built. You can find a list\
# of valid supported locales at /usr/share/i18n/SUPPORTED, and you can add\
# user defined locales to /usr/local/share/i18n/SUPPORTED. If you change\
# this file, you need to rerun locale-gen.\
\


      }

   /^(en|pt)(_[[:upper:]]+)?(\.UTF-8)?(@[^[:space:]]+)?[[:space:]]+UTF-8$/!   s/^/# /

' /usr/share/i18n/SUPPORTED >  /etc/locale.gen"

debconf-set-selections <<< 'locales locales/default_environment_locale select pt_BR.UTF-8'
rm --force --verbose /etc/default/locale
dpkg-reconfigure --frontend=noninteractive locales

update-locale LC_ALL='pt_BR.UTF-8'
update-locale LC_MESSAGES='pt_BR.UTF-8'
update-locale LC_CTYPE='pt_BR.UTF-8'
update-locale LC_NUMERIC='pt_BR.UTF-8'
update-locale LC_TIME='pt_BR.UTF-8'
update-locale LC_MONETARY='pt_BR.UTF-8'
update-locale LC_PAPER='pt_BR.UTF-8'
update-locale LC_NAME='pt_BR.UTF-8'
update-locale LC_ADDRESS='pt_BR.UTF-8'
update-locale LC_TELEPHONE='pt_BR.UTF-8'
update-locale LC_MEASUREMENT='pt_BR.UTF-8'
update-locale LC_IDENTIFICATION='pt_BR.UTF-8'
update-locale LANGUAGE='pt_BR:en_CA:en'

ln --force --symbolic /usr/share/zoneinfo/Brazil/East /etc/localtime
dpkg-reconfigure --frontend=noninteractive tzdata

usermod -aG sudo da

reboot
