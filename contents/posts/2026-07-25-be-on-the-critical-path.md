---
path: be-on-the-critical-path
tags:
  - "thinking principles"
  - "organizations"
  - "career"
date: 2026-07-25T07:30:00.000Z
title: "Be on the Critical Path"
render_in_place: false
categories:
  - "thinking"
related:
  - "the-internal-transfer-market"
---

> The same engineer, with the same skill and effort, has wildly different career outcomes depending on whether their work sits on the org's critical path or its periphery.

Your ceiling is set before you write a line of code. It's set by where your team sits relative to what leadership actually cares about. Two engineers of identical ability, working identically hard, can end up years apart in level and compensation purely because one worked on the flagship service and the other maintained an internal tool. This isn't unfair in a way you can appeal — it's structural, and the only move is to understand it and position accordingly.

## The two territories

Every org has a critical path: the products and systems that leadership's own goals depend on. The VP's OP1 narrative, the SVP's commitments, the revenue line the CEO reports on — trace those backward through dependencies and you get a graph. Teams on that graph are on the critical path. Everything else is periphery.

Periphery isn't a synonym for "bad work." It includes internal tools nobody above L8 knows exist, maintenance of systems already scheduled for sunset, and experimental bets with no executive sponsor. Some of the best engineering in the company happens there. It just doesn't count the same way — and knowing that distinction is the whole game.

The uncomfortable part: the boundary is invisible from inside the codebase. The peripheral tool has real users, real technical challenges, real oncall. Nothing about the day-to-day work tells you which territory you're in. You have to look up, not down.

## Mechanics

**Impact is denominated in the org's currency.** "Improved p99 latency 40%" on the flagship service is a promo bullet that writes itself; every reviewer knows the service, and the number translates directly into something leadership tracks. The identical achievement on a peripheral tool is trivia — the promo committee has to be told what the tool is before they can be told why the number matters, and explanation is where impact goes to die.

**Visibility flows down the critical path.** Leaders review what they depend on. If your system is in the VP's dependency graph, the VP reads your operational reviews, sees your name on the design doc, notices when your launch lands. Being reviewed by leaders IS the opportunity — that's where airtime, sponsors, and reputation come from. Peripheral teams don't get harder reviews; they get no reviews, which is worse. You can't impress people who never look at you.

**Resourcing follows the path.** Critical-path teams get headcount, budget, and the benefit of the doubt when they slip. Peripheral teams get "do more with less" and a smaller team every planning cycle. This compounds: fewer people means more grind per person, which means less time for the visible, level-defining work.

**Risk is asymmetric.** When layoffs or deprioritization come, peripheral teams are the buffer. Nobody cuts the system the SVP's commitments run through. The internal tool with three happy teams as customers gets "consolidated" first, however well-built it is.

## Why strong engineers drift peripheral

The trap catches strong engineers specifically, through two doors.

**Intellectual interest.** The compiler-adjacent tooling, the elegant build system, the clever internal framework — these are genuinely more interesting problems than shaving milliseconds off a checkout flow. Strong engineers choose problems the way they were trained to: by technical depth. The org rewards a different axis entirely.

**Comfort.** Off the critical path there's less pressure, fewer escalations, no VP breathing down your launch date. That's a real quality-of-life benefit, and it's fine to want it — as long as you know you're buying it with career velocity.

The interesting-but-peripheral trap is dangerous precisely because the work is engaging. You don't feel stuck; you feel absorbed. Three years pass pleasantly and then a promo cycle or a re-org makes the position brutally legible. To be honest about the tension: sometimes cool work is worth more to you than career progression, and that's a legitimate trade. The failure mode isn't making that trade — it's making it without knowing you made it.

## Assessing your position

Three questions, answerable in an afternoon:

1. **Does your system appear in your VP's OP1 or planning narrative?** Not "could be connected to it with three sentences of explanation" — appears, by name. If you've never read that narrative, that's your first task.
2. **When your system breaks, who notices and how fast?** A sev on the critical path pages other teams within minutes and shows up in a leadership review. A sev on the periphery gets a ticket that ages quietly. The blast radius of your outages is an honest measure of your importance.
3. **Are you a dependency or a consumer?** If other teams' committed goals list your team as a dependency, you're on the path. If your roadmap exists to serve teams who could live without you, you're not.

## Moves

**When choosing teams or projects, weight path-position explicitly.** Put it in the decision alongside tech stack and manager quality. "How interesting is this?" and "does anything leadership cares about depend on this?" are separate questions; answer both before you commit.

**If you're peripheral, connect your work to the path.** This is the honest version of translating infra into business terms: don't just relabel the same work, actually integrate it. Get your tool adopted by a critical-path team so their commitments depend on it. Reframe your roadmap around their bottlenecks. If your system becomes a load-bearing dependency of the flagship, you've moved onto the graph without changing desks.

**If you can't connect it, transfer.** Internal transfers are cheap relative to what peripheral years cost you. Target teams whose systems appear in planning narratives. Your skills carry; your position doesn't.

**Re-check periodically.** Re-orgs move the path. Yesterday's flagship is tomorrow's maintenance mode, and a strategic pivot can turn your peripheral bet into the new center — or vice versa. The assessment above isn't a one-time exercise; run it every planning cycle and after every re-org.

## Diagnostic test

If your service went down for a day, would your VP hear about it before you had a chance to tell them?
