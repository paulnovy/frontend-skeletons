# Post-Interface Living Website

## Category
Adaptive Website / Intent-Assembled Homepage

## Description
Post-Interface Living Website is a standalone premium frontend skeleton for a website that assembles itself around user intent. The experience starts with one question, then composes product, proof, pricing, docs, contact, and demo sections in real time.

## Files
- `index.html`: Standalone HTML with inline CSS and JavaScript.
- `DESIGN_BOOK.md`: Design system, layout, accessibility, responsive behavior, and content rules.
- `README.md`: Usage notes and skeleton overview.

## How to View
Open `index.html` directly in a browser, or serve this folder locally:

```bash
cd /home/marian/clawd/frontend-skeletons/templates-v2/post-interface-living-website
python3 -m http.server 3010
```

Then visit:

```text
http://localhost:3010/
```

## Key Features
- Starts almost empty with "What are you trying to do?"
- Intent choices: learn, buy, build, and compare.
- The fixed homepage disappears after selection and generated sections appear.
- Visible generated sitemap and reset option.
- Adaptive accent colors: blue, green, violet, amber.
- Geist Sans base typography with intent-specific display fonts.
- Realistic product, proof, pricing, docs, contact, and demo content.
- Semantic HTML5, CSS Grid/Flexbox, focus states, reduced-motion support, keyboard navigation, mobile hamburger menu, and sticky mobile demo action.
- Footer credit: "Built with Frontend Skeletons".

## Recommended Checks
- Desktop around `1440x1100`: verify the sparse intro, generated sitemap, and product/proof composition.
- Mobile around `390x844`: verify intent cards appear first, hamburger works, sitemap scrolls, and sticky demo action appears after scrolling.
