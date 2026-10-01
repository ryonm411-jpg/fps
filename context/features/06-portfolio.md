# Feature 06 — Portfolio & P&L

## Goal
Show users what they own and how their positions have changed in value.

## Portfolio Data
- Total account value
- Available cash
- Invested value
- Holdings
- Average entry price
- Current market price
- Position value
- Unrealized P&L
- Return percentage
- Trade history

## Rules
Portfolio metrics are derived on the server from balances, holdings, and market data. The browser must not be the authority for P&L.

## Acceptance Criteria
After a trade, the user's portfolio reflects the updated cash, units, position value, and P&L without requiring client-side fabrication.



## Proposed Dividend Support

If weekly performance dividends are approved, portfolio accounting must show them as explicit virtual-currency ledger events rather than silently increasing cash.

Potential portfolio surfaces:

- Dividend income
- Dividend history
- Total return including dividends

The exact treatment of dividends in P&L and leaderboard return is an unresolved product decision.
