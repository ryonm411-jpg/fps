# Football Player Market — Spec Context

This directory is the source of truth for spec-driven development of the Football Player Market application.

Read `projectoverview.md` first for product intent and MVP boundaries. Use `UIcontext.md` for visual/UI decisions, `architecture.md` and `database.md` for implementation structure, `market-model.md` for pricing-model decisions, and the feature specs under `features/` before implementing a feature.

## Source-of-truth rules

- Product behavior belongs in the relevant feature spec.
- Cross-cutting engineering rules belong in architecture, code standards, database, testing, or security/observability docs.
- Market-pricing rules belong in `market-model.md` and the relevant market feature spec.
- Raw design ideas that are not yet decisions belong in `design-inputs.md`.
- When a new requirement changes an existing behavior, update the relevant spec before changing code.
- Do not silently invent behavior for unresolved product decisions; capture them in `progress-tracker.md`.
- The MVP is virtual-money only. Real-money functionality is explicitly outside the current product boundary.
- Proposed future mechanics must be labeled as proposed until they are explicitly promoted into MVP scope.
