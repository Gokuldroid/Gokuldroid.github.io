---
path: the-last-ten-percent
tags:
  - "thinking principles"
  - "organizations"
  - "engineering"
date: 2026-06-17T07:30:00.000Z
title: "The Last Ten Percent"
render_in_place: false
categories:
  - "thinking"
related:
  - "momentum-is-a-system"
  - "the-hero-loop"
  - "translate-infra-to-business"
---

> Ninety percent done counts as zero. Organizations pay out on landed work, not effort — and the reputation that matters most is "give it to her, it will land."

Look at the trail behind most engineering teams: the migration that's 90% complete, the feature sitting behind a flag for six months, the design doc that's been "awaiting final review" since Q2, the new service that runs in parallel with the old one because nobody chased down the last three stragglers. Each of these represents enormous effort. Each is worth approximately nothing.

This is not a moral judgment. It's an accounting fact about how organizations work, and once you see it, it changes how you allocate your time.

## The step function

The intuitive model of project value is linear: 90% of the work delivers 90% of the value. This model is wrong, and it's wrong in a way that destroys careers.

Value is step-functional. Customers experience zero benefit until the switch flips. Leadership experiences zero benefit until they can say "shipped" in their own reporting chain. The old system generates the same operational load, the same on-call pages, the same maintenance tax, right up until the moment it's decommissioned. A migration at 90% means you now operate *two* systems — you've made things worse, not 90% better.

So the real curve looks like this: 90% of the effort has delivered 0% of the impact. All of the payout is concentrated in the last 10%. This is why the last 10% is not a rounding error on the project — it *is* the project, as far as anyone paying you is concerned.

The corollary is brutal for a certain kind of engineer. Three projects at 90% each is not 2.7 projects of delivery. It's zero projects of delivery, plus a growing suspicion that you don't finish things. One project landed, old system deleted, reads as delivery. The math of reputation doesn't sum partial credit.

## The finisher label

There is a small set of reputations worth having in engineering, and "finisher" is near the top. When a leader says "give it to her, it will land," they are expressing something close to the maximum trust an organization can grant an individual contributor.

Here's the mechanism. Your manager, your director, your VP — they have all made commitments up their own chains. Those commitments depend on things actually landing, not on things being 90% done. A finisher reduces their risk. Someone who reliably closes the loop lets a leader make promises confidently, which is why finishers get *sponsored* — pulled into rooms, handed the high-visibility work, named when scope opens up. Sponsorship goes to people who make the sponsor look good, and nothing makes a sponsor look better than a commitment that lands. (This is the mentor-vs-sponsor distinction in action: mentors give advice; sponsors spend their credibility on you, and they only spend it on sure things.)

The inverse label is just as sticky. A trail of 90% corpses reads as flakiness, and reputation forms early and updates slowly. The first two projects you abandon at the finish line will color how your next five are perceived, regardless of how good the code was.

There's a compounding cost too. Every unfinished thing keeps consuming attention — the flag that needs babysitting, the dual-write path that breaks in weird ways, the doc people keep asking about. Meanwhile each new start divides your focus further. Shiny-object syndrome isn't just a personal failing; it's a portfolio strategy that mathematically guarantees you deliver nothing while working constantly.

## Why the last 10% is hard

Be honest about why the corpses pile up: the last 10% is the least interesting part of the work, on two axes at once.

First, it's schlep-shaped. Chasing the long tail of stragglers who haven't migrated. Writing the migration guide. Handling the edge cases that only three customers hit. Deleting the old code and untangling everything that secretly depended on it. Updating the runbooks. This is low intellectual reward and high organizational value — exactly the combination engineers are trained to avoid noticing (schlep blindness). The design phase felt like thinking; the last 10% feels like chores.

Second — and this is the part technically strong engineers most underestimate — the last 10% is where the *political* work concentrates. Getting seven other teams to actually migrate off the old API is not a code problem. It's an influence problem: finding the right owner on each team, making the ask, making it easy, escalating when needed, and following up relentlessly until the last dependency is gone. No amount of elegant engineering substitutes for that grind. Engineers who define their job as "writing the code" stall precisely here, because the remaining work isn't code.

## Practices

**Define done as old-thing-deleted, not new-thing-working.** And say it out loud at kickoff: "This project is done when the old system is decommissioned and its code is removed." This single sentence reframes the whole effort, sets expectations with your manager, and inoculates you against declaring victory at 90%.

**Audit before you start.** Before picking up anything new, ask: what am I currently leaving at 90%? If the answer is "two things," the new project should almost always lose to finishing one of them. Landing something you've already sunk 90% of the effort into is the cheapest impact available anywhere on your calendar.

**Publicize landings, specifically.** The work doesn't speak for itself; you have to. And the brag-doc entry that matters is not "built X" — it's "landed X; old system decommissioned; N teams migrated; on-call load down Y%." Deletion and decommissioning are the proof of landing. Report them like the achievements they are.

**Treat inherited corpses as discounted opportunities.** When you're handed someone else's 90% project, your instinct says "cleanup duty." Recalculate: 90% of the effort is already sunk, all of the step-function value is still unclaimed, and the organization has watched the thing stall — which means finishing it is visible heroism at a fraction of the usual cost. Some of the fastest reputation gains available are other people's unfinished migrations.

## Diagnostic test

For any project you're "mostly done" with, ask: **if I got hit by a bus tomorrow, would anyone experience the value of this work?** If the answer is no, you are at zero — finish it before you touch anything new.
