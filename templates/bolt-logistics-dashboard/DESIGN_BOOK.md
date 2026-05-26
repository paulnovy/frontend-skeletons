# Bolt Logistics Dashboard Design Book

## Direction

This skeleton is designed as a operational, data-dense, efficient experience for a supply chain dashboard. The visual system uses dark gray with orange and amber operational accents and keeps the first screen immediately useful rather than promotional.

## Layout System

- Header: sticky, compact, and responsive, with a hamburger menu on mobile.
- Hero: split between conversion copy and a domain-specific visual panel.
- Content: modular full-width sections with constrained inner grids for density and scanability.
- Footer: compact operational links and required credit.

## Components

- Navigation with active and focus states.
- KPI/stat strip for quick credibility.
- Feature cards and data tables with realistic labels.
- Domain-specific interactive area controlled by inline JavaScript.
- Responsive table behavior and stacked mobile layouts.

## Color Tokens

- Primary accent: `#f59e0b`
- Secondary accent: `#fb923c`
- Background: `#111318`
- Text: `#f8fafc`
- Surface: `#1b2028`

## Adaptation Notes

Keep the typography restrained, preserve generous whitespace, and avoid adding decorative clutter. For production, wire the data tables, search, filters, and forms to real application state while keeping the existing component hierarchy intact.
