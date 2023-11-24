#!/usr/bin/sh

echo "! General
*.font: Ubuntu Mono:size=15

*.background: #161b20
*.foreground: $COL_W0
*.color0:     $COL_BG_1
*.color8:     #74778a
*.color1:     $COL_VERMELL
*.color9:     $COL_VERMELL
*.color2:     $COL_VERD
*.color10:    $COL_VERD
*.color3:     $COL_GROC
*.color11:    $COL_GROC
*.color4:     $COL_BLAU
*.color12:    $COL_BLAU
*.color5:     $COL_MAGENTA
*.color13:    $COL_MAGENTA
*.color6:     $COL_CIAN
*.color14:    $COL_CIAN
*.color7:     $COL_W2
*.color15:    $COL_W0

! st
! it uses the colors defined above
St.alpha:      0.85
St.background: $COL_BG_0

! dmenu
dmenu.font:           Ubuntu:size=13
dmenu.normfgcolor:    #9497aa
dmenu.normbgcolor:    $COL_0
dmenu.selfgcolor:     $COL_W0
dmenu.selbgcolor:     $COL_FOSC
dmenu.lineheight:     24
dmenu.min_lineheight: 8

! flybinds
flybinds.font:           Ubuntu:size=13
flybinds.separator:      ->
flybinds.background:     $COL_0
flybinds.keyfg:          $COL_VERD
flybinds.titlefg:        $COL_FOSC
flybinds.sepfg:          $COL_BLAU
flybinds.descfg:         $COL_BLANC
flybinds.bordercol:      $COL_FOSC
flybinds.maxcolumns:     6
flybinds.colpadding:     100
flybinds.outpaddinghor:  25
flybinds.outpaddingvert: 15
flybinds.titlepadding:   5
flybinds.borderpx:       2

! dwm
dwm.font:            Ubuntu:size=11
!! bar
dwm.user_bh:         22
dwm.primarycolor:    $COL_FOSC
dwm.secondarycolor:  $COL_CLAR
dwm.normbgcolor:     $COL_BG_0
dwm.normbordercolor: $COL_1
dwm.normfgcolor:     $COL_W2
dwm.selbgcolor:      $COL_1
dwm.selfgcolor:      $COL_W1
dwm.borderpx:        2
dwm.smartgaps:       1
dwm.smartborders:    1

! nsxiv
Nsxiv.window.background: $COL_BG_0
Nsxiv.window.foreground: $COL_W2
Nsxiv.bar.font:          Ubuntu:size=11
Nsxiv.bar.background:    $COL_BG_0
Nsxiv.bar.foreground:    $COL_W2
Nsxiv.mark.foreground:   $COL_CLAR

! tabbed
tabbed.font:        Ubuntu:size=11
tabbed.normbgcolor: $COL_0
tabbed.normfgcolor: $COL_FOSC
tabbed.selbgcolor:  $COL_2
tabbed.selfgcolor:  $COL_W1
tabbed.urgbgcolor:  $COL_W1
tabbed.urgfgcolor:  $COL_0
tabbed.tabwidth:    150
tabbed.barHeight:    0

! x11-ssh-askpass
SshAskpass.Dialog.title: Autenticació
SshAskpass.Dialog.label: Introdueix la contrasenya

SshAskpass.*font:              Ubuntu:size=20
SshAskpass.*foreground:        $COL_W2
SshAskpass.*background:        $COL_BG_0
SshAskpass.*topShadowColor:    $COL_W0
SshAskpass.*bottomShadowColor: #7f7f7f
SshAskpass.*borderColor:       $COL_CLAR
SshAskpass.*shadowThickness:   0
SshAskpass.*borderWidth:       1
SshAskpass.*horizontalSpacing: 5
SshAskpass.*verticalSpacing:   6

SshAskpass.Button.borderWidth:          1
SshAskpass.Button.verticalSpacing:      2

SshAskpass.Indicator.foreground:        $COL_VERD
SshAskpass.Indicator.background:        $COL_CLAR
SshAskpass.Indicator.borderWidth:       0
SshAskpass.Indicator.height:            7
SshAskpass.Indicator.width:             15
SshAskpass.Indicator.horizontalSpacing: 2
SshAskpass.Indicator.verticalSpacing:   4
SshAskpass.Indicator.minimumCount:      8
SshAskpass.Indicator.maximumCount:      20" > "$HOME/.config/x11/xresources"
