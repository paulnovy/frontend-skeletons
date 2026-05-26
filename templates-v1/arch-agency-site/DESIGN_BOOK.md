# Arch Agency Site Design Book

## Product Intent

A sophisticated agency website skeleton with bold type, case studies, services, process, team, logos, and conversion paths.

## Layout System

The page uses a restrained agency-style grid with a sticky header, high-signal hero, live preview panel, product-specific content modules, and a concise conversion/footer area. CSS Grid handles dashboards and data-dense sections; Flexbox handles navigation, controls, and compact action groups.

## Content Modules

- **Services:** emphasizes strategy workflows with realistic interface copy.
- **Cases:** emphasizes product workflows with realistic interface copy.
- **Team:** emphasizes brand workflows with realistic interface copy.
- **Process:** emphasizes growth workflows with realistic interface copy.

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
