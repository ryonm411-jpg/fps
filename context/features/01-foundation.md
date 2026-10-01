# Feature 01 — Foundation & Application Shell

## Goal
Establish the application shell, authentication boundary, base UI primitives, environments, and engineering tooling.

## Scope
- Next.js App Router
- TypeScript
- Tailwind + shadcn/ui
- Clerk authentication
- Dashboard shell
- Postgres + Prisma
- Sentry / PostHog setup
- Base protected-route behavior

## Acceptance Criteria
- A user can authenticate.
- Public and private routes are clearly separated.
- The dashboard shell renders consistently across main pages.
- Database connectivity works locally and in deployment.
- Type checking, linting, and production build pass.

## Non-goals
No trading logic, accounting settlement, or real-money flows belong in this unit.

