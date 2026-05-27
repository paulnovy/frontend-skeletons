# Lumen Insurance Tech Design Book

## Concept

Lumen Insurance Tech is a modern insurance operations platform for policy servicing, claims management, risk assessment, and customer portal oversight. The interface is built as a dense but calm command center that supports repeated operational work.

## Visual System

- Headings use Manrope for a confident enterprise product tone.
- UI text uses Inter for readable tables, cards, controls, and metrics.
- Cloud `#F6F8FC` sets the application canvas.
- Ink `#19212B` anchors text and structural contrast.
- Indigo `#4F46E5` is the primary action and brand color.
- Cyan `#06B6D4` signals operational activity.
- Lime `#A3E635` marks healthy portfolio movement.
- Coral `#FB7185` highlights review, denial, and exception states.

## Layout

The page starts with a sticky navigation bar, desktop links, search, and a primary New Policy action. Mobile uses a hamburger button and slide-out drawer. The main content flows through a hero command panel, KPI strip, policy table, claims pipeline, risk assessment cards, customer portal cards, and footer credit.

## Interaction

The navigation links scroll to core operating sections. The mobile drawer locks page scroll while open and closes on drawer links, close button, or scrim click. Tables are horizontally scrollable on smaller screens, and the claims pipeline retains Kanban scanning behavior.

## Content Model

Policy rows include policy number, holder, coverage type, premium, status, and expiry date. Claim cards include claim ID, policy holder, claim type, amount, and adjuster. Risk cards include category, score bar, mitigation status, and review date. Customer cards include customer name, policy count, claims history, and risk score badge.
