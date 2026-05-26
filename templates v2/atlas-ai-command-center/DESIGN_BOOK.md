# Atlas AI Command Center Design Book

## Project Name
Atlas AI Command Center

## Product Type
Premium AI operations dashboard for enterprise teams running multiple production AI systems.

## Intended Audience
AI platform leaders, SRE teams, security reviewers, FinOps owners, model governance teams, and executive operations leads who need a fast, trusted view of production AI health.

## User Problem
Enterprise teams often operate many model providers, routing layers, guardrails, evaluators, and workflow owners at once. The problem is not a lack of data; it is the inability to scan model risk, business impact, policy posture, incidents, and next-best actions in one operational surface.

## UX Concept
The interface is a command center rather than a marketing dashboard. It opens with a live operational summary that makes the current state obvious: fleet health, risk score, open alerts, and spend. The center grid prioritizes mission-critical cards. The right rail keeps AI recommendations visible so operators can move directly from insight to action.

## Layout Structure
- Desktop: three-column layout with persistent left navigation, central bento grid, and right activity rail.
- Left navigation: product identity, operational sections, team lanes, and active responder card.
- Center: live summary followed by cards for model fleet, revenue risk, governance, timeline, security, FinOps, and logs.
- Right rail: AI recommendations ranked by urgency.
- Tablet: two-column layout with sticky status bar and activity rail below the main grid.
- Mobile: vertical priority sequence with hamburger menu, horizontal metric scrolling, and bottom navigation.

## Typography System
- Headings: Space Grotesk, used for dashboard identity, page title, and card titles.
- UI text: Inter, used for labels, body copy, navigation, and buttons.
- Metrics and logs: IBM Plex Mono, used for scores, timestamps, model metadata, counts, and console output.
- Heading style: tight line-height, no negative letter spacing, high contrast.
- UI style: compact, readable, optimized for dense scanning.

## Color System
- Deep graphite: `#070A0F`, primary app background.
- Cloud slate: `#1B2333`, card and rail surfaces.
- Electric cyan: `#4DE3FF`, active controls, pending state, focus rings, and operational highlights.
- Signal lime: `#C7FF6B`, healthy state and positive signals.
- Warning amber: `#FFB84D`, warning state and elevated risk.
- Soft white: `#F4F7FB`, primary text.
- Supporting red: `#FF5E7A`, critical state.
- Muted text: `#B8C2D8` and `#8390AA`, secondary text and metadata.

## Explicit Design Tokens
- `--color-graphite-950`: `#070A0F`
- `--color-graphite-900`: `#0B1018`
- `--color-graphite-850`: `#0E1420`
- `--color-cloud-800`: `#1B2333`
- `--color-cloud-700`: `#263148`
- `--color-cloud-600`: `#35425D`
- `--color-cloud-500`: `#53617D`
- `--color-cyan-400`: `#4DE3FF`
- `--color-cyan-500`: `#28BDD8`
- `--color-lime-400`: `#C7FF6B`
- `--color-lime-500`: `#9DE64F`
- `--color-amber-400`: `#FFB84D`
- `--color-amber-500`: `#E79B32`
- `--color-red-400`: `#FF5E7A`
- `--color-red-500`: `#D83D5E`
- `--color-white-soft`: `#F4F7FB`
- `--color-white-muted`: `#B8C2D8`
- `--color-white-dim`: `#8390AA`
- `--font-heading`: `"Space Grotesk", system-ui, sans-serif`
- `--font-ui`: `"Inter", system-ui, sans-serif`
- `--font-mono`: `"IBM Plex Mono", monospace`
- `--space-1`: `4px`
- `--space-2`: `8px`
- `--space-3`: `12px`
- `--space-4`: `16px`
- `--space-5`: `20px`
- `--space-6`: `24px`
- `--space-7`: `28px`
- `--space-8`: `32px`
- `--space-10`: `40px`
- `--space-12`: `48px`
- `--radius-xs`: `6px`
- `--radius-sm`: `8px`
- `--radius-md`: `12px`
- `--radius-lg`: `18px`
- `--shadow-card`: `0 24px 80px rgba(0, 0, 0, 0.34)`
- `--shadow-cyan`: `0 0 32px rgba(77, 227, 255, 0.16)`
- `--line-soft`: `rgba(244, 247, 251, 0.1)`
- `--line-strong`: `rgba(244, 247, 251, 0.18)`
- `--motion-fast`: `140ms ease`
- `--motion-med`: `220ms ease`
- `--breakpoint-mobile`: `720px`
- `--breakpoint-tablet`: `1120px`
- `--z-nav`: `20`
- `--z-overlay`: `40`
- `--z-modal`: `50`

## Component System
- Persistent navigation: section labels, count badges, compact state indicators, and team context.
- Live summary: operational headline, primary actions, and four high-signal status chips.
- State cards: every card carries healthy, warning, critical, or pending state with top accent and badge.
- Metric tiles: mono numeric values with labels and trend notes.
- Risk rows: ranked workflow list with model name, model provider, geography, and risk score.
- Governance score: circular score visualization with supporting progress bars.
- Timeline: event sequence with color-coded markers and realistic operational messages.
- Log console: compact mono event stream for gateway and policy activity.
- AI recommendation rail: ranked action cards with approval and dismissal controls.
- Bottom navigation: mobile-only priority anchors for thumb-friendly movement.

## Interaction Rules
- Primary actions must be visually dominant and touch-friendly.
- All clickable elements use visible focus states.
- Escape closes the mobile navigation drawer.
- Mobile navigation links close the drawer after activation.
- Recommendation refresh uses a small rotation animation without changing layout.
- Cards progressively reveal through a lean IntersectionObserver pattern.
- Reduced-motion users receive near-instant transitions.

## Responsive Behavior
- Desktop above 1120px uses the full three-column command center.
- Tablet at 1120px and below keeps the sidebar and center content, then places the activity rail below with a sticky horizontal status strip.
- Mobile at 720px and below turns the sidebar into a drawer, stacks priority cards vertically, makes metrics horizontally scrollable, and adds bottom navigation.
- Fixed-format components use stable dimensions to prevent layout shift.

## Accessibility Notes
- Semantic landmarks are used for navigation, main content, rail, and footer.
- Skip link lets keyboard users jump directly to the operational overview.
- Controls have descriptive accessible names.
- Status is communicated through text labels, not color alone.
- Focus states use electric cyan with strong contrast.
- Text contrast is designed for dark operational environments.
- Motion respects `prefers-reduced-motion`.

## Performance Notes
- The template is a standalone HTML file with inline CSS and JS.
- The only external dependency is Google Fonts CDN.
- JavaScript is small, scoped, and deferred by placement at the end of the document.
- Visual reveal behavior uses IntersectionObserver when available and falls back safely.
- No heavy image, chart, or framework dependency is required.

## Commercial Use Cases
- AI platform control plane dashboards.
- Model governance and compliance portals.
- Enterprise AI incident response rooms.
- LLM gateway monitoring products.
- AI FinOps and inference cost management tools.
- Internal executive operations dashboards for AI transformation programs.
