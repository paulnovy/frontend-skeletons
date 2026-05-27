# Pilot SaaS Onboarding Design Book

## Concept

Pilot SaaS Onboarding is a premium multi-step setup flow for product-led SaaS teams. The interface is designed for a confident first run: users can complete workspace identity, profile preferences, team invites, integrations, and launch review without leaving the page.

## Visual System

- Typography: Manrope for headings and brand moments, Inter for interface text.
- Page background: Cloud `#F6F8FC`.
- Primary text and dark panels: Ink `#19212B`.
- Primary accent: Indigo `#4F46E5`.
- Secondary accent and live signals: Cyan `#06B6D4`.
- Healthy states: Lime `#A3E635`.
- Critical alerts: Coral `#FB7185`.

The UI uses soft opacity tints of the approved palette for panels, borders, focus states, and status surfaces.

## Structure

1. Top navigation with brand, links, mobile drawer, and progress badge.
2. Hero area with value framing and live readiness signals.
3. Five-step progress indicator.
4. Wizard panels for welcome, profile, team, integrations, and launch.
5. Sticky setup checklist and concierge help block.
6. Footer credit.

## Interaction Notes

- Stepper buttons switch between wizard panels.
- Continue, back, skip, and review buttons update progress state.
- Team invites can be added and removed.
- Integration cards toggle between connected and ready states.
- Mobile navigation opens as a keyboard-accessible drawer and closes with Escape.
- Launch screen includes CSS confetti with reduced-motion support.

## Accessibility

- Semantic landmarks are used for header, main, sections, aside, and footer.
- Keyboard focus uses a visible cyan outline.
- Mobile drawer exposes expanded state and can be dismissed from multiple controls.
- Motion is reduced through `prefers-reduced-motion`.
- Form labels are explicit and controls remain keyboard navigable.
