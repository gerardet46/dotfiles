#!/bin/sh

# Show wifi 📶 and percent strength or 📡 if none.
# Show 🌐 if connected to ethernet or ❎ if none.
# Show 🔒 if a vpn connection is active

color="$COL_VERD"
if grep -xq 'up' /sys/class/net/w*/operstate 2>/dev/null ; then
	#wifiicon="$(awk '/^\s*w/ { print "", int($3 * 100 / 70) "% " }' /proc/net/wireless)"
    wifiicon=" "
elif grep -xq 'down' /sys/class/net/w*/operstate 2>/dev/null ; then
	grep -xq '0x1003' /sys/class/net/w*/flags && wifiicon="📡 " || wifiicon="  "
    color="$COL_VERMELL"
fi

echo "^c$color^$wifiicon"
#printf "%s%s%s\n" "$wifiicon" "$(sed "s/down/❎/;s/up/🌐/" /sys/class/net/e*/operstate 2>/dev/null)" "$(sed "s/.*/🔒/" /sys/class/net/tun*/operstate 2>/dev/null)"
