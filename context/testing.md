# Testing Strategy

## Testing Strategy

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



## Proposed Performance & Dividend Tests

If the hybrid model is approved, add tests for:

### Performance scoring

- Position-specific stat contributions
- Negative discipline events
- Score normalization to the documented range
- Missing-data behavior
- 10-game EMA calculation
- New-player / fewer-than-10-games behavior

### Demand / hybrid valuation

- Demand value changes from documented order-book inputs
- `PM = 0.40 × VP + 0.60 × VD`
- Rounding behavior
- Bounds / invalid inputs
- Clear separation between indicative value and executable trade price

### Dividends

- Correct eligible holding snapshot
- Correct per-unit payout
- Ledger entry creation
- Idempotent payout job
- No duplicate distributions
- No negative balance side effects
- Correct virtual-currency treatment
