# Shield Privacy Dashboard Design Book

## Concept

Shield Privacy Dashboard is a premium privacy operations workspace for consent management, data flow inventory, subject request tracking, regulatory scorecards, and risk ownership.

## Visual System

- Typography: Manrope for headings and Inter for interface text, loaded from Google Fonts.
- Cloud `#F6F8FC`: page background and soft panels.
- Ink `#19212B`: primary text, dark hero surface, icons, and structural contrast.
- Indigo `#4F46E5`: primary actions, active navigation, and report scoring.
- Cyan `#06B6D4`: live indicators and secondary operational signals.
- Lime `#A3E635`: healthy states and positive actions.
- Coral `#FB7185`: alerts, overdue work, and critical risk.

## Layout

The page uses a sticky command bar, a dark executive hero, an evidence feed, a four-card KPI strip, and dense operational sections. Tables handle consent and subject rights workflows, while cards support data mapping, reports, and risk review.

## Accessibility

The skeleton includes semantic landmarks, accessible labels, keyboard focus states, a mobile drawer with escape-to-close behavior, and reduced-motion handling. The mobile drawer uses `aria-expanded` and `aria-hidden` state updates.

## Responsive Behavior

Desktop uses wide grids for dashboards and compliance cards. Tablet layouts collapse to two columns. Mobile uses single-column sections, a hamburger drawer, and hidden desktop navigation while preserving all dashboard content.

## Content Direction

All copy is production-toned for privacy, security, and compliance teams. Data labels avoid filler language and reflect realistic GDPR, CCPA, and LGPD operating needs.
