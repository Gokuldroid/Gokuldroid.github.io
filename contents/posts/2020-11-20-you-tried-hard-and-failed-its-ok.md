---
path: you-tried-hard-and-failed-its-ok
tags:
  - personal, motivation, outliers
date: 2020-11-20T03:41:38.083Z
title: You tired hard and you gave your best! still you failed and it's ok!
categories:
  - personal
---
I was reading a book called **Outliers** . that made me retrospect my life and the role of luck in my life. There are a lot of factors for one's success, even with a better personal life with some support from others, one can have an edge in your professional life. There are things we can't control in your life. For example, our birthplace or the time. You and the person who works in a different country doing the same job might be earning and getting more rewards than you. It doesn't mean that you're doing less work and you're not capable. you're just in the wrong place. To be successful, one has to be in the right place at the right time. 

As a developer, I want stats or exact numbers, not just the stories. So, I decided to simulate the role of luck in an interview. I assumed luck just plays 5% in the interview selection and wanted to compare with the interview result that's purely dependant on talent.

**Simulation process:**

1.There will be 500 persons with uniformly distributed random luck and talent on a scale of 0 - 100.

2.There are two scores with/without luck. 

```java
public double score() {
            return getTalent();
        }

// assuming luck plays just 5 percent in your life
public double scoreWithLuck() {
    return getTalent() * 0.95 + getLuck() * 0.05;
}
```

3.I will select 10 percent of total people based on these two scores as a two separate selection group.
4.compare the selection and find out how much luck can make a difference in the final result.

To my surprise, even **5%** luck made a difference up to **24%** when I run the simulation ten times. To give you some idea, if a hundred people are getting interviewed for ten positions, you might be one of two persons who get rejected because of luck.

But if you do the interview twice, your chance of getting rejected because of luck is **24% of 24%** (**5%**). So, try one more time and prove **luck means nothing in your life**.


```java
import java.util.Comparator;
import java.util.List;
import java.util.PriorityQueue;
import java.util.Random;
import java.util.stream.Collectors;

public class Luck {
    public static void main(String[] args) {
        Random random = new Random();
        int size = 500;
        int pickSize = 50;
        PriorityQueue<Person> withoutLuck = new PriorityQueue<>(Comparator.comparingDouble(Person::score).reversed());
        PriorityQueue<Person> withLuck = new PriorityQueue<>(Comparator.comparingDouble(Person::scoreWithLuck).reversed());

        for (int i = 0; i < size; i++) {
            Person person = new Person();
            person.setId(i);
            person.setTalent(random.nextInt(101));
            person.setLuck(random.nextInt(101));
            withLuck.add(person);
            withoutLuck.add(person);
        }

        List<Integer> selectedWithLuck = withLuck.stream().map(Person::getId).limit(pickSize).collect(Collectors.toList());
        List<Integer> selectedWithoutLuck = withoutLuck.stream().map(Person::getId).limit(pickSize).collect(Collectors.toList());
        List<Integer> blindLuck = selectedWithLuck.stream().filter(id -> !selectedWithoutLuck.contains(id)).collect(Collectors.toList());
        System.out.println("with luck");
        System.out.println(selectedWithLuck);
        System.out.println("========================");
        System.out.println("without luck");
        System.out.println(selectedWithoutLuck);
        System.out.println("========================");
        System.out.println("blind selection");
        System.out.println(blindLuck);
        System.out.println("=========================");
        System.out.println("blind luck %");
        System.out.println(((double) blindLuck.size() / (double) pickSize) * 100);
    }


    public static class Person {
        int id;
        double talent;
        double luck;

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public double getTalent() {
            return talent;
        }

        public void setTalent(double talent) {
            this.talent = talent;
        }

        public double getLuck() {
            return luck;
        }

        public void setLuck(double luck) {
            this.luck = luck;
        }

        public double score() {
            return getTalent();
        }

        // assuming luck plays just 5 percent in your life
        public double scoreWithLuck() {
            return getTalent() * 0.95 + getLuck() * 0.05;
        }

    }
}
```