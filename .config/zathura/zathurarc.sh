#!/usr/bin/sh

echo "set font \"Ubuntu 11\"
set default-bg \"#000000\"
set default-fg \"$COL_W0\"

set statusbar-bg \"#000000\"
set statusbar-fg \"$COL_CLAR\"

set inputbar-bg \"$COL_BG_0\" #00 currently not used
set inputbar-fg \"$COL_W0\" #02

set notification-error-bg \"$COL_VERMELL\" #08
set notification-error-fg \"$COL_W0\" #00

set notification-warning-bg \"$COL_TARONJA\" #08
set notification-warning-fg \"$COL_0\" #00

set highlight-color \"$COL_FOSC\" #0A
set highlight-active-color \"$COL_B2\" #0D

set highlight-fg \"#ffffff\"
set highlight-transparency 0.5

set completion-highlight-bg \"$COL_CLAR\" #02
set completion-highlight-fg \"$COL_3\" #0C

set completion-bg \"$COL_BG_0\" #02
set completion-fg \"$COL_W0\" #0C

set recolor-lightcolor \"$COL_BG_0\"
set recolor-darkcolor \"$COL_W1\"

set window-title-basename true
set recolor true
set scroll-step 50
set selection-clipboard clipboard
set guioptions \"\"

map D toggle_page_mode
map g goto top
map i recolor
map p print" > "$HOME/.config/zathura/zathurarc"
