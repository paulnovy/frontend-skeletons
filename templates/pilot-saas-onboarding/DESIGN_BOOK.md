# Pilot SaaS Onboarding Design Book

## Product Intent

A guided onboarding flow for SaaS products with visible progress, feature previews, and a celebratory finish state.

## Layout System

The page uses a restrained agency-style grid with a sticky header, high-signal hero, live preview panel, product-specific content modules, and a concise conversion/footer area. CSS Grid handles dashboards and data-dense sections; Flexbox handles navigation, controls, and compact action groups.

## Content Modules

- **Steps:** emphasizes profile workflows with realistic interface copy.
- **Forms:** emphasizes invite workflows with realistic interface copy.
- **Preview:** emphasizes connect workflows with realistic interface copy.
- **Complete:** emphasizes launch workflows with realistic interface copy.

## Interaction Model

- Sticky responsive navigation with accessible hamburger state
- Scroll reveal animation using IntersectionObserver
- Metric count-up animation when hero KPIs enter view
- Filterable product cards where relevant
- Keyboard escape handling for the mobile menu

## Accessibility Notes

- Semantic landmarks: header, main, section, footer, nav
- Visible focus states on navigational and action controls
- Skip link for keyboard users
- Form fields include aria labels
- Color contrast is tuned around the declared palette

## Implementation Notes

The skeleton intentionally avoids external UI libraries and icon packs. All visuals are CSS-driven, allowing teams to adapt the file quickly without build tooling.
