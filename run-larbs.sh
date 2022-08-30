#!/usr/bin/sh

# Script to run LARBS with some defaults
# and trigger some options after installation

DOTFILES_REPO="https:\\/\\/github.com\\/gerardet46\\/dotfiles.git"
PROGS_FILE="https:\\/\\/github.com\\/gerardet46\\/dotfiles\\/blob\\/master\\/.config\\/progs.csv"
AUR_HELPER="trizen"

# Download
curl -LO larbs.xyz/larbs.sh

# Set dotfiles repo
sed "s/^dotfilesrepo=.*/dotfilesrepo='$DOTFILES_REPO'/" larbs.sh > larbs2.sh
mv larbs2.sh larbs.sh

# Set progs.csv file
sed "s/^progsfile=.*/progsfile='$PROGS_FILE'/" larbs.sh > larbs2.sh
mv larbs2.sh larbs.sh

# Set default AUR helper
sed "s/yay/$AUR_HELPER/g" larbs.sh > larbs2.sh
mv larbs2.sh larbs.sh

# Last installation hooks
echo 'sudo -u "$name" /home/"$name"/.config/set-config.sh' >> larbs.sh

# Run larbs
sh larbs.sh
