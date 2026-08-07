---
path: reputation-forms-early-updates-slowly
tags:
  - "thinking principles"
  - "organizations"
  - "career"
date: 2026-07-13T07:30:00.000Z
title: "Reputation Forms Early and Updates Slowly"
render_in_place: false
categories:
  - "thinking"
related:
  - "be-the-moth"
  - "mentor-vs-sponsor"
---

> The organization compresses you into a one-line label within your first 90 days, then confirmation bias maintains it — you change faster than your label does.

## The caching mechanism

Nobody in an organization has bandwidth to continuously re-evaluate everyone. A director with 80 engineers in their org cannot hold a nuanced, current model of each one. So the organization does what any system under load does: it caches. Each person gets compressed into a one-line label — "solid but slow," "brilliant but abrasive," "safe pair of hands," "great executor, not strategic," "not ready yet." The label is the API through which most people interact with your reputation. They never read the source.

The cache is populated early. Your first few visible interactions on a team — roughly the first 90 days — supply almost all the evidence the label is built from. The first design review you speak in, the first project you ship or slip, the first incident you handle. These carry wildly disproportionate weight because they arrive when the slot is empty. After the slot is filled, new evidence doesn't overwrite it; it gets interpreted through it.

That's the trap. Once labeled, your actions stop being raw data. The "slow" engineer's careful code review is read as slowness. The "brilliant" engineer's *identical* review is read as rigor. The "abrasive" engineer's blunt-but-correct comment confirms abrasiveness; the "straight shooter's" identical comment confirms candor. Confirmation bias isn't an occasional glitch — it's the cache's consistency mechanism. The label maintains itself using your own behavior as fuel.

## Why updates lag

Cache invalidation is famously hard, and reputational caches are worse than most, for three structural reasons.

**Re-evaluation is expensive, so it only happens under force.** A label updates only on strong, visible, *repeated* counter-evidence. One counter-example gets explained away ("even Priya has good days"). You need a pattern loud enough that ignoring it costs the observer something. And most of your work isn't visible at all, so most counter-evidence never even reaches the evaluator. (This is the legibility problem: what isn't seen doesn't exist for labeling purposes.)

**Labels travel through the network without you.** Your label attends meetings you don't. Calibration sessions, staffing discussions, promo committees, hallway "who should own this?" chats — in all of them, someone who half-knows you deploys the cached one-liner, and it propagates to people who've never worked with you. Your reputation is mostly transmitted secondhand, which means it's mostly transmitted *stale*. This is also why sponsors matter more than mentors: a mentor improves you; a sponsor is someone in those rooms who overwrites the stale label with a current one.

**The label lags even after the person updates.** People who knew you as a junior engineer will treat you as one years later. Their cache entry was written in 2019 and has had no reason to refresh, because they haven't watched you work since. You are competing not with who you are, but with who you were the last time each observer paid attention.

## The asymmetry

Negative labels form faster and stick harder than positive ones. This is loss-aversion applied to trust: the cost of relying on someone who fails is felt more sharply than the benefit of relying on someone who delivers. So the organization's cache is biased toward recording risk.

Concretely: one missed commitment outweighs five kept ones. One heated meeting outlasts a year of collaborative ones. "Solid" takes two quarters to earn and one bad launch to lose; "risky" takes one bad launch to earn and two years to lose. Plan around the asymmetry rather than resenting it — protect your downside visibly (flag slips early, never let a commitment silently die) even more carefully than you chase upside.

## Concrete cases

**The over-thorough first project.** An engineer joins a team and, wanting to do it right, spends her first three months refactoring test infrastructure before shipping the feature she was given. The work is excellent. The label written is "slow." For the next two years, her thoughtful design pauses read as hesitancy. Counter-move: in a new context, ship something visible and unambiguous *fast* — even something small — before investing in deep quality work. Buy the "fast and reliable" label first; it will reinterpret your later thoroughness as rigor.

**The junior who grew up.** An engineer joins at entry level, grows into the strongest system thinker on the team, but the senior engineers who onboarded him still route "real" design work around him. His skills updated; their cache didn't. Counter-move: he transfers to a sister team, where evaluators have no prior. Within two quarters he's the design lead. A context change is often cheaper than cache invalidation — a fresh prior beats grinding against a stale one.

**The visible failure.** An engineer owns a launch that pages the whole org at 2 a.m. The label "risky" is forming in real time. Counter-move: over-correct visibly and fast — drive the postmortem herself, ship the prevention work within two weeks, present the fix at the org review. The recovery story can replace the failure story, but only if it's told while people are still paying attention. Silence lets the failure be the last chapter.

**Seeding the label you want.** An engineer decides she wants "makes hard things simple" attached to her name. She picks work where that adjective can show, and repeats the demonstration visibly: the simplification doc, the deleted service, the one-pager that unblocked a stuck debate. Three visible instances in six months and the label writes itself — in her words, not the organization's defaults.

## Practices

- **Front-load excellence in every new context.** New team, new manager, re-org: the first 90 days set a prior that pays or taxes you for years. Spend disproportionate effort there; it is the highest-leverage window you get.
- **Choose your adjective deliberately.** Decide what one-liner you want cached, then generate repeated, visible evidence for it. If you don't pick the label, the first random impression picks it for you.
- **Guard against the asymmetry.** Never miss silently. A commitment renegotiated early is neutral; one that quietly slips is a negative-label event.
- **After a visible failure, move fast and loud.** Own it, fix it, narrate the fix. Speed matters more than polish — the replacement story must land before the original hardens.
- **When you've outgrown your label, consider moving instead of grinding.** A fresh evaluator resets the prior in a quarter; re-educating a stale one can take years.
- **Treat re-orgs and manager changes as label-reset opportunities.** A new evaluator is a rare empty cache slot. Don't coast through the transition annoyed — run your first-90-days playbook again.

## Diagnostic test

Ask: *if someone in a calibration meeting had to describe me in one sentence, what would it be — and when was the evidence for that sentence generated?* If the answer is "years ago," your label is stale, and you should either refresh it loudly or move somewhere it doesn't follow.
