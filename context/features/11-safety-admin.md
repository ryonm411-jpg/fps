# Feature 11 — Market Safety & Admin

## Goal
Protect the virtual market from obvious system abuse and provide operational controls.

## Safety Rules
Potential MVP controls include:
- Maximum order size
- Maximum position size
- Daily trading volume limits
- Rate limiting
- Self-trading prevention
- Suspicious activity logging
- Trading halt

## Admin Capabilities
- View market/order/trade state
- Investigate suspicious activity
- Halt/reopen markets
- Manage player availability
- Inspect audit logs

## Rule
Admin actions that change balances, holdings, or market state must themselves be auditable.

## Acceptance Criteria
Operational users can investigate market issues without bypassing accounting invariants or silently rewriting trading history.

