---
path: null-vs-empty
tags:
  - 'NULL'
  - empty
  - programming
date: 2019-06-17T18:21:41.620Z
title: NULL vs Empty
---
I tried to book a ticket in https://www.irctc.co.in. While giving CCV of my debit card (mandatory field), accidentally I gave empty value and proceeded to book a ticket. It threw an error after refreshing the whole page as the validation (or something went wrong) happened in the backend. they might have handled in frontend itself. Because of this, I lost my booking window. They might handle millions of requests per day. but they simply failed at this. It should be a common-sense for a developer to handle NULL vs empty.  To err is human. but repeating history is not acceptable.

I've used a good number of programming languages (Typescript, Java, Kotlin, Ruby, Javascript, Python, C++, C, PHP). There are days I assumed the user is not dumb enough to give empty values for username or password. I haven't developed a real-world software back then. Handling null and empty is always an art. Some programming languages are good at that. Some of them shout like Kotlin 'Yes! we support NULL safety in our language'. I am not going to give you the definition of null. Do some research and fight with your colleagues about NULL vs Empty. You will hear some interesting story. I will throw some snippets from the languages I've used so far. Different languages handle them slightly differently. You will get a better understanding of NULL vs Empty argument once you know about it.

Let's take java first,
(1)
This one won't compile. It will throw an error, saying variable not initialized. Let's deceive the complier.
(2)
Yey!! it got complied. What will be the output of this? Can you guess?.
(3)

Why the compiler let us compile successfully this time?. When that is a local variable compiler will know for sure that is not yet assigned to any value. we can assign values outside of this method, so there is a possibility of non-empty value inside this function. Thus java compiler won't prevent us from compiling. What if we didn't assign any values to these variables and use these variables like this,
(4)

Oops! Here comes the NullPointerException. Now you have some idea about null pointer exception right?. 

Let's move on to Empty,
There is a slight difference between no password was given and an empty password. Take a look at this snippet.
(5)

the output of this will be,
(6)

To get a better understanding of this, take a look at this javascript truth table. What if your password validation just checks against null or undefined, you will be allowing the user to have an empty password. 


weird isn't it?. 

Some programming languages provide safety against some of these issues.

In Java,

But you need to configure tools like FindBugs to get errors and warnings, Can't be better than this?.

Null safety is tied into the language itself. thus provides better support for null safety.
In Kotlin,
(7)

More details, https://kotlinlang.org/docs/reference/null-safety.html

In typescript (Javascript with types),
(8)
In https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html

Did you notice something?. No one provides safety against empty values. Because of this, a lot of frameworks and libraries have utils to check empty value.

Guava(https://guava.dev/releases/19.0/api/docs/com/google/common/base/Strings.html),

Apache (https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/StringUtils.html)

 Ember, 

Lodash(https://lodash.com/docs/4.17.15#isEmpty),

_.isEmpty()

While writing code, keep asking one thing, "Should I handle empty state?". Should a function return null or empty? is a whole new argument, let's save that for another day.
