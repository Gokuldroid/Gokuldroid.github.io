---
path: top-10-tools-you-need-as-dev
tags:
  - Programming
  - Software development
  - Frontend developer
  - Backend developer
date: 2023-03-11T13:07:07.000Z
title: Top 10 tools you need as developer
render_in_place: false
categories:
  - programming
  - productivity
  - tools
---
## Introduction
As a developer, it is essential to have the right set of tools to help you streamline your workflow and boost productivity. With the plethora of options available, it is easy to get overwhelmed. In this blog post, we will discuss the top 10 tools every developer needs to have to make their lives easier.

## 1 - A Great editor / IDE
Most of the time you will be spending your time with your code editor. thus you have to choose your main weapon and you should know how to use it effectively.everyone will have their personal preferences when it comes to code editor. you should try few and settle with what you're comfortable. I would also suggest you to learn and commandline based editor like VIM. that will be handy when you're dealing with ssh / remote machines etc. Atleast you should know how to exit VIM :P. 


### personal recommendations:
- [VS code](https://code.visualstudio.com/) (It has great extensibility. If you know typescript I would recommend this, since you can write your own plugins for your use case).
- [Sublime text](https://www.sublimetext.com/) (Blazing fast one).
- Intellij (Swiss army knife).
- VIM (Hard kid).

## 2 - Version control system - Git 
Git is one of the most powertool that you can learn as a developer. you can learn about git and it's internals [here](https://git-scm.com/book/en/v2). Some people will be overwhelmed with the commands that git can provide. You can use any git client like VS code (git lens plugin). I would also recommend you to setup [autocompletions](./posts/git-autocompletion/) for git if you prefer to use cmdline.  


## 3 - A good note taking app
A good note taking app will save you tone of time. I personally use [notion](https://www.notion.so/) / [bear notes](https://bear.app/).
Notion takes time to learn. but once you get hang of it, you will be unstoppable. I use bear notes for it's simplicity. It uses plan old markdown. thus it makes it easier to take notes. both comes with syntax highlighting, that's a must for people like us.

### other recommendations:
- Evernote
- Microsoft's Onenote
- Apple notes
- Google keep

## 4 - A good terminal
Teh default terminal comes with mac and windows is not that great. you might want to consider [cmder](https://cmder.app/) incase if you're using windows. [iTerm2](https://iterm2.com/) + [zsh](https://ohmyz.sh/) if you're from MAC world.


## 5 - Raycast - good all in one command prompt (Mac only).
[Raycast](https://www.raycast.com/) is much powerful than the the spotlight search in mac. It has tons of plugins to get started with. It has floating notes, clipboard history etc. you will never regret tying this. 


## 6 - Commandline json processor

If you're dealing with lot of huge json content in your work, [JQ](https://stedolan.github.io/jq/) will be your best friend. you can extract / search / modify json with ease.

## 7 - Incase if you hate cmdline and you have no choice
[navi](https://github.com/denisidoro/navi) can eliminate your pain of knowing lots of cmds. creating your own scripts takes time but if that clubbed with [fzf](https://github.com/junegunn/fzf) it can do amazing things. It also comes with lot of [plugins](https://github.com/denisidoro/cheats) to deal with common tools like git, aws, azure database etc.

## 8 - Postman - API testing
[Postman](https://www.postman.com/) is a powerful API testing and development tool that makes it easy to create, test, and document APIs. With Postman, you can send requests and receive responses from APIs, create automated tests, and generate documentation for your APIs. It also provides a user-friendly interface for managing and organizing your APIs, making it a must-have tool for developers working with APIs. 

## 9 - Docker
Now a days docker is standard tool setting up dev environment. Your application might be using different different version of sdks. each might have it's own environment etc. handling these via docker makes it easy for everyone in your team to have a setup which will work out of the box.

## 10 - Database viewer
Most of us will deal with databases in our day to day life. having a good database viewer will save you tones of time. [dbeaver](https://dbeaver.io/) is an all in one database tool that can you help you write / execute queries and view results. it supports wide range of databases like MySQL, PostgreSQL, SQLite, Oracle, DB2, SQL Server, Sybase, MS Access, Teradata, Firebird, Apache Hive, Phoenix, Presto, etc.
