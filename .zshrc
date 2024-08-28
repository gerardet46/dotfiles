#!/usr/bin/zsh
HISTFILE=~/.cache/zsh_history
HISTSIZE=10000
SAVEHIST=5000

bindkey -v
KEYTIMEOUT=1
zstyle :compinstall filename '$HOME/.zshrc'

# FZF
if which fzf >/dev/null; then
    source /usr/share/fzf/key-bindings.zsh
    source /usr/share/fzf/completion.zsh
fi

# sudo not required for some system commands
for command in mount umount sv su shutdown poweroff reboot; do
    alias $command="sudo $command";
done; unset command

# export
[ -f ~/.config/shell/environment ] && source ~/.config/shell/environment

# alias
[ -f ~/.config/shell/alias ] && source ~/.config/shell/alias

# nnn
[ -f ~/.config/nnn/config ] && source ~/.config/nnn/config

# completar
autoload -Uz compinit
compinit

# temes
autoload -U colors && colors
autoload -Uz promptinit && promptinit

prompt_mytheme_setup() {
    #PS1="%F{magenta}%n%F{yellow}[%m] %F{blue}%1~%f%b%B%(?.%F{grey}.%F{red}) %(!.#.$)%f%b "
    PS1="%F{blue}%1~%f%b%B%(?.%F{grey}.%F{red}) %(!.#.$)%f%b "
}
prompt_themes+=( mytheme )
prompt mytheme

function xterm_title_preexec () {
	#print -Pn -- '\e]2;%n@%m %~ %# ' && print -n -- "${(q)1}\a"
	print -n -- "\e]2;st - ${(q)1}\a"
	#[[ "$TERM" == 'screen'* ]] && { print -Pn -- '\e_\005{g}%n\005{-}@\005{m}%m\005{-} \005{B}%~\005{-} %# ' && print -n -- "${(q)1}\e\\"; }
}

add-zsh-hook -Uz preexec xterm_title_preexec
# prompt for which WM/session init
# remove the sed pipe to obtain also the number
#if [ "$(echo "$(tty)" | sed 's/[0-9]//g')" = "/dev/tty" ] ; then
    ## ask for display
    #echo ""
    #echo "Introdueix el nom de la sessió: "
    #echo ""
    #echo "- tty"
    #echo "- dwm (predeterminat)"
    #echo ""
    #printf "Selecció: "

    #read what

    # start session if it's not tty
    #[ "$what" = "tty" ] || startx ~/.xinitrc $what
#fi

#startx ~/.xinitrc

# if [ "$(echo "$(tty)" | sed 's/[0-9]//g')" = "/dev/tty" ] ; then
#     startx
# fi
[ "$(tty)" = "/dev/tty1" ] && startx

# set colors of tty
# available colors:
# nord
# gruvbox-dark
# solarized-dark
color_name="gruvbox-dark"
[ -f ~/.config/shell/themes/tty/$color_name.sh ] && source ~/.config/shell/themes/tty/$color_name.sh

# plugins
source "/usr/share/zsh/plugins/zsh-vim-mode.plugin.zsh"
skipplugins="yes"  # erase to check and install plugins
noms=("zsh-syntax-highlighting" "zsh-autosuggestions")
for x in $noms; do
    # instal·lam si no ho està
    #if [ -z "$(pacman -Q | grep "$x")" ]; then
    if [ -z $skipplugins ] && [ "$(xbps-query "$x" | awk '{print $1}')" = "[-]" ]; then
        #sudo pacman -S "$x"
        sudo xbps-install "$x"
    fi
    # carregam
    source "/usr/share/zsh/plugins/$x/$x.zsh" 2> /dev/null
done
#manual_plugins=("https://github.com/Aloxaf/fzf-tab")
for x in $manual_plugins; do
    name="$(echo "$x" | awk -F'/' '{print $NF}')"

    if ! [ -d "/usr/share/$name" ]; then
        sudo git clone "$x" "/usr/share/zsh/plugins/$name"
    fi

    source "/usr/share/zsh/plugins/$name/$name.zsh" 2> /dev/null
done

# git prompt
# instal·lam si fa falta
ruta="$HOME/.config/zsh/zsh-git-prompt"
GIT_PROMPT_EXECUTABLE="python" # aka haskell

#[ -d "$ruta" ] || git clone "https://github.com/olivierverdier/zsh-git-prompt" "$ruta"
if ! [ "$GIT_PROMPT_EXECUTABLE" != "haskell" -o -f "/usr/local/bin/stack" ]; then
    sudo pacman -S stack
    cd "$ruta"
    stack setup
    stack build
    stack install
fi

# carregam
#source ~/.config/zsh/zsh-git-prompt/zshrc.sh
#RPROMPT='$(git_super_status)'

# highlighter
ZSH_HIGHLIGHT_STYLES[single-hyphen-option]="fg=blue"
ZSH_HIGHLIGHT_STYLES[double-hyphen-option]="fg=blue"
ZSH_HIGHLIGHT_STYLES[arg0]="none"

# tipus de cursor per VI.
# 2-6 perquè no parpellegi
# 1-5 perquè parpellegi
function zle-keymap-select {
if [[ ${KEYMAP} == vicmd ]] ||
    [[ $1 = 'block' ]]; then
    echo -ne '\e[2 q'
elif [[ ${KEYMAP} == main ]] ||
    [[ ${KEYMAP} == viins ]] ||
    [[ ${KEYMAP} = '' ]] ||
    [[ $1 = 'beam' ]]; then
    echo -ne '\e[5 q'
fi
}
zle -N zle-keymap-select
zle-line-init() {
zle -K viins # initiate `vi insert` as keymap (can be removed if `bindkey -V` has been set elsewhere)
echo -ne "\e[5 q"
}
zle -N zle-line-init
echo -ne '\e[5 q' # Use beam shape cursor on startup.
preexec() { echo -ne '\e[5 q' ;} # Use beam shape cursor for each new prompt.

# MISCEL·LÀNIA
# tecles per defecte
typeset -g -A key

key[Home]="${terminfo[khome]}"
key[End]="${terminfo[kend]}"
key[Insert]="${terminfo[kich1]}"
key[Backspace]="${terminfo[kbs]}"
key[Delete]="${terminfo[kdch1]}"
key[Up]="${terminfo[kcuu1]}"
key[Down]="${terminfo[kcud1]}"
key[Left]="${terminfo[kcub1]}"
key[Right]="${terminfo[kcuf1]}"
key[PageUp]="${terminfo[kpp]}"
key[PageDown]="${terminfo[knp]}"
key[Shift-Tab]="${terminfo[kcbt]}"

# setup key accordingly
[[ -n "${key[Home]}"      ]] && bindkey -- "${key[Home]}"       beginning-of-line
[[ -n "${key[End]}"       ]] && bindkey -- "${key[End]}"        end-of-line
[[ -n "${key[Insert]}"    ]] && bindkey -- "${key[Insert]}"     overwrite-mode
[[ -n "${key[Backspace]}" ]] && bindkey -- "${key[Backspace]}"  backward-delete-char
[[ -n "${key[Delete]}"    ]] && bindkey -- "${key[Delete]}"     delete-char
[[ -n "${key[Up]}"        ]] && bindkey -- "${key[Up]}"         up-line-or-history
[[ -n "${key[Down]}"      ]] && bindkey -- "${key[Down]}"       down-line-or-history
[[ -n "${key[Left]}"      ]] && bindkey -- "${key[Left]}"       backward-char
[[ -n "${key[Right]}"     ]] && bindkey -- "${key[Right]}"      forward-char
[[ -n "${key[PageUp]}"    ]] && bindkey -- "${key[PageUp]}"     beginning-of-buffer-or-history
[[ -n "${key[PageDown]}"  ]] && bindkey -- "${key[PageDown]}"   end-of-buffer-or-history
[[ -n "${key[Shift-Tab]}" ]] && bindkey -- "${key[Shift-Tab]}"  reverse-menu-complete

# Finally, make sure the terminal is in application mode, when zle is
# active. Only then are the values from $terminfo valid.
if (( ${+terminfo[smkx]} && ${+terminfo[rmkx]} )); then
	autoload -Uz add-zle-hook-widget
	function zle_application_mode_start { echoti smkx }
	function zle_application_mode_stop { echoti rmkx }
    add-zle-hook-widget -Uz zle-line-init zle_application_mode_start
    add-zle-hook-widget -Uz zle-line-finish zle_application_mode_stop
fi

# historial de cmd
autoload -Uz up-line-or-beginning-search down-line-or-beginning-search
zle -N up-line-or-beginning-search
zle -N down-line-or-beginning-search

[[ -n "${key[Up]}"   ]] && bindkey -- "${key[Up]}"   up-line-or-beginning-search
[[ -n "${key[Down]}" ]] && bindkey -- "${key[Down]}" down-line-or-beginning-search
