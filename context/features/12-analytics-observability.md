# Feature 12 — Analytics & Observability

## Goal
Measure whether the product loop is working and detect technical failures.

## Product Analytics
North-star metric:
- Weekly Active Traders

Supporting events/metrics:
- Sign-up completion
- First trade rate
- Time to first trade
- Trades per user
- Portfolio views
- Watchlist adoption
- Retention
- Returns after football events
- Average held players
- Liquidity
- Order match rate

## Technical Observability
Use Sentry for application, API, database, matching, job, and client errors.

Avoid sending sensitive accounting or financial state to analytics systems unless explicitly required and safe.

## Acceptance Criteria
The team can answer whether users are repeatedly trading and can diagnose failures in the market/accounting path.

