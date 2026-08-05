---
path: the-favor-bank
tags:
  - "thinking principles"
  - "organizations"
  - "politics"
date: 2026-06-27T07:30:00.000Z
title: "The Favor Bank"
render_in_place: false
categories:
  - "thinking"
related:
  - "how-organizations-really-decide"
  - "reputation-forms-early-updates-slowly"
  - "shadow-org-chart"
---

> Small, cheap deposits made now buy expensive withdrawals later — organizations run on an informal ledger of reciprocal obligation, and influence is just an accumulated balance.

The term comes from Tom Wolfe's *The Bonfire of the Vanities*, where a lawyer explains that everything in the courthouse runs on favors banked and favors owed. *The Pragmatic Programmer* imported it into engineering, and it maps perfectly: the formal org chart says who reports to whom, but the favor bank says who will actually pick up when you call.

## The ledger

Every organization keeps a second set of books. Not the promo docs, not the OKRs — an informal, unwritten ledger of who has helped whom. Every time you help someone at low cost to yourself — answer a question well, review their CR fast, unblock a deploy, share credit for a win — you make a deposit into an account you hold with that person. When you later need something expensive — a fast-tracked review from another team, an exception to a process, a supportive voice in a contentious meeting — you draw on the balance.

Nobody administers this bank. There are no statements, no interest rates, no branch offices. But the accounts are real, the balances are tracked with surprising accuracy, and overdrafts get declined. An engineer with a large distributed balance can get things done that no amount of escalation can accomplish; an engineer with an empty account discovers that "correct" requests die quietly in other people's queues.

## Mechanics

**Reciprocity is load-bearing.** Cialdini identified reciprocity as one of the most robust social forces in existence: people track debts unconsciously and are genuinely uncomfortable owing. You don't need the other person to consciously think "I owe Priya one." The pull to repay operates below deliberation, which is exactly why it works on busy people who would never sit down and compute a favor ledger.

**Asymmetric pricing is the arbitrage.** The engine of the whole system is that the cost to the giver and the value to the receiver are wildly different. Your ten minutes answering a question in your area of expertise may save the asker two days of flailing. You paid ten minutes; they received two days. The deposit is nearly free for you and enormously valuable to them — and the receiver's ledger records the value received, not your cost. Expertise is what makes deposits cheap. The deeper your expertise, the closer to free your deposits get. This is one of the quiet compounding returns on being technically strong.

**Timing changes the meaning entirely.** Help offered *before* you need anything reads as generosity, and generosity compounds. The identical help offered when you obviously need something back reads as a transaction — and transactions earn nothing, because the other party mentally settles the account on the spot. Go first, when the ledger is empty and you want nothing (see [Reciprocity — Go Positive, Go First](/posts/how-organizations-really-decide/#reciprocity--go-positive-go-first)). The favor given at the moment of need is not a deposit; it's a purchase.

**The bank is the shadow org chart.** If you've wondered how some people seem to route around process, get exceptions granted, and pull cross-team support out of thin air — that *is* the favor bank. Influence is not charisma or title. It is accumulated deposits, distributed across enough accounts that any given problem is one phone call from someone who owes you.

## Practices

- **Answer the question properly.** Not a link and a shrug. When someone asks something in your area, give the real answer: the answer, the why, the trap they were about to fall into. A link-dump costs you thirty seconds and deposits nothing; a real answer costs you five minutes and deposits days of saved effort.
- **Do the cross-team favor when it's cheap, even for a team irrelevant to you today.** Re-orgs are constant. Today's stranger is next year's dependency, sister team, or skip-level. You cannot predict which accounts you'll need to draw on, so hold a diversified portfolio.
- **Deliver small favors conspicuously well.** A small favor is a reputation sample — it's often the only direct evidence another team ever gets of your work. A fast, clean CR review for another team tells them more about you than your entire internal track record they'll never see (see [Reputation Forms Early and Updates Slowly](/posts/reputation-forms-early-updates-slowly/) if you keep that note).
- **When you withdraw, name it lightly.** "I could use a favor" is fine. Invoking the frame honestly signals you know this is a draw on the balance and you intend to stay in the game. What kills accounts is pretending the withdrawal is just business as usual.
- **Repay promptly and slightly over.** Fast repayment with a small premium keeps your accounts in good standing and marks you as someone worth banking with.

## Failure modes

- **Keeping score aloud.** "Remember when I reviewed your CR in an hour?" destroys the social fiction that makes the whole system work. The ledger must remain unspoken; naming a specific debt converts a relationship into an invoice, and people pay invoices once and close the account.
- **Becoming the org's free help desk.** Deposits should be *cheap*. If answering questions consumes your calendar, you've stopped making deposits and started doing unbounded glue work — high effort, low legibility, no compounding. Bound it: answer well but once, write it down, redirect repeats to the doc. The trap is unbounded deposits with no boundaries.
- **Logrolling.** Favor-trading must never shade into trading votes on decisions that should be decided on merits. "Approve my design and I'll approve yours" is not the favor bank; it's corruption of the decision process, and when it surfaces — it surfaces — it burns every balance you have.

## Diagnostic test

When you last helped someone outside your team, did you do it before you needed anything from them — or are you only generous when the invoice is already drafted?
