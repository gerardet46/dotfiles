#!/usr/bin/env sh

case $BLOCK_BUTTON in
    1) sp play ;;
    3) sp next ;;
esac

# aquest script utiliza "sp"

# ses dades són a partir de sa 2na columna
titol=$(sp current | awk 'FNR==4 {first = $1; $1 = ""; print $0}' | sed 's/&/i/g')
artista=$(sp current | awk 'FNR==3 {first = $1; $1 = ""; print $0}' | sed 's/&/i/g')

if [ -n "$titol" ] || [ -n "$artist" ]; then
    echo "^c$COL_VERD^ $titol -$artista"
else
    echo "^c$COL_BG_0^-"
fi
