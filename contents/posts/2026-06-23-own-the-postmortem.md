---
path: own-the-postmortem
tags:
  - "thinking principles"
  - "organizations"
  - "engineering"
date: 2026-06-23T07:30:00.000Z
title: "Own the Postmortem"
render_in_place: false
categories:
  - "thinking"
related:
  - "the-author-frames-the-decision"
  - "own-your-mistakes-first"
  - "the-last-ten-percent"
---

> An incident review is the highest-leverage writing and facilitation stage most engineers will ever get — and most of them treat it as punishment paperwork.

## The guaranteed audience

Almost nothing you write gets read carefully. Design docs get skimmed by three people. Roadmap proposals compete with forty other proposals. But when production goes down, attention arrives whether anyone asked for it or not. Engineers from every team the incident touched, their managers, and leadership two or three levels up all end up looking at the same artifact — the postmortem (COE, if you're at Amazon) — with full attention. An outage summons an audience that no amount of proactive roadmap work can.

This is the asymmetry most engineers miss. They experience the postmortem as the bureaucratic tax on a bad week: a template to fill out, a meeting to survive, action items to be assigned. Operators see it differently. A well-run postmortem is read by more senior people, more closely, than almost anything else an engineer produces in a year. It is a credibility stage with the lights already on. The only question is whether you show up prepared.

## Mechanics

**The author controls the narrative.** Whoever writes the document decides what "what happened" means: where the timeline starts, which contributing factors get named, what the incident is an instance of. This is [The Author Frames the Decision](/posts/the-author-frames-the-decision/) applied to failure. Two honest postmortems about the same outage can leave readers with completely different conclusions — "an engineer pushed a bad config" versus "our config system lets any bad value reach every host in under a minute with no canary." Both are true. Only one teaches anyone anything, and only one makes the author look senior.

**Depth of analysis reads as judgment.** A five-whys chain that terminates at a person ("the engineer didn't check") signals a shallow thinker. A chain that terminates at a system ("nothing in the deploy path could have caught this class of error") signals someone who understands how failures actually propagate. An honest timeline, unflinching contributing factors, and action items that retire whole classes of risk — not just this instance — are the tells. Every senior reader recognizes them, because that's how they think.

**Facilitation is leadership on display.** The review meeting is where it gets tested. Rooms drift toward *who* — someone will ask, politely or not, whose change it was. The facilitator's job is to steer back to *why*: why did the system accept the change, why did detection take forty minutes, why did rollback require a human. Keeping the meeting blameless while keeping it rigorous, and visibly protecting the engineer whose change triggered the incident, displays exactly the behavior leaders are watching for — composure and systems thinking under pressure. This pairs with [Own Your Mistakes First](/posts/own-your-mistakes-first/): if the triggering change was yours, owning it fast and completely converts the worst position in the room into the strongest one.

**Follow-through is the differentiator.** Most postmortem action items die quietly in a backlog. Everyone knows this, including the leaders who approved them. So the person who drives their action items to completion and *reports back* — "the canary gate from COE-4471 shipped; this failure class is now impossible" — stands out sharply against the base rate. This is [The Last Ten Percent](/posts/the-last-ten-percent/) with an audience attached. It also solves [The Hero Loop](/posts/the-hero-loop/)'s core problem: prevention work is normally invisible, but postmortem action items are one of the few places where prevention has a pre-registered audience waiting to hear that it landed.

## Practices

- **Volunteer to write it, even — especially — when it wasn't your fault.** Authorship is influence, not an admission of guilt. If you were adjacent to the incident and understand the system, raising your hand gets you the pen and the stage.
- **Write for the non-expert senior reader.** The test of the mechanism section: a VP who has never seen your architecture should understand the system better after reading it. A teaching artifact is a reputation artifact — clarity at that level is rare and it gets noticed.
- **Name systemic causes plainly.** Blameless does not mean causeless. "Our deploy tooling has no validation for this config class" is blameless and specific. "Mistakes were made" is neither. Indict the system precisely; never indict a person.
- **Track your action items publicly to done.** Put them somewhere visible, update status, and close the loop with the people who attended the review. The report-back is where the reputation compounds.

## Failure modes

- **Blame-laundering.** Using the postmortem as a weapon — framing the narrative so another team or person absorbs the fault under a veneer of process. Senior readers detect this reliably, and they remember who did it far longer than they remember the outage.
- **Theater items.** Action items that sound responsible but retire no real risk: "add a runbook entry," "send a reminder to the team," "schedule a training." A list of these tells every reader you either don't understand the failure or don't intend to fix it.
- **Hedged mush.** A document so lawyered and passive-voiced that it says nothing — no clear mechanism, no named causes, no committed fixes. This is the quietest failure and maybe the worst one: you were handed a guaranteed senior audience and gave them nothing worth reading.

## Diagnostic test

Would you be comfortable if the most senior leader in your org read only this document — and then judged your engineering judgment entirely by it?
