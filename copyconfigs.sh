#!/usr/bin/env sh

while read line
do
    if [ ! -z "$line" ] && ! [ "#" = "$(echo "$line" | tr -d " " | cut -c1)" ]; then
        # create directory in this repo if it doesn't exist
        dir_name="$(dirname "$line")"
        [ -d "$dir_name" ] || mkdir -p "$dir_name"

        # symbolic link to that config file
        line_home="$HOME/$line"
        # ln -s "$line_home" "$line" 2>/dev/null
        rsync -a "$line_home" "$line"

        # verbose
        [ "$1" = "-v" ] && echo "$line"
    fi
    # put the folders ending with "/" and the files not.
done <<EOF
# Xorg
.config/x11/
.xinitrc

# Emacs
.emacs.d/init.el
.emacs.d/README.org
.emacs.d/custom.el
.emacs.d/snippets/

# In home directory
.tmux.conf
.zshrc

# In config directory
.config/calcurse/

.config/dunst/

.config/dwmblocks/

.config/i3/
.config/i3blocks/

.config/mimeapps.list

.config/mouse/

.config/mpd/
.config/ncmpcpp/

.config/nnn/config
.config/nnn/plugins/

.config/tg/conf.py

.config/nvim/init.vim

.config/pacman-hooks/

.config/qutebrowser/start.html
.config/qutebrowser/config.py
.config/qutebrowser/autoconfig.yml
.config/qutebrowser/solarized-everything-css/

.config/qtile/

.config/redshift/

.config/sc-im/

.config/screenkey.json 
.config/set-config.sh
.config/nsxiv/
.config/zathura/

# scripts/ folder
sc/
EOF
