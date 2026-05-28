# Spoon Marketplace - Design Book

## Project Name
Spoon Marketplace

## Product Type
Food delivery and local restaurant marketplace.

## Intended Audience
Food delivery startups, local marketplace teams, restaurant groups, growth teams, and agencies prototyping high-conversion ordering experiences.

## User Problem
Hungry customers need to make quick decisions without digging through vague listings. They care about cuisine, reliable ETA, rating, delivery fee, dietary fit, and what is popular nearby.

## UX Concept
The homepage starts with location and search, then immediately exposes cuisine chips, featured restaurants, ETA cards, weekly editorial picks, and a loyalty banner. The experience is optimized for fast ordering rather than browsing forever.

## Layout Structure
Sticky navigation, search-first hero, cuisine chip row, delivery map preview, featured restaurant grid, ETA strip, weekly picks section, loyalty banner, sticky mobile cart, and footer.

## Typography System
Bricolage Grotesque gives the brand a friendly food-market personality. Inter keeps search fields, menus, metadata, ratings, and transactional UI sharp and readable.

## Color System
Warm cream `#FFF7E6`, tomato `#EF4444`, basil `#22C55E`, saffron `#F59E0B`, charcoal `#1F2937`, and light mint `#DCFCE7`.

## Component System
Core components include location/search panel, cuisine chips, restaurant cards, rating badges, ETA cards, weekly pick rows, loyalty points card, mobile drawer, and sticky mobile cart.

## Interaction Rules
Cuisine chips use a single active state. Mobile drawer maintains `aria-expanded` and `aria-hidden`. Cart remains reachable on mobile through a sticky bottom button.

## Responsive Behavior
Desktop pairs decision search with a large delivery map preview. Tablet uses two-column restaurant and ETA grids. Mobile opens with location, search, cuisine chips, and sticky cart.

## Accessibility Notes
Semantic landmarks, skip link, visible focus styles, labeled inputs, descriptive buttons, readable contrast, accessible drawer state, and reduced-motion fallback are included.

## Performance Notes
The skeleton uses standalone HTML, inline CSS, minimal JavaScript, CSS-generated food artwork, and no heavy runtime dependencies.

## Commercial Use Cases
Food marketplace homepage, delivery app prototype, local restaurant aggregator, loyalty program landing page, rapid ordering flow, and conversion testing foundation.
