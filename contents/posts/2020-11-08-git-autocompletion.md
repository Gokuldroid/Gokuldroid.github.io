---
path: git-autocompletion
tags:
  - git
  - cmdline
date: 2020-11-08T12:30:34.813Z
title: Git autocompletion
categories:
  - programming
  - productivity
  - cmdline
---
<img src="/assets/blog/git-autocompletion/git-autocompletion.gif" alt="git auto completion" style="width:100%">

Remembering the branches and all the available commands are daunting work in git. what if the commands auto-completes itself like shown in the above gif. we can save a lot of typing. not all of us have a typing speed of 90+ wpm right?.

For this, we need to configure our terminal with git auto-completion snippet. you can download the bash-completion file from [here](https://github.com/git/git/tree/master/contrib/completion).
Download the file from these links if you're using [bash](https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash), or [zsh](https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.zsh) or [shell](https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh).


You can download with simple curl command also like this,

```bash
curl https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash -o ~/.git-completion.bash
```

and add the downloaded file in *~/.bashrc* or *~/.zshrc* depends on your terminal like this.

```bash
# bash
if [ -f ~/.git-completion.bash ]; then
  . ~/.git-completion.bash
fi
```

```bash
#zsh
source ~/.git-completion.bash
```

restart the terminal and enjoy the git auto-completion.