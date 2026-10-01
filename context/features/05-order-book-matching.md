# Feature 05 — Order Book & Matching Engine

## Goal
Allow users to trade with one another using an order book.

## Order Types
- Limit orders
- Market orders, subject to documented liquidity behavior

## Matching
Use price-time priority.

For buy orders, better prices have priority; for sell orders, lower prices have priority. Orders at the same price are matched FIFO by creation time.

## State Machine
`OPEN → PARTIALLY_FILLED → FILLED`

or

`OPEN → CANCELLED`

## Atomic Execution
A trade must atomically:
1. Validate the orders again under transaction protection.
2. Determine executable quantity and price.
3. Transfer virtual cash.
4. Transfer player units.
5. Update orders.
6. Update holdings.
7. Create the trade record.
8. Create ledger records.
9. Create/update price history.

Any failure rolls the complete transaction back.

## Concurrency
Simultaneous orders must not cause overspending, overselling, duplicate fills, or overfilling.

## Acceptance Criteria
Two users can place compatible orders and receive a single correct settlement with consistent order, holding, cash, trade, and ledger state.



## Pricing-model interaction

The matching engine executes orders. It must not invent football-performance effects.

If the hybrid 40/60 model is approved, the implementation must first define whether the calculated value is:

- informational/reference only,
- a price constraint, or
- the executable price.

That decision belongs in `market-model.md` before implementation.
