#!/usr/bin/env bash

cpu="$(awk '{u=$2+$4; t=$2+$4+$5; if (NR==1){u1=u; t1=t;} else print ($2+$4-u1) * 100 / (t-t1); }' \
    <(grep 'cpu ' /proc/stat) <(sleep 1;grep 'cpu ' /proc/stat))"

int_cpu=${cpu%.*}

text=""

[ "$int_cpu" -lt "100" ] && text="^c$COL_BG_0^0"
[ "$int_cpu" -lt "10"  ] && text="${text}0"

if [ "$int_cpu" -ge "80" ] ; then
    text="$text^c$COL_VERMELL^"
elif [ "$int_cpu" -ge "60" ] ; then
    text="$text^c$COL_TARONJA^"
else
    text="$text^c$COL_GROC^"
fi

echo "$text$int_cpu%"
