#!/usr/bin/env sh

if which dmenukey > /dev/null; then
    e="$(printf "arbs\nAtura\nReinicia\nBloqueja\nSurt" | dmenukey -p "Sortida")"
else
    e="$(printf "Atura\nReinicia\nBloqueja\nSurt" | dmenu -p "Sortida")"
fi

case "$e" in
    Atura) sudo poweroff ;;
    Reinicia) sudo reboot ;;
    Bloqueja) slock & xset dpms force off ;;
    Surt) i3-msg exit || killall dwm ;;
esac
