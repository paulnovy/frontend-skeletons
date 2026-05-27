# Velvet Commerce Studio Design Book

## Concept

Velvet Commerce Studio is a premium e-commerce management hub for admin teams that need one calm operating surface for inventory, orders, customer value, and revenue movement. The design favors dense, scannable information over marketing composition.

## Palette

- Cloud `#F6F8FC` is the page base and primary panel surface.
- Ink `#19212B` anchors text, the dark hero console, badges, and footer.
- Indigo `#4F46E5` marks primary actions, returning customer share, and chart depth.
- Cyan `#06B6D4` marks live sync, acquisition, and operational movement.
- Lime `#A3E635` marks healthy inventory and positive states.
- Coral `#FB7185` marks alerts, low stock, and review queues.

Only these colors are used, with opacity variants for borders, shadows, muted text, and layered surfaces.

## Typography

Headings use Manrope for a polished commerce command feel. UI copy uses Inter for readable metrics, cards, lists, and controls. Both families are loaded from the Google Fonts CDN.

## Layout

The skeleton follows the required structure:

- Sticky top navigation with brand, section links, search, notification badge, and mobile hamburger.
- Hero section with a commerce operations console.
- KPI strip for revenue, orders, conversion rate, and average order value.
- Kanban-style order pipeline across New, Processing, Shipped, and Delivered.
- Product inventory grid with SKU, stock meter, price, and low-stock alert states.
- Customer analytics section with CSS-only donut and top customer spend list.
- CSS-only seven-day revenue bar chart.
- Recent activity feed for order, stock, and signup events.
- Footer with visible studio credit.

## Accessibility

The page uses semantic landmarks, named sections, accessible search labels, keyboard-visible focus states, mobile drawer state attributes, Escape-to-close behavior, and reduced-motion support. The hamburger and drawer links are keyboard navigable on mobile.
