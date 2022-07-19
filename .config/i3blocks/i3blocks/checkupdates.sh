#!/usr/bin/env sh

n_ups=$(checkupdates | wc -l)
aur_ups=$(trizen -Qua | wc -l)
tot_ups=$(( $n_ups + $aur_ups ))

[ $aur_ups -ne 0 ] && prefix="(AUR: $aur_ups) "
[ $n_ups -eq 0 ] && n_ups=""
[ $tot_ups -ne 0 ] && echo " $prefix$n_ups"
