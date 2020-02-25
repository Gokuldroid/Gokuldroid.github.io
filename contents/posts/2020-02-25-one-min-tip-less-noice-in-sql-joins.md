---
path: one-min-tip-less-noice-in-sql-joins
tags:
  - MySql
  - productivity
date: 2020-02-25T17:29:40.001Z
title: 'One minute tips : Less noice in SQL joins'
---
Assume that we need to join two tables based on some condition. For example,

SELECT users.id, accounts.name from users, accounts where users.account_id = 1 AND users.account_id = accounts.id


SELECT users.id, accounts.name from users LEFT JOIN accounts on accounts.id = users.account_id where users.account_id = 1

Both queries do the same. we are saving 3 words in the first query (this might help you to save 9 secs for every join you make).

Check the query plan for both of these queries, It will be same. I’ve checked this with MySql and Pgsql. I hope this will work in most of the DBMS systems. Let me know if you have anything like this.
