#!/usr/bin/env sh

# reads accounts in order of mutt (i1, i2, i3, ... with mutt-wizard)
acc=$(cat $HOME/.config/mutt/muttrc | grep "i[0-9]" | grep -o "switch to [^\"]*" | awk '{print $3}')

for x in $acc; do
    unread="$(find "${XDG_DATA_HOME:-$HOME/.local/share}"/mail/"$x"/[Ii][Nn][Bb][Oo][Xx]/new/* -type f | wc -l 2>/dev/null)"
    [ -z "$unread" ] || text="$text$unread."
done 2>/dev/null

if [ "$text" != "0.0.0." ]; then
    text="$(echo "$text" | sed 's/.$//')"
    echo "^c$COL_BLAU^  $text"
fi
