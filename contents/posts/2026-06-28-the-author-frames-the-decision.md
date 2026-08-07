---
path: the-author-frames-the-decision
tags:
  - "thinking principles"
date: 2026-06-28T07:30:00.000Z
title: "The Author Frames the Decision"
render_in_place: false
categories:
  - "thinking"
related:
  - "the-meeting-before-the-meeting"
  - "be-the-moth"
---

> Whoever writes the doc sets the options everyone else debates.

In doc-driven organizations — Amazon 6-pagers, design reviews, RFCs — reviewers believe they are deciding. Mostly they are not. They are choosing among options the author selected, weighted by criteria the author chose, anchored by the recommendation the author wrote. The room decides *within* the doc; the author decided the shape of the doc. That earlier, quieter decision usually matters more.

This is not cynicism about review culture. Review works. But it works on what is in front of it, and the author controls what is in front of it.

## Framing power

The author's leverage is structural, not rhetorical. Before a single reviewer opens the doc, the author has already decided:

- **Which alternatives appear.** Three options is convention. But which three? The author picks the field of candidates, and the options that never make it onto the page are never debated. A genuinely threatening alternative can be omitted entirely, or included in strawman form — described just accurately enough to be recognizable, just weakly enough to lose.
- **What counts as a requirement.** "Must support multi-region from day one" versus "multi-region is a nice-to-have" is often the entire decision, compressed into one line of a requirements section that reviewers skim. Requirements are where conclusions hide as premises.
- **What the comparison table measures.** The rows of the comparison matrix are the criteria. Choose "operational simplicity, time to market, team familiarity" and one option wins. Choose "long-term cost, scalability, vendor independence" and a different one does. The table looks like analysis; it is mostly the analysis's output, run in reverse.
- **Which risks get dressed and which get left scary.** A risk to the recommended option gets a calm mitigation paragraph. The same class of risk on a competing option gets phrased as an open question — "unclear how this handles X" — which reads as an unresolved hazard. Same uncertainty, opposite emotional weight.

None of this requires dishonesty. It happens by default, because the author writes from inside their own preference. That is exactly why it is powerful: it looks like diligence.

## Mechanics

Three mechanisms do most of the work.

**Anchoring.** The recommended option is the reference point. Reviewers argue relative to it — "is option B really better than the recommendation?" — rather than from scratch. The recommendation does not have to win the argument; it merely has to be the thing the argument is about. Deviating from an anchor takes energy, and rooms have limited energy.

**Agenda-setting.** The classic finding from media theory transfers cleanly: you don't control what people conclude, but you control what they conclude *about*. A doc that frames the question as "which caching layer?" has already won the argument about whether caching is the right approach at all. Reviewers answer the question asked. Almost nobody re-asks the question.

**Effort asymmetry.** Rebutting a framing — not a detail, the framing itself — requires roughly a counter-doc: your own options, your own criteria, your own analysis. That is days of work against a meeting comment's thirty seconds. So framing objections get raised verbally, absorbed politely, and die in the meeting notes. The author also controls **timing**: the doc goes out when it is "ready for review," which in practice means after the author has pre-wired key stakeholders — the meeting-before-the-meeting — so the review meeting ratifies a coalition that already exists.

## Implications

**Volunteering to write the doc is taking the most powerful seat in the process.** Engineers routinely dodge it as chore-work — "I'll build it, someone else can write it up." This is exactly backwards. Note the distinction from glue work: glue work is invisible, low-legibility labor that quietly disappears from promo packets. Doc authorship is the opposite — high-legibility, named, dated, quoted in decision records for years. It is one of the few forms of writing that is simultaneously influential and promotable. Treating it as a chore hands the frame to whoever doesn't.

**Commenting on someone else's doc is fighting on their terrain.** If you disagree with a direction, margin comments concede the frame: their options, their criteria, their anchor. The stronger moves shift the terrain to shared ground — offer to co-author, or write the alternatives section yourself so your option enters the doc as a first-class citizen rather than a comment thread. A comment can be resolved with a click; a co-authored section has to be argued with.

## Practices

**As an author:**

- **Claim authorship of consequential docs early.** When a decision is forming, say — in writing, with a date — "I'll write the doc for this." That is honest cookie-claiming: the credit attaches to real work you actually do, and the frame comes with it.
- **Steelman alternatives honestly.** This is self-interest, not virtue. Reviewers who catch one strawman discount the entire doc — and the author. Framing power spends down political capital fast when it is visibly abused; a reputation for fair docs is what lets your future recommendations carry an anchor at all.
- **Make your framing choices inspectable.** State why these options, why these criteria. A doc that shows its frame invites better objections and survives them.

**As a reviewer:**

- **Interrogate the frame before the content.** Before debating option B versus C, ask: What options are missing? Whose requirements are these — and who decided the nice-to-haves? Why these comparison criteria? Which risks got mitigation paragraphs and which got left as open questions? Five minutes of frame-checking beats an hour of in-frame debate.
- **If you fundamentally disagree, don't just comment — counter-frame.** Ask for your alternative to be added to the doc as a full option, or offer to write it. Force the frame to expand rather than arguing inside it.
- **Keep a decision log.** Write down what was decided, what alternatives were considered, and what was explicitly deferred. The written record outlives everyone's memory of the meeting — and six months later, the log is the only defense against the decision being re-litigated inside someone else's new frame. Write things down; the doc that exists wins against the recollection that doesn't.

## Diagnostic test

Before you argue about any option in any doc, ask one question: **who chose the options — and would my preferred outcome even fit in this doc's comparison table?**
