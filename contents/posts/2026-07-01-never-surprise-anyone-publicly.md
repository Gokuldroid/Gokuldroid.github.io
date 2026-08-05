---
path: never-surprise-anyone-publicly
tags:
  - "thinking principles"
  - "organizations"
  - "politics"
date: 2026-07-01T07:30:00.000Z
title: "Never Surprise Anyone Publicly"
render_in_place: false
categories:
  - "thinking"
related:
  - "how-organizations-really-decide"
  - "easy-to-work-with-beats-brilliant"
  - "managing-up"
---

> Raising someone's problem in public without warning them first converts a solvable engineering problem into a status attack — and the fix is a ten-minute private message.

You found a real issue. The latency regression traces to their service. The design has a flaw. The commitment slipped. The incident started in their deploy. You're right, you have the data, and there's a meeting this afternoon where this needs to be said.

If the first time they hear about it is in front of an audience, you have not raised an issue. You have launched an attack — regardless of your intent, your tone, or your correctness. The distinction that matters isn't *what* you said; it's *who was watching when they first heard it*.

## The mechanism of face-defense

A surprised person in a public setting does not process content. They defend their face.

The mechanics are worth understanding precisely, because they explain why "but I was polite and accurate" doesn't save you. When you name someone's bug or missed commitment in a channel or meeting, they are no longer in a conversation with you. They are performing for the audience — their manager, their peers, the people who will form opinions about their competence in the next ninety seconds. Their brain allocates everything to that performance and almost nothing to evaluating your claim.

This produces a predictable and expensive failure: **they harden positions they would have conceded privately.** In a DM, "yeah, that regression is probably our change, let me look" costs nothing. In a public meeting, the same admission feels like a public loss, so instead you get deflection, counter-attack, or a wall of caveats. You've now created a dispute where a fix would have sufficed. (This is the same dynamic as [Concede the Grievance, Keep the Decision](/posts/how-organizations-really-decide/#concede-the-grievance-keep-the-decision) territory: people can absorb almost any substance if their standing is protected, and almost none if it isn't.)

Note who created that dynamic. Not them — you, by choosing the venue.

## What the ten-minute heads-up buys

The heads-up is nearly free and pays out three ways:

**Error-correction before you're publicly wrong.** They may have context you lack. The "regression" might be a known tradeoff, an upstream dependency, or already fixed in a pending CR. Framing the heads-up as a fact-check — "wanted you to hear it from me first, and correct me if I have it wrong" — means their knowledge reaches you *before* you stake your credibility on an incomplete picture. Half the time the heads-up saves *you*, not them.

**An ally instead of an enemy.** Very often, they fix the problem before the meeting even happens. Which — check yourself — was the actual goal. You wanted the latency regression fixed, not a dramatic reveal. A heads-up frequently makes the public raise unnecessary, or turns it into "Priya and I looked at this and here's the plan," which lands as competence for both of you.

**A durable reputation as someone safe to work around.** People remember ambushes as *character data*, not as content, and they remember forever. Being right doesn't protect you — being right makes it worse, because the humiliation was earned and therefore sharper. Conversely, "always gives you a heads-up" is exactly the trait that makes people route work, information, and benefit of the doubt toward you (see [Easy to Work With Beats Brilliant](/posts/easy-to-work-with-beats-brilliant/)). One ambush can erase years of it.

## Scope: it's broader than you think

This rule covers more than the obvious "calling someone out in a meeting":

- **CR comments that escalate.** The comment itself is fine — it's a working surface. Screenshotting or linking it into a team channel with commentary is a public raise.
- **Incident reviews that name causes.** "Root cause was the config change from team X" — did team X know that sentence was coming?
- **Design reviews that demolish a proposal.** If you're about to show the author's design doesn't survive contact with your load numbers, they should not learn that live.
- **Status reports flagging another team's slippage.** "Blocked on Platform team" in a leadership-visible doc is a public raise about people who may not know they're in it.
- **Even praise that exposes.** "We shipped on time despite team X's delays" is an ambush wearing a compliment.

The test isn't "am I criticizing?" It's "does someone come off worse in front of people who matter to them?"

## Practices

- **Before any public raise, ask: who does this surprise?** If the answer is anyone, message them first. Ten minutes before is enough; a day before is better.
- **Frame it as a fact-check, not a permission request.** "I'm going to raise the latency regression in review today — wanted you to hear it from me first, and correct me if I have it wrong." You are informing and inviting correction. You are not asking whether you may raise it.
- **In the meeting, let them speak to it first when possible.** "Priya, you know this best — want to give the context?" turns your raise into their briefing. The issue still surfaces; their face is intact; you look like a professional instead of a prosecutor.
- **If genuine urgency prevents a heads-up** — an active incident, a decision closing in minutes — apologize for the ambush explicitly afterward: "I had to name your service on the incident call before I could ping you; sorry it landed that way." The apology converts an ambush back into an accident.

## Failure mode: the heads-up that becomes a negotiation

The predictable corruption of this practice: you give the heads-up, and they respond with "can you hold off on raising that?" or "let's handle it offline" — and offline never comes. The heads-up quietly mutates into a request for permission, which is then denied.

Don't confuse the two. **You are warning, not asking.** The issue gets raised; the heads-up only determines whether the person is prepared. If they push back on the substance, great — that's the error-correction working; update your claim. If they push back on the *raising*, hold: "I hear you, and I still need to raise it today — but I'll present it however you think is fairest." Courtesy about the venue is not a veto over the content. If you let heads-ups become suppression negotiations, you'll eventually stop giving them, and you'll be back to ambushing people — just with extra guilt.

## Diagnostic test

Before you hit send or raise your hand, ask: **"Is there anyone in the audience who will learn about their own problem from me, right now, in front of everyone?"** — if yes, you owe them a message first.
