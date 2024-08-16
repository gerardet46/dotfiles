#!/usr/bin/sh

[ "$(lsb_release -c | awk '{print $2}')" = "void" ] && exit

n_ups=$(checkupdates | wc -l)
aur_ups=$(trizen -Qua | wc -l)
tot_ups=$(( $n_ups + $aur_ups ))

[ $aur_ups -ne 0 ] && prefix="(AUR: $aur_ups) "
[ $n_ups -eq 0 ] && n_ups=""
#[ $tot_ups -ne 0 ] && echo "^c#d1da6c^ $prefix$n_ups^c#444444^"
[ $tot_ups -ne 0 ] && echo "^c$COL_FOSC^ $prefix$n_ups^c#444444^"
