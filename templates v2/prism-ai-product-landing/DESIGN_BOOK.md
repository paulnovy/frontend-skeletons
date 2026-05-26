# Prism AI Product Landing Design Book

## Project Name
Prism AI Product Landing

## Product Type
Premium AI SaaS homepage for transparent, auditable AI decisions.

## Positioning
Prism AI is not framed as magic automation. It is a decision layer for teams that need AI recommendations with confidence scores, evidence, audit trails, policy validation, and explicit human override workflows.

## Audience
Revenue operations leaders, risk teams, support escalation owners, AI governance teams, compliance reviewers, and product leaders responsible for AI-assisted workflows.

## UX Principles
- Trustworthy before flashy: every AI claim is paired with evidence, score, policy state, or reviewer state.
- Human control is visible: override messaging appears in the hero, decision section, feature grid, and pricing story.
- Operational clarity: realistic labels, model versions, audit IDs, reviewer queues, and percentages make the product feel production-ready.
- Fast scanning: large hero, compact metrics, bento cards, tabs, pricing, and FAQ form a conventional SaaS landing path.

## Layout System
- Sticky header with brand, desktop nav, pricing/demo CTAs, and mobile hamburger.
- Large split hero with left copy and CTAs, right animated AI workflow diagram.
- Trust strip with enterprise-style customer marks.
- Bento feature grid with transparent model routing, confidence scoring, audit trail preview, governance packs, APIs, and human override controls.
- "How AI makes decisions" section with dark explanatory panel and step-by-step evidence chain.
- Use-case tabs for revenue operations, risk review, and support escalation.
- Pricing preview with Starter, Pro, and Enterprise tiers.
- Testimonials and FAQ.
- Mobile sticky CTA remains visible after first scroll.
- Footer includes the required credit: "Built with Frontend Skeletons".

## Typography
- Headings: Sora, used for hero, section titles, cards, tabs, pricing, and footer identity.
- Body: Manrope, used for paragraphs, navigation, lists, buttons, and labels.
- Mono: JetBrains Mono, used for model versions, decision IDs, confidence scores, metrics, and compact technical labels.

## Color Tokens
- `--color-porcelain`: `#F7F4EF`, primary warm page background.
- `--color-porcelain-2`: `#FFFDF9`, elevated warm surface.
- `--color-ink`: `#111827`, primary text.
- `--color-ink-soft`: `#3F4757`, secondary text.
- `--color-ultraviolet`: `#6D5DF6`, primary action and AI accent.
- `--color-ultraviolet-dark`: `#5345D9`, hover and high-contrast accent.
- `--color-soft-coral`: `#FF7A7A`, warm supporting accent and governance highlight.
- `--color-coral-dark`: `#D95C5C`, deeper coral for interaction states.
- `--color-mist-blue`: `#DDEBFF`, trusted soft AI surface.
- `--color-mist-blue-2`: `#EFF6FF`, page gradient support.
- `--color-charcoal`: `#232733`, dark trust panel and featured pricing.
- `--color-charcoal-2`: `#303546`, secondary dark surface.
- `--color-white`: `#FFFFFF`, elevated cards and text on dark surfaces.
- `--color-success`: `#2F9E74`, confidence and valid state.
- `--color-warning`: `#B7791F`, caution and policy review state.
- `--color-line`: `rgba(17, 24, 39, 0.13)`, standard border.
- `--color-line-soft`: `rgba(17, 24, 39, 0.08)`, subtle border.

## Spacing Tokens
- `--space-1`: `4px`
- `--space-2`: `8px`
- `--space-3`: `12px`
- `--space-4`: `16px`
- `--space-5`: `20px`
- `--space-6`: `24px`
- `--space-8`: `32px`
- `--space-10`: `40px`
- `--space-12`: `48px`
- `--space-16`: `64px`
- `--space-20`: `80px`

## Radius Tokens
- `--radius-xs`: `6px`
- `--radius-sm`: `8px`
- `--radius-md`: `14px`
- `--radius-lg`: `22px`
- `--radius-xl`: `30px`

## Shadow Tokens
- `--shadow-soft`: `0 24px 90px rgba(35, 39, 51, 0.14)`
- `--shadow-card`: `0 18px 60px rgba(35, 39, 51, 0.12)`
- `--shadow-button`: `0 14px 30px rgba(109, 93, 246, 0.26)`

## Motion Tokens
- `--motion-fast`: `140ms ease`
- `--motion-med`: `240ms ease`
- `--motion-slow`: `620ms cubic-bezier(0.2, 0.8, 0.2, 1)`

## Layout Tokens
- `--max-page`: `1180px`
- `--nav-height`: `78px`
- `--z-nav`: `30`
- `--z-drawer`: `50`
- `--z-sticky`: `20`

## Component Notes
- Hero workflow diagram: desktop shows all nodes in a grid with rotating active emphasis. Mobile acts like a stepper by showing only the active node.
- Confidence scores: use mono labels and small horizontal bars for concrete trust signals.
- Audit card: uses dark charcoal to create contrast and separate operational data from marketing copy.
- Bento feature grid: varied spans on desktop, single-column cards on mobile.
- Decision section: dark copy panel plus white step cards creates a clear explainability story.
- Tabs: role-based ARIA tablist with keyboard arrow navigation.
- FAQ: expandable disclosure pattern with `aria-expanded`.
- Mobile menu: hamburger toggles drawer and closes on Escape or link click.

## Accessibility
- Semantic header, nav, main, section, aside, and footer landmarks.
- Skip link targets the main content.
- Visible focus ring uses ultraviolet.
- Buttons and links have accessible labels or clear text.
- Tabs use `role="tablist"`, `role="tab"`, and `role="tabpanel"`.
- FAQ buttons expose expansion state.
- Status is communicated with text and numbers, not color alone.
- Reduced-motion fallback disables animation and reveal transitions.

## Responsive Behavior
- Desktop: split hero, full workflow diagram, 4-column bento grid, 3-column pricing.
- Tablet: hero stacks, bento and pricing reduce to two columns, decision and tabs stack.
- Mobile: nav becomes drawer, workflow becomes active-step view, cards stack, pricing stacks, sticky CTA appears.

## Content System
- Model names: Prism Reasoner, Prism Orchestrator, OpenAI GPT-5.4, Claude Sonnet 4.5, Gemini 3 Pro.
- Metrics: confidence percentages, decision IDs, latency, review state, workflow counts, pricing, and audit metrics.
- Tone: clear, grounded, accountable, and operational.

## External Dependencies
Google Fonts CDN only:
- Sora
- Manrope
- JetBrains Mono

