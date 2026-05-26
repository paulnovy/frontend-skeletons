# Zen Wellness Retreat Design Book

## Direction

Wellness retreat booking. The interface is designed to feel premium, credible, and immediately usable while staying adaptable for a real product team.

## Palette

- Background: `#f5efe4`
- Surface: `#fffaf1`
- Secondary surface: `#ebe1d0`
- Text: `#2f3027`
- Muted text: `#756f62`
- Accent: `#6d8b67`
- Secondary accent: `#b58b59`

## Typography

The template loads Google Fonts with this family string: `Cormorant Garamond:wght@500;600;700|Inter:wght@400;500;600;700`. Display headings use the configured display stack where relevant, while interface copy stays clean and readable.

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
