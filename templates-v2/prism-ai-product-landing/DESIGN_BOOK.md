# Prism AI Product Landing — Design Book

## 1. Project Name
Prism AI Product Landing

## 2. Product Type
AI SaaS homepage with transparent AI positioning.

## 3. Intended Audience
Product teams, engineering leaders, and business owners evaluating AI tools for their workflows.

## 4. User Problem
Teams want AI that augments their work but fear black-box decisions. They need to understand how AI makes decisions, see confidence levels, and retain the ability to override.

## 5. UX Concept
Make AI feel trustworthy, not magical. Include confidence scores, audit trail preview, and human override messaging. Every AI feature is presented with its transparency mechanism visible.

## 6. Layout Structure
- **Hero**: Split layout — left copy/CTA, right animated AI workflow diagram showing the 4-step pipeline
- **Trust strip**: Logo bar of known customers
- **Features**: Bento grid with span-2 hero card + smaller feature cards
- **AI Transparency**: Dark section explaining how AI makes decisions (Input → Reasoning → Output)
- **Use Cases**: Tabbed interface with category-specific feature cards
- **Pricing**: 3-column plan cards with featured middle option
- **FAQ**: Collapsible question/answer list

## 7. Typography System
- **Headings**: Sora (500-800) — geometric, modern, tech-forward
- **Body**: Manrope (400-800) — clean, readable
- **Technical labels**: JetBrains Mono (400-600) — model versions, confidence scores, code-like elements

## 8. Color System
| Token | Hex | Usage |
|-------|-----|-------|
| Porcelain | #F7F4EF | Page background, warm neutral |
| Ink | #111827 | Primary text |
| Ultraviolet | #6D5DF6 | Primary accent, CTAs, active states |
| Soft coral | #FF7A7A | Warnings, model labels, emphasis |
| Mist blue | #DDEBFF | Secondary backgrounds, highlights |
| Charcoal | #232733 | Dark sections, AI workflow diagram |

## 9. Component System
- **Hero badge**: Pill showing version + confidence
- **Diagram steps**: Numbered pipeline steps with metadata
- **Bento cards**: Grid cards with icon, title, description
- **AI cards**: Dark cards with mono labels
- **Tabs**: Pill-shaped category selectors
- **Pricing cards**: Plan name, price, feature list, CTA
- **FAQ items**: Bold question + expandable answer

## 10. Interaction Rules
- Tab switching for use case categories
- Hover states on all interactive elements
- Focus-visible with violet outline
- Drawer navigation on mobile
- Escape to close drawer

## 11. Responsive Behavior
- **Desktop**: Full 2-column hero, 3-column bento/pricing
- **Tablet (1024px)**: Single-column hero, stacked grids
- **Mobile (768px)**: Compact hero, full-width cards, vertical actions

## 12. Accessibility Notes
- Semantic landmarks (header, main, footer, nav, section)
- Skip link to main content
- ARIA labels on diagram and trust sections
- Tabs have proper role="tab" and aria-selected
- prefers-reduced-motion support
- All images are CSS-only (no img alt needed)

## 13. Performance Notes
- Single HTML file, no build tools
- Google Fonts only external dependency
- No JavaScript frameworks
- CSS-only visual elements
- Minimal JS for drawer and tab switching

## 14. Commercial Use Cases
- AI SaaS product pages
- ML platform landing pages
- Enterprise AI tool marketing
- AI-powered workflow product sites
