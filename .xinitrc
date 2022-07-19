#!/bin/sh

# Xresources
[ -f "~/.Xresources" ] && xrdb -merge -I$HOME ~/.Xresources

# carrega dbus i altres
if [ -d /etc/X11/xinit/xinitrc.d ] ; then
 for f in /etc/X11/xinit/xinitrc.d/?*.sh ; do
  [ -x "$f" ] && . "$f"
 done
 unset f
fi

export PATH="$PATH:$HOME/scripts:$HOME/.local/bin"
#export SUDO_ASKPASS="$HOME/scripts/dmenupass"
export SUDO_ASKPASS="/usr/lib/ssh/x11-ssh-askpass"  # pacman -S x11-ssh-askpass

rm -r $HOME/java.log*

# Usuari
setxkbmap es
. /opt/gcolors/colors_env.sh
monitors auto
#feh --bg-fill "$HOME/.config/wallpaper" &
xwallpaper --zoom "$HOME/.config/wallpaper" &
xcompmgr &
redshift &
nm-applet &
# descomentar això per bloquejar cada 7 minuts
#xautolock -time 7 -locker slock &
#emacs --daemon &
scripts/emacs-daemon &
dwmblocks &
#nextcloud &

exec dwm
