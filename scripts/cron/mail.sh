#!/usr/bin/env sh

mailsync

pkill -RTMIN+12 dwmblocks

notify-send "Correu sincronitzat"
