---
path: java-internals-1
tags:
  - Java
  - JDK
  - ArrayList
date: 2019-06-17T18:21:41.620Z
title: 'Java internals : part - 1'
---

Have you came across this meme?
<img src="/assets/blog/java-internals/frontend_vs_backend.png" alt="native-logger" style="width:100%">
<br>
<br>
>We could say this as **backend developer - public api - source code**.

We have a rich set of collections and public api in java. We don't need to know the internals of those collections and API in our daily life. But there is a beauty in the internals of Java API's. Here are some of the things I found in the internals of Java's ArrayList code.I assume that you already about ArrayList and the basics about Java collections.

In this article, I am going to talk about [ArrayList.java](https://github.com/openjdk/jdk13/blob/1e8806fd08aef29029878a1c80d6ed39fdbfe182/src/java.base/share/classes/java/util/ArrayList.java).

```java
//Line : 189
public class ArrayList<E> extends AbstractList<E>
        implements List<E>, RandomAccess, Cloneable, java.io.Serializable
{
```

The first thing that caught my eyes is **RandomAccess** interface. It's just an **empty** interface without any methods or code. It is used just to denote the underlying collection is randomly accessible (Denotes any element of the collection can be accessed at a constant time).

----

```java
// Line : 137
transient Object[] elementData;
```
Wow!. ArrayList is nothing but plain array internally. ArrayList is just a wrapper on the array. We can write own simple ArrayList. But that might not be performant. But it is always a good thing to try.

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
        // replace with an empty array.
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
// Line: 197
public void trimToSize() {
  modCount++;
  if (size < elementData.length) {
      elementData = (size == 0)
        ? EMPTY_ELEMENTDATA
        : Arrays.copyOf(elementData, size);
  }
}
```

The first usage of **modCount++**. we will be seeing these line more often in this source code. There is a reason for incrementing this variable. If you know the reason already, kudos to you ;-). If you don't know this already. Search for the similar lines in the source code. There is a similarity among the methods which has this line. I will tell you why at the end.

---

```java
// Line : 287
int indexOfRange(Object o, int start, int end) {
    Object[] es = elementData;
    if (o == null) {
        for (int i = start; i < end; i++) {
            if (es[i] == null) {
                return i;
            }
        }
    } else {
        for (int i = start; i < end; i++) {
            if (o.equals(es[i])) {
                return i;
            }
        }
    }
    return -1;
}
```

Why they are storing elementData in local variable? any guesses?. One things I can find is, local variable lookup is faster than class variable lookup. Might be there are some other reasons.
<br/>
o.equals(es[i]), es[1].equals(o). Is it equal?. Why they didn't use the later one?. Any thoughts?. 

For example, we can have something like this,

```java
ArrayList<Demo> vals = new ArrayList<>();
vals.put(new Demo()); //You know this already.
vals.put(new DemoChild()); // You might know this as well already. (DemoChild is inherited from Demo). 
```

When we have a custom equals, Implementation, we might be in the situation that, demo.equals(demoChild) is true and demoChild.equals(demo) is false. They let us decide on the implementation details if we have custom equal function.

----
Here comes the prodigal son.
```java
private void checkForComodification(final int expectedModCount) {
    if (modCount != expectedModCount) {
        throw new ConcurrentModificationException();
    }
}
```

I asked about modCount++ before right. All the methods increments modCount that mutate the ArrayList in some manner. In a multi-threaded environment, to ensure all the methods are [reentrant](https://en.wikipedia.org/wiki/Reentrancy_(computing)), we check for modCount in some places.

For example,

```java
public int hashCode() {
    int expectedModCount = modCount;
    int hash = hashCodeRange(0, size);
    checkForComodification(expectedModCount);
    return hash;
}
```

hashCodeRange calculation is a long process, By that time some other thread might modify the content of the ArrayList. To ensure this method doesn't return invalid hasCode, at the end of long computation, we are checking for modCount is same as expectedModCount. If that's different the content is modified by another thread and the result that we computed is invalid. In such cases, this will throw **ConcurrentModificationException**.

-----

Comment below if you find this useful or requires any modification in the article :-).