# Haven Real Estate Design Book

## Concept

Haven Real Estate is a premium marketplace interface for buyers, renters, sellers, and agents. It centers the property search flow while supporting virtual tours, neighborhood intelligence, mortgage modeling, and agent matching.

## Palette

- Cloud `#F6F8FC` defines the page background, panels, form controls, drawer, and footer contrast text.
- Ink `#19212B` anchors body copy, dark hero surfaces, footer surfaces, and payment results.
- Indigo `#4F46E5` is the primary action color for search, brand gradients, selected states, and listing emphasis.
- Cyan `#06B6D4` marks live tour states, secondary gradients, focus affordances, and data visualization.
- Lime `#A3E635` communicates healthy listing status, active inventory, and positive availability.
- Coral `#FB7185` adds warm urgency for agent avatars and tuned-listing accents.

All softer surfaces, borders, shadows, and overlays are opacity treatments of the required colors.

## Typography

Headings use Manrope for confident real estate editorial weight. Interface labels, forms, listings, badges, and metrics use Inter for legibility across dense marketplace surfaces. Both families load from the Google Fonts CDN.

## Structure

- Sticky top navigation with brand, Buy/Rent/Sell/Neighborhoods/Agents links, search field, saved badge, and mobile hamburger.
- Hero region with market positioning, active inventory metrics, and a property search form for location, price range, property type, bedrooms, and move window.
- Featured listing grid with three property cards, CSS gradient media panels, prices, specs, addresses, and agent avatars.
- Virtual tour preview with 360° badge, play button, live agent indicator, and tour detail cards.
- Neighborhood insight cards for Zilker, Mueller, and Bouldin with walk score bars, transit score bars, school rating, and median price.
- Mortgage calculator with interactive price, down payment, rate, and term controls plus live payment output.
- Agent spotlight with four specialist cards and contact actions.
- Footer credit line: Haven Real Estate — designed by Northline Studio.

## Accessibility

The template uses semantic header, nav, main, section, article, aside, form, and footer landmarks. The mobile drawer exposes `aria-controls`, `aria-expanded`, and `aria-hidden`, traps focus while open, closes on Escape, and returns focus to the hamburger. Controls have labels, focus-visible outlines, and the mortgage result uses `aria-live` for updates. Motion is reduced through a `prefers-reduced-motion` media query.

## Responsive Behavior

Desktop uses a two-column hero, three-column listing and neighborhood grids, and a four-column agent grid. Tablet collapses the hero, tour, and calculator into single-column flows while keeping cards in two columns. Mobile switches to the slide-in drawer, stacks all cards, simplifies saved badge text, and keeps media panels with stable heights to avoid layout shifts.
