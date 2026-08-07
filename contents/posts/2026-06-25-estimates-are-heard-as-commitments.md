---
path: estimates-are-heard-as-commitments
tags:
  - "thinking principles"
  - "organizations"
  - "engineering"
date: 2026-06-25T07:30:00.000Z
title: "Estimates Are Heard as Commitments"
render_in_place: false
categories:
  - "thinking"
related:
  - "political-capital"
  - "managing-up"
---

> When you say "maybe two weeks," you mean a probability distribution. The org hears a date — and writes your name next to it.

## The translation gap

An engineer who says "maybe two weeks" is emitting a distribution: probably two weeks, could be one if things go well, could be five if the migration script fights back. The error bars are the whole point of the "maybe."

The organization cannot store a distribution. It stores a cell in a spreadsheet. So the moment the number leaves your mouth, a lossy compression happens: "maybe two weeks, depends on the API" becomes "two weeks" becomes "ships June 12." Your manager relays it upward in a status meeting. A sibling team schedules their integration work against it. Product tells a customer "mid-June." Three layers up, an exec's roadmap slide has a milestone on it that traces back — through people who never heard your hedging — to a number you produced in four seconds when someone caught you at your desk.

None of this required anyone to be malicious or stupid. It only required you to say a number.

## Why the translation happens

Organizations run on plans, and plans are made of dates. A plan cannot contain "somewhere between two and five weeks depending on an unknown" — dependencies can't be scheduled against a fog bank. So every layer of the org performs the same operation on your estimate: strip the uncertainty, keep the number. Uncertainty is not plannable; the number is.

This means any number you emit gets *promoted* as it travels up: guess → planning input → commitment. Each hop is done by someone acting reasonably in their own frame. Your manager needs to give their manager something concrete. Their manager needs to sequence three teams. Nobody is lying; everybody is compressing. The promotion is a property of the system, not of any person in it — which is why you can't fix it by hoping people remember your caveats. You have to fix it at the source: control what you emit.

Sometimes the distortion starts before the estimate leaves your mouth. If confident point estimates are accepted while honest ranges are challenged, people learn to remove their own caveats and supply the answer the room rewards. That upstream incentive is [The Certainty Premium](/posts/the-certainty-premium/): certainty is valued because it is actionable, even when it is less likely to be true.

## The asymmetry, and what it costs

Here is the asymmetry that catches engineers: **you remember saying "roughly"; everyone else remembers the number.** Caveats are spoken; numbers are written down. When week three arrives and you're not done, the org does not consult its memory of your tone of voice. It consults the plan. And the plan says you missed.

The record now shows a *missed commitment* — even though, in your frame, no commitment was ever made. And missed commitments, not slow estimates, are what destroy engineering credibility. Nobody's reputation dies from saying "that's a four-week job" when a peer thought two. Reputations die from saying two and taking four, three times in a row. Each miss draws down [Political Capital](/posts/political-capital/); after a few, your dates get silently padded by others, your ships get double-checked, and you get routed around on anything schedule-critical.

The cruelest part: your reliability as an estimator is a tracked reputation stat whether or not anyone tracks it formally. The engineers described as "always late" are usually not slower — they emitted optimistic point estimates. The engineers who "always deliver" emitted honest ranges and beat them. Same velocity, opposite reputations. The difference was error-bar management, not skill.

**Concrete case.** Priya is asked in standup how long the export feature will take. She says "probably a week?" — a genuine shrug. Her manager reports "export lands next Friday." The mobile team schedules their release for the Monday after. The upstream API turns out not to support pagination; it takes nineteen days. Priya did nothing wrong by her own lights and is now, in two teams' memories, the person who blew the mobile release. Counter-move below.

## Practices

**Never emit a bare number.** A bare number will be promoted; a range with a named unknown resists compression. Say: "Two to four weeks. The swing is whether the upstream API supports batch writes — I'll know by Friday and will update you then." Now the plan has to carry your uncertainty, and you've scheduled the moment it collapses.

**Distinguish estimate from commitment, out loud.** These are different speech acts and you should name them: "As an estimate, two to four weeks. If you need a commitment for the roadmap, give me a day to check the API and I'll commit to a date I can defend." Most managers will happily take a delayed-but-real commitment over an instant fake one — they're the ones who have to relay it.

**When you commit, pad for the unknowns you know exist.** Interruptions, code-review latency, an oncall page, one integration surprise, one meeting-heavy week: individually invisible, in aggregate near-certain. Your gut estimate is the time-to-code in a vacuum; nobody works in a vacuum. Padding for statistically guaranteed friction is not sandbagging — it's the same margin of safety you'd demand in a load calculation. Under-promise/over-deliver is error-bar management, not politics.

**Re-estimate out loud the moment information arrives.** The same final date has two completely different meanings depending on when it's communicated. "Heads up — the API doesn't do batch, we're now looking at July 8 instead of June 24" on day three is a professional update. The identical date discovered on June 23 is a slip. Early re-estimates *build* credibility; deadline-day discoveries destroy it. This is the no-surprises rule from [Managing Up](/posts/managing-up/) applied to schedules.

**When pressured into an aggressive date, make the trade-off explicit — in writing.** "We can hit June 1 by cutting the retry logic and skipping the load test. Confirming that's the deal." Now the scope cut is a shared decision with a paper trail, not a corner you'll be accused of cutting alone. If the date slips anyway, the record shows you flagged the risk at commitment time.

**Priya's counter-move**, replayed: "Best guess a week, but I haven't checked whether the API paginates — if it doesn't, it's three. I'll confirm by tomorrow and give mobile a real date then." Nineteen days later she's the person who called it, not the person who blew it. Same code, same calendar, opposite reputation.

## Diagnostic test

Before you say a number, ask: *would I be comfortable seeing this exact number, with no caveats attached, on a slide with my name next to it?* Because that is where it's going.
