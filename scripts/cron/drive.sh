#!/usr/bin/env sh

#rsync -a --delete -e ssh root@161.97.95.10:/srv/sftp/* /home/gerry/Drive
#notify-send "Fet - rsync"

nextcloudcmd -u gerry -p "$(pass banc)" $HOME/Nextcloud https://gerryprovesweb.xyz/

notify-send "Fet - Nextcloud"
