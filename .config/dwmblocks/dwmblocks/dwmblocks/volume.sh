#!/usr/bin/sh

# script per al volum sense utilitzar "amixer"
# utilitza "pactl"

case $BLOCK_BUTTON in
    1) pactl set-sink-mute @DEFAULT_SINK@ toggle ;;
esac

# això mostra el volum actual
vol() {
	pactl list sinks \
	| grep '^[[:space:]]Volume:'\
	| head -n $(( $SINK + 1 )) \
	| tail -n 1 \
	| sed -e 's,.* \([0-9][0-9]*\)%.*,\1,'
}

str() {
    echo "^c$COL_TARONJA^$1^c#444444^"
}

# primer comprovam si està mutejat
if [ "$(pacmd list-sinks | awk '/muted/ { print $2 }')" = "yes" ]; then
	str "SILENCIAT"
	exit 0
fi;

# en cas que no estigui mutejat no haurà sortit
v=$(vol)
if [ "$v" -gt "100" ]; then str "  $v%"
elif [ "$v" -ge "50" ]; then str " $v%"
else str " $v%"; fi
