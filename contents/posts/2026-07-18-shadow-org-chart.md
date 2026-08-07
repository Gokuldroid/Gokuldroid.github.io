---
path: shadow-org-chart
tags:
  - "thinking principles"
  - "organizations"
  - "politics"
date: 2026-07-18T07:30:00.000Z
title: "The Shadow Org Chart"
render_in_place: false
categories:
  - "thinking"
related:
  - "reorg-survival"
---

> The org chart shows who reports to whom. Decisions, information, and unblocking flow through a different graph — and that graph is not written down anywhere.

## The two graphs

Every company has two structures. The formal one is the reporting graph: boxes, lines, titles, approval chains. It determines compensation, headcount, and who writes your performance review. The second is the influence graph: who people actually consult before deciding, who can kill a design with a raised eyebrow, who can unblock a cross-team dependency with one Slack message. The formal graph is legible — it's in the HR tool. The influence graph is invisible in any tool, and it is the one that determines how fast things happen.

Concrete node types you will find in every org:

- **The veteran SDE** everyone quietly runs designs past before committing. No approval authority on paper. In practice, a design that hasn't survived their review is not done.
- **The principal engineer** whose informal thumbs-up IS the approval gate. The design review meeting ratifies a decision that was actually made in a 20-minute hallway conversation the week before.
- **The TPM** who knows every team's real status — not the status in the tracker, the actual one — and can tell you in thirty seconds whether your dependency will land.
- **The EA** who controls the VP's calendar. Getting 15 minutes with the VP is not a function of your request's merit; it's a function of your relationship with the person who owns the calendar.
- **The 8-year tenure engineer** who knows why every weird decision was made — which "obviously wrong" architecture exists because of an outage in 2019, which team you must never surprise, which config nobody is allowed to touch.

None of these people show up as decision-makers on the org chart. All of them are decision-makers.

## Why engineers miss it

Technically strong engineers are trained on systems where the documented interface is the real interface. Call the API as specified, get the result. So they take the formal structure at face value: file the ticket, follow the process, escalate through the chain. Then they wait.

Meanwhile a colleague gets the identical thing done in a day, and it looks like magic or favoritism. It's neither. The colleague DMed the one person on the other team who actually does the work, who owed them a small favor from three months ago, and asked nicely. The ticket queue is the interface for strangers; relationships are the interface for everyone else.

The deeper error is treating the org chart as the territory. It's a map — a lossy, politically-negotiated, months-out-of-date map. Routing your requests through it exclusively is like routing packets by a stale topology: technically correct, functionally slow.

## How to map it

The influence graph is observable if you watch for the right signals:

- **Who gets quoted in arguments.** When someone says "well, X thinks we should…" and the argument ends, X is an influence node — regardless of X's title.
- **Who gets pulled into incidents regardless of team.** The person paged into a sev-1 outside their ownership area is there because people trust their judgment, not their org position.
- **Whose review comments actually change designs.** Watch a design doc's history. Some reviewers' comments cause rewrites; others' comments get a polite "good point, noted" and no change. The first group holds real authority.
- **Who unblocks cross-team asks with one message.** When a request that sat in a queue for two weeks resolves an hour after a specific person forwards it, you've found an edge in the graph.
- **Who people go see before meetings.** The pre-meeting is where decisions happen; the meeting is where they're announced. Notice who is in the pre-meetings.

Influence is earned through accumulated reliability and favors — years of being right, being helpful, and not burning people. That's why it's invisible in every tool: it's a ledger held in individual memories.

## How to build position in it

- **Build relationships before you need them.** The worst time to meet someone is when you need something from them. A cold ask from a stranger competes with everything in their queue; the same ask from someone who helped them last quarter jumps it. Budget real time for this — reviewing an adjacent team's design, showing up to their demo, answering their question in a public channel.
- **Do cheap favors on request.** Answering a question well is a deposit. It costs you ten minutes and creates an edge in the graph. Consistently good answers make you a node.
- **When blocked, ask "who actually decides this?"** — not "what does the process say?" The process is the fallback path. Find the human whose yes is the real yes, and find someone who can introduce you.
- **When new to an org, spend the first month mapping.** Ask everyone you meet: "Who should I talk to about X? Who really understands Y? Who made the call on Z?" The names that recur are your graph. Write it down; it's the highest-leverage document you'll produce that month.

## Cautions

Working the shadow graph is not license to freelance. If you bypass your chain in ways that surprise your manager — a skip-level hears about your project problem before they do, another team commits you to work they didn't know about — you've converted a shortcut into a trust deficit. The rule: use informal channels for information and unblocking, keep your manager informed about anything with decision weight, and never let them be surprised by something you caused. (See managing up / no-surprises.) Also: influence spent bypassing people is influence you don't get back. Use the graph to move faster with people, not around them.

And don't confuse mapping the graph with cynicism about it. The shadow org chart mostly exists because it works — trusted, high-context people routing decisions efficiently. You're not learning to manipulate a broken system; you're learning to read the actual system.

## Diagnostic test

Answer these for your current org. If you can't, you're navigating by the wrong map:

1. For your current project, whose informal approval actually determines whether the design ships — and have you talked to them yet?
2. Name the person who could unblock your longest-standing blocked dependency with one message. Do they know who you are?
3. Who gets quoted as an authority in your team's design arguments? When did you last do them a favor?
4. If you needed 15 minutes with your VP next week, do you know who controls that calendar and would they help you?
5. Name three people outside your team who would answer your DM within an hour. If the answer is fewer than three, your graph position is weak — start making deposits now, before you need a withdrawal.
