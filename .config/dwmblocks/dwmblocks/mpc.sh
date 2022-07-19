#!/usr/bin/env sh

# aquest script utiliza "mpc"

# ses dades són a partir de sa 2na columna
text=$(mpc current)
icon=$(mpc | grep "\[playing\]" > /dev/null && echo "" || echo "")

if [ -n "$text" ]; then
    echo "^c$COL_VERD^$icon $text"
else
    echo "^c$COL_BG_0^-"
fi
