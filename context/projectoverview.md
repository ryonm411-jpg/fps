# Project Overview

## Product Overview

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


## Core Product Principles

These principles should guide implementation decisions.

### 2.1 Market price comes from trading

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

### 2.2 Fundamentals and market price are different

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

### 2.3 Virtual money only in MVP

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

### 2.4 Preserve accounting integrity

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


## MVP Goals

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


## MVP Scope

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


## Explicitly Out of Scope

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


## Core User Flow

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



## Pricing Model Decision Status

The project currently has **two distinct pricing concepts** documented:

### Current MVP model — order-book price discovery

The MVP architecture is based on real user orders and completed trades:

```text
Football event
    ↓
Users form opinions
    ↓
Buy/sell orders change
    ↓
Orders match
    ↓
Executed trade establishes market price
```

There is no direct rule such as `goal = +5%`.

### Proposed hybrid model — 40% Performance / 60% Demand

A separate design proposal introduces:

```text
Market Value = (0.40 × Performance Value) + (0.60 × Demand Value)
```

The proposal defines:

- `Performance Value` from a position-aware football scoring matrix.
- `Demand Value` from the order book or a bonding-curve-style demand model.
- A rolling 10-game EMA to smooth performance.
- A weekly performance-based dividend concept.

This proposal is **not yet an approved replacement for the MVP order-book model**. In particular, the project still needs to decide whether the hybrid formula defines an indicative valuation, the executable market price, or a reference value alongside the order book.

Do not implement the hybrid formula as the source of truth for trades until that decision is resolved in `progress-tracker.md`.


## News and Football Data

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


## MVP Success Criteria

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


## What Not to Optimize Early

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


## Core Product Loop

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


## Final Development Rule

When in doubt, prioritize:

1. Correct accounting
2. Correct market mechanics
3. Clear user feedback
4. Reliable football data
5. Fast and understandable UI
6. Product analytics
7. Everything else

The product should feel like a serious football market, but the MVP should remain technically simple enough for a solo developer to build and validate.

