---
path: translate-infra-to-business
tags:
  - "thinking principles"
  - "organizations"
  - "engineering"
date: 2026-06-16T07:30:00.000Z
title: "Translate Infra to Business"
render_in_place: false
categories:
  - "thinking"
related:
  - "the-work-doesnt-speak-for-itself"
  - "glue-work"
  - "the-hero-loop"
---

> Platform work is invisible to leadership until it is priced in business currency — revenue, cost, risk, or velocity.

## The currency problem

Infrastructure and platform engineers do some of the highest-leverage work in a company and systematically get the least credit for it. Not because leadership is malicious or stupid, but because of a currency mismatch: the work is reported in engineering currency, and rewards are allocated in business currency.

"Migrated the org to the new build system." "Reduced p99 by 40ms." "Upgraded the framework across 60 services." To another engineer, these are obviously valuable. To the director deciding budgets and promotions, they are noise — units in a currency they don't hold and can't spend.

Now price the same work in the currency leadership actually uses:

- "Migrated to the new build system" becomes "cut every team's release cycle by a day — roughly 30 eng-years/year returned to the org."
- "Reduced p99 by 40ms" becomes "the latency win lifted checkout conversion 0.4%, worth ~$Xm/year."
- "Upgraded the framework" becomes "closed the vulnerability class behind last year's SEV-1, eliminating a whole category of incident."

Same work. One version is invisible; the other is legible and fundable. Nothing about the engineering changed — only the denomination.

This matters most for platform teams because their impact is inherently indirect. A feature team can point at a shipped product. A platform team's impact routes *through* other teams: hours saved, incidents that didn't happen, migrations that unblocked launches. Indirect impact doesn't announce itself. It has to be computed and stated, or it is counted as zero. This is the platform engineer's version of [The Work Doesn't Speak for Itself](/posts/the-work-doesnt-speak-for-itself/) — and it compounds with [Glue Work: The Invisible Work That Doesn't Promote You](/posts/glue-work/) and the prevention-invisibility problem from [The Hero Loop](/posts/the-hero-loop/): prevented outages and returned engineering hours are THE native currencies of infra work, and both are invisible by default.

## Mechanics of re-narration

Here is the mechanism, and it's worth internalizing because it explains everything else.

Leaders can only reward what they can re-narrate upward. Your director doesn't just need to understand your impact — they need to *retell* it to their VP, who retells it to the SVP, in a planning meeting or a promo calibration where you are not in the room. Your impact statement must survive that game of telephone intact.

Engineering metrics don't survive the retelling. "Reduced p99 by 40ms" requires the reteller to know what p99 is, why 40ms matters, and what the baseline was — context that gets stripped at each hop. By the second retelling it degrades to "did some performance stuff," which is worth nothing.

Business metrics survive because they're denominated in things the top of the chain already tracks: revenue, cost, risk, velocity. "Saved $4m/year in compute" retells itself. A VP can carry "returned 30 eng-years to the org" into any room without you, without prep, without loss.

So the test for any impact statement is not "is it accurate?" or even "is it impressive?" It is: **can my VP repeat this to their VP, without me in the room, and have it land?** If not, the statement is denominated in the wrong currency, and the work it describes will be rewarded as if it were worth less than it is.

## Practices

**Compute the business number at kickoff, not at review time.** Before starting any project, write down the translation: who saves what, worth how much. This has a second benefit — it's a project filter. Sometimes the honest translation is embarrassingly small ("saves each engineer 90 seconds a quarter"), and that's signal, not failure: it's telling you the project isn't on the critical path and maybe shouldn't be done at all (see [Be on the Critical Path](/posts/be-on-the-critical-path/)).

**Use defensible arithmetic, stated as estimation.** You don't need precision; you need a Fermi estimate with visible reasoning: "~200 engineers × ~30 min/day saved × 250 days ≈ 25,000 hours/year ≈ 12 eng-years." Show the factors so anyone can audit or adjust them. Stated as estimation, a rough number is credible; stated as fact, it's a liability. (See [Fermi Everything](/posts/thinking-under-uncertainty/#fermi-everything).)

**Measure adoption, not availability.** A platform nobody migrated to has zero impact regardless of its quality. "Available to all teams" is an engineering claim; "adopted by 40 of 45 teams" is a business claim. Drive adoption like a product — onboarding, docs, migration support, nagging — because the impact number is (value per team) × (teams actually using it). This is where [The Last Ten Percent](/posts/the-last-ten-percent/) lives for platform work.

**Collect testimonials from consuming teams.** A quote from an internal customer — "the new deploy pipeline cut our release from 3 days to 4 hours" (Payments team lead) — is evidence leaders trust more than your own claims, because it's independently verifiable and pre-narrated. Ask for these at migration completion, when goodwill is highest.

**Lead with the business number.** Put it in the doc title and the first line: "Build System Migration: ~30 eng-years/year returned." Engineering detail goes below, for the readers who want it. The people who allocate rewards read titles and first lines; structure accordingly.

## Failure modes

**Inflated numbers.** The temptation is to round up aggressively — nobody's checking, right? Someone eventually checks. A number that gets audited once and found inflated doesn't just kill that claim; it discounts every future number you present. This is a direct hit to your [Political Capital](/posts/political-capital/), and it doesn't regenerate quickly. Under-claim slightly and show your arithmetic; being the person whose numbers survive scrutiny is itself an asset.

**Translating everything until it reads as spin.** If every routine dependency bump arrives wrapped in a dollar figure, you've become a press release, and readers apply a blanket discount. Translate the work that genuinely moves business numbers; report the rest plainly. The translation is powerful precisely because it's used honestly and selectively.

## Diagnostic test

For your current project, can your VP's VP repeat its impact in one sentence, in dollars, hours, or risk, without you in the room — and if not, is the problem the sentence, or the project?
