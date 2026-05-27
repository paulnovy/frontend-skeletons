# Orbit Cloud Observability — Design Book

## Product Intent

Orbit Cloud Observability is a cloud infrastructure dashboard for SREs who need one fast answer during an incident: what is broken, what is about to break, and what action should happen next. The screen is designed as an operating surface, not a landing page.

## Visual System

- Background cloud: `#F6F8FC`
- Ink text and dark command panels: `#19212B`
- Primary action indigo: `#4F46E5`
- Live signal cyan: `#06B6D4`
- Healthy lime: `#A3E635`
- Critical coral: `#FB7185`

The palette is intentionally light and clear. Dark ink panels are reserved for high-attention dependency context and current incident status, while coral appears only on risk and failure states.

## Typography

- Headings: Manrope from Google Fonts CDN
- UI text: Inter from Google Fonts CDN
- Letter spacing remains normal for dense operational readability.

## Layout

- Sticky top navigation with brand, search, environment switcher, alert badge, and mobile hamburger.
- KPI strip for uptime, p99 latency, error rate, and active incidents.
- Three-column desktop dashboard with alert triage, service health, latency heatmap, dependency map, incident timeline, and capacity gauges.
- Tablet collapses to two columns.
- Mobile prioritizes alerts, incident progression, service health, and then deeper telemetry.

## Operational Components

- Service health grid uses traffic-light status for API Gateway, Auth, Billing, Search, Events, and Database.
- Alert feed includes severity, service source, age, assignee, and a keyboard-friendly filter.
- Latency heatmap shows service by time with p50, p95, and p99 intensity states.
- Dependency map uses a simple node-link diagram with degraded hot-path highlighting.
- Incident timeline follows detected, investigating, mitigated, and resolved states.
- Capacity gauges use CSS conic gradients for CPU, memory, and network saturation.

## Accessibility

- Semantic `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer` landmarks.
- Skip link targets the dashboard.
- Hamburger drawer exposes `aria-expanded` and `aria-hidden`, supports Escape to close, and is keyboard reachable.
- Alert filters are native search inputs with visible labels for assistive tech.
- Focus-visible states use cyan outlines.
- Reduced-motion media query disables pulse and link animations.

## Verification

- HTMLParser: OK
- Lines: 601
- Required fonts: Manrope and Inter present
- Required palette colors present: `#F6F8FC`, `#19212B`, `#4F46E5`, `#06B6D4`, `#A3E635`, `#FB7185`
- Banned filler terms absent
- Playwright desktop 1440: OK, no horizontal overflow
- Playwright tablet 768: OK, no horizontal overflow
- Playwright mobile 390: OK, hamburger drawer opens and closes with Escape, no horizontal overflow
