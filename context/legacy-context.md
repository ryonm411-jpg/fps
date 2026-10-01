# Legacy Monolithic Context

This file is retained only as a migration reference. The split files in this directory are the active spec-driven source of truth.

---

# Football Player Market — Context

> This file is the source of truth for spec-driven development of the Football Player Market application.
>
> The product is a **virtual-money football player trading platform**. Users receive virtual cash, buy and sell virtual units representing football players, and prices are determined by supply and demand through a trading market.
>
> **MVP does not involve real money, cash prizes, betting, securities, crypto, or real ownership of football players.**

---

# 1. Product Overview

## What is this application?

The Football Player Market is a football-focused trading platform inspired by the interaction patterns of modern brokerage apps, trading terminals, fantasy football, and football communities.

Users can:

- Browse football players
- Research player performance and news
- View a player's market price and historical price chart
- Place virtual buy and sell orders
- Trade against other users through an order book
- Build a virtual portfolio
- Track profit and loss
- Watch players
- Compare performance with other traders
- Discuss players and market movements

The central idea is:

> **Football performance creates opinions. Opinions create buying and selling. Buying and selling creates price discovery.**

The application should not use a fixed formula such as:

> "Goal = +5%"

Instead, football events provide information that users react to. The market determines the resulting price.

## Product positioning

The long-term product is a **financial/social market layer for football fandom**.

The MVP is intentionally narrower:

> **A virtual football player market where users trade players with virtual money using supply-and-demand pricing.**

---

# 2. Core Product Principles

These principles should guide implementation decisions.

## 2.1 Market price comes from trading

The displayed market price should represent actual market activity.

For MVP:

- Users submit bids and asks.
- Matching occurs when a bid is greater than or equal to an ask.
- A completed trade establishes a transaction price.
- The latest transaction becomes the latest market price.
- Bid, ask, spread, and volume are separate concepts.

Do not hard-code football events into direct price movements.

Example:

```text
Player scores a hat-trick
        ↓
Users become more bullish
        ↓
More users place buy orders
        ↓
Buyers consume available sell orders
        ↓
Trades occur at higher prices
        ↓
Market price rises
```

The application reports the football event and the resulting market movement separately.

## 2.2 Fundamentals and market price are different

Football statistics describe the player.

Market price describes what traders currently believe the player is worth inside this virtual market.

Fundamental data can include:

- Goals
- Assists
- Minutes
- Starts
- Expected goals
- Expected assists
- Age
- Position
- Club
- Competition
- Recent form
- Injuries
- Transfers
- News

These values should inform users but should not automatically determine the market price.

## 2.3 Virtual money only in MVP

Every new user receives virtual starting cash.

Default:

```text
$100,000 virtual cash
```

MVP must not support:

- Deposits
- Withdrawals
- Real-money purchases
- Cash prizes
- Betting
- Sports prediction contracts
- Securities
- Crypto
- NFTs
- Real ownership
- Leverage
- Short selling
- Options
- Futures
- Derivatives

Real-money functionality is a separate future product phase and must not be implemented implicitly.

## 2.4 Preserve accounting integrity

Virtual cash and player units must never be created or destroyed accidentally.

Every trade must atomically:

1. Transfer virtual cash from buyer to seller.
2. Transfer player units from seller to buyer.
3. Record the trade.
4. Update order quantities.
5. Update holdings.
6. Record the accounting event.

If any part fails, the entire transaction must roll back.

---

# 3. MVP Goals

The MVP exists to validate whether people repeatedly want to trade football players.

## Primary goals

1. Users can sign up and receive virtual cash.
2. Users can discover football players.
3. Users can open a player market.
4. Users can see current price, bid, ask, spread, volume, and chart.
5. Users can place buy and sell orders.
6. Orders can match against other users.
7. Trades update portfolios and balances correctly.
8. Users can track P&L.
9. Users can watch players.
10. Users can compare trader performance.
11. Users can see relevant football statistics and news.
12. Users return to monitor positions and prices.

## Primary validation question

> **Do football fans repeatedly return because they care about their virtual positions and market movements?**

The MVP should optimize for learning this rather than building every possible trading feature.

---

# 4. MVP Scope

## In Scope

### Authentication

- User registration
- Login
- Session management
- Basic profile

### Virtual account

- Starting virtual cash
- Available cash
- Portfolio value
- Total account value
- Transaction history

### Player universe

Start small.

Recommended initial universe:

```text
20–30 players
```

Expand only after the core market loop works.

Players should initially come from major football leagues and have enough public information to make trading interesting.

### Player market

Each player has:

- Player profile
- Club
- Position
- Age
- Market price
- Previous price
- Price change
- Bid
- Ask
- Spread
- Trading volume
- Number of holders
- Price history
- Order book
- Buy action
- Sell action
- Football statistics
- News
- Watchlist action

### Trading

MVP supports:

- Buy
- Sell
- Limit orders
- Market orders
- Order cancellation
- Open orders
- Completed trades

### Order book

Display:

```text
SELL / ASK
----------------
$25.40   20 units
$25.20   35 units
$25.00   50 units

LAST TRADE
$24.95

BUY / BID
----------------
$24.90   30 units
$24.70   50 units
$24.50   75 units
```

### Portfolio

Show:

- Total portfolio value
- Available cash
- Invested value
- Total P&L
- P&L percentage
- Holdings
- Average entry price
- Current price
- Position value
- Position P&L
- Open orders
- Trade history

### Charts

At minimum:

- 1D
- 1W
- 1M
- All

The chart should use actual trade/price history.

### Watchlist

Users can:

- Add player
- Remove player
- View watchlist
- See current price
- See price change

### Leaderboard

Rank users by percentage portfolio return.

Do not rank primarily by absolute virtual dollars because users should begin with the same amount of virtual cash.

Possible periods:

- Daily
- Weekly
- Monthly
- Season
- All time

### Football information

Display useful contextual information:

- Recent matches
- Goals
- Assists
- Minutes
- Recent form
- Club
- Competition
- Relevant news

Football information should provide context for trading rather than directly manipulate prices.

### Social layer

Keep this simple in MVP.

Users can:

- Post about a player
- Comment
- Like posts

A player page can contain a small discussion feed.

### Admin

Admin functionality should include:

- Manage players
- Activate/deactivate player markets
- Correct player metadata
- Pause trading
- Inspect orders
- Inspect trades
- Inspect users
- Inspect suspicious activity
- View market health

---

# 5. Explicitly Out of Scope

Do not implement these without a new feature specification.

- Real-money deposits
- Real-money withdrawals
- Real securities
- Real ownership of players
- Betting
- Prediction markets
- Cash prizes
- Paid competitions
- Crypto
- NFTs
- Short selling
- Leverage
- Margin
- Options
- Futures
- Derivatives
- Automated trading bots
- Copy trading
- International regulatory expansion
- Advanced financial products
- Institutional accounts
- Complex KYC/AML
- Brokerage integrations
- Player licensing/ownership claims
- Fully automated news sentiment trading
- AI-generated trading recommendations

---

# 6. Core User Flow

```text
Landing page
    ↓
Sign up
    ↓
Receive $100,000 virtual cash
    ↓
Browse players
    ↓
Open player
    ↓
Research stats/news/chart/order book
    ↓
Place buy/sell order
    ↓
Order enters order book
    ↓
Matching engine finds compatible order
    ↓
Trade executes
    ↓
Cash + player units transfer atomically
    ↓
Portfolio updates
    ↓
Price chart updates
    ↓
User monitors position
    ↓
Football event occurs
    ↓
Community reacts
    ↓
New orders enter market
    ↓
Price changes through trading
```

This loop is the heart of the application.

---

# 7. Trading Model

## 7.1 Limit orders

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

## 7.2 Price-time priority

For MVP, use price-time priority.

For buy orders:

1. Highest price first.
2. Earlier order first when prices are equal.

For sell orders:

1. Lowest price first.
2. Earlier order first when prices are equal.

## 7.3 Market orders

A market buy consumes available asks starting from the lowest ask.

A market sell consumes available bids starting from the highest bid.

If there is not enough liquidity, the order should only execute against available liquidity and the remaining behavior must be explicitly defined before implementation.

Open question:

> Should an unfilled market-order remainder be cancelled or converted into a limit order?

Do not invent this behavior without recording the decision in `progress-tracker.md`.

## 7.4 Last traded price

The market price is:

```text
last executed trade price
```

If there have been no trades yet, the application needs an explicitly defined initial/reference price.

## 7.5 Spread

```text
spread = lowest ask - highest bid
```

Display both the absolute spread and, where useful, percentage spread.

## 7.6 Volume

Volume represents executed trading activity.

Do not count cancelled orders as trading volume.

---

# 8. Initial Player Supply

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

# 9. Liquidity

Liquidity is one of the most important product risks.

A market is not useful if users cannot trade.

MVP should distinguish:

- Real user orders
- System-seeded liquidity

If simulated liquidity is used, the UI must clearly distinguish it from user-generated activity.

Do not fake user activity.

The system must never display simulated trades as if real users made them.

---

# 10. Market Safety Rules

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

# 11. Player Page

The player page is one of the most important screens.

Recommended layout:

```text
---------------------------------------------------------
Player Header
Name | Club | Position | Watchlist
---------------------------------------------------------

$24.95       +4.21%
Market Price

Bid       Ask       Spread      Volume
$24.90    $25.00    $0.10       12,450

---------------------------------------------------------
Price Chart
---------------------------------------------------------

---------------------------------------------------------
Order Book             Trade Panel
Asks                   Buy / Sell
                      Quantity
                      Price
Bids                  Submit
---------------------------------------------------------

---------------------------------------------------------
Football Stats
---------------------------------------------------------

---------------------------------------------------------
News
---------------------------------------------------------

---------------------------------------------------------
Community
---------------------------------------------------------
```

The user should be able to understand:

1. What is this player worth in the market?
2. What are people currently willing to buy/sell for?
3. What has happened to the price?
4. Why might people be trading the player?
5. What is the football context?
6. How can I trade?

---

# 12. Portfolio

The portfolio should prioritize understandable accounting.

## Summary

```text
Total Value       $108,420
Cash              $42,100
Invested          $66,320
Total P&L         +$8,420
Return            +8.42%
```

## Holdings

| Player | Units | Avg. Price | Current | Value | P&L |
|---|---:|---:|---:|---:|---:|
| Player A | 20 | $20.00 | $24.00 | $480 | +$80 |
| Player B | 15 | $30.00 | $28.00 | $420 | -$30 |

P&L calculations must be server-derived and consistent with the accounting ledger.

---

# 13. Leaderboard

Leaderboard should use percentage return.

Example:

```text
#1 Trader A     +21.4%
#2 Trader B     +18.9%
#3 Trader C     +16.1%
```

Avoid ranking users by raw portfolio value if everyone starts with equal virtual capital.

Leaderboard calculations must have a defined time boundary.

Open question:

> How should deposits of virtual cash, if any, affect historical leaderboard returns?

For MVP, the safest approach is to avoid additional virtual cash grants unless explicitly defined.

---

# 14. News and Football Data

Football news and statistics provide context.

They should not automatically move prices.

Example:

```text
NEWS
Player A scores twice against Team B.

MARKET
Player A traded +7.2% over the following hour.
```

This lets users see the relationship without pretending the application knows the correct price impact.

Data providers should be isolated behind a service abstraction.

Do not directly couple football data provider SDKs to UI components.

---

# 15. Recommended Technical Architecture

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

# 16. System Boundaries

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

# 17. Most Important Architectural Rule

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

# 18. Core Modules

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

# 19. Database Model

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

# 20. Accounting Invariants

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

# 21. Order State Machine

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

# 22. Trade Execution

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

# 23. Concurrency

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

# 24. API Design

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

# 25. Response Format

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

# 26. UI Design System

## Theme

Dark-first.

The interface should feel:

> Bloomberg Terminal + Modern SaaS + Football market

It should be:

- Professional
- Analytical
- Data-dense
- Fast to scan
- Not playful
- Not casino-like

## Colors

```css
--bg-base: #0a0a0b;
--bg-surface: #141416;
--bg-elevated: #1c1c1f;

--text-primary: #f4f4f5;
--text-secondary: #a1a1aa;
--text-muted: #71717a;

--accent-primary: #3b82f6;
--accent-success: #22c55e;
--accent-warning: #f59e0b;
--accent-danger: #ef4444;

--border-default: #27272a;
--border-hover: #3f3f46;
```

## Typography

Use:

- Geist Sans for UI
- Geist Mono for prices, quantities, timestamps, and trading data where appropriate

## Radius

```text
Small UI: rounded-md
Cards: rounded-lg
Modals: rounded-xl
Buttons: rounded-lg
Inputs: rounded-md
```

## Icons

Use Lucide React.

```text
Inline: h-4 w-4
Buttons/nav: h-5 w-5
Standalone: h-6 w-6
```

Do not use arbitrary icon libraries.

---

# 27. Main Pages

Recommended MVP routes:

```text
/
 /markets
 /player/[id]
 /portfolio
 /watchlist
 /leaderboard
 /news
 /profile
 /settings
```

Authenticated application pages should use a shared dashboard shell.

---

# 28. Dashboard Shell

Desktop:

```text
┌───────────────┬─────────────────────────────────────┐
│               │ Header                              │
│   Sidebar     ├─────────────────────────────────────┤
│               │                                     │
│   Markets     │ Main content                        │
│   Portfolio   │                                     │
│   Watchlist   │                                     │
│   Leaderboard │                                     │
│   News        │                                     │
│               │                                     │
└───────────────┴─────────────────────────────────────┘
```

Sidebar:

- Fixed
- Approximately 240px
- Dark surface
- Border-right
- Active route uses primary accent

Below 768px:

- Sidebar becomes collapsible
- Hamburger control opens navigation
- Main content remains usable without horizontal overflow

---

# 29. Responsive Rules

Landing:

- Stack vertically on mobile
- Side-by-side sections on desktop

Cards:

```text
Mobile: 1 column
Tablet: 2 columns
Desktop: 3 columns
```

Tables:

- Horizontal scrolling on small screens

Trading panel:

- Desktop: chart/order book/trade panel side-by-side where space allows
- Mobile: stack chart → order book → trade panel

---

# 30. Component Standards

Use shadcn/ui for common interactive primitives.

Expected components include:

- Button
- Card
- Input
- Label
- Dialog
- DropdownMenu
- Avatar
- Badge
- Skeleton
- Tabs
- Tooltip
- Separator
- Progress

Use the shadcn CLI when adding components.

Do not manually rewrite generated shadcn primitives.

---

# 31. Code Standards

## General

- Keep modules small.
- One file should have one clear responsibility.
- Fix root causes instead of adding repeated workarounds.
- Do not mix UI, API, and business logic.
- Prefer server components by default.
- Use client components only when browser interactivity is required.

## TypeScript

- Strict mode required.
- Avoid `any`.
- Use `unknown` for genuinely unknown external values.
- Validate external input at boundaries.
- Use explicit interfaces for object shapes.
- Use enums or literal unions for constrained states.

## Next.js

- Use App Router.
- Server components by default.
- API routes under `app/api/`.
- Keep route handlers thin.
- Use metadata exports for public pages.

---

# 32. Data Access Rules

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

# 33. Authentication and Authorization

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

# 34. Testing Strategy

MVP should focus heavily on core market/accounting logic.

## Unit tests

Required for:

### Matching engine

- Exact match
- Partial match
- Multiple orders
- Price priority
- Time priority
- No match
- Cancelled orders
- Market orders
- Insufficient liquidity

### Accounting

- Buy
- Sell
- P&L
- Average entry price
- Cash reservation
- Unit reservation
- Ledger balance

### Invariants

- Cannot overspend
- Cannot oversell
- Supply remains constant
- Trade settlement is atomic

### Price calculations

- Last trade
- Bid
- Ask
- Spread
- Price change
- Volume

Use Vitest.

Tests should be co-located:

```text
lib/market/matching-engine.ts
lib/market/matching-engine.test.ts
```

---

# 35. Security Rules

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

# 36. Observability

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

# 37. Product Analytics

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

# 38. MVP Success Criteria

The MVP is complete when:

1. A user can create an account.
2. A user receives virtual starting cash.
3. The user can browse a player.
4. The player has a functioning market.
5. The user can view the order book.
6. The user can submit a buy order.
7. The order can match with another order.
8. Cash transfers correctly.
9. Player units transfer correctly.
10. The trade is permanently recorded.
11. Portfolio value updates.
12. P&L updates.
13. The price chart reflects executed trades.
14. Orders can be cancelled.
15. Users can sell holdings.
16. Watchlists work.
17. Leaderboards work.
18. Basic football data is visible.
19. Basic news is visible.
20. Core tests pass.
21. `npm run build` passes.
22. No known accounting invariant is violated.

---

# 39. Development Workflow

This project uses **spec-driven development**.

Do not jump directly from an idea to code.

For every meaningful feature:

```text
Requirement
    ↓
Feature specification
    ↓
Open questions identified
    ↓
Architecture decision
    ↓
Database changes if needed
    ↓
Implementation
    ↓
Unit tests
    ↓
Manual verification
    ↓
Build/type/lint checks
    ↓
Progress tracker update
```

---

# 40. One Feature Unit at a Time

Do not combine unrelated work.

Good:

```text
Implement player database
```

Then:

```text
Implement player API
```

Then:

```text
Implement player page
```

Then:

```text
Implement market model
```

Bad:

```text
Implement player page + matching engine + realtime + news API
```

If a feature crosses multiple architectural boundaries, split it into smaller units.

---

# 41. Handling Missing Requirements

Do not invent important product behavior.

If the specification is silent:

1. Identify the ambiguity.
2. Add it to `progress-tracker.md` as an open question.
3. Resolve the decision.
4. Update the relevant feature specification.
5. Implement only after the behavior is defined.

Important areas requiring explicit decisions include:

- Initial player prices
- Player supply
- Initial liquidity
- System liquidity
- Market order remainder behavior
- Trading halts
- Player retirement/injury behavior
- Club transfer behavior
- Delisted players
- Leaderboard calculation windows
- Virtual cash grants
- Market reopening
- Price history granularity

---

# 42. Protected Files

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

# 43. Database Migration Workflow

When modifying `prisma/schema.prisma`:

1. Update the schema.
2. Run the appropriate Prisma migration command.
3. Inspect generated SQL.
4. Update seed data if necessary.
5. Regenerate Prisma Client.
6. Run unit tests.
7. Run type checking.
8. Run production build.

Never manually edit generated migration files unless there is an explicit reason and the change has been reviewed.

---

# 44. Documentation Files

Recommended context structure:

```text
context/
├── context.md
├── architecture.md
├── code-standards.md
├── progress-tracker.md
└── features-specs/
    ├── 01-design-system.md
    ├── 02-auth.md
    ├── 03-player-data.md
    ├── 04-market.md
    ├── 05-order-book.md
    ├── 06-matching-engine.md
    ├── 07-accounting.md
    ├── 08-portfolio.md
    ├── 09-charts.md
    ├── 10-watchlist.md
    ├── 11-leaderboard.md
    ├── 12-news.md
    └── 13-social.md
```

`context.md` is the high-level source of truth.

Feature specifications contain implementation-level requirements.

`architecture.md` contains system boundaries and architectural decisions.

`code-standards.md` contains coding conventions.

`progress-tracker.md` records completed work, current work, and open questions.

---

# 45. Before Moving to the Next Unit

Before declaring a feature complete:

1. Feature works end-to-end within its defined scope.
2. No architecture invariant is violated.
3. Core logic has unit tests where appropriate.
4. `npm test` passes.
5. `npx tsc --noEmit` passes.
6. `npm run lint` passes.
7. `npm run build` passes.
8. `progress-tracker.md` is updated.
9. Relevant architecture documentation is updated.
10. New environment variables are documented without committing values.
11. No unrelated files were modified.

---

# 46. Recommended Build Order

The project should be built in this order.

## Phase 1 — Foundation

- Next.js
- TypeScript
- Tailwind
- shadcn/ui
- Dark design system
- Auth
- App shell

## Phase 2 — Football Data

- Player model
- Club model
- Player seed data
- Player list
- Player profile
- Basic statistics

## Phase 3 — Virtual Account

- User account
- Virtual cash
- Cash ledger
- Holdings
- Portfolio read model

## Phase 4 — Market

- Market model
- Initial price
- Player supply
- Order model
- Order book
- Bid/ask display

## Phase 5 — Matching Engine

- Price-time priority
- Order matching
- Partial fills
- Trade creation
- Atomic settlement
- Concurrency protection

This is the highest-risk technical phase.

## Phase 6 — Portfolio

- Holdings
- Average price
- Current value
- P&L
- Transaction history
- Portfolio chart

## Phase 7 — Realtime

- Live order book
- Live trades
- Price updates
- Portfolio refresh

## Phase 8 — Watchlist & Leaderboard

- Watchlist
- Performance leaderboard
- Historical snapshots

## Phase 9 — Football Context

- News
- Recent performance
- Statistics
- Player events

## Phase 10 — Social

- Player posts
- Comments
- Likes

## Phase 11 — Monitoring & Beta

- Analytics
- Error monitoring
- Admin tools
- Rate limits
- Beta testing
- Product metrics

Do not move to later phases simply because they are visually easier. The market/accounting foundation must be correct first.

---

# 47. First Technical Milestone

The first meaningful end-to-end milestone should be:

```text
20 players
        ↓
User receives $100,000
        ↓
User owns some player units
        ↓
User sees order book
        ↓
Two users submit opposing orders
        ↓
Matching engine executes trade
        ↓
Cash transfers
        ↓
Player units transfer
        ↓
Trade recorded
        ↓
Price updates
        ↓
Portfolio updates
```

If this works reliably, the fundamental product mechanic exists.

---

# 48. What Not to Optimize Early

Do not spend significant MVP time on:

- Complex animations
- Hundreds of players
- Advanced technical indicators
- AI trading predictions
- Sophisticated social profiles
- Mobile native apps
- Real money
- Complex financial products
- Perfect news coverage
- Global football coverage

The first question is whether people want to trade football players.

---

# 49. Long-Term Product Direction

If the virtual market demonstrates strong retention and trading activity, future phases could explore:

- Larger player universe
- More leagues
- Advanced charting
- Market alerts
- Better football analytics
- Advanced trader profiles
- Social feeds
- Public market statistics
- Additional market types
- Professional trading tools
- Potential regulated real-money structures

Any real-money functionality must be treated as a separate product and architecture phase.

Do not assume that the virtual MVP architecture automatically makes real-money trading legally or operationally possible.

---

# 50. Core Product Loop

Everything in the MVP should strengthen this loop:

```text
DISCOVER
   ↓
RESEARCH
   ↓
FORM AN OPINION
   ↓
TRADE
   ↓
TRACK POSITION
   ↓
FOOTBALL EVENT
   ↓
MARKET REACTION
   ↓
DISCUSS
   ↓
RETURN
```

If a proposed feature does not meaningfully improve this loop, it should be questioned before being added to the MVP.

---

# 51. Final Development Rule

When in doubt, prioritize:

1. Correct accounting
2. Correct market mechanics
3. Clear user feedback
4. Reliable football data
5. Fast and understandable UI
6. Product analytics
7. Everything else

The product should feel like a serious football market, but the MVP should remain technically simple enough for a solo developer to build and validate.
