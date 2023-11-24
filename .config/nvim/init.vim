set number relativenumber
set expandtab
set tabstop=4
set shiftwidth=4
set clipboard+=unnamedplus
set nowrap
syntax enable

inoremap jk <ESC>
inoremap ,. <ESC>:
noremap , :
nnoremap S :%s//g<Left><Left>

map <C-h> <C-w>h
map <C-j> <C-w>j
map <C-k> <C-w>k
map <C-l> <C-w>l

:augroup numbertoggle
:  autocmd!
:  autocmd BufEnter,FocusGained,InsertLeave * set relativenumber
:  autocmd BufLeave,FocusLost,InsertEnter   * set norelativenumber
:augroup END

if ! filereadable(system('echo -n "${XDG_CONFIG_HOME:-$HOME/.config}/nvim/autoload/plug.vim"'))
echo "Downloading junegunn/vim-plug to manage plugins..."
silent !mkdir -p ${XDG_CONFIG_HOME:-$HOME/.config}/nvim/autoload/
silent !curl "https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim" > ${XDG_CONFIG_HOME:-$HOME/.config}/nvim/autoload/plug.vim
autocmd VimEnter * PlugInstall
endif

call plug#begin(system('echo -n "${XDG_CONFIG_HOME:-$HOME/.config}/nvim/plugged"'))
Plug 'mhartington/oceanic-next'
Plug 'morhetz/gruvbox'
Plug 'arcticicestudio/nord-vim'
Plug 'cormacrelf/vim-colors-github'
Plug 'ncm2/ncm2'
Plug 'roxma/nvim-yarp'
Plug 'ncm2/ncm2-bufword'
Plug 'ncm2/ncm2-path'
Plug 'ncm2/ncm2-jedi'
Plug 'ncm2/ncm2-pyclang'
Plug 'mattn/emmet-vim'
Plug 'ap/vim-css-color'
Plug 'junegunn/fzf.vim'
Plug 'kovetskiy/sxhkd-vim'
call plug#end()


let g:user_emmet_install_global = 0
autocmd FileType html,css EmmetInstall

let g:user_emmet_leader_key='<C-Z>'

set completeopt=noinsert,menuone,noselect

colorscheme gruvbox 
hi Normal guibg=NONE ctermbg=NONE

" sent
    map <F8> :w!<CR>:!sent -i <c-r>% &<CR><CR>
