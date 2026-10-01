# Feature 14 — Performance, Demand & Dividends

## Goal
Define the relationship between football performance, trader demand, market valuation, and potential virtual dividends.

## Status
**Proposed / unresolved.** This feature is documented because the supplied design material introduces a substantial alternative to the current pure order-book MVP model.

## Proposed market formula

```text
PM = (0.40 × VP) + (0.60 × VD)
```

Where:

- `VP` = Performance Value
- `VD` = Demand Value
- `PM` = proposed Market Value

## Performance Index proposal

The supplied design proposes a 0–100 position-aware score.

Example source weights:

| Category | Example metric | Points |
|---|---|---:|
| Attacking | Goal | +10 |
| Attacking | Assist | +6 |
| Attacking | Big chance created | +3 |
| Attacking | Shot on target | +1 |
| Distribution | Pass accuracy >85% | +4 |
| Distribution | Key pass | +2 |
| Distribution | Successful dribble | +1 |
| Distribution | Cross completed | +1 |
| Defending/GK | Clean sheet | +8 |
| Defending/GK | Tackle won | +1.5 |
| Defending/GK | Interception | +1 |
| Defending/GK | Aerial duel won | +0.5 |
| Discipline | Red card | -15 |
| Discipline | Yellow card | -3 |
| Discipline | Penalty conceded | -5 |
| Discipline | Own goal | -10 |

These values are proposal inputs, not final constants.

## Performance smoothing proposal

Use a rolling 10-game EMA of match scores.

Open questions:

- exact EMA alpha
- how to treat players with fewer than 10 matches
- how to handle substitutes / partial appearances
- whether competitions are weighted equally
- how missing provider data is handled

## Demand Value proposal

The supplied design describes `VD` as being driven by either:

- a peer-to-peer order book, or
- a bonding curve.

The project currently has an order-book architecture. A bonding curve would be a separate market architecture and requires an explicit decision.

## Dividend proposal

The source proposes weekly performance-based dividends.

Illustrative example from the source:

```text
Performance Index = 90
Dividend = €0.05 per share
Holding = 1,000 shares
Dividend = €50
```

For the MVP, any dividend must be virtual currency if adopted. Withdrawable cash is outside the current product scope.

## Acceptance criteria — after approval

- Performance calculation is deterministic and server-side.
- Demand calculation is deterministic and auditable.
- Market-value calculation follows the approved formula.
- The UI clearly separates market price from performance/valuation metrics.
- Dividend jobs are idempotent.
- Dividend credits are auditable in the cash ledger.
- Portfolio/P&L/leaderboard treatment is explicitly defined.
- All new calculations have unit tests and edge-case coverage.
