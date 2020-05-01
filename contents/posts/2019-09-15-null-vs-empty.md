---
path: null-vs-empty
tags:
  - 'NULL'
  - empty
  - programming
date: 2019-09-14T18:21:41.620Z
title: NULL vs Empty
categories:
  - programming
---
<img src="/assets/blog/null-vs-empty/null-vs-empty-cover.jpeg" alt="null vs empty" style="width:100%">
<br/>
<br/>


I tried to book a ticket in [irctc](https://www.irctc.co.in). while giving CCV of my debit card **(*mandatory field)**, accidentally I gave empty value and proceeded to book a ticket. It threw an error after refreshing the whole page as the validation happened (or something went wrong) in the backend. they might have handled in frontend itself. Because of this, I lost my booking window. They might handle millions of requests per day. but they simply failed at this. 

> It should be a common-sense for a developer to handle null vs empty. To
> err is human. but repeating history is not acceptable.

I've used a good number of programming languages (Typescript, Java, Kotlin, Ruby, Javascript, Python, C++, C, PHP). There are days I assumed the user is not dumb enough to give empty values for username or password. I haven't developed a real-world software back then. Handling null and empty is always an art. Some programming languages are good at that. Some of them shout like Kotlin **'Yes! we support null safety in our language'**. I am not going to give you the definition of null or empty. Do some research and fight with your colleagues about null vs Empty. You will hear some interesting story. I will throw some snippets from the languages I've used so far. Different languages handle them slightly differently. You will get a better understanding of null vs Empty argument once you know about it.

Let's take java first,
```java
public void demo(String[] args) {  
	Integer count;  
	int countInner;  
	System.out.println(count);  
	System.out.println(countInner);  
}
```
<br/>

This one won't compile. It will throw an error, saying variable not initialized. Let's deceive the complier.
```java
private Integer count;  
private int countInner;  
public void demo(String[] args) {  
	System.out.println(count);  
	System.out.println(countInner);  
}
```
<br/>

Yey!! it got complied. What will be the output of this? Can you guess?.
```java
null  
0
```

<br/>

Why the compiler let us compile successfully this time?. When that is a local variable compiler will know for sure that is not yet assigned to any value. we can assign values outside of this method, so there is a possibility of non-empty value inside this function. Thus java compiler won't prevent us from compiling. What if we didn't assign any values to these variables and use these variables like this,
```java
private static Integer count;  
public static void main(String[] args) {  
	System.out.println(count.toString());  
}
```  

<br/>

Oops! Here comes the NullPointerException. Now you have some idea about null problem right?.

Let's move on to Empty,

There is a slight difference between no password was given and an empty password. Take a look at this snippet.
```javascript
function validPassword(password) {  
	return password != null;  
}  
  
function validPassword2(password) {  
	return password != undefined;  
}  
  
function validPassword3(password) {  
	return password !== undefined;  
}  
  
console.log(validPassword(''));  
console.log(validPassword(null));  
console.log(validPassword2(''));  
console.log(validPassword2(null));  
console.log(validPassword3(''));  
console.log(validPassword3(null));
```
<br/>

the output of this will be,
```javascript
true  
false  
true  
false  
true  
true
```  

<br/>

To get a better understanding of this, take a look at this javascript truth table. What if your password validation just checks against null or undefined, you will be allowing the user to have an empty password.
##### For, == comparison
<br/>
<img src="/assets/blog/null-vs-empty/truth-table-double-eq.png" alt="javascript comparison table" style="width:100%">

<br/>
<br/>

##### For, === comparison

<br/>

<img src="/assets/blog/null-vs-empty/truth-table-triple-eq.png" alt="javascript comparison table" style="width:100%">


weird isn't it?. (Javascript is always weird ;-))


Some programming languages provide safety against some of these issues.


<br/>

##### In Java,
```java
@NonNull  
public static String longToIp(@NonNull Long ip) {  
    return ((ip >> 24) & 0xFF) + "."  
		  + ((ip >> 16) & 0xFF) + "."  
		  + ((ip >> 8) & 0xFF) + "."  
		  + (ip & 0xFF);   
}
```

But you need to configure tools like FindBugs to get errors and warnings, Can't be better than this?. In some languages null safety is tied into the language itself. thus provides better support for null safety.


<br/>

##### In Kotlin,
```kotlin
var a: String = "abc"  
a = null // compilation error
```

More details about [kotlin null safety](https://kotlinlang.org/docs/reference/null-safety.html), 


<br/>

##### In typescript (Javascript with types),
```typescript
let name: string;  
name = null; // compilation error
```

More details about [typescript null safety](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html)

Did you notice something?. No one provides safety against empty values. Because of this, a lot of frameworks and libraries have utils to check empty value.

 - [Guava](https://guava.dev/releases/19.0/api/docs/com/google/common/base/Strings.html)
  
 - [Apache](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/StringUtils.html)
   
 - [Ember](http://api.emberjs.com/ember/3.10/functions/@ember%2Futils/isEmpty)
   
 - [Lodash](https://lodash.com/docs/4.17.15#isEmpty)

While writing code, keep asking one thing, **"Should I handle empty state?"**. Handling null and empty state everywhere is also bad. As a rule of thumb, Don't use optional values in the place of mandatory values. If we strictly need a value, throw an error early on, if it null. Please keep this in mind **'there might be a stupid person like me who never reads the instructions'**.

**"Should a function return null or empty?"**  is a whole new argument, let's save that for another day.