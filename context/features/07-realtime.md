# Feature 07 — Realtime Market Updates

## Goal
Make market activity feel live without making the realtime layer the source of truth.

## Realtime Events
Possible events include:
- Order book changed
- Trade executed
- Last price changed
- Portfolio changed
- Market halted/reopened

## Rule
Postgres remains authoritative. Realtime transport only publishes state changes or invalidation events.

## Acceptance Criteria
Users see order-book and trade updates quickly after committed transactions, and reconnecting clients can recover current state from the server.

