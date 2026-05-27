# Nova Fintech Banking Design Book

## Positioning

Nova Fintech Banking is a premium neobanking workspace for digital-first account management, transaction review, transfer approvals, and virtual card operations.

## Visual System

- Typography: Manrope carries headings, the brand mark, and large balance figures. Inter handles navigation, controls, lists, labels, and financial data.
- Background: Cloud `#F6F8FC` keeps the banking interface calm, bright, and operational.
- Text and secure panels: Ink `#19212B` anchors readable UI and creates a private banking feel in the balance and card surfaces.
- Primary accent: Indigo `#4F46E5` marks core action states, transfer progress, and premium card gradients.
- Live signal: Cyan `#06B6D4` supports sync states, chart segments, and active system feedback.
- Healthy state: Lime `#A3E635` communicates liquidity, synced data, positive account health, and enabled controls.
- Critical state: Coral `#FB7185` is reserved for alerts, debit movement, notification badges, and card-freeze risk cues.

## Layout

The first viewport opens on an account command center rather than a marketing page. A sticky top navigation leads into a dark total-balance surface, linked account cards, quick actions, transactions, spending analytics, card controls, and the transfer flow.

## Components

- Top navigation with brand, account sections, notification badge, avatar, and keyboard-ready mobile drawer.
- Account overview with total balance, liquidity status, and three linked account cards.
- Quick action buttons for send, request, bill payment, and top-up workflows.
- Scrollable transaction history with merchant names, category badges, debit or credit amounts, dates, and running balances.
- CSS-only donut chart with legend for category-level spending allocation.
- Three-step transfer flow with recipient, amount, and confirmation screens plus a progress indicator.
- Virtual card display with masked number, monthly spend limit bar, and freeze toggle.

## Accessibility

The skeleton uses semantic landmarks, labelled navigation areas, aria state changes for the mobile drawer, focus-visible outlines, Escape-to-close behavior, keyboard-readable scroll regions, and a prefers-reduced-motion branch.

## Responsive Behavior

Desktop uses a two-column banking workspace with dense data panels. Tablet collapses overview and workspace columns. Mobile switches to a hamburger drawer, stacks actions and panels, keeps transactions horizontally readable, and preserves tap-friendly controls.
