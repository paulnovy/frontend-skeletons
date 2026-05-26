# Duality Brand Lab Design Book

## Project Name
Duality Brand Lab

## Product Type
Premium brand strategy studio skeleton with a split personality interface.

## Core Idea
Duality Brand Lab shows the two sides of serious brand work at once. The left side is the rational brand system: positioning, architecture, governance, metrics, and reusable decisions. The right side is the emotional brand world: feeling, ritual, campaign atmosphere, palette, and memorability.

Desktop users drag the divider to reveal more of either side. Mobile users switch between **System** and **Story** with a segmented toggle.

## Audience
Brand strategy teams, creative directors, B2B founders, product marketing leads, venture studios, and agencies that need to prove both strategic rigor and emotional taste.

## Layout System
- Sticky header with brand mark, primary navigation, proof link, sprint CTA, and hamburger menu.
- First viewport is a vertical split interface.
- Left pane uses dense system artifacts: matrix table, architecture cards, metrics, and palette tokens.
- Right pane uses mood, campaign atmosphere, rituals, and emotional tone cards.
- Divider handle supports pointer dragging and keyboard adjustment.
- Desktop split presets provide quick access to story-first, balanced, and system-first views.
- Mobile replaces the draggable split with a System / Story toggle.
- Lower sections explain the workshop method and client outcomes.
- Footer includes the required credit: "Built with Frontend Skeletons".

## Typography
- Rational side: IBM Plex Sans for primary UI and IBM Plex Mono for structured labels, tables, numbers, and decision artifacts.
- Emotional side: Cormorant Garamond for expressive headlines and Syne for modern campaign language.
- Letter spacing stays at `0` to keep both personalities polished and readable.

## Color Tokens
- Rational `--white`: `#FFFFFF`
- Rational `--black`: `#111111`
- Rational `--blue`: `#2563EB`
- Emotional `--wine`: `#6B1026`
- Emotional `--blush`: `#FADADD`
- Emotional `--gold`: `#D4AF37`
- Emotional `--plum`: `#2D102F`

## UX Principles
- Split does real work: the divider is not decoration; it compares operating logic against emotional presence.
- The system side should feel precise, documented, and commercially useful.
- The story side should feel memorable, sensory, and campaign-ready.
- Mobile must not simulate an awkward drag interaction; it uses a clean toggle.
- Every artifact uses realistic brand strategy content rather than filler.

## Accessibility
- Semantic `header`, `nav`, `main`, `section`, `article`, `blockquote`, and `footer` landmarks.
- Skip link targets the main studio.
- Visible focus states use rational blue.
- Hamburger exposes `aria-expanded`.
- Divider handle has value metadata and supports Arrow Left, Arrow Right, Home, and End.
- Mobile toggle uses tab semantics and `aria-selected`.
- Reduced-motion media query removes animated transitions.

## Responsive Behavior
- Desktop: two overlaid panes with adjustable width controlled by `--split`.
- Tablet and mobile: panes become normal block sections, with only one visible at a time.
- Mobile toggle labels are short: **System** and **Story**.
- Content cards stack to avoid cramped columns.

## Content Guidance
- Use specific client and project language, such as logistics intelligence, campaign briefing, regional launch kits, sales decks, and proof hierarchy.
- Avoid vague agency slogans.
- Keep the rational side answerable in meetings.
- Keep the emotional side vivid enough for campaign teams to execute.

## External Dependencies
Google Fonts CDN only:
- IBM Plex Sans
- IBM Plex Mono
- Cormorant Garamond
- Syne
