# Context Documentation Index

This file is intentionally only an index. The detailed source of truth is split across the documents below.

## Start here

1. `projectoverview.md` — product purpose, MVP scope, core loop, boundaries, and success criteria.
2. `UIcontext.md` — visual language, layout, responsive rules, player-page structure, market/fundamentals presentation, and reusable UI conventions.
3. `architecture.md` — services, modules, market mechanics, pricing-model boundary, APIs, concurrency, auth boundaries, and data-access rules.
4. `database.md` — schema, accounting invariants, order lifecycle, settlement, candidate performance/dividend records, and migration workflow.
5. `market-model.md` — source of truth for the current MVP market model and the proposed demand/performance/dividend model.
6. `code-standards.md` — TypeScript/Next.js conventions and spec-driven development workflow.
7. `testing.md` — matching, accounting, invariant, market-pricing, performance-score, and dividend tests.
8. `security-observability.md` — security controls, monitoring, and product analytics.
9. `progress-tracker.md` — current implementation checklist and unresolved product decisions.
10. `features/` — feature-level specs used before implementing individual product areas.

## Rule

When a requirement changes, update the smallest document that owns that requirement. Do not recreate the old monolithic context file.

## Important pricing-model rule

The current MVP architecture is **order-book price discovery**: football events inform users, users trade, and executed trades establish market price.

A separate design input proposes a **40% Performance / 60% Demand hybrid valuation model** plus weekly virtual dividends. That proposal is documented, but it is **not locked MVP behavior** until the open decisions in `progress-tracker.md` are resolved.
