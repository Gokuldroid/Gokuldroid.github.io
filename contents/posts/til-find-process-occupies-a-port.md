---
path: til-find-process-occupies-a-port
tags:
  - bash
  - cmdline
date: 2023-07-06T23:27:48.000Z
title: 
render_in_place: true
categories:
  - today I learned
---

you can execute the following cmd to find the process which occupies a specific port in linux.

```
sudo lsof -i :<port_number> -t | xargs ps -o pid,user,cmd -p
```