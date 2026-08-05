---
path: the-work-doesnt-speak-for-itself
tags:
  - "thinking principles"
  - "organizations"
  - "career"
date: 2026-07-26T07:30:00.000Z
title: "The Work Doesn't Speak for Itself"
render_in_place: false
categories:
  - "thinking"
related:
  - "cookie-licking"
  - "keeping-judgment-in-the-ai-loop"
  - "making-ideas-find-their-audience"
---

> Performance systems don't evaluate your work. They evaluate the written, remembered, retellable record of your work — and someone has to build that record.

## The myth

The meritocracy story engineers tell themselves goes like this: do excellent work, and the system will notice. Talking about your work is a distasteful substitute for doing it; the truly good people just ship and get rewarded.

This story fails on a simple mechanical fact: **nobody is watching**. Your manager sees maybe 10% of what you do, filtered through standups and tickets. Your skip-level sees 1%. The calibration committee that actually decides your rating sees 0% — they see *documents*. Promo and performance systems don't run on work. They run on evidence: written, remembered, retellable evidence, assembled months after the fact by people who observed a fraction of what happened.

The system isn't corrupt. It's lossy. Treating a lossy channel as if it were lossless is the mistake.

## The mechanics

**Credit decays fast.** The half-life of an unwritten accomplishment is weeks. The migration you pulled off in April is invisible at December calibration unless it exists in writing somewhere — because your manager, who is reconstructing a year of your work from memory in one stressful evening, will remember roughly the last two months plus anything that caught fire. Written wins don't decay. A dated paragraph with metrics survives eight months intact; a memory of "Priya did something good in spring" does not.

**Evaluators sample; they don't observe.** Assessment works like statistical sampling from a tiny, biased window: the meetings your manager attended, the incidents that paged leadership, the demos that happened to land. Whatever falls in the sample gets weighted as if it were the whole. This is why the engineer who does 80% of the invisible glue work can rate below the one who did 20% of the work in front of the right audience. It's not injustice being applied deliberately — it's an inference from bad data. You control the data.

**Whoever narrates the work owns it.** Organizational memory attaches credit to the person who *told the story*, not the person who did the thing. If you quietly fix the flaky deploy pipeline and someone else mentions in the leadership channel that "deploys are green now," their name is now adjacent to the win. This is the flip side of [Cookie Licking: Claiming Work Without Doing It](/posts/cookie-licking/): just as loudly claiming future work reserves it, undocumented finished work is unclaimed territory. A contribution with no narration attached is claimable by whoever narrates first.

## Concrete cases

**The invisible migration.** Dev spends four months moving the service off a deprecated auth system — zero downtime, zero customer impact. Precisely because nothing broke, nothing was noticed. At review time his manager writes "worked on auth migration," one line, no numbers. Counter-move: Dev should have sent a completion summary the week it shipped — "Migrated 14 services off legacy auth, zero downtime, closes the security finding blocking the FedRAMP audit" — and logged it with the date. Now the win exists in a forwardable sentence.

**The debugging ghost.** Sarah spends three brutal days finding a memory corruption bug that had caused two SEV-2s. She fixes it, closes the ticket, moves on. Six months later, calibration remembers the SEV-2s (bad) and not the fix (invisible). Counter-move: the summary email after the hard debugging session. Five sentences to the team channel: what the symptom was, what the root cause turned out to be, what the fix was, what it prevents. That email is the artifact that gets found later. The debugging was worth three days; the email costs ten minutes and is what makes the three days legible.

**The narrated 20%.** Marcus builds a small internal dashboard, demos it at every opportunity, posts "shipped X, here's what it unlocks" each time. Ana builds the platform the dashboard runs on. At calibration, three peers cite Marcus's tool unprompted; Ana's platform surfaces as "infrastructure work." Ana's counter-move is not to resent Marcus — it's to notice that his behavior is the correctly adapted one, minus the substance ratio, and adopt the narration without dropping the substance.

## Practices

**Keep a brag document.** Julia Evans' framing: a running log of accomplishments, updated weekly, each entry dated with what you did and what impact it had ("cut p99 latency 40%, unblocked the mobile launch"). Fifteen minutes every Friday. It is the source material for reviews, promo docs, and your manager's calibration notes — you're doing the sampling for the evaluator, with correct data. Related: [Write Things Down](/posts/keeping-judgment-in-the-ai-loop/#write-things-down).

**Narrate work in public channels.** Demo Fridays, "shipped X, here's what it unlocks" posts, design-doc announcements. The test that separates narration from bragging: bragging is about *you* ("I crushed this"); narration is about *the work and what others can now do* ("The batch API is live — you can now backfill without paging oncall"). Narration is a service: you're making information available that people need and can't get otherwise. What's obvious to you is genuinely news to them ([Obvious to you. Amazing to others.](/posts/making-ideas-find-their-audience/#obvious-to-you-amazing-to-others)).

**Make wins quotable.** Write the one-sentence version with a number in it, so your manager can forward it verbatim to their manager. Managers advocate with the material you hand them. Fuzzy work requires them to compose the pitch themselves; most won't. A quotable sentence travels up two levels unchanged.

**Send the summary after every hard thing.** Incidents, gnarly debugging, rescued deadlines. The artifact, not the effort, is what persists.

## The failure mode

Visibility theater — all narration, no substance — gets found out, and faster than people expect. Engineers keep an accurate private ledger of who actually does things, and evaluators eventually cross-check narration against artifacts: commits, docs, systems that exist. When the story and the ledger diverge, credibility collapses retroactively — past claims get repriced too. Narration is a multiplier on real work. Multiplying zero is still zero, and now everyone knows you tried.

## Diagnostic test

Answer honestly:

1. If your manager had to write your performance review *tonight*, from memory, what would survive? Is that the work you're proudest of?
2. Pick your best win from four-plus months ago. Does a written, dated, forwardable artifact of it exist anywhere?
3. Could your skip-level quote one specific accomplishment of yours, with a number in it?
4. When you finish something hard, does anyone outside your immediate ticket find out within a week?

Two or more "no"s means the record of your work has diverged from your work — and the record is what gets evaluated.
