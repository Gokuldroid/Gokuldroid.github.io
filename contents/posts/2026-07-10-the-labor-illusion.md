---
path: the-labor-illusion
tags:
  - "thinking principles"
  - "organizations"
  - "career"
date: 2026-07-10T07:30:00.000Z
title: "The Labor Illusion"
render_in_place: false
categories:
  - "thinking"
related:
  - "estimates-are-heard-as-commitments"
  - "the-work-doesnt-speak-for-itself"
---

> People price work by the effort they can see, not the effort it took — so effortless-looking delivery gets systematically undervalued.

## The research and the mechanism

Ryan Buell and Michael Norton ran a study on travel search sites. One version returned flight results instantly. Another showed a progress bar narrating its work: "searching 100 airlines... checking American... checking Delta..." Users preferred the slower site. They rated its results as higher quality — *the same results* — because they could see it working. Buell and Norton called this the labor illusion: visible effort acts as a proxy for value, even when it adds nothing.

This isn't irrational stupidity; it's a reasonable heuristic under uncertainty. When an evaluator can't directly assess the quality of an output, they fall back on observable signals, and effort is the most observable one. The problem is that the heuristic runs backwards for experts. Expertise is compression: ten years of debugging distributed systems compresses into a twenty-minute diagnosis. The evaluator sees twenty minutes. They cannot see the decade that made those twenty minutes possible, so they anchor on apparent difficulty — and apparent difficulty is exactly what your skill just erased.

The cruel symmetry: the better you get, the less effort your work displays, and the less your work displays, the less it appears to be worth. Elegant design makes a hard problem look simple, so observers conclude the problem *was* simple. Your compressed expertise is invisible by construction.

## Consequences for engineers

**Chronic underestimation of your contribution.** "What does he even do? Everything he touches is easy." Nobody says this out loud, but it's the shape of the calibration discussion when your work product looks frictionless. The engineer who visibly wrestled a mediocre problem for three weeks generates more effort-signal than you did solving a harder one in three days.

**Scope-sizing errors that compound.** When leadership watches you knock out a "hard" migration in a week, they don't conclude you're fast — they conclude migrations take a week. The next migration gets scoped at a week, staffed with someone who isn't you, and blows up. Your speed silently repriced the difficulty of the entire problem class, and the reprice becomes the org's planning input.

**A perverse incentive to perform struggle.** Once you notice the mechanism, the tempting move is to slow down, look pained, work visibly late. Some engineers do this instinctively. It works — briefly — and it's poison (see failure modes).

## Counter-moves: show the iceberg without whining

The goal is not to manufacture effort. It's to make real, already-spent effort *legible*.

**Narrate the search space, not just the answer.** Don't just present solution C. Write the one paragraph: "Three approaches considered. A fails under concurrent writes. B works but costs an extra service dependency. C avoids both, at the cost of a slightly uglier interface." That paragraph takes two minutes and reveals the invisible work — the paths you evaluated and rejected are the labor.

**State what the fast fix rested on.** "Twenty-minute fix — but only because the tracing I built last quarter isolated it to the connection pool in one query." One sentence. It converts "trivial fix" into "return on infrastructure investment," which is what it actually was.

**When estimating, size the problem, not your speed.** Quote the difficulty of the task honestly, even if you personally can do it fast. If it's a two-week problem that you can do in three days, say two weeks and deliver early — because [Estimates Are Heard as Commitments](/posts/estimates-are-heard-as-commitments/), and your personal speed quietly becomes the baseline for everyone, including future-you on a worse day.

**In demos, show one failure mode you engineered around.** A demo where everything just works reads as "this was easy." Thirty seconds of "here's what happens under partition — and here's why it recovers instead of corrupting" reveals that the smoothness was built, not found.

**Document trade-offs in design docs.** Trade-off sections are effort receipts. They persist, they're read by people who weren't in the room, and they prove the simple-looking design was a choice among hard alternatives, not the first idea that came to mind.

## Failure modes

**Performative struggle.** Busyness theater — visible late nights, sighing in standup, inflated status updates — gets discounted fast by anyone competent, and competent people are the ones deciding your trajectory. Worse, it trains you to optimize the signal instead of the work. The counter-moves above differ in kind: they reveal effort that actually happened, in artifacts that carry real information.

**Padding that becomes sandbagging.** "Size the problem, not your speed" has a boundary. If you routinely quote two weeks for three-day work and it becomes noticeable, you've traded the labor illusion problem for a trust problem, which is worse. The honest version is quoting what the problem would cost a competent engineer without your specific accumulated context — and then naming that context when you beat the estimate.

## The deeper frame

Making it look easy is the job. Making the difficulty legible is the career. These are separate deliverables, and shipping only the first is a common failure pattern among strong engineers who assume [the work speaks for itself](/posts/the-work-doesnt-speak-for-itself/) — it doesn't. Hidden work only becomes legible when people find out it happened. You don't have to choose between elegance and credit. You have to ship both: the simple-looking solution, and the one paragraph that shows the iceberg under it.

## Diagnostic test

If your last three deliverables were described by someone else, would the description contain any of the difficulty — or just the result?
