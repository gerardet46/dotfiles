#!/usr/bin/env sh

# set pacman hooks
echo "Linking pacman hooks..."
ls "$HOME/.config/pacman-hooks" | while read x; do
    sudo ln -sf "$HOME/.config/pacman-hooks/$x" /usr/share/libalpm/hooks/
done

# link to .xinitrc
echo "Linking .xinitrc"
ln -sf "$HOME/.config/x11/xprofile" "$HOME/.xprofile"
