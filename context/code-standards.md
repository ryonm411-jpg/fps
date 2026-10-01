# Code Standards & Development Workflow

## Code Standards

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


## Development Workflow

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


## One Feature Unit at a Time

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


## Handling Missing Requirements

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


## Database Migration Workflow

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


## Before Moving to the Next Unit

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

