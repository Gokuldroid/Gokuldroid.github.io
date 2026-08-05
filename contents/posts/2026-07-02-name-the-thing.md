---
path: name-the-thing
tags:
  - "thinking principles"
  - "organizations"
  - "communication"
date: 2026-07-02T07:30:00.000Z
title: "Name the Thing"
render_in_place: false
categories:
  - "thinking"
related:
  - "the-work-doesnt-speak-for-itself"
  - "the-author-frames-the-decision"
  - "cookie-licking"
---

> Organizations can only discuss what they can name — and the person who coins the name owns the concept everywhere it travels.

You've seen the pattern without noticing it. Someone in a meeting says "this is a one-way door" and the room recalibrates. Someone writes "config drift" in a doc and suddenly a diffuse, months-old unease becomes a backlog item with an owner. Someone calls a failure mode "the retry storm" and six months later a VP two orgs away is using the phrase in a planning review, prefixed with "what Gokul calls."

That prefix is the whole game. Naming a recurring, unnamed phenomenon is one of the highest-leverage, lowest-cost moves available to an engineer. Not because it's clever — because of the mechanics of how ideas move through organizations.

## Names are compression

An insight you can't repeat is an insight that dies where it was born. Suppose you've noticed that checkout conversion falls off sharply when page load exceeds two seconds, and that this interacts badly with a caching layer that goes cold on deploys. That's a paragraph. Nobody carries a paragraph into a hallway conversation, and nobody quotes a paragraph in a VP meeting.

"The checkout cliff" is three words. It fits in a hallway, a Slack message, a doc heading, an exec summary. The name is a compression artifact: it packages the entire insight into a unit cheap enough to repeat, and repeatability is the only thing that lets an idea travel farther than you personally can walk.

This is the same mechanism behind [The Work Doesn't Speak for Itself](/posts/the-work-doesnt-speak-for-itself/): work and insight do not diffuse on their own; they need a vehicle. A crisp name is the smallest, cheapest vehicle there is. It carries your thinking into rooms you will never enter and levels you will never present to.

## Mechanics

**Names carry frames.** Every name pre-decides how the thing it names gets treated. The same underlying reality, called "tech debt," reads as an engineering chore to be deferred; called "engineering risk," it reads as something a director must own; called "the slow bleed," it reads as urgent and quantifiable. Whoever names the problem has silently chosen its severity, its owner, and the vocabulary of every future argument about it. This is [The Author Frames the Decision](/posts/the-author-frames-the-decision/) operating at the smallest possible unit: naming is framing, compressed to a phrase.

**Attribution rides along.** When a name sticks, provenance sticks to it. "What Priya calls cookie licking," "the Tuesday spike — Marcus spotted it" — every repetition of the name is a repetition of your credit, at zero marginal effort to you. The name is a self-replicating credit vehicle. Notice that this is the exact inverse of the undocumented idea: an insight you shared verbally with no name and no doc gets absorbed, rephrased, and eventually claimed by whoever writes it down first (see the provenance discussion in [Cookie Licking: Claiming Work Without Doing It](/posts/cookie-licking/)). A named, written idea claims itself.

**Shared names coordinate.** Before the team has a word for a failure mode, each occurrence is an isolated anecdote — noticed, grumbled about, forgotten. After the name exists, occurrences become countable instances of a known thing. "That's the third retry storm this quarter" is a sentence that creates a metric, a ticket, and a priority discussion. Naming doesn't just describe the backlog item; it creates it. Organizations literally cannot prioritize what they cannot say.

## Practices

- **Name deliberately, not accidentally.** When you spot a recurring phenomenon nobody has labeled, treat coining the name as a real task. Aim for short, concrete, slightly vivid. Metaphors from physical failure stick best: *cliff*, *storm*, *drift*, *tax*, *bleed*, *cascade*. "Latency degradation under cache invalidation" is a description; "the cold-cache tax" is a name.
- **Introduce it in writing first.** A doc section titled with the name does two things a meeting can't: it fixes the spelling and definition, and it creates a citation anchor. When the name spreads, people link back to your doc. Written provenance travels; verbal provenance evaporates.
- **Repeat it yourself until it takes.** Names need critical mass. Use yours consistently — same phrasing, every doc, every standup — for weeks. The first ten uses feel forced. The eleventh comes out of someone else's mouth.
- **Name problems more than solutions.** A problem-name ("the checkout cliff") recruits everyone who has ever felt the pain, regardless of what fix they favor. A solution-name ("the EdgeCache migration") recruits only the people already in your camp. Problems build coalitions; solutions build factions.
- **Don't police attribution.** When others use your name without crediting you, let them. Correcting people to insert your name reads as vanity and slows adoption. The doc you wrote is the permanent record; attribution flows back to it on its own.

## Failure modes

- **Naming everything.** Coin three names a week and each one is worth less; you read as someone running a personal branding operation rather than someone who spotted something real. The currency only holds value if it's scarce.
- **Cute names in the wrong audience.** "The doom loop" works in a team retro. In an exec review, a VP hearing it may conclude the team is glib about a serious problem — or worse, may repeat it upward and let the tone do damage you never intended. Calibrate vividness to the room the name will eventually reach, not the room you're standing in.
- **Names that smuggle blame.** "The Kevin bug" names a person instead of a mechanism. It poisons the tool: the name now punishes someone every time it's spoken, people stop using it, and the phenomenon goes back to being undiscussable — the opposite of what naming is for. It also violates [Never Surprise Anyone Publicly](/posts/never-surprise-anyone-publicly/) in perpetuity, one utterance at a time. Name mechanisms, never people.

## Diagnostic test

If you described a recurring problem to a colleague today, could they repeat it to their manager tomorrow in five words or fewer — and would your name still be attached when they did?
