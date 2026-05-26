# Cartograph Marketplace

Premium standalone frontend skeleton for a geospatial B2B marketplace.

## Files

- `index.html` - standalone HTML with inline CSS and JavaScript
- `DESIGN_BOOK.md` - visual system, layout rules, accessibility, and UX guidance
- `README.md` - usage and customization notes

## Features

- Viewport-driven product catalog with map markers and pan controls
- Realistic geospatial product listings across imagery, elevation, mobility, risk, and parcel data
- Search, category, and contract filters
- Optional map mode for buyers who want grid-only procurement
- Product detail bottom sheet that opens over the map
- Sticky mobile map header with results list below
- Keyboard support for opening product cards and moving across visible listings
- Focus states, semantic HTML5, CSS Grid/Flexbox, and reduced-motion support

## Usage

Open `index.html` directly in a browser. The page loads Inter and Space Grotesk from Google Fonts; all other assets, styles, and behavior are inline.

## Customization

- Edit CSS custom properties in `:root` to adjust colors, typography, radius, and surfaces.
- Update the `products` array in the inline script to replace listing content.
- Add regions in the `regions` object and wire matching map markers with `data-region`.
- Replace the inline SVG with a real map SDK during product integration.
- Connect filter state to backend search when moving from skeleton to application.

## Interaction Notes

- Click a map marker or region pill to update the product grid.
- Use map arrow buttons to cycle through market regions.
- Click a product card, or focus it and press `Enter` or `Space`, to open the bottom sheet.
- Press `Escape` to close the product detail sheet.
- Use the `Disable map` control to switch to grid-only procurement.

## Credit

Footer text is required: `Built with Frontend Skeletons`.
