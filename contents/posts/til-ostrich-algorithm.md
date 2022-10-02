---
path: til-ostrich-algorithm
tags:
  - algorithm
  - ostrich ostrich
  - programming
date: 2022-10-02T07:58:25.000Z
title: Ostrich algorithm
render_in_place: true
categories:
  - today I learned
  - algorithm
---
With ever growing tech debts in any software products, sometimes we are overwhelmed with the number of backlog  items. let's say we have a email validation in website during sign-up. we might want to do uniqueness and email format and max length of email according the RFC standard. we can only prevent case one by invoking backend. but we can prevent user inputting case two and three with plain javascript code. even if we forgot to add length validation, we will validate the email ownership by sending a mail to the inputted email. at worst case we will send invite link to invalid mail. according to wikipedia,

> the ostrich algorithm is a strategy of ignoring potential problems on the basis that they may be exceedingly rare. It is named after the ostrich effect which is defined as "to stick one's head in the sand and pretend there is no problem". It is used when it is more cost-effective to allow the problem to occur than to attempt its prevention.


we can very well ignore the length validation since, anyways it will be validated in some other means. although email address RFC standard most likely won't change, maintaining the RFC standard based validation in our code is still and overhead. we can be `ostrich` in this case and pretend there is no problem.