---
path: keeping-judgment-in-the-ai-loop
tags:
  - "thinking principles"
  - "ai"
  - "learning"
  - "judgment"
date: 2026-07-31T07:30:00.000Z
title: "Keeping Judgment in the AI Loop"
render_in_place: false
categories:
  - "thinking"
related:
  - "mental-models"
  - "the-work-doesnt-speak-for-itself"
  - "the-demo-effect"
---

AI can remove mechanical effort without removing responsibility. The useful boundary is not human work versus machine work; it is whether the human still owns the model of what a correct answer should look like.

## Augment Yourself

> In the age of AI, taste and judgment matter more than raw output.

### Principle

Stay updated with tooling, upskill in your domain. AI agents are token guzzlers — the value isn't in generating more code, it's in knowing what to ask for and evaluating what comes back. Context engineering (what you feed the model) is the new leverage. Your domain expertise becomes the bottleneck, not your typing speed.

### When it applies

- When you're tempted to just "vibe code" without understanding
- When choosing between learning a new AI tool vs. deepening domain knowledge
- When evaluating AI-generated output

### Example

Two engineers use the same coding agent. One gets garbage because they can't evaluate the output. The other gets 10x leverage because they know exactly what good looks like and can steer the agent. The difference is domain taste, not prompt skill.

*Source and further reading: [A Guide to Claude Code 2.0 and Getting Better at Using Coding Agents](https://sankalp.bearblog.dev/my-experience-with-claude-code-20-and-how-to-get-better-at-using-coding-agents/) by Sankalp.*

## Offloading vs Surrender

> Offloading is delegating the *how* and keeping the *what*. Surrender is when the AI's output silently becomes yours and there's nothing left to check.

### Principle

Two postures toward AI assistance look identical from the outside and diverge sharply over time:

- **Cognitive offloading**: you hand off execution and keep judgment. You still form an independent view of what the answer should look like, and you override the tool when it's wrong.
- **Cognitive surrender**: you stop constructing the answer at all. The tool's output becomes the answer. You inherit its confidence along with its content.

The failure mode isn't "using AI." It's *not forming a parallel view to compare against*. Without that independent view, you can't tell when the model is wrong, because you have nothing to measure it against. The Wharton data: 73% of participants accepted AI's wrong answers, and their confidence went *up* when AI was available, even on tasks where half the answers were incorrect. Borrowed confidence, treated as one's own.

The two postures compound in opposite directions. Offloading lets you work faster *while* sharpening your model of the problem. Surrender lets you work faster *while* hollowing it out. Over months, offloading makes you better; surrender makes you dependent. On any single day the difference is invisible. Six months in, one engineer can debug the system from first principles and the other can't.

### When it applies

- Reviewing AI-generated code, diffs, or designs
- Debugging errors by pasting stack traces
- Making architecture calls with AI input
- Learning a new library, language, or system
- Any task where "the model said so" is doing load-bearing work in your reasoning

### The diagnostic question

*Am I forming an independent view of this answer, or just adopting the agent's view wholesale?*

### Posture moves that keep you on the offloading side

- **Construct an expectation before reading the output.** Three lines or fifty? Queue or direct call? Bug in this module or that one? If the agent matches your expectation, you're calibrated. If not, you have a real choice — which is exactly the choice surrender skips.
- **Read the diff like the AI didn't write it.** Apply the junior-engineer standard. "Seems right" isn't a review.
- **Ask the model to argue against itself.** Breaks the borrowed-confidence effect. If you can't adjudicate between its two confident answers, you've found a surrender site.
- **Notice fatigue.** Surrender is a fatigue phenomenon. First task of the day gets real thought; the fifth gets a glance.
- **Watch where the confidence is coming from.** Defending a choice you can't reconstruct is a surrender artifact. Rebuild the *why* before continuing.

### Example

You're eight weeks into a project. The agent produces a 600-line PR. Variable names look reasonable, the tests pass, you approve. A subtle change in transaction ordering slipped through. You didn't review the code — you *ratified* it. The surrender was the absence of a decision.

Compare: on another task, you sketch what you expect the answer to be before prompting. The agent returns something different. You pause, think about why, realize either (a) your expectation was incomplete, which teaches you something, or (b) the model is wrong, which you now catch. Same tool, different posture, opposite outcome for your mental model of the system.

The line between these two postures moves under your feet every day. The job is staying calibrated about which side you're on right now.

*Source and further reading: [Cognitive Surrender](https://addyosmani.com/blog/cognitive-surrender/) by Addy Osmani.*

## Proprioceptive Understanding

> When you truly understand something, you can feel it in your body — not just describe it in words.

### Principle

Deep understanding is touch-based and physical, not just verbal. Chess players *feel* weak squares. Feynman rolled on the floor simulating physics. Einstein imagined chasing a beam of light. A "words-only" understanding can only go so far. Simulations and games build this bone-level grasp because they provide fast feedback loops on a model of reality. School mostly fails at this because it optimizes for exam algorithms, not felt understanding.

### When it applies

- Learning a new technical concept or domain
- Teaching or explaining something to others
- Evaluating whether you truly understand vs. can just recite

### Example

You "learned" orbital mechanics in school but can't explain why orbits work. After 20 hours of Kerbal Space Program, you *feel* how velocity, altitude, and gravity interact — you've built physical intuition no textbook gave you.

*Source and further reading: [Video Games are the Future of Education](https://nabeelqu.co/education) by Nabeel S. Qureshi.*

## See, Don't Recall

> She couldn't think of anything to write about Bozeman because she couldn't recall anything she had heard worth repeating. She was strangely unaware that she could look and see freshly for herself. — Robert Pirsig

### Principle

There are two modes of generating thought: retrieval (searching memory for pre-existing opinions) and direct seeing (engaging with reality firsthand). Most people default to retrieval. When the archive is empty, they freeze — not because there's nothing to say, but because they're looking in the wrong place. Original thought comes from observation, not recollection.

### When it applies

- Writer's block or "I have nothing to say" paralysis
- Design reviews where everyone repeats best practices but nobody looks at the actual system
- Brainstorming sessions that produce only recycled ideas
- Any situation where effort and discipline are present but output is zero

### Example

A student asked to write about Bozeman couldn't produce a word — she had no stored opinions about it. Told to describe the upper-left brick of one building, she wrote 5,000 words. The brick forced her out of retrieval mode and into seeing mode. Reality is inexhaustible; your memory of other people's takes is not.

## Write Things Down

> Your mind is for having ideas, not holding them.

### Principle

Working memory is a hard constraint — probably innate and fixed. When Nabeel used a scratch doc for chess puzzles, his accuracy shot up dramatically. Externalizing your thinking frees mental RAM for actual reasoning. This is why GTD works, why architects draw diagrams, and why the best thinkers keep notebooks.

### When it applies

- Debugging a complex multi-step problem
- Holding context across 5+ workstreams
- Any decision with more than 3 variables

### Example

Instead of trying to hold the entire system design in your head during a review, sketch the data flow on paper first. You'll catch issues you'd miss purely in your head because your working memory is now free to reason instead of remember.

*Source and further reading: [Notes on Puzzles](https://nabeelqu.co/puzzles) by Nabeel S. Qureshi.*

## Closing principle

Use tools to extend judgment, not to avoid forming it. The output matters, but the retained ability to inspect and improve that output matters longer.
