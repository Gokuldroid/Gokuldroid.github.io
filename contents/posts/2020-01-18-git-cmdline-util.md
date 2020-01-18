---
path: git-cmdline-util
tags:
  - GIT
  - cmdline
  - tools
date: 2020-01-18T07:52:06.942Z
title: A missing cmdline util for GIT - NIT
---

I have been using VS code and cmdline for git. But I always miss something. Autocompletion is not perfect in cmdline and GIT tower is bit costly. So, I created [this](https://github.com/Gokuldroid/nit) to make git cmdline experience better.

<br/>

##### Installation:


```bash 
npm install -g @lazyloop/nit
```

<br/>

##### Usage:

<br/>

**help:**

```bash
 nit -h
 ``` 
 or 
 
 ```bash
 nit <command> -h
 ```

<br/>

-----

**checkout branch:**

```bash
 nit checkout [-r<remote>]
 ```

![demo git checkout](https://raw.githubusercontent.com/Gokuldroid/nit/master/samples/nit_checkout.gif)

<br/>

-----

**delete branches:**

```bash
 nit delete [-m<multiple>]
 ```

![demo git delete](https://raw.githubusercontent.com/Gokuldroid/nit/master/samples/nit_delete.gif)

<br/>

-----

**stage files to commit:**

```bash
 nit add
 ```

![demo git add](https://raw.githubusercontent.com/Gokuldroid/nit/master/samples/nit_add.gif)

<br/>

-----


**discard local changes:**

```bash
 nit discard
 ```

![demo git discard](https://raw.githubusercontent.com/Gokuldroid/nit/master/samples/nit_discard.gif)

<br/>