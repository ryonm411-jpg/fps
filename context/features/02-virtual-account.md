# Feature 02 — Virtual Account

## Goal
Give every user a server-controlled virtual trading account.

## Core Behavior
- New user receives the documented starting virtual cash amount.
- Available cash is server-derived.
- Reserved cash for open orders is tracked separately from available cash.
- Every balance-changing action is represented in the cash ledger.

## Invariants
- Available cash never becomes negative.
- Client input cannot directly set account balance.
- All balance changes are attributable to a ledger event.

## Acceptance Criteria
A newly registered user can see their virtual balance and account activity without being able to manipulate the balance from the client.

