# Progress Tracker

Use this file as the working checklist for spec-driven development. Check items only after the behavior exists in code and has been manually verified where applicable.

## Current Product Status

**Stage:** MVP build / validation preparation

The product definition, architecture direction, accounting invariants, UI direction, and first technical milestone are documented. The next implementation priority is the end-to-end virtual trading loop.

## Phase 1 — Foundation

- [x] Next.js / TypeScript app structure
- [x] Tailwind + shadcn/ui baseline
- [x] Authentication and protected routes
- [x] PostgreSQL + Prisma configured
- [x] Environment variable documentation
- [x] Sentry configured
- [x] PostHog configured
- [x] Base dashboard shell
- [x] CI/build/typecheck/lint path working

## Phase 2 — Football Data

- [ ] Football provider selected and documented
- [ ] Provider abstraction implemented
- [ ] Initial 20–30 players seeded
- [ ] Clubs, positions, and basic player metadata loaded
- [ ] Player statistics displayed
- [ ] News abstraction implemented
- [ ] News attached to players

## Phase 3 — Virtual Account

- [ ] New users receive starting virtual cash
- [ ] Account balance is server-derived
- [ ] Cash ledger implemented
- [ ] Holdings model implemented
- [ ] Starting player supply/distribution decision documented
- [ ] Account invariants tested

## Phase 4 — Market

- [ ] Player market model implemented
- [ ] Bid/ask state implemented
- [ ] Order creation implemented
- [ ] Order cancellation implemented
- [ ] Open/completed order history
- [ ] Order book UI
- [ ] Last traded price
- [ ] Spread
- [ ] Volume

## Phase 5 — Pricing Model Decision

- [ ] Decide pure order-book vs. hybrid reference-value vs. hybrid executable-price model
- [ ] Decide whether Performance Index is MVP or post-MVP
- [ ] Decide final performance scoring matrix and normalization
- [ ] Decide whether to use 10-game EMA
- [ ] Decide whether Demand Value is derived only from the order book or uses another mechanism
- [ ] Decide whether dividends exist in MVP
- [ ] If dividends exist, decide virtual currency mechanics and qualification snapshot
- [ ] Define how dividends affect P&L and leaderboard return
- [ ] Add pricing/performance/dividend schema only after the above decisions are locked

## Phase 5 — Matching Engine

- [ ] Price-time priority implemented
- [ ] Partial fills supported
- [ ] Multiple fills supported
- [ ] Market orders supported within documented rules
- [ ] Atomic settlement implemented
- [ ] Concurrent order tests implemented
- [ ] No overspending / overselling invariant tests
- [ ] Trade record + ledger entries created atomically

## Phase 6 — Portfolio

- [ ] Holdings table
- [ ] Average entry price
- [ ] Position value
- [ ] Unrealized P&L
- [ ] Realized P&L rules documented/implemented as applicable
- [ ] Total account value
- [ ] Portfolio history chart
- [ ] Trade history

## Phase 7 — Realtime

- [ ] Order book updates without full refresh
- [ ] Last trade price updates in realtime
- [ ] Portfolio updates after fills
- [ ] Connection/reconnect behavior documented

## Phase 8 — Watchlist & Leaderboard

- [ ] Watchlist add/remove
- [ ] Watchlist page
- [ ] Leaderboard calculation
- [ ] Daily/weekly/monthly/season/all-time windows
- [ ] Virtual cash grant policy documented
- [ ] Leaderboard treatment for grants documented

## Phase 9 — Football Context

- [ ] Player form/stat summaries
- [ ] Player news timeline
- [ ] Club changes/transfers represented
- [ ] Injury/news display behavior documented
- [ ] Football events remain informational and do not directly mutate prices

## Phase 10 — Social

- [ ] Player discussion posts
- [ ] Comments
- [ ] Likes
- [ ] Basic profile
- [ ] Moderation/reporting rules
- [ ] Rate limits

## Phase 11 — Monitoring & Beta

- [ ] Error monitoring
- [ ] Trading audit logs
- [ ] Suspicious activity logging
- [ ] Product analytics events
- [ ] Beta onboarding
- [ ] Core loop manual QA
- [ ] Build/type/lint clean
- [ ] No accounting invariant failures

## First Technical Milestone

Two users must be able to:

1. Receive virtual cash.
2. Receive/hold player units according to the documented initial-supply model.
3. Place opposing orders for the same player.
4. Match those orders.
5. Transfer virtual cash and player units atomically.
6. Record the trade and ledger entries.
7. Update market price, portfolio, and order state.

## Open Product Decisions

- [ ] Exact status of the 40% Performance / 60% Demand proposal
- [ ] Whether hybrid value is reference-only or executable
- [ ] Exact Performance Index stat matrix
- [ ] Whether social-media popularity is only trader demand or also an explicit data input
- [ ] Exact EMA formula / alpha and edge cases
- [ ] Demand-value calculation method
- [ ] Dividend existence, frequency, funding, and virtual-currency treatment
- [ ] Dividend eligibility snapshot rules
- [ ] Dividend treatment in P&L and leaderboard calculations

- [ ] Exact initial price per player
- [ ] Initial virtual player supply
- [ ] How initial player units are distributed
- [ ] Whether the system may seed liquidity
- [ ] How system-seeded liquidity is displayed to users
- [ ] Market-order behavior when liquidity is insufficient
- [ ] Maximum order size / maximum position rules
- [ ] Trading halt rules
- [ ] Player injury behavior
- [ ] Retirement / death / permanent absence behavior
- [ ] Transfer behavior
- [ ] Delisting behavior
- [ ] Reopening behavior after halts
- [ ] Price-history granularity
- [ ] Leaderboard windows and reset rules
- [ ] Whether virtual cash grants affect leaderboard performance

## Definition of Done for Any Feature

- [ ] Requirement/spec is clear
- [ ] Open questions resolved or explicitly documented
- [ ] Database changes reviewed
- [ ] Implementation is isolated to the appropriate module
- [ ] Tests added for important behavior
- [ ] Manual verification completed where applicable
- [ ] `npx tsc --noEmit` passes
- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] Relevant documentation updated
- [ ] No unrelated files changed
