# Security, Observability & Analytics

## Security Rules

Never trust client calculations.

The server must determine:

- Account balance
- Holdings
- Order validity
- Trade price
- Trade quantity
- P&L
- Portfolio value
- Leaderboard results

The client is only a presentation/input layer.

Rate-limit:

- Order creation
- Order cancellation
- Authentication-sensitive endpoints
- Social posting
- Search

Keep secrets in environment variables.

Never commit:

```text
.env
.env.local
API keys
database credentials
service tokens
```

---


## Observability

Use Sentry for:

- API errors
- Matching engine failures
- Database transaction failures
- Background job failures
- Unexpected client errors

Use PostHog for product events.

Important events:

```text
USER_SIGNED_UP
USER_SIGNED_IN
PLAYER_VIEWED
ORDER_CREATED
ORDER_CANCELLED
TRADE_EXECUTED
PORTFOLIO_VIEWED
WATCHLIST_ADDED
WATCHLIST_REMOVED
LEADERBOARD_VIEWED
NEWS_VIEWED
POST_CREATED
```

Do not send sensitive financial/accounting details as analytics properties unless explicitly approved.

---


## Product Analytics

The most important metric is:

> **Weekly Active Traders**

Supporting metrics:

- Percentage of users who make a first trade
- Time to first trade
- Trades per active trader
- Orders per trader
- Portfolio views per trader
- Watchlist adoption
- 7-day retention
- 30-day retention
- Percentage of users returning after a football event
- Average number of held players
- Market liquidity
- Percentage of orders successfully matched

---

