# Post-Interface Living Website Design Book

## Project Name
Post-Interface Living Website

## Product Type
Premium adaptive website skeleton for a homepage that assembles around declared user intent.

## Core Idea
The page begins almost empty with one question: "What are you trying to do?" Once the visitor selects an intent, the fixed homepage disappears and a generated website path appears with a visible sitemap and reset control.

## Intents
- Learn: product explanation, architecture, proof, standard pricing, docs, contact, and a learning-focused demo.
- Buy: pricing, procurement, security, pilot structure, contact, and a buying consultation path.
- Build: developer APIs, schemas, events, docs, sandbox pricing, technical contact, and implementation demo.
- Compare: category tradeoffs, comparison pricing, evidence, migration docs, contact, and evaluation demo.

## Layout System
- Sticky top navigation with brand, generated sitemap links, current intent indicator, reset action, and mobile hamburger.
- First viewport is intentionally sparse: question on the left, intent cards on the right.
- After intent selection, the intro compresses and the generated page appears below.
- Visible generated sitemap stays sticky below the main header.
- Sections render in this order: product, proof, pricing, docs, contact, demo.
- Mobile puts intent cards first, then generated sections with sticky navigation and a bottom demo CTA.

## Typography
- Base font: Geist Sans through Google Fonts CDN.
- Display font changes by intent:
  - Learn: Archivo, structured and explanatory.
  - Buy: Fraunces, more editorial and premium.
  - Build: Space Grotesk, technical and geometric.
  - Compare: Instrument Serif, evaluative and high-contrast.
- Mono labels use JetBrains Mono for routing, metrics, and code.

## Color System
- Neutral void: `#0B0B0F`
- Elevated void: `#111118`
- Primary text: `#F8FAFC`
- Muted text: `#A8AFBD`
- Learn accent: blue `#60A5FA`
- Buy accent: green `#34D399`
- Build accent: violet `#A78BFA`
- Compare accent: amber `#FBBF24`

## Component Notes
- Intent cards use `aria-pressed`, keyboard arrow navigation, and clear selection states.
- Sitemap is visible after composition and includes all generated sections plus reset.
- Product card uses adaptive metrics and intent-specific CTAs.
- Proof cards change their evidence content per intent.
- Pricing tiers are realistic and change by commercial context.
- Docs section includes intent-specific links and a code panel.
- Contact form is tailored by selected intent.
- Demo timeline changes to match the visitor's chosen job.

## Accessibility
- Semantic `header`, `nav`, `main`, `section`, `aside`, and `footer` landmarks.
- Skip link targets main content.
- Focus states are visible and high contrast.
- Mobile menu uses `aria-expanded` and closes on Escape.
- Intent state is announced through a polite live region.
- Generated composition remains resettable.
- Reduced-motion media query shortens animation and disables smooth behavior where relevant.

## Responsive Behavior
- Desktop: sparse split-intro, two-column product, three-column proof and pricing.
- Tablet: all major grids collapse to one column.
- Mobile: intent cards appear before the question content, sitemap scrolls horizontally, and a sticky demo action appears after scrolling.

## Content Rules
- No lorem ipsum.
- Copy must describe a plausible adaptive website product.
- Each intent must change product positioning, proof, pricing, docs, contact language, and demo steps.
- The footer must include "Built with Frontend Skeletons".

## External Dependencies
Google Fonts CDN only:
- Geist
- Archivo
- Fraunces
- Space Grotesk
- Instrument Serif
- JetBrains Mono
