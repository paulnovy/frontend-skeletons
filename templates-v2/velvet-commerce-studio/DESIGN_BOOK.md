# Velvet Commerce Studio — Design Book

## 1. Project Name
Velvet Commerce Studio

## 2. Product Type
Premium e-commerce fashion storefront.

## 3. Intended Audience
Fashion-conscious consumers seeking luxury, timeless pieces — ages 25-55, mid-to-high income.

## 4. User Problem
Fast fashion is overwhelming. Customers want curated, quality pieces but need a shopping experience that feels editorial, not transactional.

## 5. UX Concept
Balance aspiration with shopping clarity. Product cards show price, sizes, quick add, and wishlist. Editorial imagery meets commerce functionality.

## 6. Layout Structure
- **Hero**: Full-bleed split — left editorial copy, right product image with badge
- **Products**: 4-column grid with wishlist, sizes, quick add
- **Collections**: Asymmetric 2-column grid with story-driven cards
- **Lookbook**: Horizontal scroll with labeled looks
- **Concierge**: Dark split card with styling service CTA
- **Footer**: 4-column with brand, shop, about, help

## 7. Typography System
- **Headings**: Instrument Serif (400) — luxury editorial feel, thin weight
- **UI**: Manrope (400-800) — clean, modern commerce interface

## 8. Color System
| Token | Hex | Usage |
|-------|-----|-------|
| Velvet black | #09090B | Primary text, dark sections |
| Porcelain | #F7F2EA | Page background, light text on dark |
| Wine | #5E1224 | Primary accent, CTAs, eyebrow labels |
| Champagne | #D6B77A | Secondary accent, highlights, badges |
| Soft rose | #E8C7C8 | Collection card backgrounds |
| Graphite | #27272A | Secondary text, borders |

## 9. Component System
- **Product cards**: Image + wishlist + name + price + sizes + quick add
- **Collection cards**: Full-bleed dark/light with title + sub + CTA
- **Lookbook cards**: Large image with label overlay
- **Concierge section**: Dark background with features list
- **Navigation**: Minimal with search/account/cart icons

## 10. Interaction Rules
- Hover states on product cards (shadow elevation)
- Size selection on product cards
- Wishlist toggle
- Quick add to cart
- Horizontal scroll for lookbook
- Focus-visible with wine outline
- Drawer navigation on mobile

## 11. Responsive Behavior
- **Desktop (1400px+)**: Full 4-column products, asymmetric collections
- **Tablet (1024px)**: 2-column products, stacked collections
- **Mobile (768px)**: 2-column products, cinematic vertical imagery, sticky "shop collection" CTA

## 12. Accessibility Notes
- Semantic landmarks and ARIA labels
- Skip link to main content
- prefers-reduced-motion support
- Product sizes have visible labels

## 13. Performance Notes
- Single HTML file, no external dependencies beyond Google Fonts
- CSS-only visual elements
- Minimal JS for drawer only

## 14. Commercial Use Cases
- Fashion e-commerce storefronts
- Luxury brand websites
- Editorial commerce platforms
- DTC fashion marketing pages
