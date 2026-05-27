# Cipher DevTools Hub Design Book

## Concept

Cipher DevTools Hub is a premium developer tools marketplace for platform teams. It combines an API catalog, SDK distribution, documentation shortcuts, usage analytics, and operational activity into one focused dashboard.

## Palette

- Cloud `#F6F8FC` provides the page base, raised panels, input fields, and mobile drawer.
- Ink `#19212B` anchors text, the console preview, footer, icons, and high-contrast controls.
- Indigo `#4F46E5` is the primary action and chart accent.
- Cyan `#06B6D4` marks live indicators, search details, and secondary chart movement.
- Lime `#A3E635` represents healthy systems, readiness, and successful activity.
- Coral `#FB7185` marks critical states, deprecations, and elevated operational attention.

Only these colors are used directly, with opacity variants for borders, shadows, muted text, and surface layering.

## Typography

Headings use Manrope for a crisp technical brand voice. Interface text uses Inter for metrics, navigation, cards, lists, and dense developer platform information. Both families load from the Google Fonts CDN.

## Structure

The page includes every required section:

- Sticky top navigation with brand, section links, search, hamburger drawer, and user avatar.
- KPI strip for total APIs published, active developers, requests today, and uptime percentage.
- API catalog with version, status badge, latency, and popularity on each card.
- SDK downloads with language badges, package versions, download totals, and file sizes.
- Usage analytics with a CSS-only seven-day API calls bar chart.
- Documentation quick links for Getting Started, Authentication, Rate Limits, and Webhooks.
- Recent activity feed covering API key creation, SDK release, deprecation notice, and webhook replay.
- Footer credit line naming the product and studio.

## Accessibility

Semantic landmarks are used for header, nav, main, sections, aside, and footer. The hamburger button exposes `aria-controls` and `aria-expanded`, while the drawer toggles `aria-hidden`, closes on Escape, and returns focus to the opener. Links and controls have visible focus states, search inputs are labelled, and reduced-motion preferences are respected.

## Responsive Behavior

Desktop uses a broad two-column platform layout with dense catalog cards. Tablet collapses the hero and content columns while keeping KPI and docs grids efficient. Mobile switches to a slide-in drawer, single-column cards, compact chart labels, and stacked activity entries.
