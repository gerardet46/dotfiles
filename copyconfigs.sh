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
.zshrc
.gtkrc-2.0

# scripts/ folder
sc/

# In config directory
.config/calcurse/
.config/dunst/
.config/dwmblocks/
.config/gtk-3.0/settings.ini
.config/i3/
.config/i3blocks/
.config/mailcap
.config/mimeapps.list
.config/mouse/
.config/mpd/
.config/ncmpcpp/
.config/nnn/config
.config/nnn/plugins/
.config/nsxiv/
.config/nvim/init.vim
.config/pacman-hooks/
.config/qtile/
.config/qutebrowser/autoconfig.yml
.config/qutebrowser/config.py
.config/qutebrowser/solarized-everything-css/
.config/qutebrowser/start.html
.config/redshift/
.config/sc-im/
.config/screenkey.json 
.config/set-config.sh
.config/shell/
.config/tg/conf.py
.config/tmux/tmux.conf
.config/wallpaper
.config/zathura/
EOF
