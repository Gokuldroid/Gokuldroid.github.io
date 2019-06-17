---
path: java-internals-1
tags:
  - Java
  - JDK
date: 2019-06-17T18:21:41.620Z
title: 'Java internals : part - 1'
---

Have you came across this meme?
<img src="/assets/blog/java-internals/frontend_vs_backend.png" alt="native-logger" style="width:100%">
We could say this as **backend developer - public api - source code**.

We have rich set of collections and access methods in java. We don't need to know the internals of those collections and API in our daily life.But there is a beauty in the internals of java API's.Here are the some of the things I found in the internals of java sdk.I assume that you already about ArrayList and the basics about java collections.

In this article I going to talk about [ArrayList.java](https://github.com/openjdk/jdk13/blob/1e8806fd08aef29029878a1c80d6ed39fdbfe182/src/java.base/share/classes/java/util/ArrayList.java).

```java
//Line : 189
public class ArrayList<E> extends AbstractList<E>
        implements List<E>, RandomAccess, Cloneable, java.io.Serializable
{
```

First thing that caught my eyes is **RandomAccess** interface. It's just empty interface without any methods. It is used just to denote the underlying collection is random accessible (Denotes any element of the collection can by accessed at constant time).

----

```java
// Line : 137
transient Object[] elementData;
```
Wow!. ArrayList is nothing but plain array internally. ArrayList is just a wrapper on array.We can write own simple ArrayList. But that might not be performant.But it is always a good thing to try.

----
```java
//Line : 179
public ArrayList(Collection<? extends E> c) {
    elementData = c.toArray();
    if ((size = elementData.length) != 0) {
        // defend against c.toArray (incorrectly) not returning Object[]
        // (see e.g. https://bugs.openjdk.java.net/browse/JDK-6260652)
        if (elementData.getClass() != Object[].class)
            elementData = Arrays.copyOf(elementData, size, Object[].class);
    } else {
        // replace with empty array.
        this.elementData = EMPTY_ELEMENTDATA;
    }
}
```
Well! It's not a bug, It's a feature ;-). Go through the bug [link](https://bugs.openjdk.java.net/browse/JDK-6260652) mentioned in the code. We can see how they track bugs in JDK.

Some elegant code in this snippet,
* Arrays.copyOf - Optimized method to make a copy of an array.
* ```java 
    if((size = elementData.length) != 0) 
    // We could have wrote this as 
    size = elementData.length
    if(size !=0 )
    // But first one is much elegant. When we look into the byte code of these two snippets, there is subtle difference. You can dig into it if you want to learn more about it.
  ```
---
```java
public void trimToSize() {
    modCount++;
    if (size < elementData.length) {
        elementData = (size == 0)
          ? EMPTY_ELEMENTDATA
          : Arrays.copyOf(elementData, size);
    }
}
```

The first usage of **modCount++**. we will be seeing these line more often in this source code. There is a reason for incrementing this variable. If you know the reason already,kudos to you ;-). If you don't know this already. Search for the similar lines in source code.There is a similarity among the methods which has this line.I will tell you why at the end.

---

