---
path: thinking-under-uncertainty
tags:
  - "thinking principles"
  - "decision making"
  - "mental models"
  - "epistemology"
date: 2026-08-03T07:30:00.000Z
title: "Thinking Under Uncertainty"
render_in_place: false
categories:
  - "thinking"
related:
  - "mental-models"
  - "estimates-are-heard-as-commitments"
  - "the-author-frames-the-decision"
---

Good decisions do not require certainty. They require a disciplined way to expose assumptions, update beliefs, and choose a move whose downside you can survive.

These principles form a practical toolkit for reasoning when the evidence is incomplete and the consequences are real.

## Change Direction on a Dime

> It's better to do the right thing with new information than to stay the course because you had a plan.

### Principle

Sunk cost loyalty to a plan is the enemy of good outcomes. The best organizations make decisions quickly and go all-in when they choose a direction. The ability to pivot fast at scale is a massive competitive advantage — Google lost it, OpenAI kept it.

### When it applies

- When new data contradicts your current plan
- When you're defending a decision just because you already started
- Quarterly planning that feels like theater

### Example

Mid-sprint, you realize the approach is wrong. Instead of finishing the sprint "because we committed," stop, regroup, and redirect. The cost of finishing the wrong thing is always higher than the cost of changing course.

*Source and further reading: [Reflections on OpenAI](https://calv.info/openai-reflections) by Calvin French-Owen.*

## Circle of Competence

> The size of your circle matters less than knowing its edges.

### Principle

Stick to what you truly understand. Going outside your circle of competence invites trouble — not because you're dumb, but because you don't know what you don't know. The danger zone is thinking you understand something when you don't.

### When it applies

- Taking on a project in an unfamiliar domain
- Giving advice on something you've only read about
- Deciding whether to build vs. buy vs. hire an expert

### Example

You're a backend engineer asked to review a complex ML pipeline. Instead of pretending to evaluate the model architecture, focus on what you know (infra, data flow, reliability) and flag that you need an ML expert for the rest. Knowing the boundary is the skill.

*Source and further reading: [Mental Models, Analytical Frameworks, and Decision Tools](/posts/mental-models/).*

## Conviction That a Solution Exists

> Believing there's an answer is what keeps you searching long enough to find it.

### Principle

Puzzle books are forgiving — you know a solution exists, so you persist. Real life doesn't guarantee that. Founders and scientists share the same courage: faith that a findable answer exists, and willingness to dash against the rocks to get there. But you also need to know when the maze has no exit.

### When it applies

- Stuck on a hard technical problem for days
- Deciding whether to pivot or persist on a project
- Evaluating if a problem is structurally unsolvable vs. just hard

### Example

You've been trying to make a system work for weeks. Ask: "Am I in a puzzle book (solvable, keep going) or in the wild (maybe structurally broken)?" The Airbnb founders persisted through a year of nothing. But most startups that persist that long are just slow to admit defeat.

*Source and further reading: [Notes on Puzzles](https://nabeelqu.co/puzzles) by Nabeel S. Qureshi.*

## Fallibilism

> You can never know whether you have reached certain truth. Every assertion is provisional.

### Principle

The best theories are those that have survived the hardest attempts to disprove them — not those with the most confirmatory evidence. Seeking confirmation is a waste of time; seek disconfirmation. Science is an infinite process — solving a problem raises deeper problems. Even math proofs are fallible. If we ever reached truth, we'd have no way to know. Judge ideas on their merits, not their source — sometimes emotions are right and reason is wrong.

### When it applies

- Evaluating confidence in your beliefs or technical decisions
- Designing experiments or tests
- Resisting the urge to stop questioning once you have "an answer"

### Example

Astrology seeks confirmatory evidence but never sets itself up to fail — it explains everything, therefore nothing. Good theories take epistemological risks. Your architecture design should specify what would prove it wrong, not just what supports it.

*Source and further reading: [Notes On Karl Popper](https://nabeelqu.co/post-popper) by Nabeel S. Qureshi.*

## The Falsification Ratio

> Spend more time trying to disprove your idea than you spent coming up with it.

### Principle

Grandmasters spend 4x longer falsifying a candidate move than finding it (4:1 ratio). Amateurs spend half the time (0.5:1). The quality of your decisions correlates directly with how hard you try to prove yourself wrong before committing.

### When it applies

- Evaluating a technical design or architecture decision
- Making a hiring call after an interview
- Choosing between competing approaches to a problem
- Any decision where confirmation bias is likely ("hope chess")

### Example

You find a promising solution to a production bug. Instead of shipping it immediately, spend 4x the time asking: "What's the strongest argument this is wrong? What would break? What am I not seeing?" — then ship with confidence.

*Source and further reading: [Notes on Puzzles](https://nabeelqu.co/puzzles) by Nabeel S. Qureshi.*

## Fermi Everything

> Don't take claims at face value. Estimate the rough order of magnitude yourself.

### Principle

The smartest people check whether claims are plausible by doing back-of-envelope math. Most people don't "think in numbers" and are easily fooled. Fermi estimation — using what you already know to bound an unknown quantity — is a superpower. Even putting upper and lower bounds on something ("not before X, not after Y") yields surprising conclusions.

### When it applies

- Evaluating bold claims (market size, timelines, impact)
- Making decisions under uncertainty
- Filtering out BS in meetings or pitches

### Example

SBF estimated blockchain needs ~1M transactions/second for global scale. Ethereum does 10. That's 6 orders of magnitude off — no amount of hand-waving about "scaling soon" changes that math. The estimation instantly clarifies the real challenge.

*Source and further reading: [Advice That Actually Worked For Me](https://nabeelqu.co/advice) by Nabeel S. Qureshi.*

## Fight Complacency

> "Good enough" is the enemy of correct. Your brain wants to stop thinking as soon as possible.

### Principle

Our brains are wired to conserve energy — they'll accept the first plausible answer and stop searching. In chess, complacency means missing a winning move because a "decent" one appeared first. In work, it means shipping something that works but isn't right. The skill is noticing when you've stopped too early.

### When it applies

- Code review — did you actually check, or just skim?
- Debugging — did you find the root cause, or just a symptom?
- Design decisions — is this the right answer, or the first answer?

### Example

You find a fix that makes the test pass. But did you understand *why* it was failing? The complacent move is to ship the fix. The thorough move is to understand the failure mode — which might reveal a deeper issue.

*Source and further reading: [Notes on Puzzles](https://nabeelqu.co/puzzles) by Nabeel S. Qureshi.*

## Hanlon's Razor

> Never attribute to malice that which is adequately explained by incompetence.

### Principle

People aren't out to get you. They make mistakes, forget things, speak without thinking, act on incomplete information. When you assume stupidity rather than malice, you respond with empathy and clarity instead of defensiveness and escalation.

### When it applies

- A colleague's PR breaks your service
- Someone doesn't reply to your message for days
- A decision from leadership that seems to ignore your team

### Example

Your deploy got rolled back by another team without a heads-up. Your instinct says sabotage. Reality: they were firefighting a P1 and didn't think to notify. Assume good faith first — you'll be right 95% of the time, and the 5% will reveal itself.

*Source and further reading: [Mental Models: The Best Way to Make Intelligent Decisions (\~100 Models Explained)](https://fs.blog/mental-models/) by Shane Parrish.*

## Inversion

> Instead of asking how to succeed, ask what would guarantee failure — then avoid that.

### Principle

Flip the problem. Instead of "How do I build a great product?", ask "What would make this product terrible?" By identifying paths to failure, you avoid them. Much of success comes from simply not making common mistakes.

### When it applies

- Planning a new project or system design
- Evaluating risks before a launch
- Personal decisions (career, investments)

### Example

Before launching a feature, ask: "What would make users hate this?" — slow load times, confusing UI, data loss. Now make sure none of those happen. You've just de-risked the launch without needing a brilliant insight.

*Source and further reading: [Mental Models, Analytical Frameworks, and Decision Tools](/posts/mental-models/).*

## Let Theories Die In Your Stead

> Generate many ideas, filter hard. There is no way to reliably produce only good ideas.

### Principle

In evolution, organisms literally die if maladapted. In knowledge, we can let *theories* die instead. Since infallible idea generation is impossible, the winning strategy is: (1) high ideational fluency — generate lots of ideas, (2) wide relevance horizon — draw from diverse domains, (3) suspend critical judgment temporarily — be an intellectual risk-taker. Then filter ruthlessly. Shockley: shape zany ideas into something feasible. Pauling was wrong 80% of the time, but the other 20% was Nobel-worthy.

### When it applies

- Brainstorming solutions to hard problems
- Evaluating whether to pursue a "crazy" idea
- Building a creative practice or innovation process

### Example

Darwin performed "fool's experiments" — trying improbable ideas most would dismiss instantly. Most failed. But the ones that worked changed biology forever. The error rate of idea generation is irreducible; the trick is volume + selection.

*Source and further reading: [Notes On Karl Popper](https://nabeelqu.co/post-popper) by Nabeel S. Qureshi.*

## Loss Aversion Is Asymmetric

> Taking something away hurts about twice as much as adding something equivalent helps.

### Principle

Prospect theory: losses loom roughly 2x larger than gains of equal size. In product terms, removing a feature, raising a price, shrinking a tier, or changing a familiar interaction costs you more goodwill than the equivalent addition earns you. Teams routinely underestimate this because from the inside, "we're replacing X with a better Y" feels like a net improvement. From the outside, it's a loss followed by an unfamiliar thing that has to earn its place.

The implication: the bar for removal is much higher than the bar for addition. If you must remove something, either leave it available as an option, migrate users gently, or be prepared for backlash disproportionate to the change's "objective" size.

### When it applies

- Redesigning a UI that removes or relocates features users rely on
- Pricing changes, especially removing a free tier
- Deprecating APIs, endpoints, or products
- Replacing a tool with a "better" one

### Example

Windows 8 removed the Start menu and replaced it with Metro tiles. Objectively, tiles had more information density. Subjectively, users lost a 17-year-old motor habit. Microsoft spent two releases (8.1, 10) restoring what they removed.

Compare: the iPhone headphone jack removal succeeded partly because AirPods made the loss tolerable *and* Apple's moat absorbed the unhappy years.

## The Map Is Not the Territory

> Don't confuse your model of reality with reality itself.

### Principle

Every plan, dashboard, metric, or mental model is a simplification. It highlights some things and hides others. The danger is when you start making decisions based on the map while ignoring what's actually happening on the ground. When you don't make the map, choose your cartographer wisely.

### When it applies

- Trusting metrics dashboards without checking the actual user experience
- Following a project plan that no longer reflects reality
- Relying on someone else's summary instead of reading the source

### Example

Your sprint velocity chart says the team is on track. But two engineers are burned out and the remaining work is the hardest 20%. The map (velocity) says fine. The territory (team health + remaining complexity) says trouble. Go see the front.

*Source and further reading: [Mental Models: The Best Way to Make Intelligent Decisions (\~100 Models Explained)](https://fs.blog/mental-models/) by Shane Parrish.*

## Margin of Safety

> Build buffers for when things don't go as planned — because they won't.

### Principle

The difference between a system that barely handles the expected load and one that handles 10x without breaking. Always ask: what if I'm wrong? In the short term you look overly cautious. In the long run, you survive when others break.

### When it applies

- Capacity planning and system design
- Setting deadlines and estimates
- Financial decisions (savings, debt)

### Example

You estimate a migration takes 2 weeks. Add a week of margin. When the unexpected schema issue hits on day 10, you still ship on time instead of scrambling. The margin wasn't wasted — it was insurance.

*Source and further reading: [Mental Models: The Best Way to Make Intelligent Decisions (\~100 Models Explained)](https://fs.blog/mental-models/) by Shane Parrish.*

## One-Way Doors vs. Two-Way Doors

> Not every decision deserves the same amount of deliberation — the amount of process a decision earns should scale with how hard it is to undo.

### Principle

Before deciding *how* to decide, classify the decision by reversibility. A two-way door — reversible, cheap to undo, low blast radius — should get a lightweight process: decide fast, with ~70% of the information you wish you had, and rely on your ability to course-correct rather than your ability to be right upfront. A one-way door — irreversible, expensive or impossible to undo, high blast radius — earns slow, careful, high-consensus deliberation.

The failure mode runs in both directions: treating a two-way door like a one-way door burns weeks of committee time on something you could've tested and reversed in a day. Treating a one-way door like a two-way door — moving fast on something that can't be undone — is how organizations create real, lasting damage. Most bad process isn't wrong on the merits; it's the wrong *amount* of process for the actual stakes of the decision.

### When it applies

- Before setting up a decision meeting or approval chain — ask "can we undo this cheaply if we're wrong?" first
- Diagnosing organizational slowness — often the cause is applying one-way-door process to two-way-door decisions by default
- Personal decisions (job offers, home purchases, health choices) — sort by reversibility before by importance; a reversible-but-important decision still doesn't need paralysis-inducing deliberation
- Pushing back on excessive caution: "what would make this a two-way door?" is often a productive reframe

### Example

Bezos, 2015/2016 shareholder letters: most decisions at Amazon should be made with ~70% of desired information, not 90%, because waiting for 90% is usually just slowness — and being wrong is cheap if you're good at detecting and reversing it fast. The letter contrasts this with "Day 2" companies that apply the same heavyweight, high-consensus process to every decision regardless of stakes, mistaking uniform rigor for good judgment.

*Source and further reading: [2016 Letter to Shareholders](https://www.aboutamazon.com/news/company-news/2016-letter-to-shareholders/) by Jeff Bezos.*

## Revealed Preferences Beat Stated Preferences

> Watch what people do, not what they say they want.

### Principle

What people say in surveys, petitions, and outrage threads is filtered through identity, social performance, and loss aversion. What they actually do — clicks, time spent, renewals, return visits — is filtered through nothing. When the two disagree, behavior is the signal and speech is the noise. Most loud backlashes to product changes are contradicted by the same users' engagement metrics within weeks.

The inverse is also true: enthusiastic survey responses ("I'd definitely pay for that!") routinely fail to convert into actual purchases. Ask what someone *did* last week, not what they *would* do next week.

### When it applies

- Evaluating backlash to a launched feature
- Reading user research, petitions, tweets, App Store reviews
- Pricing decisions and willingness-to-pay estimates
- Deciding whether to roll back a change

### Example

Facebook's News Feed launch (2006): 700K users joined "Students Against Facebook News Feed" — 7% of the user base. The same week, average time-on-site went up. They said they hated it; they used it more. Holding the line was correct because behavior disagreed with speech.

The trap: this principle gets cited to justify ignoring *every* backlash, including ones where behavior also turned against the product (Digg v4, Sonos app). Check behavior before invoking the principle.

## Scientist Brain vs Founder Brain

> Thoroughness and speed are both virtues — but in different contexts.

### Principle

Scientist-brain: unreasonably thorough, curiosity-driven, checks every edge case, goes down rabbit holes. Founder-brain: moves fast on imperfect info, holds 10+ workstreams, decides and iterates. Neither is universally better — the mistake is applying the wrong one to your current situation.

### When it applies

- When you catch yourself over-researching instead of shipping
- When you catch yourself shipping without thinking
- Choosing how deep to go on a problem vs. moving to the next one
- Recognizing which mode your team needs right now

### Example

You're debugging a subtle race condition (scientist-brain needed). But you're also blocking a launch decision that just needs a directional call (founder-brain needed). Know which hat to wear.

*Source and further reading: [Notes on Puzzles](https://nabeelqu.co/puzzles) by Nabeel S. Qureshi.*

## Second-Order Thinking

> "And then what?" — the question most people forget to ask.

### Principle

First-order thinking: "If we do X, Y happens." Second-order thinking: "If Y happens, then Z follows, and that changes A." Most people stop at the first order. The best decisions come from tracing the chain of consequences 2-3 steps out.

### When it applies

- Policy or process changes ("if we add this review step, what happens to velocity?")
- Technical decisions with downstream effects
- Reacting to competitor moves or market shifts

### Example

"Let's add mandatory code review for all PRs" → First order: better code quality. Second order: slower shipping, engineers batch larger PRs to reduce review overhead, which actually makes reviews worse. Third order: people start rubber-stamping. The cure became the disease.

*Source and further reading: [Mental Models, Analytical Frameworks, and Decision Tools](/posts/mental-models/).*

## Status Doesn't Transfer Across Domains

> Being right about one thing, once, at scale, is not evidence of being right about an unrelated thing — but it feels like it is, to everyone involved, including the person themselves.

### Principle

Competence and status are supposed to be domain-specific — you're good at X because you did the work in X. But status doesn't stay put. Once someone accumulates enough of it in one domain (founder who built a $100B company, general who won a war, doctor who's the best in her field), other people start extending deference to their opinions in domains they have no particular standing in — health, politics, parenting, economics, how another industry should be run. And critically, the person on the receiving end usually can't feel the boundary either: the same fluency and conviction that got them right in their actual domain gets misapplied with the same fluency and conviction outside it, and the applause doesn't stop at the border to tell them they've crossed it.

This is different from the friction/calibration mechanism (altitude removing the ordinary resistance that keeps you accurate) — this is specifically about *expertise leaking across domain boundaries* via social deference, independent of whether the person's daily friction has changed at all. A brilliant engineer's product instincts do not make their macroeconomic takes correct; a founder's product instincts do not make them right about which schools their employees' kids should attend. The mechanism runs on both sides: the audience over-extends trust because impressive-in-one-place reads as generically impressive, and the expert under-notices the extension because their own confidence doesn't come with domain tags attached.

### When it applies

- Weighing advice from someone successful in an unrelated field — separate "this person is credible" from "this person is credible *here*"
- Noticing your own confidence bleeding from a domain where you've earned it into one where you haven't
- Reading founder/executive pronouncements on politics, health, or fields outside their company — check whether the claim is actually downstream of their real expertise
- Org design — don't let seniority in one function grant unchecked authority over an unrelated one just because it's the same person

### Example

Executives who built genuinely great companies (tech, retail, finance) are routinely treated as authorities on nutrition, geopolitics, or how to fix a school system — not because they've done the work in those domains, but because "they were right about X at massive scale" gets rounded up to "they're right, generally." The Gervais Principle's Sociopath-to-Clueless promotion dynamic shows a related but distinct trap from the other side: once someone is promoted on the strength of one skill (sales), the organization keeps extending them authority (management) in a domain the original skill says nothing about.

## Steelman Then Decide

> Test your move against the opponent's strongest possible reply, not their weakest.

### Principle

In chess, weak players play "hope chess" — they launch an attack assuming the opponent will cooperate. Strong players check the strongest counter-move first. In life, people rarely model the best arguments against their positions. Your brain *resists* this motion — it wants the idea to work. But if you care about truth, habitually steelmanning the opposition is essential.

### When it applies

- Evaluating your own technical design or business strategy
- Preparing for a debate, review, or pitch
- Any decision where you feel very confident (that's when you're most vulnerable)

### Example

You're convinced your startup should pivot to enterprise. Before committing, force yourself to articulate the strongest case for staying consumer. If you can't defeat that argument, your conviction isn't earned.

*Source and further reading: [Advice That Actually Worked For Me](https://nabeelqu.co/advice) by Nabeel S. Qureshi.*

## Success on Whose Scoreboard

> "It worked" is incomplete until you answer: worked by which measure, for whom, over what horizon?

### Principle

Every outcome is scored on multiple scoreboards simultaneously: revenue, stock price, user trust, competitive position, brand health, talent retention, industry influence, regulatory exposure. A decision can win decisively on one scoreboard and lose decisively on another, and which one you cite as the verdict shapes the whole story.

The failure mode: picking the scoreboard that makes the decision look good (usually financial, usually short-term) and treating that as "the" verdict. The honest analysis names all the scoreboards, scores on each, and lets the reader see the tradeoffs.

This also exposes a lot of survivor-bias storytelling in business writing. "They were right and customers were wrong" almost always means "right on revenue." It rarely means "right on trust," "right on competitive position 10 years later," or "right by the customers who left and don't show up in the data."

### When it applies

- Evaluating any case study of a controversial decision
- Post-mortems on your own product or strategic choices
- Comparing alternatives ("option A wins on X, option B wins on Y")
- Writing or reviewing strategic narratives

### Example

Adobe's 2013 subscription shift. Revenue scoreboard: massive win, ~2.5x revenue growth in 7 years. Stock scoreboard: ~5x in five years. Customer-sentiment scoreboard: persistent hostility, "Adobe tax" as common phrase. Competitive-moat-10-years-later scoreboard: Figma ate UI design, Affinity/Procreate took hobbyists, AI-era trust deficit showed up in the 2024 ToS backlash. Calling it simply "a success" is only true if you pick one scoreboard and ignore the others.

## Survivorship Bias

> You only see the winners. The graveyard of failures is silent.

### Principle

We over-attribute success to what the successful did, ignoring the thousands who did the same thing and failed. History is written by the victors. The lottery winners get interviewed; the losers don't. This makes us learn false lessons from studying only success stories.

### When it applies

- Reading startup success stories and copying their playbook
- Evaluating a strategy based only on people who succeeded with it
- "This person dropped out of college and became a billionaire"

### Example

"Company X succeeded by moving fast and breaking things, so we should too." But you don't see the 1,000 companies that moved fast, broke things, and died. The strategy might be necessary but not sufficient. Always ask: what about the ones who didn't make it?

*Source and further reading: [Mental Models: The Best Way to Make Intelligent Decisions (\~100 Models Explained)](https://fs.blog/mental-models/) by Shane Parrish.*

## The Lindy Effect

> The longer something non-perishable has survived, the longer it's likely to keep surviving.

### Principle

For things that don't have a fixed biological lifespan — ideas, technologies, institutions, books, practices — survival itself is evidence of robustness, and that evidence compounds over time rather than decaying. A book that's been read for 200 years is more likely to be read in another 200 than a bestseller from last year, because it has already withstood two centuries of changing taste, competing ideas, and cultural shifts that killed off its contemporaries. This is the opposite of how we intuit human lifespan (where longer life means less time left) — Lindy applies specifically to things whose "mortality" comes from being outcompeted or forgotten, not from aging in a fixed body.

The trap in applying it: Lindy is a prior, not a proof. It's a reason to give old, surviving things the benefit of the doubt against shiny new alternatives — not a reason to assume anything old is automatically correct, or that everything new is automatically fragile. New things that solve a genuinely new problem don't get penalized just for being new; Lindy mainly warns against discarding a well-tested old solution for an untested new one on the strength of novelty alone.

### When it applies

- Evaluating whether to adopt a brand-new framework/tool/process versus a battle-tested older one for a genuinely comparable problem
- Weighing advice, philosophies, or institutional practices that have persisted across generations against fashionable new theories
- Investing or betting on trends — durability itself is a signal, distinct from current popularity
- Resisting the pull of "this old thing must be outdated" reasoning without actually checking if the new alternative has proven anything yet

### Example

SQL has survived, essentially unchanged in its core relational model, since 1974 — outliving dozens of "SQL killer" paradigms that were each declared its replacement. Lindy says: the fact that it's still here after 50 years of intense competitive pressure from alternatives is itself strong evidence it will still be relevant in 20 more, regardless of how unfashionable it looks next to this year's new database paradigm.

## The Will To Think

> Intelligence is as much about virtues — honesty, integrity, bravery — as raw intellect.

### Principle

The smartest people simply refuse to accept answers they don't understand, no matter how many others believe it. This is a *software* trait, not hardware — it can be learned. It requires energy (thinking hard is exhausting), honesty (not fooling yourself), and bravery (being willing to look stupid). Fermi called it "the will to think" — the conviction that tedious, precise thinking is worth the effort.

### When it applies

- Learning something new and tempted to nod along
- In a meeting where nobody seems to understand but nobody asks
- Reviewing code or designs that "seem fine" but feel off

### Example

Gladwell's father would say "I don't understand. Explain that to me" in a slow, dumb voice — over and over until he got it. If he'd met Bernie Madoff, he would never have invested, because he'd have asked "I don't understand" a hundred times.

*Source and further reading: [How To Understand Things](https://nabeelqu.co/understanding) by Nabeel S. Qureshi.*

## Closing principle

The common thread is intellectual mobility: hold a view strongly enough to act, but lightly enough to replace it when reality disagrees.
