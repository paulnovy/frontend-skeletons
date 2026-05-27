# Nexus SaaS Landing Design Book

## Concept

Nexus is a high-conversion SaaS marketing page for revenue teams that need a clear operating layer across product usage, expansion signals, renewal risk, and lifecycle automation. The landing page opens with the core promise and immediately shows a dark product dashboard so the product feels tangible before the visitor reaches the feature grid.

## Design Tokens

- Cloud: `#F6F8FC`
- Ink: `#19212B`
- Indigo: `#4F46E5`
- Cyan: `#06B6D4`
- Lime: `#A3E635`
- Coral: `#FB7185`
- Heading font: Manrope
- UI font: Inter
- Radius: 8px, 14px, 22px
- Surfaces: cloud panels with ink borders, plus one dark ink product dashboard

## Layout

- Sticky top navigation with brand, desktop links, search, CTA, and a mobile hamburger drawer.
- Hero section with conversion copy, email capture, proof points, social proof logos, and a dashboard preview.
- Dashboard grid highlights expansion readiness, forecast movement, and signal feed activity.
- Feature grid presents six commercial capabilities with simple iconography.
- Dark how-it-works band uses three numbered cards to explain the operating model.
- Pricing, testimonials, FAQ, final CTA, and footer complete the conversion path.

## UX Rules

- The product should appear operational, not decorative, so every metric includes a business meaning.
- Primary CTAs stay concise and action-oriented.
- Social proof uses believable company names and real roles instead of generic filler.
- Pricing tiers distinguish maturity stages: Starter for early motion, Pro for scaling, Enterprise for governance.
- FAQ answers reduce buying friction around setup, CRM fit, scoring, integrations, and security.

## Accessibility

- Semantic landmarks include header, nav, main, sections, aside, and footer.
- The mobile drawer exposes `aria-expanded` and `aria-hidden`, closes with Escape, and returns focus.
- FAQ buttons use `aria-expanded` and `aria-controls`.
- Focus-visible styles are prominent and use the cyan token.
- Reduced-motion preferences disable transitions and smooth scrolling.

## Mobile Behavior

- The desktop navigation collapses into a keyboard-navigable slide-in drawer.
- The dashboard, feature cards, flow cards, pricing, and testimonials collapse to single-column layouts.
- The email capture form stacks so the input and CTA remain readable on narrow screens.
- Logos compress from five columns to two columns while maintaining touch-friendly spacing.

## Content Model

The skeleton includes realistic SaaS marketing content:

- Revenue operations positioning
- Email capture and proof points
- Five-logo social proof strip
- Six feature cards
- Three-step workflow
- Three pricing tiers
- Three customer testimonials
- Five FAQ accordion items
- Final CTA and visible studio credit
