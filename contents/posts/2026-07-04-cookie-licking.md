---
path: cookie-licking
tags:
  - "thinking principles"
  - "organizations"
  - "politics"
date: 2026-07-04T07:30:00.000Z
title: "Cookie Licking: Claiming Work Without Doing It"
render_in_place: false
categories:
  - "thinking"
related:
  - "be-the-moth"
---

> Claiming a piece of work or territory so nobody else can take it — without actually doing it. The claim destroys value for others without creating any.

## Origin

The term comes out of Microsoft culture, popularized by Raymond Chen (longtime Windows engineer) on his blog *The Old New Thing*. He described teams that would announce a feature was "theirs" to prevent other teams from building it — and then never ship it.

The metaphor: at a family dinner, a kid licks a cookie and puts it back on the plate. The cookie is not eaten — it's just *ruined for everyone else*. That asymmetry is the essence of the behavior. The term has since spread to most large tech companies, because the underlying incentive structure exists anywhere scope, headcount, and promotion are linked.

## The mechanics: why a mere claim works

Cookie licking only functions because organizations run on **implicit claim-respecting norms** — norms that exist for good reasons:

1. **Duplication is expensive.** Two teams building the same thing wastes money, so orgs teach people to check "is anyone already doing this?" before starting.
2. **Stepping on toes is politically costly.** Building in another team's space reads as aggression, invites escalation, and damages relationships you'll need later.
3. **Information asymmetry.** When a team says "we're on it," outsiders usually can't verify. Roadmaps are private, staffing is opaque, and calling a bluff costs energy and social capital.

The licker exploits all three. The claim costs one sentence in a meeting; verifying or challenging it costs everyone else real effort. So the default outcome is that the claim stands.

**Cookie licking is an arbitrage on the gap between the cost of claiming and the cost of auditing claims.**

There's also a timing tell: claims are usually made exactly when someone else shows interest. A space can sit ignored for two years; the moment another team drafts a proposal for it, the "owner" suddenly discovers it's on their roadmap. That reactive pattern is one of the strongest diagnostic signals.

## Variants

- **The roadmap lick.** The item appears in planning docs every cycle, perpetually in "next half." It exists to justify the team's charter and defend against encroachment. Nobody is ever staffed on it.
- **The prototype lick.** A team hacks together a demo — just enough to say "we have something working" — and uses it to freeze out a competing effort that would have been production-quality. The demo then rots. Especially damaging because it *looks* like progress, so it survives scrutiny a paper claim wouldn't.
- **The review-gate lick.** Instead of claiming the work, someone claims the *approval right*: "all changes in this area go through me." Then they're slow, unresponsive, or always have concerns. They never do the work and never let it happen at a reasonable pace. Licking the plate rather than the cookie.
- **The partial-scope lick.** A team genuinely delivers 20% of a space, then uses that foothold to claim the remaining 80% — with no capacity to build it.
- **The personal lick.** The individual version: the engineer who says "I'll take that" for the interesting project in sprint planning, then sits on it. Or keeps a design doc "in progress" for months, blocking anyone else from writing one. Same structure, smaller radius.
- **The defensive lick.** Claiming a space not out of desire but fear — of what happens to the team's relevance if someone else eats the cookie.

## Why people do it

It's usually rational for the individual or team, which is why it persists:

- **Territory defense** — scope equals headcount, influence, and promotion narratives. Losing a problem space feels like losing status, even with no capacity to solve it.
- **Optionality hoarding** — "we might want this later, so keep others out now."
- **Fear of redundancy** — if another team solves your problem, what's your team for?
- **Low cost** — claiming is free; delivering is expensive. Organizations rarely punish the claim itself.

## Why it's harmful

The cost lands on the organization, not the licker. The work sits in limbo: too claimed to be picked up, too neglected to be done. Motivated people who would have solved the problem move on. Customers wait.

And it compounds: once people learn claims aren't honored with delivery, they either stop respecting claims (turf wars) or start making defensive claims of their own (more licking). Both equilibria are worse than the honest one.

## The positive side: not all claiming is licking

Claiming itself is a legitimate and necessary coordination mechanism. The claim-respecting norms that lickers exploit exist because they usually work:

- **Preventing duplication.** "We're building this, ship date Q3" lets three other teams *not* build it. That's the system working.
- **Protecting long-term investment.** A team doing a two-year platform rebuild needs others to not snipe pieces of the space mid-flight. A claim buys the stability to do deep work.
- **A time-boxed hold is honest.** "Give us six weeks to assess before you start" is a legitimate claim — it has an expiry and a deliverable (the assessment).
- **Staking a claim on your own idea.** Publicly attaching your name to an idea *and committing to drive it* is healthy claiming. Ambition plus delivery intent is exactly what claims are for.

The line between ownership and licking is not whether you claimed — it's whether the claim comes with **delivery intent, transparency, and an expiry**. A claim that says "here's who, here's when, check on us" is ownership. A claim that only says "not yours" is licking. Same sentence in a meeting, distinguished entirely by what stands behind it.

This matters for the accuser too: calling legitimate ownership "cookie licking" because you're impatient with a team's (real, staffed, in-progress) timeline is its own dysfunction. Apply the diagnostic honestly in both directions.

## The inverse threat: your idea getting licked

There's a personal corollary worth being paranoid about: **ideas are cookies too.** If you socialize a good idea verbally — in a hallway, a 1:1, an unrecorded meeting — before documenting it, someone more senior can claim it. Not always maliciously: seniors have more surface area, they repeat what they hear, and in the retelling the idea quietly becomes theirs. By the time it appears in a planning doc, provenance is gone and unprovable.

The defense is cheap and should be habitual:

- **Write it down before you socialize it.** A short doc, an email to yourself and one other person, a ticket — anything timestamped with your name on it. Provenance is established by artifacts, not memory.
- **Socialize in traceable channels.** Float the idea in an email thread or a commented doc rather than only in conversation. The medium is the receipt.
- **Name it and present it yourself.** Ask for five minutes in the team meeting rather than feeding it upward in a 1:1. The person who presents an idea to the room owns it in the room's memory.
- **Don't swing to secrecy.** Hoarding an idea until it's "ready" is its own failure — ideas need early collision with feedback. The move is not *share less*, it's *document first, then share widely*. A documented idea being spread by a senior is amplification; an undocumented one is appropriation.
- **If it's already happened**, the recoverable asset is execution, not credit. Volunteering to drive the idea converts "they took my idea" into "I'm the one delivering it" — which is the claim that actually counts at review time.

## When it hits you as an individual

The team-vs-team version gets the attention, but most of the damage you'll personally absorb comes in smaller, quieter forms. Cases to recognize:

**1. Your idea gets claimed upward.** You float an idea in a 1:1 or hallway conversation; weeks later it appears in a planning doc under someone else's name. (Covered in detail above — the defense is documenting before socializing.)

**2. The interesting project gets grabbed and sat on.** In sprint planning, a peer volunteers for the piece of work you wanted — then does nothing with it for a month. You can't touch it without looking like you're stepping on them. *Move:* ask in standup, publicly and neutrally, "any progress on X? Happy to take it if you're loaded" — repeat once, then take it to the manager as a scheduling question, not an accusation.

**3. Growth-scope licking by a senior.** The high-visibility work — the design doc, the new component, the launch — is always "theirs" by default, claimed early each cycle. They may even deliver it, but the claiming pattern means you never get promotion-scope work. This is licking *your growth*, not the work. *Move:* make the ask explicit with your manager: "I need to lead a design this half" — convert the invisible default into a visible allocation decision.

**4. The review gate.** Your work is done but requires sign-off from someone who claimed approval rights over the area and is perpetually slow. Your delivery date is hostage to their queue. *Move:* time-box publicly — "I'll merge Thursday unless there are concerns" — and put the pending review in writing where your manager can see the wait time. The block must be visible to cost the blocker something.

**5. The claimed introduction or broker.** "Let me introduce you to that team / loop you in" — and it never happens, but now reaching out directly feels like going around them. *Move:* thank them and set a date: "if we haven't connected by Friday I'll reach out directly so we don't lose time."

**6. The assigned-and-stalled ticket.** A bug that blocks you is assigned to someone who isn't working on it. Fixing it yourself reads as encroachment; waiting means you're blocked indefinitely. *Move:* comment on the ticket with your blocked status and a date, then either offer the fix as a PR to them or reassign via the manager.

**7. Retention licking of your career.** "We have big plans for you" — used to keep you from a transfer or an external offer, with nothing concrete behind it. It's a claim on your future with no delivery intent, and it's the most personally expensive variant. *Move:* apply the standard test — what role, what scope, what date? An answer that can't be written down is a licked cookie.

**8. Mentorship or feedback claims.** "Send it to me, I'll review your doc / give you feedback" — and it sits for weeks while you feel unable to ask anyone else, since that would seem to slight them. *Move:* parallelize openly from the start: "I'm collecting feedback from a few people by Tuesday."

The common thread: in every case the claim converts *your* time into *their* option, for free. The universal counter is the same as the organizational one — attach a date to every claim that affects you, out loud, in writing, cheerfully. Deadlines are the antiseptic; people who intend to deliver never mind them, and people who don't will reveal themselves by resisting.

## Countermeasures

**Organizational:**

- **Claims expire.** An ownership claim comes with a date and visible progress; miss it and the work is explicitly up for grabs. "Ownership" means accountability for delivery, not a veto over others.
- **Ask for the plan, not the intent.** The standard response to "we're already doing that": who's staffed on it, what's the milestone, when does it ship? No answer means no claim.
- **Reward delivery, not scope.** If promo narratives reward "owns a big space," you get lickers; if they reward "shipped and had impact," licking loses its payoff.
- **Make it culturally nameable.** Teams that can say "that's cookie licking" in a planning review — without it being a personal attack — kill most of it early. The behavior only works when it goes unchallenged.
- **Allow competing bets.** Some orgs deliberately let two efforts proceed rather than honoring exclusive claims: a contested space with two builders beats a licked cookie with zero.

**Personal (when facing a licked cookie):**

- Ask the delivery questions politely and publicly: staffing, milestone, ship date.
- Offer to help — "great, we'd love to contribute" — which forces either real collaboration or an awkward admission that nothing exists.
- Time-box your deference: "if it hasn't started by X, we'll proceed."
- Escalate with the framing "customer need is unmet," not "team Y is squatting" — the former is unarguable, the latter starts a turf war.

## The benevolent inversion: putting the cookie on a junior's plate

The same claim mechanics that lickers abuse can be used deliberately, in reverse, to grow juniors. Recall why a claim works: it creates a protected space that others won't enter. A licker uses that shelter to do nothing. But a senior can use it to shelter *someone else* — reserve a piece of work slightly beyond a junior's current reach, put the junior's name on it publicly, and let them grow into it inside the protection the claim creates.

This has established names — it's a **stretch assignment** delivered through **sponsorship** (a mentor gives advice; a sponsor spends their own credibility to put your name on things). But the cookie framing captures the mechanism those terms miss: *the claim comes before the capability, on purpose.* Call it **reserving the cookie** — the senior holds the plate so the junior gets to eat.

Why letting the junior claim it first — rather than just assigning it — works:

- **Public claiming is a commitment device.** A junior who says "I'm taking the cache redesign" in front of the team is far more likely to push through the hard middle than one who was quietly handed a ticket. People deliver on identities they've declared.
- **The claim confers standing.** Once the room heard them claim it, the junior can call meetings about it, ask questions of other teams, and make decisions — standing they wouldn't feel entitled to on a task silently assigned to them.
- **The shelter is the point.** The claim-respecting norm keeps impatient seniors from grabbing the work back the first time the junior is slower than they'd be. Without a public claim, "let me just do this bit" erosion is almost inevitable — and each rescue teaches the junior they weren't really trusted.
- **Provenance protects them.** Per the earlier section — the person who claims work in the room owns it in the room's memory. A junior whose name was on the claim gets the credit at delivery, instead of it evaporating upward.

What separates this from teaching bad habits — the discipline that keeps a reserved cookie from becoming a licked one:

1. **The claim must be sincere on delivery.** You're not teaching them to claim-and-sit; you're teaching them that a claim is a promise. The junior claims it *and* a date, out loud, same sentence.
2. **Backstop invisibly, don't hover.** Your job is to make sure the cookie actually gets eaten — reviewing their plan early, unblocking quietly, absorbing organizational flak — without taking bites. If they see you doing the work, the ownership was theatre.
3. **Size the stretch honestly.** One notch beyond current ability, not three. A claim the junior cannot possibly deliver on is a setup: you've made them the licker, publicly.
4. **Let them present it.** From kickoff to demo, their name and their voice. The moment you present "their" work, you've licked their cookie — the exact upward appropriation the earlier section warns about.
5. **If it's failing, expire it honestly.** Same rule as organizational claims: visible progress or the claim lapses. Step in explicitly and openly ("I'm taking this back, here's why, here's what's next for you") rather than letting it rot — a quietly failed claim damages the junior's credibility far more than an honest reassignment.

Done well, this compounds in the healthy direction the same way licking compounds in the toxic one: juniors who were grown this way learn that claims mean delivery-with-support, and they reproduce it. The plate stays honest for everyone.

## The diagnostic test

*If this person or team vanished tomorrow, would the work be further along?*

If yes — because someone else would finally be free to do it — the cookie is licked.
