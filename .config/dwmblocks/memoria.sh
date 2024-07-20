#!/usr/bin/env sh

#color="^c#6Bc9dD^"
colmem="^c$COL_BLAU^"
colswap="^c$COL_TARONJA^"

mem="$(free -h | awk '/^Mem/ { print $3"/"$2 }' | sed s/i//g)"
swap="$(free -h | awk '/^Swap/ { print $3"/"$2 }' | sed s/i//g)"

#echo "${colmem}MEM: $mem    ${colswap}SWAP: $swap^c#444444^"
#echo "$colmem$mem    $colswap$swap^c#444444^"
echo "$colmem$mem ^c#444444^"
