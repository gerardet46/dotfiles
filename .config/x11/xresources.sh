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

! nsxiv
Nsxiv.window.background: $COL_BG_1
Nsxiv.window.foreground: $COL_W2
Nsxiv.bar.font:          Ubuntu:size=11
Nsxiv.bar.background:    $COL_BG_0
Nsxiv.bar.foreground:    $COL_W2
Nsxiv.mark.foreground:   $COL_CLAR

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
