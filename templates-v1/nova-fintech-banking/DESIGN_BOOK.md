# Nova Fintech Banking Design Book

## Direction

Neobanking interface. The interface is designed to feel premium, credible, and immediately usable while staying adaptable for a real product team.

## Palette

- Background: `#f4f7fb`
- Surface: `#ffffff`
- Secondary surface: `#e9eef6`
- Text: `#07172f`
- Muted text: `#64748b`
- Accent: `#0f4cce`
- Secondary accent: `#14b8a6`

## Typography

The template loads Google Fonts with this family string: `Inter:wght@400;500;600;700;800`. Display headings use the configured display stack where relevant, while interface copy stays clean and readable.

## Components

- Sticky navigation with desktop pills and a mobile hamburger menu.
- Hero section with metric cards and a CSS-built product preview.
- Feature cards with hover lift and accent border states.
- Showcase cards with media areas, compact metadata, and action links.
- Dashboard table and chart module for data-heavy content.
- People cards for mentors, practitioners, members, providers, or teams.
- Timeline module for process, calendar, breadcrumbs, or capability sequencing.
- CTA panel with strong conversion hierarchy.

## Interaction Model

Buttons, links, inputs, selects, and cards include hover and focus states. Reveal animations are intersection-observer driven and disabled for reduced-motion users. The filter form uses a small inline JavaScript confirmation state to demonstrate production interaction without external dependencies.

## Responsiveness

The layout is mobile-first. Cards stack cleanly on small screens, then expand into multi-column grids at tablet and desktop widths. Tables convert into stacked rows on mobile to avoid cramped horizontal scrolling.
