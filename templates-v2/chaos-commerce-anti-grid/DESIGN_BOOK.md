# Chaos Commerce Anti Grid Design Book

## Project Name
Chaos Commerce Anti Grid

## Product Type
Anti-grid experimental e-commerce skeleton for fashion, accessories, and limited product drops.

## Intended Audience
Creative commerce teams, streetwear brands, concept stores, experimental product studios, launch microsite teams, and designers who want expressive merchandising without damaging purchase clarity.

## User Problem
Most e-commerce grids are efficient but interchangeable. Product discovery can feel flat, especially for drops built around attitude, scarcity, and visual identity. At the same time, experimental layouts often make purchasing risky by hiding prices, cart state, product names, or checkout controls.

## UX Concept
Browsing deliberately misbehaves. Desktop cards break alignment, overlap, rotate, and shift scale to create a product wall that feels curated and volatile. The purchase path is protected: names, SKUs, prices, add actions, cart contents, totals, delivery options, and checkout fields stay conventional and readable.

## Layout Structure
- Sticky header with brand, primary navigation, hamburger menu, and cart state.
- Full-viewport hero with chaotic typography and a drop ticket.
- Product wall using CSS Grid with intentionally inconsistent card placement.
- Product cards with synthetic CSS product objects, SKU tags, descriptions, prices, and add buttons.
- Manifesto strip explaining the browsing-versus-buying contract.
- Clean checkout section with conventional form fields, delivery choices, and summary.
- Slide-out cart panel with remove controls and total.
- Footer with required "Built with Frontend Skeletons" credit.

## Typography System
- Chaotic headlines: Unbounded for the hero, section titles, product names, and brand mark.
- Commerce UI: Inter for navigation, buttons, product descriptions, labels, forms, and checkout.
- SKU tags: IBM Plex Mono for SKU labels, totals, inventory cues, and technical commerce metadata.
- Google Fonts CDN is the only external dependency.

## Color System
- White: `#FFFFFF`, primary background and checkout surface.
- Black: `#000000`, text, hard rules, card borders, cart panel, and purchase anchors.
- Hazard yellow: `#FDE047`, drop labels, active filters, warnings, and standout product surfaces.
- Glitch magenta: `#FF00AA`, chaotic hero emphasis and disruptive product surfaces.
- Raw blue: `#0038FF`, focus states, trust cues, and checkout field focus.

## Explicit Design Tokens
- `--white`: `#FFFFFF`
- `--black`: `#000000`
- `--yellow`: `#FDE047`
- `--magenta`: `#FF00AA`
- `--blue`: `#0038FF`
- `--font-chaos`: `"Unbounded", system-ui, sans-serif`
- `--font-ui`: `"Inter", system-ui, sans-serif`
- `--font-mono`: `"IBM Plex Mono", ui-monospace, monospace`
- `--radius-sm`: `4px`
- `--radius-md`: `8px`
- `--shadow-hard`: `10px 10px 0 var(--black)`
- `--motion-fast`: `140ms ease`
- `--motion-med`: `240ms ease`

## Component System
- Header: sticky, high contrast, cart count always visible.
- Mobile drawer: simple hamburger navigation with full-width links.
- Hero ticket: receipt-like status card with drop, inventory, return, and checkout stability.
- Filter bar: product category buttons that keep selection state visible.
- Product card: rotated and scaled card with product object, SKU, title, description, price, and add action.
- Cart panel: slide-out conventional cart with line items, quantity, remove buttons, and total.
- Checkout form: conventional two-column form with autocomplete attributes and clear delivery options.
- Summary card: sticky desktop order summary with product rows and totals.

## Interaction Rules
- Every interactive control has a visible focus state.
- Escape closes the mobile menu or cart panel.
- Navigation links close the mobile drawer.
- Filter buttons hide nonmatching cards and select the first visible product.
- Product cards are focusable and selectable.
- Alt plus ArrowLeft or ArrowRight moves through visible products.
- Add buttons open the cart panel and update count and total.
- Remove buttons update the cart immediately.
- Delivery options behave like clear single-choice cards.
- Checkout submit is a prototype-only confirmation, not a real transaction.

## Responsive Behavior
- Desktop uses a deliberately irregular 12-column product grid with overlapping visual rhythm.
- Tablet reduces chaos by placing cards in two columns with mild stagger.
- Mobile reduces chaos to a single-column staggered stack.
- Cart and checkout remain conventional at every breakpoint.
- Checkout form collapses to one column on mobile.
- Product buttons remain visible without hover.

## Accessibility Notes
- Semantic HTML5 landmarks are used for header, nav, main, section, article, aside, form, and footer.
- A skip link jumps directly to products.
- Product cards are keyboard focusable.
- Cart panel exposes `aria-hidden` state.
- Form labels are explicit and fields include relevant autocomplete attributes.
- Focus states use raw blue with high contrast.
- Product facts are text, not color-only signals.

## Commerce Safety Rules
- Experimental browsing must never hide price, SKU, product name, add button, cart count, line item total, shipping cost, tax estimate, or checkout action.
- Checkout uses plain labels, predictable form layout, and restrained styling.
- Mobile layout always prioritizes tap targets and readable order details.
- Motion is reduced for users who request reduced motion.

## Performance Notes
- Standalone `index.html` with inline CSS and JavaScript.
- No build step, framework, icon library, image dependency, or external script.
- Product visuals are CSS shapes, so the skeleton is portable and fast.
- JavaScript is limited to menu, cart, filters, keyboard navigation, delivery selection, and prototype submit behavior.

## Commercial Use Cases
- Streetwear drop storefront.
- Limited edition accessories shop.
- Editorial product launch page.
- Concept store microsite.
- Fashion portfolio commerce prototype.
