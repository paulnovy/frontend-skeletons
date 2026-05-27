# Orbit Cloud Observability

Standalone cloud infrastructure observability dashboard for SRE teams. It brings service health, latency, alerts, dependencies, incident progression, and capacity into one operational screen.

## Usage

Open `index.html` in a browser. No build step is required for the template. The only external dependency is Google Fonts for Manrope and Inter.

## Files

- `index.html` — standalone HTML with inline CSS and JavaScript
- `DESIGN_BOOK.md` — design rationale, component notes, accessibility, and verification details
- `README.md` — this overview

## Features

- Sticky top nav with search, environment switcher, alert count badge, and mobile drawer
- KPI strip for uptime, p99 latency, error rate, and active incidents
- Service health grid with traffic-light status and action links
- Latency heatmap for service by time p50, p95, and p99 pressure
- Alert feed with severity, source service, age, assignee, and filter input
- Dependency map with degraded hot-path highlighting
- Incident timeline for detected, investigating, mitigated, and resolved states
- Capacity gauges for CPU, memory, and network
- Visible footer credit: Orbit Cloud Observability — designed by Northstar Systems Studio

## Verification

Ran the required static check:

- HTMLParser: OK
- Lines: 601
- Manrope font: present
- Inter font: present
- Palette colors present: `#F6F8FC`, `#19212B`, `#4F46E5`, `#06B6D4`, `#A3E635`, `#FB7185`
- No lorem, TODO, FIXME, or placeholder text
- All checks passed

Ran Playwright viewport checks:

- Desktop 1440: OK, scroll 1440/1440, alerts 4
- Tablet 768: OK, scroll 768/768, alerts 4
- Mobile 390: OK, scroll 390/390, alerts 4
- Mobile drawer opens from the hamburger and closes with Escape
- Mobile screenshot reviewed visually
