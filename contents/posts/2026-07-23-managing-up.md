---
path: managing-up
tags:
  - "thinking principles"
  - "organizations"
  - "career"
date: 2026-07-23T07:30:00.000Z
title: "Managing Up"
render_in_place: false
categories:
  - "thinking"
related:
  - "how-organizations-really-decide"
  - "be-the-moth"
  - "keeping-judgment-in-the-ai-loop"
---

> Your manager is your API to the organization — they can only transmit what you supply, in a format they can parse.

## The reframe: your manager is your representative, not your judge

Technically strong engineers resist managing up because it pattern-matches to sycophancy. The internal story is: "my work should speak for itself; if I have to sell it, the system is broken." This story fails on a mechanical fact: **your work never enters the rooms where your outcomes are decided**. Calibration, promo discussions, staffing, reorg planning — you will never sit in those rooms. Your manager sits there, and they argue your case using only what they know and can articulate under pressure, from memory, against other managers doing the same for their people.

That makes your manager an API. The organization does not read your commits; it calls `getStatus(you)` and `getImpact(you)` on your manager. If the responses are vague, the org's model of you is vague, regardless of how good the underlying implementation is. Managing up is not flattery — it is populating that API with accurate, forwardable, high-resolution data. You are not selling; you are supplying ammunition to your advocate.

Once you see it this way, the sycophancy objection dissolves. A sycophant transmits agreement. A good report transmits information. These are opposite behaviors that happen to share a direction of flow.

## Mechanics

**The no-surprises rule.** Deliver bad news early, always. The mechanism: your manager makes commitments upward based on their model of your work. When you slip silently and they find out late — or worse, from someone else — they have already relayed a false state to their boss. You didn't just miss a date; you made them wrong in public. Trust lost this way rarely returns, because they can no longer safely forward your reports without independently verifying them, which makes you expensive to represent. Bad news delivered early is a data point; bad news delivered late is a betrayal of the channel.

**Status updates built for zero-effort consumption.** Write updates your manager can forward verbatim: what changed, what's at risk, what you need. The mechanism: your manager is bandwidth-constrained. Every unit of effort required to translate your update into something their boss can read is a unit that mostly won't be spent — your work gets summarized as "on track" and its detail evaporates. A forwardable update travels up two levels intact.

**Bring options with a recommendation, not open problems.** "We can do A (fast, risky), B (slow, safe); I recommend A because X" costs your manager one decision. "What should I do about this?" costs them a full context-load. The first pattern also demonstrates judgment — which is precisely what gets argued about in promo rooms.

**Learn your manager's currency.** Your manager has their own goals, pressures, and a boss who measures them on specific things. Find out what those are (ask directly; most managers will tell you). Then frame your asks in that currency. "I want to refactor the pipeline" is a cost to them; "this refactor removes the on-call load that's dragging your ops-health metric" is a contribution to their goals. Asks framed in the receiver's currency get funded; asks framed in your currency get deferred.

**1:1s are for career and alignment, not status recital.** Status is asynchronous information — put it in writing before the meeting. The 1:1 is your only regular synchronous slot with your representative; spending it reciting Jira tickets converts your highest-bandwidth channel into your lowest-value content. Use it for: am I working on what matters, what should I be doing differently, what's coming that I should position for.

**Calibrate to their style.** Some managers process by reading, some by talking; some want detail, some want three bullets. Sending a two-page doc to a listener, or a vague verbal summary to a reader, means your information arrives but doesn't land. Watch what they respond to and match it — this is protocol negotiation, not personality compromise.

**The weak or overloaded manager.** If your manager drops information, compensate at the protocol level: write more things down (so there's a durable record they can retrieve, and that survives their departure), send pre-1:1 summaries, and build relationships beyond them — skip-level 1:1s, adjacent-team leads, senior engineers who sit in review rooms. This isn't going around them; it's adding redundant paths to a lossy channel.

## Concrete cases

**The silent slip.** You realize mid-sprint a migration will take three extra weeks. You grind quietly, hoping to close the gap. Your manager reports "on track" upward; the slip surfaces at the deadline. [The certainty premium](/posts/the-certainty-premium/) makes silence tempting: maintaining confidence is rewarded now, while the cost arrives later. Counter-move: report the moment your confidence drops, with a revised estimate and a mitigation option. You'll be surprised how boring early bad news is.

**The invisible quarter.** You spent three months on reliability work — no launches, but pages dropped 70%. At calibration, your manager says "did infra work." Counter-move: send a monthly impact summary with numbers ("pages: 40/wk to 12/wk") written so it can be pasted into a promo doc. If you don't write the sentence, it doesn't exist in the room.

**The rejected proposal.** Your redesign proposal keeps stalling. You escalate the technical arguments. Counter-move: find out what your manager is being measured on this half, and reframe — the redesign as risk reduction for the commitment they've already made upward. Same proposal, different currency, different result.

**The open-problem dump.** You bring your manager a gnarly cross-team dependency conflict and ask what to do. They defer, repeatedly. Counter-move: bring two resolutions with costs and a recommendation, plus the specific action you need from them ("a 30-minute meeting with team X's manager"). Managers unblock specific asks; they shelve ambiguous ones.

## Practices

- Weekly written update, three sections: shipped/changed, at risk, needs. Forwardable as-is.
- Bad news within 24 hours of you knowing it, with a mitigation option attached.
- Ask your manager once a quarter: "What is your boss measuring you on? What are you worried about?"
- Keep a running impact log with numbers; it becomes their calibration ammunition.
- Pre-1:1 status in writing; spend the meeting on alignment and career.
- One skip-level or cross-team relationship maintained per quarter.

## Diagnostic test

Answer honestly:

1. Could your manager, right now, describe your last quarter's impact in two sentences with a number in them? Would those sentences be the ones you'd choose?
2. When did your manager last learn bad news about your work from you first, versus discovering it another way?
3. Can you state what your manager's boss measures them on? If not, you are framing every ask in the wrong currency.
4. Does your last written update require editing before your manager could forward it upward? If yes, it creates work instead of removing it.
5. In your last three 1:1s, what fraction was status recital?

Two or more misses means your API is returning nulls — and the organization is filling them in with guesses.
