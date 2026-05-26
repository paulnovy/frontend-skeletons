# Echo Video Platform Design Book

## Positioning
A dark video hosting dashboard for channel management, video grids, monetization, and performance analytics. The screen is intended to look like a premium SaaS or institutional product interface, with enough real content density to feel ready for adaptation.

## Visual System
- Palette: Dark cinematic red
- Primary accent: #e53935
- Secondary accent: #ff8a65
- Background: #100d0e
- Surface: #191416
- Typography: Inter through Google Fonts
- Radius: compact 8px controls and 18px large product frames

## Layout
- Sticky semantic header with desktop navigation and mobile hamburger panel.
- Hero section uses a two-column grid with value proposition, CTAs, metrics, and a detailed product frame.
- Product frame combines a sidebar, chart area, and priority queue to show the operational heart of the product.
- Feature section uses three equal cards mapped to the requested product capabilities.
- Workflow section pairs a strong editorial statement with four implementation tiles.
- CTA band and footer close the page with a clear adaptation path and credit.

## Interaction
- Navigation links, buttons, cards, metrics, and chart bars have hover and focus-visible states.
- Mobile menu toggles aria-expanded, body scroll locking, and closes after link activation.
- Cards use pointer-position highlights for a premium agency feel without external JavaScript.

## Responsive Behavior
- Desktop uses CSS Grid for hero, feature, workflow, and dashboard regions.
- Tablet collapses hero and workflow to one column while preserving card grids.
- Mobile hides desktop actions behind the hamburger, stacks work rows, and compresses chart spacing.

## Content Notes
- Copy is domain-specific and avoids placeholder language.
- Dashboard rows, metrics, and labels are realistic for video hosting.
- The page is standalone: one HTML file with inline CSS and inline JavaScript.

## Customization Guidance
- Replace sample metrics with live product data first.
- Keep the tokenized CSS custom properties for fast brand changes.
- Preserve the semantic structure and focus-visible states when wiring real routes.
