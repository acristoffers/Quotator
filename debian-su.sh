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
