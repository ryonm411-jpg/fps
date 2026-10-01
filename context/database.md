# Database & Accounting

This file is the source of truth for persistence, accounting invariants, order lifecycle, settlement, and migrations.

## Database Model

The exact Prisma schema must be defined in a dedicated feature specification before implementation.

Expected core entities:

```text
User
Player
Club
Market
Order
Trade
Holding
CashLedger
Watchlist
PricePoint
FootballStat
NewsArticle
PlayerNews
Post
Comment
Like
LeaderboardSnapshot
```

## Important relationships

```text
User
 ├── Holding
 ├── Order
 ├── Trade
 ├── CashLedger
 ├── Watchlist
 ├── Post
 └── Comment

Player
 ├── Market
 ├── Holding
 ├── Order
 ├── Trade
 ├── PricePoint
 ├── FootballStat
 ├── PlayerNews
 └── Post

Market
 ├── Order
 ├── Trade
 └── PricePoint
```

---


## Accounting Invariants

These are non-negotiable.

## Cash

A user cannot spend more available cash than they have.

```text
availableCash >= 0
```

## Holdings

A user cannot sell more units than they own.

```text
availableUnits >= 0
```

## Supply

Total player units must remain consistent.

```text
sum(user holdings) + system holdings = total supply
```

## Orders

A user cannot place a buy order requiring more reserved cash than available.

A user cannot place a sell order requiring more reserved units than available.

## Settlement

Every executed trade must have:

```text
buyer
seller
player
quantity
price
timestamp
```

## Ledger

Every balance-changing action must be auditable.

Never update balances without a corresponding accounting record.

---



## Candidate Performance & Dividend Entities

If the proposed performance/dividend model is approved, the database will likely need additional auditable records.

Possible entities:

```text
PerformanceMatchScore
PerformanceSnapshot
DividendDistribution
DividendLedgerEntry
```

Potential relationships:

```text
Player
 ├── PerformanceMatchScore
 ├── PerformanceSnapshot
 └── DividendDistribution

User
 └── DividendLedgerEntry
```

Do not add these tables solely because they appear in the proposal. Confirm the product model first, then define the exact schema and migration in the relevant feature specification.

### Dividend accounting invariant

If dividends are approved:

- Every dividend credit must have a deterministic source event.
- Every credited amount must have an accounting record.
- A dividend must not create withdrawable cash in the MVP.
- Re-running the dividend job must be idempotent.


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


## Protected Files

Do not modify unless explicitly instructed:

```text
components/ui/*
node_modules/*
prisma/migrations/*
.env*
```

Generated Prisma migrations should be produced by Prisma.

Generated shadcn components should be managed through the shadcn CLI.

---

