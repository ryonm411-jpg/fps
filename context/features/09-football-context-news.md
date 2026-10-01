# Feature 09 — Football Context & News

## Goal
Give traders football information that helps them form opinions about players.

## Content
- Performance statistics
- Recent form
- Fixtures/results, where supported
- Injuries
- Transfers
- Relevant news
- Club/competition context

## Rule
Football events are information. They do not directly mutate the market price.

Example:

`Player scores → news/stat appears → users react → orders change → trades occur → market moves`

## Acceptance Criteria
The player page makes football context easy to consume while keeping a clear boundary between external football information and internal market activity.



## Proposed Performance Index

The supplied product proposal includes a position-aware Performance Index from 0–100 and a rolling 10-game EMA. The example weights are recorded in `market-model.md`.

Performance scoring is not yet locked into MVP. If adopted, the score should be calculated server-side from normalized football data and stored as an auditable derived value.
