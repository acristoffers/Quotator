#!/usr/bin/env bash

################################################################################
###                                                                          ###
###                          Configuração do Debian                          ###
###                                                                          ###
################################################################################

apt update
apt install sudo

ADMIN_USER=da
DLANGUAGES=(en pt)
DLANGUAGE=pt_BR

rm /etc/locale.gen
for lan in ${DLANGUAGES[@]}; do
   cat /usr/share/i18n/SUPPORTED | grep UTF | grep ^$lan >> /etc/locale.gen
done

debconf-set-selections <<< "locales locales/default_environment_locale select $DLANGUAGE.UTF-8"
rm --force --verbose /etc/default/locale
dpkg-reconfigure --frontend=noninteractive locales

update-locale LC_ALL=$DLANGUAGE.UTF-8
update-locale LC_MESSAGES=$DLANGUAGE.UTF-8
update-locale LC_CTYPE=$DLANGUAGE.UTF-8
update-locale LC_NUMERIC=$DLANGUAGE.UTF-8
update-locale LC_TIME=$DLANGUAGE.UTF-8
update-locale LC_MONETARY=$DLANGUAGE.UTF-8
update-locale LC_PAPER=$DLANGUAGE.UTF-8
update-locale LC_NAME=$DLANGUAGE.UTF-8
update-locale LC_ADDRESS=$DLANGUAGE.UTF-8
update-locale LC_TELEPHONE=$DLANGUAGE.UTF-8
update-locale LC_MEASUREMENT=$DLANGUAGE.UTF-8
update-locale LC_IDENTIFICATION=$DLANGUAGE.UTF-8
update-locale LANGUAGE=$DLANGUAGE:en

ln --force --symbolic /usr/share/zoneinfo/Brazil/East /etc/localtime
dpkg-reconfigure --frontend=noninteractive tzdata

usermod -aG sudo $ADMIN_USER

reboot
