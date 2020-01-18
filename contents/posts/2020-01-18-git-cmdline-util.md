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

<img src="https://raw.githubusercontent.com/Gokuldroid/nit/master/samples/nit_checkout.gif" alt="demo git checkout" style="width: 100%;">

<br/>

-----

**delete branches:**

```bash
 nit delete [-m<multiple>]
 ```

<img src="https://raw.githubusercontent.com/Gokuldroid/nit/master/samples/nit_delete.gif" alt="demo git delete" style="width: 100%;">

<br/>

-----

**stage files to commit:**

```bash
 nit add
 ```

<img src="https://raw.githubusercontent.com/Gokuldroid/nit/master/samples/nit_add.gif" alt="demo git add" style="width: 100%;">

<br/>

-----


**discard local changes:**

```bash
 nit discard
 ```
<img src="https://raw.githubusercontent.com/Gokuldroid/nit/master/samples/nit_discard.gif" alt="demo git discard" style="width: 100%;">

<br/>