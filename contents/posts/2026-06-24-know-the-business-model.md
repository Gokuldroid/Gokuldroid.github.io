---
path: know-the-business-model
tags:
  - "thinking principles"
  - "organizations"
  - "engineering"
date: 2026-06-24T07:30:00.000Z
title: "Know the Business Model"
render_in_place: false
categories:
  - "thinking"
related:
  - "translate-infra-to-business"
  - "politically-dead-projects"
  - "be-on-the-critical-path"
---

> Engineers who understand how the company makes money win technical arguments. Those who don't understand it debate aesthetics while others make the important decisions.

## The illiteracy and its cost

Ask a strong engineer to describe their system and you'll get exquisite detail: consistency guarantees, failure modes, the exact reason the cache invalidation works the way it does. Ask the same engineer what their company's gross margin depends on, which customers subsidize which products, or how their own service maps to a revenue or cost line, and you'll usually get silence. This is the norm, not the exception — and it's expensive.

It's expensive because technical arguments are not ultimately settled in technical terms. They are settled in business terms by people whose job is to allocate money. The engineer who can say "this refactor cuts our cost of goods sold (COGS) per request by 20%, which matters because this product competes on price" beats the engineer arguing that the current design is inelegant — *even when elegance is right*. The elegant-design engineer isn't wrong; they're speaking a language the decision-maker doesn't decide in. The business-literate engineer converted the same proposal into the decision-maker's native currency and won by default.

## Mechanics: why this works

**Leadership decisions are business decisions wearing technical costumes.** Build-vs-buy, tech-debt paydown, platform investment, deprecation — every one of these is an ROI call. When the debate happens, there are two conversations running in parallel: the real one, about return on invested engineering time, and the ostensible one, about architecture. Whoever prices their side in ROI terms participates in the real discussion. Everyone else is providing color commentary. This is exactly the knowledge that makes [Translate Infra to Business](/posts/translate-infra-to-business/) possible — you can't translate into a language you don't speak.

**Business literacy predicts the roadmap.** If you know where the margin pressure is, or what strategic bet leadership has placed, you can tell which projects will be funded and which are walking dead long before the reorg announces it. The engineer who understands that the company is pivoting to enterprise can see that the consumer-facing platform rewrite is doomed regardless of its technical merit ([Politically Dead Projects](/posts/politically-dead-projects/)), and can steer toward work that the money actually flows through ([Be on the Critical Path](/posts/be-on-the-critical-path/)).

**It's rare, so it differentiates enormously.** Most engineers never learn any of this, which means modest business fluency — genuinely modest, a few hours of reading — makes you stand out sharply in design reviews and in front of senior leaders. Directors and VPs live in business terms all day; when an engineer speaks that language unprompted, it reads as senior judgment, and it makes every minute of your airtime count for more (airtime quality).

## What to actually learn

- **How your company makes money.** The major revenue lines, roughly what the margins are, and who the real customer is. This last one has teeth: in ads businesses, the user is not the customer — the advertiser is. Getting this wrong makes every downstream priority confusing.
- **Your team's cost and value position.** What does your service cost to run — compute, storage, headcount? What revenue path does it sit on? Are you a cost center that must shrink, or a margin driver that must scale?
- **The current strategic anxieties.** Read the shareholder letters, listen to earnings calls, pay attention to all-hands Q&A. What leadership *repeats* is what they fear or want. Repetition is the signal; a topic that shows up in three consecutive all-hands is the topic your next proposal should touch.
- **The unit economics of your domain.** Cost per request, cost per transaction, customer LTV, cost to serve a free-tier user — whatever applies. Unit economics are where engineering decisions and business outcomes touch directly.

*Further reading: [Profit Centers vs Cost Centers at Tech Companies](https://newsletter.pragmaticengineer.com/p/profit-centers-cost-centers) from The Pragmatic Engineer.*

## Practices

1. **Trace one request through your system and price it.** Compute, network, storage, third-party calls. Most engineers have never done this once. The number will surprise you and it will change how you argue.
2. **Find your service in the cost dashboard.** Every big company has one. Know your line item and its trend.
3. **Write the one-paragraph business case before proposing anything big.** If you can't write it, one of two things is true: you're missing knowledge (go get it), or the proposal doesn't actually have a business case (reconsider it). Either way, the exercise pays before you've spoken a word.
4. **Ask business questions in engineering reviews.** "What does this cost per user?" "Which customers hit this path?" Someone knowing the answer changes designs — and someone *asking* changes what the room considers relevant.

## Failure modes

**Half-understood MBA-speak deployed for decoration.** Sprinkling "synergies" and "flywheel" over a design doc without understanding the underlying arithmetic is transparent to anyone who does understand it, and it's cringe to everyone. Business literacy means knowing the actual numbers and mechanisms, not the vocabulary.

**Business framing used to dress up preferences.** If you've already decided you want the rewrite and you reverse-engineer a business case for it, the arithmetic will be soft and the softness will show. The first time someone checks your numbers and finds them decorative, you lose the credibility that made the technique work — that's a direct withdrawal from your [Political Capital](/posts/political-capital/). The business case has to be real, which means sometimes it comes out against you. Accept those verdicts visibly; they're what make your other cases believable.

## Diagnostic test

Can you explain, in one sentence with a real number in it, why your current project is worth what the company pays you and your teammates to build it? If not, start there.
