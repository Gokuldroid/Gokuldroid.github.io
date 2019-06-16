---
path: better-cmdline-1
tags:
  - cmdline
  - iterm
  - bash
date: 2019-06-09T12:25:19.116Z
title: Better cmdline
---
Every programmer searches for some files more than he breathes in his life. Sometimes it is very daunting to navigate deeply nested folder just to run a single test file. Do you think 'Up arrow never works for me'?. Do you think 'My life is better than my bash history'?. If that so, this article is for you. Sometimes I envy people who use cmd line very efficiently. In this article, I going to show you how my cmd line journey evolved over the period (still I have lots of things to master).

<br/>

##### Does native terminal really work for you?
- - -
Windows just upgraded their terminal after many many years. MAC's native terminal is good. [Is it good enough?](https://www.slant.co/versus/1713/1715/~iterm2_vs_terminal-app).Try to find alternates that suits your need. I have used the following alternate terminals, [cmder](https://cmder.net/) - windows terminal replacement. [iTerm2](https://www.iterm2.com/) - mac os terminal replacement.

<br/>

##### Cmd aliases comes to rescue
- - -
Clearing cache always fixes the issue right ;-) ?.

```bash
cd /usr/project/master/gokuldroid 
&& git pull --rebase 
&& rm -rf node_modules/ 
&& rm -rf tmp/ && npm install 
&& bower install 
&& ember s
```
 

This magic cmd fixes all the issues for me. Over the period we add more and more cleanup methods to this command and this is difficult to remember. What if we could simply do clean_build instead.

To add cmdline alias execute the cmd 
nano \~/.bash_profile or code \~/.zshrc (For vs code) or subl ~/.zshrc (For sublime users) and add alias like below,

```bash 
alias name='cmd'
```


Adding alias is up to your imagination. you can add anything you want. Some really useful alias.

```bash

alias clean_build='cd /usr/project/master/gokuldroid && git pull --rebase && rm -rf node_modules/ && rm -rf tmp/ && npm install && bower install && ember s'

alias .=cd ..

alias ..=cd ../..

alias ...=cd ../../..

alias ga='git add'

alias gaa='git add .'

alias gaaa='git add --all'

alias gau='git add --update'

alias gb='git branch'

alias gbd='git branch --delete '

alias gc='git commit'

alias gco='git checkout'

alias gcob='git checkout -b'

alias gcom='git checkout master'

alias gcos='git checkout staging'

alias gcod='git checkout develop'

alias gd='git diff'

alias gda='git diff HEAD'

alias glg='git log --graph --oneline --decorate --all'

alias gld='git log --pretty=format:"%h %ad %s" --date=short --all'

alias gp='git pull'

alias gpr='git pull --rebase'
```

<br/>

#####find and select like a pro

---

For this you need to install two plugins.

1.[File path finder by facebook](https://github.com/facebook/PathPicker)

<a href="https://asciinema.org/a/19519" target="_blank"><img src="https://asciinema.org/a/19519.png" width="597"/></a>

This plugin parses file paths in any output and provides selectable list. For example if you want to view a modified file in current repository just use 

```bash  
git status | fpp
```

2.[Cmdline fuzzy finder](https://github.com/junegunn/fzf)

This video explains the power of fuzzy finder.

<a title="fzf - command-line fuzzy finder" href="https://www.youtube.com/watch?v=qgG5Jhi_Els">
  <img src="https://i.imgur.com/vtG8olE.png" width="640">
</a>
<br/>
<br/>

_(Note: Works at it's best if you configured default apps for the all the file types)_

<br/>
<br/>
##### Oh My Zsh
---

[Zsh](https://ohmyz.sh/) also called [Z shell]((https://ohmyz.sh/)). It comes with a lot of features that native shell don't have (themes, plugins,spelling correction, approximate completion etc..). You can find installation docs [here](https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH).