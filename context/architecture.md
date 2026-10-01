# Architecture

This file defines the system structure and the boundaries that keep market mechanics, accounting, data access, and UI concerns separated.

## Trading Model

### 7.1 Limit orders

A buy limit order specifies the maximum price the user is willing to pay.

Example:

```text
Buy 10 units of Player A
Maximum price: $20
```

A sell limit order specifies the minimum price the user will accept.

Example:

```text
Sell 10 units of Player A
Minimum price: $21
```

The orders can match when:

```text
highest bid >= lowest ask
```

### 7.2 Price-time priority

For MVP, use price-time priority.

For buy orders:

1. Highest price first.
2. Earlier order first when prices are equal.

For sell orders:

1. Lowest price first.
2. Earlier order first when prices are equal.

### 7.3 Market orders

A market buy consumes available asks starting from the lowest ask.

A market sell consumes available bids starting from the highest bid.

If there is not enough liquidity, the order should only execute against available liquidity and the remaining behavior must be explicitly defined before implementation.

Open question:

> Should an unfilled market-order remainder be cancelled or converted into a limit order?

Do not invent this behavior without recording the decision in `progress-tracker.md`.

### 7.4 Last traded price

The market price is:

```text
last executed trade price
```

If there have been no trades yet, the application needs an explicitly defined initial/reference price.

### 7.5 Spread

```text
spread = lowest ask - highest bid
```

Display both the absolute spread and, where useful, percentage spread.

### 7.6 Volume

Volume represents executed trading activity.

Do not count cancelled orders as trading volume.

---


## Initial Player Supply

The MVP needs a defined number of virtual units for each player.

This is a product decision that must be explicit.

Recommended initial approach:

- Each player has a fixed virtual supply.
- Units are distributed according to a documented market-initialization rule.
- Users cannot create new player units.
- Users cannot destroy player units.
- The system must track total units outstanding.

Open question before implementation:

> How are initial player units distributed, and who owns them at market launch?

Possible MVP approaches include:

1. Give every user a fixed allocation.
2. Use a simulated market maker.
3. Distribute units through an initial virtual offering.
4. Seed designated system liquidity.

The chosen approach must be documented before implementing the matching engine.

---


## Liquidity

Liquidity is one of the most important product risks.

A market is not useful if users cannot trade.

MVP should distinguish:

- Real user orders
- System-seeded liquidity

If simulated liquidity is used, the UI must clearly distinguish it from user-generated activity.

Do not fake user activity.

The system must never display simulated trades as if real users made them.

---


## Market Safety Rules

MVP should include basic protections against accidental or abusive behavior.

Potential controls:

- Maximum order size
- Maximum position size
- Maximum daily trading volume
- Rate limiting
- No self-trading
- Cancel/replace limits
- Suspicious activity logging
- Trade audit log
- Trading halt capability

These are product decisions and should be documented before implementation.

---


## Recommended Technical Architecture

## Stack

Recommended initial stack:

| Layer | Technology | Role |
|---|---|---|
| Framework | Next.js App Router | Full-stack application |
| Language | TypeScript | Application language |
| UI | Tailwind CSS v4 + shadcn/ui | Interface |
| Icons | Lucide React | Icons |
| Animation | Framer Motion | Micro-interactions |
| Auth | Clerk | Authentication |
| Database | PostgreSQL | Persistent source of truth |
| ORM | Prisma | Database access |
| Cache | Redis / Upstash | Ephemeral cache and market state support |
| Realtime | WebSockets / managed realtime service | Live order book and price updates |
| Background jobs | Trigger.dev or equivalent | Scheduled jobs and data ingestion |
| Charts | Recharts or lightweight chart library | Market charts |
| Analytics | PostHog | Product analytics |
| Monitoring | Sentry | Error monitoring |
| Hosting | Vercel | Web application |
| Testing | Vitest | Unit tests |

The exact service choices should be recorded in `architecture.md` before implementation if they differ from this recommendation.

---


## System Boundaries

```text
app/
    Pages, layouts, route handlers

components/
    UI and feature presentation

lib/
    Business logic

lib/db/
    Database access

lib/market/
    Order book and matching engine

lib/accounting/
    Cash, holdings, ledger, P&L

lib/football/
    Football data abstraction

lib/news/
    News abstraction

lib/jobs/
    Background tasks

lib/realtime/
    Market update broadcasting

lib/analytics/
    Product analytics

lib/monitoring/
    Error monitoring

prisma/
    Database schema and migrations

types/
    Shared application types

context/
    Specifications and project documentation
```

---


## Most Important Architectural Rule

The trading engine must be isolated from the UI.

The UI should never contain the actual trading/accounting logic.

Bad:

```text
BuyButton
    ↓
calculate balance
    ↓
modify holdings
    ↓
update price
```

Good:

```text
BuyButton
    ↓
POST /api/orders
    ↓
validate request
    ↓
market service
    ↓
matching engine
    ↓
atomic accounting transaction
    ↓
persist trade
    ↓
publish market update
    ↓
UI receives updated state
```

This makes the core market logic testable and protects the accounting system from browser manipulation.

---



## Market Model Boundary

The trading architecture must keep these concepts separate:

```text
Football data
    ↓
Performance calculations (optional/proposed)
    ↓
Demand / order-book state
    ↓
Valuation model (only if approved)
    ↓
Executable orders + matching
    ↓
Settlement + accounting
```

### Proposed modules

If the 40/60 model is approved, keep the calculations isolated:

```text
lib/market/performance.ts
lib/market/demand.ts
lib/market/pricing.ts
lib/accounting/dividends.ts
```

These modules must not be embedded in React components or mixed into the matching engine.

### Critical distinction

The proposed hybrid formula may produce an indicative or executable value depending on the unresolved product decision. The matching engine must not assume that distinction on its own. The chosen market model must be documented before implementation.


## Core Modules

## `lib/market/`

Responsible for:

- Order validation
- Order book
- Matching
- Trade execution rules
- Price calculations
- Spread calculations
- Market state

Should be as deterministic and pure as possible.

## `lib/accounting/`

Responsible for:

- Cash balances
- Holdings
- Position updates
- Ledger entries
- P&L
- Trade settlement

This module must enforce accounting invariants.

## `lib/football/`

Responsible for:

- Player data
- Club data
- Competition data
- Player statistics
- Match statistics

External football providers must be hidden behind this abstraction.

## `lib/news/`

Responsible for:

- News retrieval
- News normalization
- Player association
- Source metadata

## `lib/db/`

Responsible for:

- Prisma queries
- Transactions
- Read models
- Persistence helpers

Do not place business rules directly inside Prisma query helpers unless the rule is specifically a persistence invariant.

---


## Order State Machine

Orders should use explicit states.

Example:

```text
OPEN
  ↓
PARTIALLY_FILLED
  ↓
FILLED
```

or:

```text
OPEN
  ↓
CANCELLED
```

A partially filled order can later become:

```text
PARTIALLY_FILLED → FILLED
```

Do not silently delete historical orders.

Historical orders are important for debugging and market auditing.

---


## Trade Execution

A trade should be executed inside a database transaction.

Conceptually:

```text
BEGIN TRANSACTION

1. Lock relevant order records
2. Re-check available quantities
3. Re-check account balances
4. Determine execution quantity
5. Transfer buyer cash
6. Transfer seller cash
7. Transfer player units
8. Update buyer holding
9. Update seller holding
10. Update order quantities
11. Create Trade
12. Create CashLedger records
13. Create/update PricePoint

COMMIT
```

If any operation fails:

```text
ROLLBACK
```

The matching engine must never leave half-completed trades.

---


## Concurrency

Concurrency is a major technical concern.

Two users may attempt to buy the same available sell order simultaneously.

The implementation must prevent:

```text
Order has 10 units available

User A buys 10
User B also buys 10

Incorrect result:
A receives 10
B receives 10
Seller loses only 10
```

The correct behavior is that database locking/transaction isolation ensures only the available quantity can be executed.

Concurrency tests should be added around the matching engine before public beta.

---


## API Design

API routes should be thin.

Example:

```text
POST /api/orders
GET  /api/orders
DELETE /api/orders/:id

GET  /api/players
GET  /api/players/:id
GET  /api/players/:id/order-book
GET  /api/players/:id/trades
GET  /api/players/:id/chart

GET  /api/portfolio
GET  /api/portfolio/history

GET  /api/watchlist
POST /api/watchlist
DELETE /api/watchlist/:playerId

GET  /api/leaderboard

GET  /api/news
```

A route should generally:

1. Authenticate.
2. Validate input.
3. Verify ownership/permissions.
4. Call a business-logic function.
5. Return a predictable response.

Do not implement matching or accounting directly inside route handlers.

---


## Response Format

Use consistent responses.

Success:

```ts
{
  data: ...
}
```

Error:

```ts
{
  error: {
    code: "...",
    message: "..."
  }
}
```

Do not expose internal stack traces or database errors to clients.

---


## Data Access Rules

PostgreSQL is the source of truth for persistent state.

Redis is not the source of truth for:

- Cash
- Holdings
- Orders
- Trades
- Accounting
- User balances

If Redis disappears, the market/accounting state must remain recoverable from PostgreSQL.

Redis may be used for:

- Caching
- Rate limiting
- Temporary market snapshots
- Realtime support
- Non-critical derived state

Never make irreversible accounting decisions solely from cached state.

---


## Authentication and Authorization

All private application routes require authentication.

Every mutation must:

1. Authenticate the user.
2. Identify the user from the server session.
3. Verify ownership.
4. Validate the request.
5. Execute the operation.

Never trust:

```text
userId
accountId
holdingId
orderId
```

provided by the browser without server-side ownership checks.

---
