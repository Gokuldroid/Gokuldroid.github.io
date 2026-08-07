---
path: scope-is-taken-not-granted
tags:
  - "thinking principles"
  - "organizations"
  - "career"
date: 2026-07-21T07:30:00.000Z
title: "Scope Is Taken, Not Granted"
render_in_place: false
categories:
  - "thinking"
related:
  - "cookie-licking"
  - "glue-work"
---

> Promotion systems reward people already operating at the next level — and next-level work is almost never handed down, so waiting to be given it is waiting forever.

## Promotion is a lagging indicator

The single biggest misconception about big-tech promotion: that it works like school. Do assigned work well, get graded, advance. It doesn't. Promotion committees don't ask "is this person ready for the next level?" They ask "has this person *already been operating* at the next level, sustainedly, for the last two-plus cycles?" The promo packet is not a request for opportunity — it's evidence collection for something that already happened. Your manager isn't arguing you *could* do senior work; they're presenting proof that you *have been doing* senior work, repeatedly, without being told to.

This inverts the naive strategy completely. If promotion certifies past behavior, then the work of getting promoted happens entirely before the packet exists. And if the packet requires next-level scope as evidence, you need to have next-level scope *before* anyone officially owes it to you. Which raises the obvious question: who gives it to you?

Nobody. That's the whole point.

## Why scope isn't granted

Managers allocate work by demonstrated capability, because that's the safe allocation. A design doc for a critical system goes to the person who has written design docs before. The cross-team migration goes to the person who has coordinated across teams before. This isn't malice or gatekeeping — it's risk management. A manager who hands a high-stakes design to someone with no design track record is betting their own credibility on an unknown.

The result is a catch-22 that traps technically strong engineers for years: you can't get next-level work without having done next-level work. If you're waiting for your manager to say "here, lead this initiative," you're waiting for them to take a risk the incentive structure punishes them for taking. Meanwhile, the engineers who *do* get promoted seem to mysteriously "already have" senior scope. They weren't given it. They picked it up.

The escape from the catch-22 is self-initiated scope. Find a problem that satisfies three conditions: it **matters** (real cost to the org if unsolved), **nobody owns it** (it falls between team charters, or everyone complains and nobody acts), and it's **visible at the level you're targeting** (people at that level would notice it being solved). Then start solving it. Write the design doc nobody asked for. Organize the cross-team effort that has no owner. Fix the flaky build everyone has muted alerts for. You don't need permission to solve an unowned problem — you need a first artifact.

Unowned problems are the free real estate of scope. This distinction is load-bearing: taking scope that someone *owns* is a turf fight, and you'll lose it or bleed for it. Taking scope that *nobody* owns is, by definition, leadership — there is no one to fight, only a vacuum to fill. And when you claim it, claim it honestly: announce it publicly, with delivery intent and a date ("I'm going to drive X; first doc out by the 15th"). That's the opposite of [Cookie Licking: Claiming Work Without Doing It](/posts/cookie-licking/) — a claim backed by delivery is ownership; a claim backed by nothing is sabotage. The public claim also does double duty as a commitment device and as the visibility you'll need later.

## How to take scope well

1. **Inventory the unowned.** List everything your team or org complains about that has no name attached. Recurring incident classes, missing tooling, undocumented systems, cross-team friction, the onboarding that takes six weeks. These are lying on the ground.
2. **Filter for level-visibility.** Ask: would the people who calibrate the level I want *see* this? A problem can be real and invisible. Solving it earns gratitude, not evidence.
3. **Produce an artifact fast.** A one-page problem statement beats three weeks of hallway advocacy. The doc nobody asked for is the classic move because it converts an opinion into an object others can rally around — and it timestamps your claim.
4. **Claim publicly with a date.** In the team channel, in sprint planning, in a doc header. Honest claiming, not licking.
5. **Recruit rather than hoard.** Next-level scope usually means work bigger than one person. Pulling others in isn't diluting your credit — coordinating others *is* the evidence.

Concrete cases:

- *The engineer whose team has no design culture.* Nobody will assign them a design doc because no one writes them. Counter-move: pick the next non-trivial feature, write a two-pager unprompted, circulate it before implementation. After two or three, they're "the person who does designs."
- *The engineer blocked by a neighboring team's flaky API, like everyone else.* Everyone complains; nobody owns it. Counter-move: document the failure modes, propose a contract test suite, get both leads to a 30-minute meeting. Congratulations — that's cross-team scope no one handed over.
- *The engineer whose manager keeps giving them well-scoped tickets.* Counter-move: keep delivering the tickets, and explicitly ask, "if I drive X to completion, is that senior-level scope?" — then take X on top.

## Calibration and cautions

**One notch up, not three.** Take scope slightly beyond your current level, not staff-level moonshots. A failed overreach is worse than no attempt — it manufactures evidence for "not ready" and makes your manager gun-shy about the *next* stretch.

**Validate the target with your manager.** Before investing months, ask directly: "if I drive X to completion, does that count as [level] scope?" This does two things. It prevents you from pouring a year into work the committee will shrug at, and it enlists your manager as a witness — they agreed in advance that this was the bar, so when you clear it, the narrative is already written.

**Scope-on-top, not scope-instead.** The fastest way to lose a promo is dropping your day job to chase glory. Committed work slipping while you moonlight on an initiative reads as "can't handle current level," which is fatal. Taken scope is funded out of surplus — efficiency gains, ruthless prioritization, small consistent time boxes — never out of commitments.

**Beware effort-heavy, level-invisible scope.** Some unowned work is unowned because it's [Glue Work: The Invisible Work That Doesn't Promote You](/posts/glue-work/) — endless coordination, meeting notes, release wrangling that keeps the org alive but never appears in a promo packet. It consumes exactly the surplus you needed for visible scope. Check before committing: does work like this show up in the promoted-person stories at my target level? If not, either negotiate explicit credit for it or leave it on the plate.

**Mind the mindset shift underneath all of this.** At junior levels you're evaluated on how well you complete assigned work. From senior onward you're evaluated on *what you chose to work on* — judgment about where to spend yourself is the actual competency being assessed. Waiting for assignment isn't just slow; it's failing the exam question itself. The scope selection *is* the test.

## Diagnostic test

If your promotion case had to be written today, how many bullet points describe work nobody assigned you — if the answer is zero, the packet isn't late, it's empty.
