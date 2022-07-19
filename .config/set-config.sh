#!/usr/bin/env sh

# set pacman hooks
echo "Linking pacman hooks..."
ls "$HOME/.config/pacman-hooks" | while read x; do
    sudo ln -sf "$HOME/.config/pacman-hooks/$x" /usr/share/libalpm/hooks/
done

echo "Done"
