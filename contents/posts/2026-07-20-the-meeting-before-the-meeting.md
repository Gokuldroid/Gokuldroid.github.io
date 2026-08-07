---
path: the-meeting-before-the-meeting
tags:
  - "thinking principles"
  - "organizations"
  - "politics"
date: 2026-07-20T07:30:00.000Z
title: "The Meeting Before the Meeting"
render_in_place: false
categories:
  - "thinking"
related:
  - "the-first-follower"
  - "cookie-licking"
---

> By the time the decision meeting starts, the decision is usually already made. The meeting exists to ratify it, distribute it, and put it on the record.

## The phenomenon

You bring a well-argued design doc to an architecture review. Twenty minutes in, a principal engineer raises an objection you've never heard, two directors exchange a look, and your proposal gets "tabled for follow-up." Meanwhile your colleague's much weaker proposal sailed through last month with three softball questions and a round of nods.

The difference wasn't the docs. Your colleague had already met 1:1 with every consequential attendee. The review was the last step of their decision process. You made it the first step of yours.

This is the general pattern: consequential decisions in organizations are rarely made in the meeting that nominally decides them. They're made in hallway conversations, 30-minute previews, and Slack DMs beforehand. The formal meeting serves three real functions: it ratifies what's been agreed, it broadcasts the decision to everyone at once, and it creates a shared record that the decision happened legitimately. Engineers who miss this treat the meeting as the arena. It's the awards ceremony.

## Why it's rational, not corruption

The instinct is to read this as politics polluting merit. Mostly it's the opposite: pre-wiring exists because big meetings are structurally terrible venues for genuine deliberation.

**People can't think in real time under an audience.** A hard technical objection deserves an hour of quiet consideration. In a meeting, the objector has ninety seconds to formulate it and you have thirty to answer. Both of you will do worse than your best.

**Public positions are sticky.** Once someone objects in front of their peers, retracting the objection costs face. So they defend it past the point where they'd privately concede. The same objection raised in a 1:1 is cheap to raise and cheap to drop — "oh, you already handle that case, never mind" happens constantly in private and almost never in a conference room.

**Status dynamics distort the signal.** In a room, junior people won't contradict senior people, senior people anchor everyone else (the HiPPO effect), and "dumb questions" — often the most important ones — go unasked. Privately, people ask the dumb question.

So the private circuit isn't a corruption of deliberation. It's where the deliberation can actually happen. The meeting is the commit; the 1:1s were the review comments.

## Mechanics for the individual engineer

**Never bring a proposal cold to a decision meeting.** A cold proposal asks each attendee to do two things simultaneously: evaluate a complex idea and publicly commit to a position on it. Under time pressure, in front of peers, the safe answer to that combination is "no" or "needs more work." Every objection you get ambushed by in the room is one a 30-minute preview would have surfaced and resolved for free.

**The surprised-in-the-meeting rule.** If you're blindsided in a meeting — an objection you didn't know existed, an alternative proposal, a reorg of your project — you didn't lose in that moment. You lost days or weeks earlier, when the conversations happened without you. Treat surprise as a lagging indicator: the fix is not a better comeback, it's better pre-meeting circulation next time.

**Count your votes.** Before any consequential review, you should be able to list every attendee who matters and put them in a column: supports, objects, neutral, unknown. "Unknown" is a task, not a category — go find out. If you can't name your likely objectors before the meeting, you're not ready for the meeting. Walk in only when the votes already exist; the meeting just makes them official.

**Convert your biggest objector into a co-author.** Identify the person most likely to torpedo the proposal and go to them *first*, early, while the doc is still rough: "You know this system better than I do — I want your read before I circulate this." Two things happen. Their objections get addressed while addressing them is cheap. And once their fingerprints are on the design — their suggested section, their named tradeoff — they defend it in the room, because attacking it now means attacking their own work. This is the single highest-leverage play on this list.

**Never surprise your sponsor.** If your manager or the director sponsoring your work first sees your content in the meeting, in front of their peers, you have made them look out of touch with their own org. They will hedge, distance, or go quiet — and the room reads their silence as non-endorsement. Always preview: "Here's what I'm presenting Thursday; here's the risky slide; here's the ask." A briefed sponsor amplifies you. A surprised one abandons you, and reasonably so.

## The dark side

The same mechanism that enables honest deliberation also enables two abuses.

**Exclusion.** Pre-wiring routes influence through informal access — who gets the hallway conversation, who's in the DM thread. People outside those channels (new hires, remote workers, anyone not in the in-group) discover decisions rather than shape them, regardless of the quality of their input.

**Laundering.** A decision made by two people gets a "review meeting" as theater — a done deal dressed up as consultation. Objections are heard politely and change nothing; the meeting exists to manufacture the appearance of legitimacy.

How to tell legitimate socialization from a stacked deck: in legitimate pre-wiring, **the proposal changes**. Objections raised early leave visible marks — revised sections, dropped features, credited alternatives — and a strong objection in the meeting itself can still stop the train. In a stacked deck, nothing anyone says has ever altered the artifact, the "open questions" are all trivial, and the timeline makes dissent impossible ("we ship Monday"). Your counter-move when you suspect a stacked deck: don't fight in the room, where you'll lose to the pre-wired majority. Ask, on the record, "what feedback so far has changed the design?" — then take your substantive objection to the decision-maker privately, before the *next* checkpoint, using the same channel that beat you.

## Diagnostic test

Before your next decision meeting where you're the proposer, answer these five questions. Score one point per "yes."

1. Can you name every attendee whose objection could kill the proposal?
2. Have you spoken 1:1 with each of them in the last two weeks?
3. Has at least one likely objector's feedback visibly changed the doc?
4. Does your sponsor know exactly what you're going to say and what you'll ask for?
5. Can you predict, specifically, the hardest question you'll get — and who asks it?

**5:** the meeting is a formality; walk in relaxed. **3–4:** you'll probably survive but expect friction. **0–2:** postpone the meeting. You are about to hold your deliberation in the worst possible venue, in public, with your name on it.
