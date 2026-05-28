# Bricklane Real Estate - Design Book

## Project Name
Bricklane Real Estate

## Product Type
Real estate marketplace with map/list comparison, mortgage estimates, neighborhood insight, and agent conversion.

## Intended Audience
Property marketplaces, brokerages, real estate startups, mortgage comparison products, and agencies building search-led housing experiences.

## User Problem
Buyers struggle to compare homes because price, commute, monthly cost, neighborhood quality, and deal signals are scattered across separate tabs.

## UX Concept
Bricklane puts comparison data directly into property cards. The page combines map context, saved search, property results, mortgage estimate, neighborhood editorial, and an agent CTA.

## Layout Structure
Sticky nav, search hero, map preview, property list, sticky side mortgage/agent panel, neighborhood editorial section, insight cards, sticky mobile filter bar, and footer.

## Typography System
Inter handles the interface, property metadata, price tags, and controls. Libre Baskerville gives neighborhood editorial sections a local, premium feel.

## Color System
Stone `#F4F1EA`, ink `#1F2937`, brick `#B4533C`, moss `#6B8E23`, sky `#93C5FD`, and cream `#FFF7ED`.

## Component System
Core components include drawer navigation, saved search button, search card, map preview labels, property cards, deal tags, mortgage estimate panel, agent CTA, editorial card, and insight cards.

## Interaction Rules
Mobile drawer updates `aria-expanded` and `aria-hidden`. Mobile uses a sticky map/filter trigger. Property cards expose comparison actions without hiding key metrics.

## Responsive Behavior
Desktop uses map/list hybrid with sticky side panel. Tablet stacks the map and panels. Mobile defaults to list-first browsing with a sticky bottom map/filter control.

## Accessibility Notes
Semantic landmarks, skip link, labeled inputs, visible focus states, descriptive buttons, readable contrast, accessible drawer state, and reduced-motion fallback are included.

## Performance Notes
Standalone HTML with inline CSS, minimal JavaScript, stable CSS-built visual blocks, and no heavy dependencies.

## Commercial Use Cases
Real estate marketplace homepage, buyer search dashboard, brokerage portal, mortgage lead funnel, neighborhood guide, and property comparison prototype.
