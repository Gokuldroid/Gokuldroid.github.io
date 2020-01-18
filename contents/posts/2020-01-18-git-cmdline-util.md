---
path: git-cmdline-util
tags:
  - GIT
  - cmdline
  - tools
date: 2020-01-18T07:52:06.942Z
title: A missing cmdline util for GIT
---
# nit

Git cmdline utils written in node.js

### Installation

`npm install -g @lazyloop/nit`

### usage

**help**

`nit -h` or `nit <command> -h`

**checkout branch:**

`nit checkout [-r<remote>]`

![demo git checkout](https://raw.githubusercontent.com/Gokuldroid/nit/master/samples/nit_checkout.gif).

**delete branches:**

`nit delete [-m<multiple>]`

![demo git delete](https://raw.githubusercontent.com/Gokuldroid/nit/master/samples/nit_delete.gif).

**stage files to commit:**

`nit add`

![demo git add](https://raw.githubusercontent.com/Gokuldroid/nit/master/samples/nit_add.gif).

**discard local changes:**

`nit discard`

![demo git discard](https://raw.githubusercontent.com/Gokuldroid/nit/master/samples/nit_discard.gif).
