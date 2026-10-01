# UI Context

This file is the source of truth for visual design, layout, responsive behavior, and reusable UI patterns.

## Player Page

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


## UI Design System

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



## Player Market — Fundamentals vs. Market UI

The player page must visually separate **football fundamentals** from **market activity**.

Suggested grouping:

```text
MARKET
- Last price
- Change
- Bid / Ask
- Spread
- Volume
- Order book

PERFORMANCE
- Recent match score
- Performance Index (if approved)
- 10-game EMA (if approved)
- Football stats

COMMUNITY / CONTEXT
- News
- Posts
- Comments
```

If the proposed 40/60 model is approved, an additional valuation card may show:

- Performance Value
- Demand Value
- Hybrid Value

These must not be visually confused with the latest executable trade price.

### Dividend UI (proposed)

If virtual dividends are approved, the player page and portfolio may expose:

- dividend rate / recent dividend
- dividend history
- virtual dividend income

Do not show withdrawable-cash language in the MVP.


## Main Pages

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


## Dashboard Shell

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


## Responsive Rules

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


## Component Standards

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

