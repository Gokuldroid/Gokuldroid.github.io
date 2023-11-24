---
path: til-find-diskusage-sorted-by-size
tags:
  - cmdline
date: 2023-07-11T17:26:02.000Z
title: Find disk usage sorted by size
render_in_place: true
categories:
  - today I learned
---
To find all folders and it's disk usage sorted by size, you can use the following cmd

```
du -ck | sort -n
```

To find all files in a folder and it's size,

```
ls -l --block-size=MB
```

or

```
ls -lh
```