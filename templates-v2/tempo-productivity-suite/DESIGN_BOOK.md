# Tempo Productivity Suite Design Book

## Concept

Tempo Productivity Suite is a focused work operating system for teams that lose time to fragmented tools. The first screen is the product: daily command center, task board, agenda, focus timer, workload health, quick capture, project progress, and automations.

## Design Tokens

- Paper: `#F8F5EF`
- Ink: `#1E2528`
- Cobalt: `#2F5BEA`
- Mint: `#7DD3AC`
- Coral: `#FF8A70`
- Lemon: `#F7D65A`
- Heading font: Space Grotesk
- UI font: Inter
- Radius: 6px, 8px, 12px
- Cards: paper and white surfaces with quiet ink borders

## Layout

- Sticky top navigation keeps primary sections available.
- Hero grid leads with the day command center and three operating metrics.
- Main workspace uses a four-lane task board with state-first task cards.
- Right rail carries the mobile-critical workflow: focus timer, agenda, quick capture, project progress, and automations.
- Load health uses a compact heat map for people and functional areas.

## UX Rules

- Every task must expose priority, owner, energy mode, blocker state, and next action without opening the drawer.
- Filters change visibility without rebuilding layout or losing keyboard focus.
- Focus mode is a first-class surface, not a decorative timer.
- Quick capture should require only one field and return the user to the current flow.
- Workload health is visible before the user overcommits the day.

## Accessibility

- Semantic landmarks are used for navigation, main content, sections, aside, footer, and task drawer.
- Task cards are real buttons and can be opened with keyboard interaction.
- Left and right arrow keys move focus across task cards.
- The drawer exposes `aria-hidden` state and closes with Escape.
- Toast messages use `role="status"` and `aria-live="polite"`.
- Reduced-motion preferences disable transitions and animations.

## Mobile Behavior

- Navigation collapses into a hamburger menu.
- The task board becomes a single-column lane stack.
- The side rail flows below the board while keeping focus timer and agenda readable.
- Quick capture becomes a full-width form.
- Workload heat map collapses to a single column to avoid cramped labels.

## Content Model

The skeleton includes realistic productivity operating data:

- Daily focus plan and plan health metrics
- Task cards with named owners, priority, state, blockers, and next actions
- Agenda items with readiness notes
- Focus timer surface for protected work blocks
- Project progress cards and automation status
- Workload health signals across people and teams
