---
path: the-demo-effect
tags:
  - "thinking principles"
  - "organizations"
  - "engineering"
date: 2026-06-19T07:30:00.000Z
title: "The Demo Effect"
render_in_place: false
categories:
  - "thinking"
related:
  - "cookie-licking"
---

> Working software beats slides: seeing it run collapses skepticism that no argument can.

## Why demos beat documents

A slide deck describes a thing that does not exist. Every reviewer knows this, so every claim on the slide is an invitation to a hypothetical objection: "What about latency? What about auth? Will the vendor API even support that?" These objections are cheap to raise, expensive to answer, and unfalsifiable — because the thing isn't real, no one can be proven wrong. That's why design reviews for slideware spiral into infinite debate.

A live demo changes the question. Before the demo, the room is debating "could this work?" — a speculative question with unbounded surface area. After the demo, the question is "this works — now what?" That's a planning question, and planning questions converge. The risk debate dies because the risk is visibly already retired. Nobody argues about whether the API integration is feasible while watching the API integration return results on screen.

This isn't a rhetorical trick. The demo is genuinely stronger evidence than the document. The document says "we believe this is possible." The demo says "this is possible, and here is the existence proof." You've moved the discussion from priors to data.

## Mechanics

**Concreteness beats abstraction in persuasion.** People can argue with a projection, an estimate, or an architecture diagram. They cannot argue with what they just watched happen. The human brain treats witnessed events as facts and described events as claims. A demo converts your claim into their observation.

**A demo is proof-of-executor, not just proof-of-concept.** It doesn't only show the idea works — it shows *you* can build it. That trust transfers to everything you haven't built yet. When you say "the remaining 70% is straightforward," the room believes you, because they just watched you deliver the hard 30%. A document author asking for the same trust has no collateral to offer.

**Demos create desire.** Stakeholders who see a working thing start imagining themselves using it. They ask "could it also do X?" — and the moment they ask that, they've stopped evaluating and started wanting. The demo recruits approvers into being customers. People fight for things they want; they merely tolerate things they approved.

**A demo is the strongest honest claim on work.** In territorial terms, a working prototype is the most defensible cookie-claim there is — far stronger than an announcement or a doc. The contrast with the prototype-lick (building a throwaway shell to block others from the space) is simple: the difference is you keep building. The claim is legitimate because it's backed by continuing delivery, not squatting.

## Practices

- **Bias toward walking skeletons.** An end-to-end thin slice — ugly, hardcoded, but real — that you can demo in weeks beats a beautifully engineered component that's invisible for months. This is Gall's law applied to persuasion: a simple system that works is also a simple system that *demos*, and it can evolve in public.
- **Demo at every review, even when "nothing is shippable."** A script's output, a working API call, a log line proving data flowed end to end — anything real. The habit trains stakeholders to expect evidence from you, and trains you to always have some.
- **Rehearse the demo path, and pre-record a backup.** The demo gods are cruel: Wi-Fi dies, tokens expire, the one edge case you never hit appears in front of the VP. A failed live demo does the opposite of everything above — it becomes the room's most vivid memory of your project. Walk the exact click path twice beforehand, and have a screen recording ready to narrate over if the live run breaks.
- **Scope the demo honestly.** Never fake the parts that don't work and let the room assume they do. A faked demo, once discovered, is a catastrophic and near-permanent loss of political capital — you don't just lose this approval, you contaminate every future claim you make.
- **Immediately after the demo, state what is NOT built.** "What you saw is the happy path; there's no error handling, no auth, and the data is a fixture." This inoculates you against "I thought it was done." A demo, like an estimate, gets heard as a commitment unless you explicitly bound it — and un-hearing a commitment is nearly impossible later.

## Failure modes

- **The vaporware demo.** Faking or over-staging crosses from persuasion into fraud. One discovery erases years of credibility.
- **The unbounded demo.** You demo the happy path, say nothing about scope, and three weeks later leadership asks why it isn't launched. The demo wrote a check your roadmap can't cash.
- **The unrehearsed demo.** Live failure in front of decision-makers is remembered longer than ten successful runs. It converts "this works" into "even the author can't make it work."
- **The perfectionist non-demo.** Waiting until it's polished means months of invisibility, during which skeptics fill the vacuum with hypotheticals. Invisible progress is indistinguishable from no progress.

## Career angle

The work doesn't speak for itself — but a demo is the closest it gets to speaking, and someone still has to hold the microphone. The engineer who runs the demo becomes the face of the work in the minds of everyone watching, regardless of who wrote which module. This is a legitimate, honest form of visibility: you're not narrating effort, you're presenting evidence. If you built it, demo it. If you consistently let someone else demo your work, the org will consistently attribute your work to them.

## Diagnostic test

Before your next contentious review, ask: **"Can I replace ten minutes of this argument with sixty seconds of something running?"** If yes, stop editing slides and go build the sixty seconds.
