# Feature 04 — Player Market

## Goal
Represent each football player as a tradeable virtual market.

## Market Data
- Last traded price
- Previous price
- Price change
- Bid
- Ask
- Spread
- Volume
- Price history
- Open order count
- Holder count, when available

## Rules

### Current MVP

Market price comes from actual trades. Football events never directly execute a price change.

### Proposed pricing extension

A separate proposal introduces a 40% Performance / 60% Demand hybrid value. This is not active MVP behavior yet.

If approved, the player market must clearly distinguish:

- last traded price
- bid / ask
- spread
- trading volume
- Performance Value
- Demand Value
- any hybrid indicative valuation

The UI must not present an unresolved valuation formula as if it were the executable market price.

## Acceptance Criteria
A player page clearly distinguishes market data from football fundamentals and gives the user enough context to place a trade.

