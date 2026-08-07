---
path: the-hero-loop
tags:
  - "thinking principles"
  - "organizations"
  - "engineering"
date: 2026-06-18T07:30:00.000Z
title: "The Hero Loop"
render_in_place: false
categories:
  - "thinking"
related:
  - "be-the-moth"
---

> Organizations reward the engineer who fights the fire, not the engineer whose design meant there was no fire — so they get more fires.

## The asymmetry: saves are visible, prevention is invisible

Two engineers. The first stays up until 4am restoring the payment service after a cascading failure. She gets a shout-out in all-hands, a grateful Slack thread from the VP, and a crisp story for her promo packet: "single-handedly restored a tier-1 service during a sev-1."

The second engineer spent three weeks last quarter adding backpressure and load-shedding to the same class of service. Because of that work, the traffic spike that would have caused a sev-1 instead caused a graph to wiggle. Nobody noticed. There is no all-hands shout-out for "the outage that didn't happen," because a prevented incident has no witnesses. You cannot show leadership the counterfactual.

This is not because leaders are stupid. It's a legibility problem. An incident is a *legible event*: it has a timestamp, a ticket, a war room, a named resolver, and a measurable recovery. Reliability is a *non-event*: it's the absence of tickets, which looks identical to "nothing is happening here." Organizations run on legible signals (see [why legibility beats reality](/posts/be-the-moth/#why-credit-flows-to-the-title)), so the save gets recorded and the prevention evaporates. Meanwhile every heroic 2am recovery slightly raises the org's tolerance for fragility — "we always pull through" — normalizing deviance over time.

## The loop

Once you see the asymmetry, the loop is mechanical:

1. **Heroics get rewarded.** Firefighting is visible, dramatic, and attributable to a person.
2. **Heroics get repeated.** People do what gets rewarded. Rational engineers allocate effort toward incident response, not toward the boring migrations that eliminate incidents.
3. **Systems stay fragile.** Root causes go unfixed — why would they get fixed, when firefighting is the promotion path and root-cause work is invisible?
4. **More fires.** Fragile systems produce incidents at a steady rate.
5. **More heroes.** Return to step 1, with a bigger audience.

Nobody in the loop is malicious. The incentive gradient alone is sufficient. That's what makes it stable: it survives good intentions.

## The arsonist-firefighter

The extreme form: the person who creates or tolerates the fragility they then heroically fix. Usually it's not conscious. It looks like:

- The engineer who ships fast, skips the runbook and the tests, and then earns admiration for how quickly they can debug their own undocumented system at midnight. Their velocity *and* their heroism are both funded by the same skipped work.
- The senior engineer who is the only person who understands the deploy system, never documents it, quietly resists efforts to replace it — and is celebrated quarterly for saving deploys. The knowledge hoarding and the hero status are one structure.
- The team that runs hot on operational load and declines to fund a fix, because their identity — and their standing with leadership — is "the team that keeps this thing alive."

You rarely need to accuse anyone of arson. Ask a simpler question: *does this person's status go up or down if the system stops breaking?* If it goes down, expect the system to keep breaking.

## Personal costs

The trap is aimed precisely at strong engineers, because being the hero feels great and is *genuinely* rewarded in the short term. You're competent, the adrenaline is real, the gratitude is real, the promo evidence is real. The strongest people get captured first. But the ledger runs negative over time:

- **You become load-bearing.** If you're the only one who can save the system, you can't be moved to the new project, and managers hesitate to promote you out of the role that depends on you. Hero status quietly converts into being unpromotable-away.
- **On-call martyrdom burns you out.** The 2am saves compound. The org will consume exactly as much of your night as you offer.
- **Your heroics subsidize the underinvestment.** This is the sharpest cost: every time you personally absorb the consequences of fragility, you make the fragility cheaper for the org, which makes fixing it *less* likely. You are not compensating for the broken system; you are funding it.

## Counter-practices

The fix is not to stop being good in a crisis. It's to make prevention as legible as firefighting, and to stop pricing your heroics at zero.

- **Write "risks retired" summaries.** After design or migration work, ship a short doc: here are the failure modes that existed, here's what would have happened, here's why they're now impossible. Send it where incident reports go.
- **Track near-misses and report them.** "The retry storm on the 14th would have been a sev-2 under the old config; the new load-shedding held it to 40ms of added p99." Near-misses are the only visible evidence of prevention — collect them deliberately.
- **Put counterfactual numbers on work you led.** "Since the rewrite: zero sev-2s, versus six in the prior year." One sentence, promo-packet-ready, and it converts a non-event into a legible metric.
- **After firefighting, always ship and publicize the root-cause fix.** If you must be the hero, immediately convert the fire into prevention credit: the fix, the follow-up, the "this class of incident is now retired" note. Never let the save be the last word.
- **Refuse to normalize hero hours.** Each 2am save you absorb silently resets the baseline of acceptable fragility. Escalate the pattern in daylight: "This is the third off-hours save this month; here's the fix that ends them, and here's what it costs."
- **As you gain seniority, redirect praise publicly.** When leadership shouts out a firefighter, add: "And credit to X, whose rate-limiting work meant this hit one service instead of nine." Senior engineers set what the org sees; use that to make prevention visible for others.

## Diagnostic test

Ask these about your team, honestly:

1. Can you name the last three people publicly praised for incident response? Can you name *anyone* publicly praised for an incident that didn't happen?
2. In the last promotion round, did any packet feature prevention work as a headline — or only saves and launches?
3. Does the person who best understands your most fragile system gain or lose status if it stops breaking?
4. When was the last time a root-cause fix got the same visibility as the outage it followed?
5. And the personal one: when the pager goes off at 2am, is there a small part of you that's glad?

If your answers cluster the wrong way, you're not on a team with bad luck. You're inside the loop.
