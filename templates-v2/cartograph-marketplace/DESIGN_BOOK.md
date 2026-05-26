# Cartograph Marketplace Design Book

## Concept

Cartograph Marketplace is a geospatial B2B procurement surface where the map filters the market, but the grid does the commercial comparison. The map is deliberately supplementary: buyers can disable it and continue with the full product catalog workflow.

## Design Tokens

- Satellite dark: `#0F172A`
- Land green: `#34D399`
- Border white: `#FFFFFF`
- Label gray: `#64748B`
- Search gold: `#FBBF24`
- UI typography: Inter
- Map label typography: Space Grotesk
- Radius scale: 4px, 6px, 8px, 14px, 18px
- Surfaces: translucent dark panels with thin white borders

## Layout

- Sticky top navigation keeps map visibility and procurement actions available.
- The first viewport contains a concise marketplace proposition, live metrics, a sticky map panel, and the product grid.
- Desktop uses a two-column workspace: map on the left, listings on the right.
- Product cards are real comparison units with vendor, category, coverage, freshness, resolution, format, and price.
- Product detail opens as a bottom sheet so the user never loses geographic context.

## UX Rules

- The map updates the product grid through region markers and pan controls.
- The grid remains authoritative for purchasing decisions.
- A dedicated map toggle supports buyers who prefer list-only procurement.
- Filters are compact and task-focused: search, category, and contract model.
- Map labels use Space Grotesk to feel technical without turning the whole interface into a display piece.

## Accessibility

- Semantic landmarks cover navigation, marketplace workspace, map aside, catalog section, detail sheet, and footer.
- Product cards support keyboard activation with Enter and Space.
- Left and right arrows move focus across visible product cards.
- Focus states use high-contrast search gold.
- The detail sheet is dismissible with Escape and restores focus to the originating card.
- Reduced-motion preferences flatten transitions.

## Mobile Behavior

- Navigation collapses into a hamburger menu.
- The full map panel is replaced by a sticky map header with the current viewport.
- Results remain in a single-column list below the sticky map header.
- Product detail uses a full-width bottom sheet with stacked content.

## Content Model

The skeleton includes realistic geospatial marketplace content:

- Commercial imagery for freight corridors and wetlands
- LiDAR and bathymetry elevation products
- Parcel ownership, zoning, and easement layers
- Mobility APIs for yards, curbs, and port gates
- Climate and operational risk feeds for winter routing, flood exposure, and heat analysis

## Implementation Notes

- `index.html` is standalone with inline CSS and JavaScript.
- Google Fonts CDN loads Inter and Space Grotesk.
- The map is a stylized inline SVG with HTML markers, not a vendor SDK.
- Region changes update copy, map transform, stats, active pills, and product results.
- The design avoids decorative landing-page composition and treats the product grid as the core marketplace surface.
