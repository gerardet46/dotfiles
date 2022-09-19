#!/usr/bin/sh

# Script to run LARBS with some defaults
# and trigger some options after installation

###########################################
# NEW DEFAULT VARIABLES (ESCAPE / TO \\/) #
###########################################
DOTFILES_REPO="${1:-https:\\/\\/github.com\\/gerardet46\\/dotfiles.git}"
PROGS_FILE="${2:-https:\\/\\/raw.githubusercontent.com\\/gerardet46\\/dotfiles\\/master\\/progs.csv}"
AUR_HELPER="${3:-trizen}"

##############################
# DOWNLOAD AND PREPARE LARBS #
##############################
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

#####################################
# NOW SETUP FINAL OPTIONS FOR LARBS #
#####################################
# Setup dash as the default shell
echo 'which dash && ln -svfT dash /usr/bin/sh' >> larbs.sh

# Last installation hooks
echo 'sudo -u "$name" /home/"$name"/.config/set-config.sh' >> larbs.sh

#####################
# FINALLY RUN LARBS #
#####################
sh larbs.sh
