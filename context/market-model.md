# Market Model & Pricing Design

This file is the source of truth for how football information, trader demand, performance, market price, and possible dividends relate to one another.

## 1. Current MVP market model

The currently documented MVP model is a peer-to-peer order book.

```text
Football information
        ↓
Trader opinion
        ↓
Orders
        ↓
Matching engine
        ↓
Executed trades
        ↓
Last traded price / price history
```

Football events do not directly change market price.

## 2. De Bruyne vs. TikTok problem

The design input identifies a product risk: if market demand is allowed to reflect social-media popularity without a meaningful football-performance component, highly viral players could dominate market attention and price movement even when their on-pitch output is weak.

The point of this design discussion is not to declare popularity or performance inherently correct. It is to make the trade-off explicit:

- A demand-heavy market can feel fast, speculative, and reactive to hype.
- A performance-heavy model can give analytical/fantasy-oriented traders a stronger connection to on-pitch results.
- The product needs a deliberate boundary between football fundamentals and trader demand.

## 3. Proposed 40% Performance / 60% Demand model

The supplied design proposal recommends:

```text
PM = (0.40 × VP) + (0.60 × VD)
```

Where:

- `PM` = proposed market value.
- `VP` = Performance Value.
- `VD` = Demand Value.

The proposal frames this as a way to combine a football-performance anchor with user-driven demand.

### Important unresolved implementation question

The proposal does not fully specify how `PM` interacts with the executable order book.

Before implementation, choose one of these models explicitly:

1. **Pure order-book model:** executed trades are the market price; performance is informational only.
2. **Hybrid reference-value model:** `PM` is an indicative/fundamental reference while trades still execute through the order book.
3. **Hybrid executable-price model:** the formula itself constrains or determines executable prices.

The architecture, accounting, charts, P&L, and tests depend on this decision.

## 4. Performance scoring proposal

The supplied design input proposes a position-aware Performance Index from 0–100 using a multi-tier data matrix.

Example action weights from the source:

### Attacking

- Goals: +10
- Assists: +6
- Big chances created: +3
- Shots on target: +1

### Distribution

- Pass accuracy above 85%: +4
- Key passes: +2
- Successful dribbles: +1
- Crosses completed: +1

### Defending / Goalkeeping

- Clean sheet: +8
- Tackles won: +1.5
- Interceptions: +1
- Aerial duels won: +0.5

### Discipline / negative anchors

- Red card: -15
- Yellow card: -3
- Penalty conceded: -5
- Own goal: -10

These weights are source-derived proposal values, not final production constants.

## 5. Performance smoothing proposal

The supplied design proposes a **rolling 10-game Exponential Moving Average (EMA)** of match scores instead of letting one match permanently double a player's valuation.

Conceptually:

```text
match score
   ↓
rolling performance history
   ↓
10-game EMA
   ↓
Performance Value
```

The exact EMA alpha, treatment of missed games, substitutions, new players, and competition boundaries remain open.

## 6. Demand value proposal

The supplied design proposes that Demand Value be derived from user demand through either:

- the peer-to-peer order book, or
- a bonding-curve-style mechanism.

The source specifically describes buying pressure increasing `VD` and selling pressure decreasing `VD`.

For this project, a bonding curve must not be introduced casually because it changes the economics and execution model substantially. Treat it as a separate architecture decision.

## 7. Performance vs. demand example

The supplied proposal gives this illustrative example:

```text
Performance Value = $10
Demand Value      = $100

PM = (0.40 × 10) + (0.60 × 100)
   = $64
```

This example demonstrates the intended "gravity" effect of the performance component; it does not establish a production price rule.

## 8. Dividend proposal

The supplied design proposes a weekly performance dividend.

Example concept:

```text
Weekend fixtures
      ↓
Performance Index
      ↓
Weekly dividend calculation
      ↓
Dividend credited per held unit
```

The source gives an illustrative example of `€0.05/share` for a player with a 90/100 performance index and 1,000 shares, producing `€50` of dividend value.

### MVP boundary

The current MVP remains virtual-money only. Therefore a dividend, if eventually adopted for MVP, must be explicitly defined as an **in-game virtual-currency credit**, not withdrawable cash.

A real-money dividend or prize-pool-funded payout would require a separate product, legal, regulatory, and accounting specification and remains outside the MVP.

## 9. Dividend design questions

Before implementation, decide:

- Is the dividend virtual currency or only a score/leaderboard mechanic?
- Is it paid weekly, per match, or on another schedule?
- Which holdings qualify: shares held at kickoff, full-time, ex-dividend cutoff, or snapshot time?
- How are transfers during the qualification window treated?
- What happens when a player has no match?
- Is the dividend budget fixed, player-specific, or generated by another virtual economy rule?
- Does receiving a dividend change portfolio return calculations?
- How are dividend events represented in the cash ledger?

## 10. Core principle

Do not let a formula silently bypass the accounting and market mechanics.

Whether the project uses pure order-book pricing or a hybrid model, every executed trade must still obey the same cash, holding, reservation, audit, and concurrency invariants.
