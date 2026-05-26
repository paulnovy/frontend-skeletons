# Design Book: Orbit Cloud Observability

## Product Intent

Orbit is a cloud observability dashboard for on-call operators. The interface answers three operational questions in order: what changed, what broke, and what should happen next. The layout avoids marketing composition and keeps the first screen as a practical incident command surface.

## Layout System

- App shell: sticky topbar, main dashboard grid, footer credit
- Top row: full-width service map for dependency context
- Middle row: incident queue left, latency and probable cause center, logs right
- Bottom row: deployment timeline under the main analysis area
- Mobile: service map collapses into triage mode with priority incident, affected services, and action buttons

CSS Grid is used for the macro dashboard layout. Flexbox is used for navigation, toolbar controls, chips, and action groups.

## Typography

- Interface font: Inter from Google Fonts CDN
- Log font: JetBrains Mono from Google Fonts CDN
- Type is intentionally compact: operators scan labels, metrics, traces, and IDs repeatedly
- Letter spacing remains normal for readability and to avoid compressed technical text

## Color Tokens

- Midnight: `#080C16`
- Cloud navy: `#111C2E`
- Violet: `#8B5CF6`
- Cyan: `#22D3EE`
- Green: `#34D399`
- Rose: `#FB7185`

Cyan marks live system affordances and selected controls. Green marks healthy signals. Rose marks customer-impacting failure. Violet is used sparingly for deployment and correlation context.

## Interaction Model

- Hamburger menu controls mobile navigation
- Escape closes the mobile menu
- Incident cards support ArrowUp and ArrowDown focus movement
- Latency tabs support ArrowLeft and ArrowRight switching
- `/` focuses the log filter when the filter is not already active
- All controls have visible focus states

## Accessibility

- Semantic `header`, `main`, `section`, `article`, `aside`, and `footer` landmarks
- Skip link targets the dashboard
- Buttons and tabs use labels, `aria-selected`, and explicit control names
- Log stream uses `aria-live="polite"`
- Reduced-motion media query disables scan and pulse animation
- Contrast is tuned for a dark operations environment

## Content Model

The sample data is realistic and specific: incident IDs, service names, p95 values, queue lag, deployment hashes, release markers, trace IDs, and log lines. This gives implementers a credible starting structure instead of generic filler.

## Responsive Behavior

Desktop preserves the full command surface. Tablet stacks logs below the incident and latency panels. Mobile switches to incident triage mode so the operator sees priority, affected services, and immediate actions before deeper telemetry.

## Integration Notes

Replace static service cards with topology data, incident cards with alert manager data, latency bars with charting primitives, and logs with a virtualized streaming list for production scale. Keep the probable cause cards close to the latency chart; the value of the product is correlation, not raw metric volume.
