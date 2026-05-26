# Cortex Search Engine Design Book

## Direction

Enterprise search. The interface is designed as a premium product surface rather than a generic landing page. It emphasizes immediate utility, realistic operating content, and a visual system that can stretch into a production app.

## Palette

- Background: `#f6f9ff`
- Surface: `#ffffff`
- Secondary surface: `#e6efff`
- Text: `#10213f`
- Muted text: `#65758d`
- Accent: `#1d4ed8`
- Secondary accent: `#0ea5e9`
- Direction: White and blue

## Typography

The template uses Inter for interface clarity and Space Grotesk for display moments. Headings are compact, confident, and set with normal letter spacing so the layout feels polished without becoming ornamental.

## Layout Rationale

The first viewport prioritizes product comprehension: a sharp value proposition, concrete metrics, and a CSS-built application preview. Below that, the template moves into editable controls, dense decision cards, system modules, a performance workbench, people context, and a complete operating flow.

## Components

- Sticky navigation with desktop links and a mobile hamburger menu.
- Hero section with metrics and a live-status product frame.
- Editable control cards for core inputs.
- Decision cards with metadata, action states, and hover lift.
- Workflow module cards that explain the product surface.
- Responsive table and chart workbench for operational data.
- People cards for ownership and contextual notes.
- Timeline list for the end-to-end flow.
- CTA section and required Frontend Skeletons footer credit.

## Interaction Model

Links, buttons, inputs, and cards include hover and focus states. The mobile menu updates aria-expanded, closes after navigation, and preserves keyboard accessibility. IntersectionObserver reveal transitions add motion while reduced-motion users receive near-instant changes.

## Responsiveness

The layout is mobile-first. Cards stack on small screens, expand into two-column supporting grids at tablet sizes, and use a two-column hero and workbench on desktop. Tables collapse into block rows on narrow viewports to avoid horizontal overflow.

## Content Notes

All copy is domain-specific and ready to adapt. The cards, metrics, workflow stages, and operational details are intentionally concrete so teams can use the skeleton as a credible starting point for product demos, internal prototypes, or client-facing concepts.
