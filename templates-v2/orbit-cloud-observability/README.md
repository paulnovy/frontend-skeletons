# Orbit Cloud Observability

Premium standalone frontend skeleton for a cloud observability dashboard. It is designed for operators who need to see service health, incident priority, latency movement, live logs, deployment correlation, and probable causes in one dense but readable command surface.

## Files

- `index.html` - standalone HTML with inline CSS and JavaScript
- `DESIGN_BOOK.md` - design system, UX intent, responsive behavior, and implementation notes
- `README.md` - this overview

## Features

- Dense app shell with sticky navigation, environment selector, and live status signal
- Top service map with realistic service names and degraded dependency edges
- Left incident queue with P1/P2/P3 cards and keyboard focus navigation
- Center latency panel with keyboard-accessible tabs and probable cause cards
- Right live log stream using JetBrains Mono and a service filter shortcut with `/`
- Bottom deployment timeline with release hashes and correlated incident context
- Mobile triage mode that prioritizes incident, affected services, and actions
- Accessible focus states, semantic landmarks, reduced-motion support, and high-contrast dark palette

## Usage

Open `index.html` directly in a browser. No build step, bundler, or local server is required. The only external dependency is Google Fonts for Inter and JetBrains Mono.

## Customization

Start with the CSS custom properties in `:root` to retheme the dashboard. Replace service names, incidents, deployment hashes, and logs in the HTML with live data from your own observability pipeline when integrating into a real product.
