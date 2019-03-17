# Quotator
CUPS backend for user quota management

This application is developed to be easily deployed in a Debian net-install. It
is composed of three parts: the Python 3.5 CUPS-backend that receives the print
jobs and decides if it can be printed based on the user quota. The web-frontend
written using Angular (client side) and Python 3.7 (server side), where users
can easily manage users, polices, groups and quotas. And a swiper script written
in Python 3.7 that scans the home folders of the users and prints any PDF
dropped there, deleting everything else. To share the printer, users home
folders and authenticate users, SAMBA is used. The print dropbox provided by
the swiper circunvents the fact that Windows 10 is having trouble printing to
SAMBA shared printers.

## Installation

Read this whole section before doing anything.

The installation is meant to be easy, and the computer is expected to work only
as printer server, nothing more. Go to the Debian homepage and download the
netinst image (https://www.debian.org/distrib/netinst). Install it on the
computer. A minimalist installation is recommended, selecting only SSH and
system tools in the installer.

Right after the installation finishes you will be presented the prompt. Login 
with the user you created during installation. Type `su` to switch to the super
user (root). This command will ask you for root's password. Once logged in as
root type `apt update; apt install git vim; exit` and press the enter key. It'll
install git and vim and exit to normal user again.

Now that git is installed type
`git clone https://github.com/acristoffers/quotator`. It will create a folder
with this project in it. When finished, type `cd quotator` to enter it. Now
type `vim debian-su.sh` to edit this file. Three variables at the top might need
changing:

```
ADMIN_USER=da
DLANGUAGES=(en pt)
DLANGUAGE=pt_BR
```

`ADMIN_USER` is the name of the user you created during installation.
`DLANGUAGES` is a list of languages to be installed. `DLANGUAGE` is the language
to be configured as default. If you don't know how to use VIM, see https://www.howtoforge.com/vim-basics.

Type `su` again and, once you have root access, type `bash debian-su.sh`. It
will install some needed packages, do language-related configuration as well as
enable `sudo` for `ADMIN_USER`, which is required in the next step. The system
will reboot after it finishes.

Log in again as the user you created. Type `cd quotator` again to enter the
folder. Type `bash debian-sudo.sh` to finish the installation. You will be asked
some information as it generates a self-signed certificate. Just make sure to
type the server name in the CN (common name) field. Fill the other fields as you
wish.

See your IP with the command `sudo ifconfig`. Let's pretend you IP is
`192.168.0.2`. You can go to a computer in the same network and add the printer
accessing http://192.168.0.2:631 in a browser like Firefox or Google Chrome. If
you type only http://192.168.0.2 you will be presented the administration
interface.

## Why the self-signed certificate?

It is not a lot of security, I know. But it will create encryption between the
server and the clients, not allowing passwords to be sent in the clear. You are
still vulnarable to MITM attacks, but you can teach your userbase to identify
those if needed. If security is a bigger concern, get yourself a valid
certificate.

## License

Copyright (c) 2019 Álan Crístoffer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
