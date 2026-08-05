---
path: how-organizations-really-decide
tags:
  - "thinking principles"
  - "organizations"
  - "influence"
  - "communication"
date: 2026-08-01T07:30:00.000Z
title: "How Organizations Really Decide"
render_in_place: false
categories:
  - "thinking"
related:
  - "political-capital"
  - "the-meeting-before-the-meeting"
  - "shadow-org-chart"
---

An organization is not only its reporting chart and written process. It is also a network of incentives, attention, trust, and locally rational decisions.

These principles help explain why apparently irrational outcomes are often predictable from inside the system.

## Be In The Room

> It's better to be in the room when things happen, even if you later have to leave and sound the alarm.

### Principle

Engaging with morally grey or difficult domains — government, military, AI, healthcare — is better than disengaging entirely. The most influential people are those who are present when decisions are made. Pontificating from the sidelines changes nothing. Being in the room means accepting that not every decision will be 100% good, but betting that your presence tips the balance toward better outcomes.

### When it applies

- Deciding whether to work on something with ethical complexity
- Choosing between a "safe" role and one with real-world impact
- Evaluating whether to engage with imperfect institutions

### Example

AI safety researchers who join labs or government positions have far more influence than those who only write blog posts. Paul Christiano went from alignment research to leading the US AI Safety Institute — that's being in the room.

*Source and further reading: [Reflections on Palantir](https://nabeelqu.co/reflections-on-palantir) by Nabeel S. Qureshi.*

## Bikeshedding

> The amount of debate a decision attracts is inversely proportional to how much it actually matters.

### Principle

Parkinson's other law (yes, the same Parkinson): a committee will spend far more time debating the color of the bikeshed than approving the multi-million dollar nuclear power plant next to it, because everyone has an opinion on paint color and can argue about it comfortably, while almost nobody feels qualified to challenge the reactor design — so that gets rubber-stamped in minutes. Trivial, easily-graspable decisions generate disproportionate debate precisely because they're accessible; consequential, complex decisions get less scrutiny because engaging with them requires expertise most people in the room don't have and don't want to admit they lack.

The practical tell: if a meeting is spending 40 minutes on something reversible and low-stakes and 5 minutes on something expensive and hard to undo, the room's engagement is tracking accessibility, not actual importance.

### When it applies

- Watching a design review spend most of its time on naming/formatting and rubber-stamp the actual architecture
- Structuring meetings — deliberately front-load or protect time for the decisions that matter most, since they won't naturally attract debate
- Noticing you personally engage more with decisions you understand easily, regardless of their stakes
- Any committee or consensus process where participation is optional/voluntary — trivial topics will always be over-subscribed

### Example

An engineering org spends two meetings debating whether a new internal tool should be called "Sherlock" or "Watson," and approves the underlying data migration strategy — which will be nearly impossible to reverse once real customer data has moved — in the last five minutes with no real discussion, because nobody in the room felt confident enough to challenge it.

## Concede the Grievance, Keep the Decision

> When you hold the line on an unpopular change, fix the specific thing that actually hurt — fast.

### Principle

Backlashes are rarely about the headline. They're about one or two specific sharp edges of the change that cut people. If you can identify and sand down those edges while keeping the core decision, you hold strategic ground without making the backlash permanent. If you just "hold the line" without concessions, grievance ossifies into reputation.

The playbook:
1. Separate the *decision* from its *implementation details*.
2. Identify the specific grievance (privacy, pricing cliff, removed capability, broken workflow).
3. Ship a targeted concession within days, not quarters.
4. Keep the core decision.

This is not appeasement and not surrender. It's recognizing that the decision and its edges are two different things, and you only need to win on the decision.

### When it applies

- Launching features that you know will draw backlash
- Pricing or monetization changes
- Deprecations and removals
- Redesigns that break familiar workflows

### Example

Facebook News Feed (2006): within 72 hours of the backlash, Zuckerberg shipped granular privacy controls letting users choose what appeared in the feed. The feed itself stayed. The sharpest grievance ("my ex sees my relationship status update without visiting my profile") got a control. Feature survived; trust partially repaired.

Adobe's Creative Cloud (2013) did a smaller version: the $10/month Photography Plan addressed the loudest, most sympathetic constituency (photographers) while keeping subscription-only for everyone else. Less elegant, but the same structure.

## Context Is That Which Is Scarce

> Go to where the problem lives. The flattened requirements doc is never the full picture.

### Principle

Deep, tacit knowledge of how a business actually works — the messy reality on the ground — is the scarcest and most valuable input to building great solutions. You can't get it from a spec document. You get it by embedding yourself in the customer's world: their factory floor, their hospital, their office. "Get on a plane first, ask questions later."

### When it applies

- Building enterprise software or B2B products
- Scoping a new project or engagement
- Trying to understand why a solution isn't landing with users

### Example

Palantir FDEs moved to Toulouse and worked in the Airbus factory 4 days/week. They didn't build from a requirements doc — they saw the actual A350 assembly bottlenecks firsthand, then built software that 4x'd manufacturing pace. No amount of remote spec-writing would have produced that.

*Source and further reading: [Reflections on Palantir](https://nabeelqu.co/reflections-on-palantir) by Nabeel S. Qureshi.*

## The Empathy Tax

> The invisible weight of carrying everyone's context, not just your own.

### Principle

As a leader, you don't just carry your own work — you carry your team's blockers, anxieties, interpersonal conflicts, and career worries. Your brain holds 8+ projects simultaneously while each person holds 1-2. This mental load is the real exhaustion, not the hours. Both things are true: the work is fulfilling AND it's draining.

### When it applies

- When you feel exhausted but can't point to why
- When your brain won't shut off at 2am about sprint planning
- When you're absorbing someone's personal crisis as a manager

### Example

A team member shares they're going through a divorce. You feel it — not just as their manager, but as a human. That emotional weight doesn't show up on any burnout checklist, but it's real and cumulative. Acknowledge it. Build recovery time.

*Source and further reading: [I Love My Job and It's Exhausting](https://www.codecabin.dev/post/i-love-my-job-and-its-exhausting) by Chris Bongers.*

## Goodhart's Law

> When a measure becomes the target, it stops being a good measure.

### Principle

Any metric chosen to represent a goal will eventually be optimized directly, and once people optimize the metric instead of the underlying goal, the metric decouples from the thing it was meant to track. This isn't usually malicious — it's what happens whenever a measurement is used to evaluate or reward people, because people rationally respond to whatever they're being measured on, even if that means gaming the number rather than achieving the real outcome.

The practical trap: the moment you announce "we're tracking X," X stops being a neutral observation and becomes a target, and targets get gamed — sometimes cleverly, sometimes by accident, but reliably. The fix isn't "don't measure anything" — it's staying suspicious of any metric that's been public and incentivized for a while, and periodically checking whether the metric still tracks the real goal or has become its own goal.

### When it applies

- Designing performance metrics, OKRs, or KPIs for a team
- Noticing a number has been "green" for a long time despite qualitative complaints — check if it's been gamed
- Evaluating standardized tests, ranking systems, or any proxy used to allocate rewards
- Any metric with a name that sounds exactly like the thing it measures — the closer the metaphor, the easier it is to forget it's still just a proxy

### Example

A support team is measured on "average ticket resolution time." Resolution time drops sharply after the metric is announced — not because problems are solved faster, but because agents start closing tickets prematurely and reopening them if the customer complains again, which resets the clock on a "new" ticket. The metric improved. The actual goal — customers having their problems solved — did not.

## The HiPPO Effect

> When evidence is absent, the room defaults to the Highest Paid Person's Opinion — and calls the capitulation "alignment."

### Principle

HiPPO — **Hi**ghest **P**aid **P**erson's **O**pinion — is a documented term, popularized by Avinash Kaushik (Google) around 2006–08 and now standard in the experimentation literature (it's the recurring foil in Kohavi/Tang/Xu's *Trustworthy Online Controlled Experiments*). The classic, narrow meaning: in the absence of data, decisions default to the most senior person's view rather than to evidence. The whole point of an A/B test is to settle the question so the HiPPO doesn't decide by fiat.

There's a second, related failure layered on top: the room doesn't just defer — it *manufactures consensus* around the senior opinion and rebrands the surrender as agreement. That part is closer to **groupthink** (Janis) and the **Abilene Paradox** (everyone assents to something nobody actually wants) than to the textbook HiPPO. Authority bias supplies the deference; social proof supplies the nodding.

The antidote is the same in both cases: force a number or a falsifiable claim onto the table before the most senior voice speaks. Evidence outranks rank. When there's no evidence, name that explicitly — "we're guessing, and we're guessing in $NAME's direction" — so the guess isn't disguised as a decision.

### When it applies

- Design reviews and architecture calls where the principal/manager speaks first
- Prioritization meetings with no data, only seniority
- "Alignment" that arrives suspiciously fast after someone senior commits
- Any room where dissent went quiet rather than getting resolved

### Example

A launch decision hinges on whether users prefer flow A or B. No experiment is run; the VP favors A, the room "aligns" within minutes, and it ships. Six weeks later the metrics say B. The HiPPO didn't decide because they were right — they decided because no one put a measurable alternative in front of the opinion. The fix wasn't more discussion; it was a two-arm test that would have outranked the title.

*Source and further reading: [Nobody Pushed Back: Why Engineers Stay Silent Until It's Too Late](https://howtocenterdiv.com/beyond-the-div/nobody-pushed-back) by imkyssa.*

## Organizations Have a Load-Bearing Illegible Component

> The written rules are not the organization — they're the part of the organization that was made legible enough to write down.

### Principle

Every functioning organization runs on a mix of formal, documented rules and informal, undocumented judgment calls, exceptions, and relationships — and the informal part isn't decoration on top of the "real" formal structure, it's load-bearing. People who treat the written policy as the complete map of how an organization actually works (a version of the "seeing like a state" mistake — over-prioritizing legibility) will be confused by, or actively harmed by, situations where the informal reality diverges from the documented rule, because they don't have a model for the divergence being normal and expected rather than a violation.

This cuts against the comfortable idea that "just follow the rules and you'll be fine" — following only the written rules, while ignoring the illegible judgment layer everyone else is operating on, can itself be a subtle failure mode, because the written rules were never a complete specification in the first place.

### When it applies

- Interpreting company policy literally when everyone around you is operating on unwritten context you don't yet have
- Onboarding into a new org — the real operating model takes time to learn precisely because it's not written down anywhere
- Designing policy or process — accept that you cannot make the whole organization legible without also destroying the flexibility that makes it function
- Evaluating advice or behavior that "breaks the rules" — ask whether it's exploiting the illegible layer competently or just being reckless

### Example

A new engineer follows the written escalation policy to the letter and is confused when it doesn't produce the outcome the policy implies it should — because the actual mechanism that gets things fixed quickly is an informal relationship with a specific senior engineer who's willing to prioritize favors, a channel that isn't and can't be written into any policy document without breaking the trust that makes it work.

*Source and further reading: [Dangerous advice for software engineers](https://seangoedecke.com/dangerous-advice/) by Sean Goedecke.*

## The Loud Minority Trap

> A small group can sound like everyone — in both directions.

### Principle

Humans weight vivid, emotionally charged input disproportionately to its statistical prevalence. In product and organizational decisions, this leads to symmetric errors:

1. *Before shipping*: a small group of loud power users demands a change. The team mistakes volume for consensus and ships it. Quiet users, who were content, get harmed.
2. *After shipping*: a small group complains loudly about the change. The team panics and reverses. Quiet users, who were adapting fine, lose the improvement.

Both errors come from the same root: treating self-selected vocal feedback as representative. The fix is to put a number on the complaint — what fraction of total users, weighted by what metric — before deciding it's the majority view.

Rule of thumb: a visible petition or outrage thread is a signal worth investigating, not a verdict. Pair it with behavioral data. If both agree, act. If they disagree, the behavioral data is usually closer to the truth.

### When it applies

- Reading social media reactions to a launch
- Prioritizing feature requests
- Interpreting survey results vs. usage data
- Responding to internal complaints about process changes

### Example

Facebook News Feed (2006): 700K-member anti-feed group felt like "everyone hates it." It was 7% of the user base, and the remaining 93% were quietly using the feed more than ever. Reversing would have served the vocal 7% and harmed the silent 93%.

Inverted case: the same pattern fools teams into shipping what vocal power users demand, when silent typical users are served by the status quo.

## Metric Wins, Human Losses

> A short-horizon metric win can be a long-horizon brand loss.

### Principle

A/B tests and dashboards measure what's easy to measure over the window that's easy to measure. Engagement, clicks, retention-over-30-days. They don't measure trust, goodwill, identity, or the slow erosion of "this used to be good." A change that wins the test can still lose the product, just on a timescale no one on the team sees.

The specific failure: a feature makes the feed more "engaging" (clicks up, time up) while making it less pleasant (users complain, but keep coming, until one day they stop and switch). By the time the departure shows up in a metric, the causal change was 18 months ago and nobody connects them.

The fix isn't "don't use metrics." It's:
1. Measure over longer windows than the team's attention span.
2. Include qualitative signal (sentiment, NPS, unsolicited feedback) as non-optional.
3. Name the specific user experience the metric is a proxy for, and check the proxy still tracks.

### When it applies

- Running A/B tests on experience changes
- Engagement-driven redesigns
- Growth-team interventions that touch core product
- Any change where "the number went up" is the main argument

### Example

Social feeds that optimized engagement got more engaging *and* less pleasant for a decade. The metrics said "win." The long-term signal — users describing the app as "bad for me," switching platforms, regulators noticing — didn't appear in any dashboard until it was too late to un-build the optimization.

Ad revenue optimization on the open web followed the same pattern. Each step locally rational, the composite result universally disliked.

## Normalization of Deviance

> A weak signal ignored today becomes the acclimated baseline tomorrow — and the earliest, cheapest warning a culture ever gets is a new hire's instinctive "wait, is this normal?"

### Principle

Sociologist Diane Vaughan coined this studying the Challenger disaster: standards erode gradually, not suddenly, as circumstances once classified as "not okay" get quietly reclassified as "okay" — usually because rules seem inefficient, someone breaks a rule for what feels like a good reason and nothing bad happens, or people convince themselves the exception doesn't apply to them. Nobody makes a single decision to lower the bar; it drifts down through hundreds of small, individually-defensible deviations, each one setting precedent for the next.

The critical mechanism is the "new hire WTF" cycle: a new person joins, is horrified by something everyone else treats as normal, gets told "yeah we know, we're concerned about it," and within months has acclimated and is delivering that exact same reassurance to the next new hire. That first reaction is the strongest, cheapest signal an organization will ever get about a given problem — and it's almost always ignored precisely because the person giving it has the least standing to be heard. By the time someone has enough organizational credibility to force change, they've usually stopped noticing the problem at all.

Organizations that eventually fix this rarely do it through persuasion — they do it after getting embarrassed by a real failure, which gives people who already wanted to do things right the political leverage to actually change the process.

### When it applies

- Onboarding new hires — treat their "wait, why do we do it this way?" as valuable data, not naivety to be corrected away
- Auditing your own team's tolerated exceptions ("we always skip X because it's annoying") for whether they've quietly become the baseline
- Recognizing that waiting for a disaster to force change is expensive — the cheaper fix is protecting the channel for weak signals before they're needed
- Diagnosing a culture where nobody can explain why a bad practice persists except "that's just how we do it here"

### Example

A team disables a noisy alert because it's "usually a false positive," and a new hire is startled to learn critical alerts get silenced routinely. Six months later, that same new hire tells the next new hire "yeah, we know it's not great, but it's fine" — until the one time the alert wasn't a false positive, and nobody was watching.

*Source and further reading: [Normalization of deviance](https://danluu.com/wat/) by Dan Luu.*

## Pushback Is Making Cost Visible

> "This is wrong" gets you labeled. "What does this cost us in 18 months?" forces the decision to justify itself.

### Principle

Direct contradiction ("this is a bad idea") reads as an attack on the person who proposed it, so it gets filed under "not a team player" and ignored. Effective pushback doesn't oppose the decision — it makes the decision *account for itself*. You put a price on it, name the failure mode concretely, and ask for the plan that handles it. The question carries the objection without the social cost, and it gives cover to everyone else in the room who was thinking the same thing but wouldn't say it first.

Three reusable forms:
- **Cost over time:** "What does this cost us in 18 months?"
- **Risk handling:** "How are we covering this failure mode in testing?"
- **Reversibility:** "What's the rollback plan if this goes sideways?"

The deeper move is depersonalizing dissent. Disasters (Nokia, TSB, Boeing, Windows Phone) didn't happen because the knowledge was missing — it was present and never traveled, because raising it was a career risk. A question that forces justification routes around that risk: it's not "I object," it's "the decision hasn't answered this yet."

### When it applies

- Design / architecture reviews where you see a problem nobody's naming
- Rooms where a senior voice has already committed and the group is "aligning"
- Migration / launch go/no-go calls with schedule pressure
- Any time you'd otherwise stay quiet and call it "professionalism"

### Example

Instead of "the Big Bang cutover is reckless," ask: "If the cutover fails at 2am, what's our rollback, and how long are customers locked out?" Now the schedule has to answer for the risk in concrete terms — and if there's no good answer, everyone hears it, without you having played the villain.

*Source and further reading: [Nobody Pushed Back: Why Engineers Stay Silent Until It's Too Late](https://howtocenterdiv.com/beyond-the-div/nobody-pushed-back) by imkyssa.*

## Rational Inside, Irrational Outside

> Most corporate decisions that look stupid from outside are locally rational from inside.

### Principle

When a company ships something customers hate, the decision usually made sense given the constraints, incentives, and information *inside* the building — promotion structures, metric dashboards, roadmap commitments, political dynamics, executive priorities. From the outside, none of that is visible, so the decision looks insane.

This matters in two directions. First, when critiquing someone else's bad decision, assume there's an internal logic and try to find it — you'll learn more than by calling them stupid. Second, when *you* are inside, notice that your locally-rational decision might look insane from outside, and that outside view is often the one that matters (customers, hiring candidates, partners).

The failure mode is an organization that has optimized for internal legibility at the cost of external legitimacy. Everything makes sense on the org chart, and nothing makes sense to the user.

### When it applies

- Reading about product decisions that seem obviously wrong
- Diagnosing why your own company ships things customers dislike
- Evaluating competitors' moves before labeling them mistakes
- Post-mortems on strategic missteps

### Example

A tech giant kills a beloved product. From outside: "why would they do this?" From inside: the team's lead moved, the metric stopped growing, no exec sponsor, dependencies needed migration anyway, engineers want to work on AI. Each link rational; the chain produces a widely-mocked outcome.

The fix isn't hiring smarter people. It's shortening the feedback loops that let internal logic diverge from external reality.

## Reciprocity — Go Positive, Go First

> The best way to achieve success is to deserve success. Don't wait for others to go first.

### Principle

We return what we receive — cynicism begets cynicism, generosity begets generosity. The biggest mistake is waiting for others to go first. Unlock reciprocity by going positive and going first without expectation. Small changes in your actions change your entire world.

### When it applies

- Building relationships with new teammates
- Negotiating or resolving conflict
- Wanting better collaboration from others

### Example

New team member joins. Instead of waiting for them to prove themselves, proactively help them with onboarding, share context, offer a pairing session. They'll almost certainly pay it forward — to you and to the next person who joins.

*Source and further reading: [Mental Models: The Best Way to Make Intelligent Decisions (\~100 Models Explained)](https://fs.blog/mental-models/) by Shane Parrish.*

## Refusing Politics Is Also a Political Choice

> Treating organizational influence as beneath you doesn't make you apolitical — it just means you've ceded that influence to whoever's still willing to use it.

### Principle

There's a common view that "real" engineering work is pure craft, and engaging with organizational politics (persuasion, prioritization fights, managing up, coalition-building) is a corrupting distraction from doing good work. But almost nothing significant in a large organization gets built by one person acting alone — meaningful change at scale requires coordinating other people's attention, budget, and priorities, which is inherently political. Refusing to engage with that layer doesn't preserve your purity; it just means the shape of what gets built is decided entirely by people who *did* engage, for better or worse. Opting out of politics while still wanting to influence outcomes is a contradiction, not a principled stance.

The reframe: choosing to navigate the messy, political process of getting a good idea actually built and shipped to real users is not a compromise of idealism — it's often the most idealistic available action, closer to public service (accepting you won't set the whole direction, but working the influence you do have toward good outcomes) than to surrender.

### When it applies

- Deciding whether to engage with prioritization debates, roadmap fights, or cross-team negotiation instead of just writing code and hoping it matters
- Evaluating your own frustration at "politics" getting in the way — check whether the frustration is really about the existence of coordination costs, which are unavoidable at scale
- Mentoring someone who believes good work should be self-evidently adopted without any need to advocate for it
- Recognizing that staying "above" organizational dynamics is itself a strategy with consequences, not a neutral default

### Example

An engineer builds a genuinely better internal tool but refuses to pitch it, demo it, or build support for adoption, on principle that good work should speak for itself. It gets ignored in favor of a worse tool built by someone willing to present it at the right meetings and get the right people bought in. The better tool didn't lose on merit — it lost because merit alone doesn't route budget or attention in an organization of any size.

*Source and further reading: [Software engineers should be a little bit cynical](https://www.seangoedecke.com/a-little-bit-cynical/) by Sean Goedecke.*

## Silence Becomes Structural

> The first unchallenged bad decision sets the precedent; after enough of them, "that's just how we do things here" is scar tissue, not policy.

### Principle

Silence in an organization isn't a constant — it compounds. When the first objection gets ignored (or punished), people learn what the place does with objections, and the next decision passes more easily. Not because anyone stopped caring, but because the precedent is set. New people arrive, see that nobody questions anything, and conclude questioning is weird. At that point the silence is no longer a series of individual choices — it's **learned helplessness** baked into the system, "impossible to refactor out." It's distinct from technical debt: debt is a money problem you can pay down; this is a cultural property you can't.

The tell is when "being right" and "being safe" drift apart. Once they do, decisions are driven by the social dynamics in the room, not by technical reality. The fix is structural, not exhortation — you don't solve it by asking individuals to be braver. You separate the objection from the objector, make postmortems blameless by default, treat "I was wrong" as good judgment, and build mechanisms (e.g. "disagree and commit") that let dissent be *recorded and heard* even when the group moves on.

### When it applies

- Joining a team and noticing nobody ever challenges decisions
- Diagnosing why "we knew this would happen" keeps recurring
- Designing review / postmortem / decision processes
- Deciding whether a culture problem is fixable by people or only by structure

### Example

A new engineer watches a flawed migration plan pass without objection, learns the lesson, and stays quiet on the next one. Three hires later, nobody in the room even registers that the architecture is questionable — the silence has become a property of the system, as load-bearing as any module.

*Source and further reading: [Nobody Pushed Back: Why Engineers Stay Silent Until It's Too Late](https://howtocenterdiv.com/beyond-the-div/nobody-pushed-back) by imkyssa.*

## Closing principle

Organizational awareness is not cynicism. It is the context required to make good work survive contact with a group of people.
