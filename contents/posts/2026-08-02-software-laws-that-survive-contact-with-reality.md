---
path: software-laws-that-survive-contact-with-reality
tags:
  - "thinking principles"
  - "software development"
  - "engineering"
  - "operations"
date: 2026-08-02T07:30:00.000Z
title: "Software Laws That Survive Contact With Reality"
render_in_place: false
categories:
  - "thinking"
related:
  - "own-the-postmortem"
  - "the-hero-loop"
  - "the-last-ten-percent"
---

Software systems inherit the incentives, communication paths, and shortcuts of the people who build them. The most useful engineering laws are therefore less about syntax than about how systems age, fail, and surprise us.

## Chesterton's Fence

> Don't tear down a fence until you know why it was put up.

### Principle

If you come across a rule, process, or structure that seems pointless or stupid, resist the urge to immediately remove it. The person who built it probably had a reason — even if that reason is now obsolete, forgotten, or badly documented. The correct sequence is: understand why it exists, *then* decide whether it still applies. Removing something before understanding its original purpose means you can't tell whether you're clearing away obsolete cruft or quietly disabling a safeguard nobody remembers is load-bearing.

This isn't an argument for never changing anything — plenty of fences genuinely should come down. It's an argument against the confidence of "this looks dumb, therefore it is dumb." That confidence is often just a failure of information, not a correct read on the world.

### When it applies

- Inheriting a legacy codebase, process, or org structure and wanting to "clean it up"
- A new hire's instinct to immediately flag "this makes no sense" — investigate before removing
- Simplification efforts, deregulation, or process removal in general
- Any time the stated justification for a rule seems weak but the rule has survived a long time anyway

### Example

A new engineer inherits a service with a strange retry-with-3-second-delay loop that looks like obvious over-engineering. They rip it out to simplify the code. Two weeks later, a downstream dependency's rate limiter starts rejecting requests in bursts — the delay existed specifically to avoid tripping it. Nobody had documented why; it just worked, so it stayed, until it didn't.

## Codebase Drag

> Technical debt is what's wrong with the code. Codebase drag is what it costs your team to work in it anyway.

### Principle

Slowness in engineering teams is usually blamed on people — but the invisible overhead of working in a degraded codebase is often the real cause. Drag is the gap between how long a task *should* take and how long it *actually* takes because of the codebase's accumulated friction.

### When to apply

- When an engineering team is consistently slower than expected and leadership is reaching for people-based explanations (reorgs, hiring, firing).
- Before adding process on top of a team that's already struggling — check if the environment itself is the bottleneck.

### Example

A CSV export feature: one day of real work, one full week to ship. The extra four days were spent understanding existing code well enough to change it safely. Leadership saw a slow team; the team was just paying the drag tax.

*Source and further reading: [Why Your Engineering Team Is Slow (It's the Codebase, Not the People)](https://piechowski.io/post/codebase-drag-audit/) by Ally Piechowski.*

## Conway's Law

> Your software will mirror your org chart, whether you want it to or not.

### Principle

Organizations design systems that are copies of their communication structures. If three teams build a compiler, you get a three-pass compiler. This isn't just an observation — it's a force. Fight it or use it intentionally (inverse Conway maneuver: structure your teams to get the architecture you want).

### When it applies

- Designing a new system architecture
- Reorging teams
- Debugging why a system has weird boundaries

### Example

Your API has three inconsistent authentication patterns. Look at the org chart — three different teams built those endpoints. To fix the API, you might need to fix the team structure first.

*Source and further reading: [19 Eponymous Laws Of Software Development](https://haacked.com/archive/2007/07/17/the-eponymous-laws-of-software-development.aspx/) by Phil Haack.*

## Cunningham's Law

> The best way to get the right answer on the internet is to post the wrong one.

### Principle

People are far more motivated to correct a confident, specific, wrong statement than to answer an open-ended question. A vague "does anyone know how X works?" often gets silence, while a confidently wrong "X works like this, obviously" reliably attracts someone who can't resist correcting it — and now you have your answer, faster and more precisely than if you'd asked politely. This works because correction has lower social friction than exposition: it's easier to say "no, actually..." than to construct an answer from scratch, and it satisfies a mild competitive itch that answering a neutral question doesn't.

The ethical version of this isn't "lie to manipulate people" — it's noticing that a specific, falsifiable claim (even a wrong one, offered in good faith as your best guess) draws out more useful expertise than a diffuse question, and structuring requests for help accordingly.

### When it applies

- Asking for technical help — a concrete, falsifiable guess ("I think this is a race condition in X") often gets faster, better responses than "why is this broken?"
- Design docs and RFCs — a strawman proposal invites sharper feedback than an open question
- Debugging in public (Stack Overflow, forums) — showing your (possibly wrong) reasoning gets corrected fast
- Recognizing when someone posts a deliberately provocative take just to get engagement — the mechanism cuts both ways

### Example

A developer stuck on a bug posts "I'm not sure why this is slow" and gets no responses for a day. They rewrite it as "This is slow because the ORM is doing N+1 queries, right?" — technically wrong in the specifics — and within twenty minutes three people jump in to correct exactly which query is the actual problem.

## Four Eyes Rule

> If you have ANY doubt whether what you're about to do is safe, get a second pair of eyes. The reluctance to bother someone is the strongest signal you shouldn't be doing it alone.

### Principle

When performing risky operations (production DB changes, infra modifications, permission changes), the cost of asking someone to watch is near zero. The cost of a solo mistake can be catastrophic. Half the time, you catch the error yourself just by explaining what you're about to do out loud — rubber-ducking for operations.

### When to apply

- Any production operation where you hesitate even slightly.
- Late-night or weekend work — the urge to "just do it quickly" is exactly when you need a second person most.

### Example

An engineering manager with root DB access ran a UPDATE without a WHERE clause at 11pm, wanting to avoid bothering the team. The entire users table was overwritten. Had he Slacked a colleague to watch, he'd have caught the missing WHERE clause while explaining the query.

*Source and further reading: [The unwritten laws of software engineering](https://newsletter.manager.dev/p/the-unwritten-laws-of-software-engineering) by manager.dev.*

## Gall's Law

> A complex system that works evolved from a simple system that worked — a complex system designed from scratch never works and can't be patched into working.

### Principle

You cannot design a working complex system on a whiteboard and build it in one shot. Every complex system that actually functions in the real world got there by starting simple, working, and having complexity added incrementally, with each layer tested against reality before the next was added. If you try to skip that path — designing the "final" complex architecture up front — you get something that looks complete but doesn't actually work, and no amount of patching will fix it, because the failure is structural, not a collection of bugs. The fix, when this happens, is not more patches — it's throwing it out and starting over from something simple that works.

This cuts against the instinct (especially strong in engineering and org design) to plan the full, sophisticated version first "to save time later." The sophistication has to be earned incrementally, through contact with reality, or it's not real sophistication — it's untested guesswork wearing a complex system's clothes.

### When it applies

- Starting a new platform, service, or product and being tempted to design the "complete" architecture before anything ships
- Reorgs that try to install a fully-formed complex structure in one move instead of growing it
- Evaluating why a big-bang rewrite or big-bang migration is failing — check whether it skipped the "simple version that works" stage
- Standards bodies or frameworks that try to anticipate every future need before anyone has used version one

### Example

A team designs a fully generalized, plugin-based microservices platform intended to handle every future use case before writing a single feature that customers use. Eighteen months later it "works" in the sense that it compiles and passes its own tests, but nobody can actually ship a real feature on it without discovering some foundational assumption was wrong. Compare to a team that ships a monolith serving one real use case, then splits out services only as actual scaling pressure demands it — each step tested against real traffic before the next is added.

## Good APIs Age Slowly

> The test of a good API is not elegance — it's whether it still makes sense after requirements shift, new teams adopt it, and someone uses it in ways you never intended.

### Principle

Boring, minimal APIs outlast clever ones. Expose as little as possible — adding later is easy, removing what people depend on is politics and pain. Convenience hides assumptions; magic becomes debugging cost. Model stable domain concepts, not today's frontend shape.

### When to apply

- Designing any interface others will consume — APIs, libraries, SDKs, even internal module boundaries.
- Resisting pressure to "just add one more field" or shape the response to match the current UI.

### Example

A team shapes their API to return exactly what the frontend page needs. Product changes the page six months later. Now the API feels oddly specific to a page that no longer exists, and the backend carries old nonsense forever or begins a painful cleanup.

*Source and further reading: [Good APIs Age Slowly](https://yusufaytas.com/good-apis-age-slowly) by Yusuf Aytas.*

## Maker's Schedule vs. Manager's Schedule

> A meeting doesn't just cost the meeting's duration for someone doing deep work — it changes the mode you're in, like throwing an exception in a program.

### Principle

There are two incompatible ways of using time. The manager's schedule cuts the day into hour-long slots — meetings are cheap because there's always something coming in the next slot regardless. The maker's schedule (programmers, writers, anyone doing deep creative work) needs blocks of half a day or more, because that's barely enough time to get started on something hard. A single meeting on the maker's schedule doesn't cost an hour — it costs the whole side of the day it interrupts, because it breaks a block into two pieces too small to do anything real in, and there's a cascading effect: knowing the afternoon will be broken up makes you less likely to start something ambitious in the morning at all.

The dangerous part is that the two schedules are invisible to each other. People on the manager's schedule (who tend to hold organizational power) unconsciously make everyone resonate at their frequency — booking 30-minute syncs feels free to them and devastating to a maker, and neither party necessarily realizes there's an actual cost being imposed, not just a preference being overridden.

### When it applies

- Scheduling your own day — protect half-day-or-longer blocks for anything that requires sustained thought; don't schedule single-hour "focus time" and expect deep output
- Managing makers — cluster meetings at the boundaries of the day (start/end) rather than scattering them through the middle
- Recognizing why "just a quick 15-minute call" can cost a maker far more than 15 minutes
- Negotiating your own calendar — the cost of a meeting is not its duration, it's the size of the block it destroys

### Example

Paul Graham describes running Y Combinator on the maker's schedule by clustering all "office hours" meetings at the end of the working day, so they compress the day rather than interrupt it — versus the default assumption (since he's an investor) that he operates on the manager's schedule and can take a "grab coffee" meeting anytime, which would in fact blow half a day's work each time.

*Source and further reading: [Maker's Schedule, Manager's Schedule](http://www.paulgraham.com/makersschedule.html) by Paul Graham.*

## Observed Behavior Becomes Dependency

> Software has a nasty habit of turning observed behavior into dependency whether you meant it or not.

### Principle

Once something is visible in an API — a field, a response ordering, a timing pattern — consumers build around it. It doesn't matter if you never promised it. They saw it, it was useful, and now it's part of their mental model. This is why boundary mistakes are so costly: they work just enough for people to rely on them.

### When to apply

- Before exposing any internal detail "just because it's harmless."
- When debating whether a field, behavior, or ordering is part of the contract — if consumers can see it, assume they depend on it.

### Example

A response happens to return items in insertion order because of the current DB implementation. Nobody promised this. A downstream team builds a UI that assumes this ordering. Six months later, a DB migration changes the ordering and breaks their page.

*Source and further reading: [Good APIs Age Slowly](https://yusufaytas.com/good-apis-age-slowly) by Yusuf Aytas.*

## Postel's Law (Robustness Principle)

> Be liberal in what you accept, conservative in what you send.

### Principle

Originally about TCP, but applies everywhere. Accept messy inputs gracefully; produce clean, strict outputs. This makes systems (and people) more resilient and easier to work with. The flip side: being too liberal can hide bugs and create implicit contracts.

### When it applies

- Designing APIs and data contracts
- Receiving feedback or requirements from non-technical stakeholders
- Communication style — interpret charitably, speak precisely

### Example

Your API receives a date field. Accept "2024-01-15", "Jan 15, 2024", and "1705276800" — but always return ISO 8601. Your users will thank you.

*Source and further reading: [19 Eponymous Laws Of Software Development](https://haacked.com/archive/2007/07/17/the-eponymous-laws-of-software-development.aspx/) by Phil Haack.*

## Rollback First, Debug Later

> When production breaks after a deploy, roll back immediately — don't spend an hour proving your change is innocent.

### Principle

The instinct to defend your change ("that's totally unrelated") is ego, not engineering. The correct response to a production incident near a deploy is: revert, stabilize, *then* investigate. The cost of a needless rollback is minutes; the cost of a prolonged investigation during an outage is compounding.

### When to apply

- Any time production degrades shortly after a deployment, no matter how "unrelated" the change seems.
- When you catch yourself building a case for innocence instead of restoring service.

### Example

You deploy a logging change to a service. Minutes later, latency spikes on an unrelated endpoint. Your instinct says "no way." You roll back anyway — latency recovers. Turns out the logging change triggered excessive GC pressure. You'd have found it eventually, but the rollback bought you calm debugging time instead of a live fire.

*Source and further reading: [The unwritten laws of software engineering](https://newsletter.manager.dev/p/the-unwritten-laws-of-software-engineering) by manager.dev.*

## Temporary Is Permanent

> There is nothing more lasting than a temporary fix. "We'll address this later" means "we'll never do it."

### Principle

V2 almost never arrives. Priorities shift, new projects are shinier, and tech debt tickets get buried in the backlog graveyard. Instead of fighting this, acknowledge it: build the simplest solution you're actually happy with. There's a big difference between "simple and limited" and "held together with duct tape."

### When to apply

- When building an MVP or V1 and planning to "clean it up in V2."
- When accepting a hack "just for now" — ask yourself if you'd be okay with this code running unchanged for 3 years.

### Example

A team ships a CSV export with hardcoded column names, planning to make it configurable in V2. Two years later, the hardcoded export is still running, now depended on by 15 downstream consumers who parse those exact column names. The "temporary" format is now a de facto API contract.

*Source and further reading: [The unwritten laws of software engineering](https://newsletter.manager.dev/p/the-unwritten-laws-of-software-engineering) by manager.dev.*

## Test Your Safety Nets

> A backup you've never restored from, or a rollback plan you've never run, is not a safety net — it's a comfort blanket.

### Principle

Safety mechanisms (backups, rollback scripts, disaster recovery plans) decay silently. Infrastructure changes, data grows, permissions shift. The only way to know your safety net works is to exercise it regularly. Knowing it *exists* is not the same as knowing it *works*.

### When to apply

- Before any risky data migration or production change — actually run the rollback, don't just write it.
- Periodically for backups: test the full restore, measure how long it takes, confirm who has permissions.

### Example

A team's database backup "worked" for two years. During an actual outage, they discovered the restore took 6 hours (not the 20 minutes it took when the DB was small) and only one person had the IAM permissions to trigger it — and he was on vacation.

*Source and further reading: [The unwritten laws of software engineering](https://newsletter.manager.dev/p/the-unwritten-laws-of-software-engineering) by manager.dev.*

## The Law of Leaky Abstractions

> All non-trivial abstractions, to some degree, are leaky — and the day they leak, you need the knowledge they were supposed to make unnecessary.

### Principle

Every abstraction is a simplification that hides real complexity underneath — a string library hides memory layout, SQL hides query execution order, a file system hides spinning platters, a car's heater hides the weather. Abstractions let you work faster by not thinking about the layer below. But no abstraction is complete: under some condition, the hidden complexity "leaks" through, and at that moment you can't debug or fix the problem without understanding the very thing the abstraction was supposed to let you ignore.

The uncomfortable implication: abstractions save you time *doing* work, but they don't save you time *learning*, because eventually you need the underlying knowledge anyway. This means that as tools get higher-level and abstractions stack more deeply, becoming a genuinely proficient practitioner gets *harder*, not easier — you now need fluency in the abstraction plus the leaky truth beneath it, on top of whatever's beneath that.

### When it applies

- Choosing how deep to go when learning a new tool, framework, or language — the abstraction will leak eventually, and you'll want the fundamentals ready
- Debugging mysterious slowness or failures in a system built on layers of abstraction (ORMs, cloud services, managed runtimes) — the fix usually requires understanding the layer below the one you're working in
- Hiring or training — someone who only knows the high-level tool will get "stuck in tar" the moment the abstraction leaks; budget for that
- Evaluating a new no-code/low-code/wizard-driven tool — ask what happens on the day it doesn't work as advertised

### Example

TCP is a "magic" abstraction: it guarantees reliable, ordered, uncorrupted delivery on top of IP, which guarantees none of that. Most of the time you can treat TCP as perfectly reliable. But if a cable is physically cut, no abstraction can deliver the packets — and understanding that requires knowing IP is unreliable in the first place, which the abstraction was specifically built to let you forget.

*Source and further reading: [The Law of Leaky Abstractions](https://www.joelonsoftware.com/articles/LeakyAbstractions.html) by Joel Spolsky.*

## Closing principle

None of these laws removes engineering judgment. They tell you where judgment is most likely to be needed before production teaches the lesson more expensively.
