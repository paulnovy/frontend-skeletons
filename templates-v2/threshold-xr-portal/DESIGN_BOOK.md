# Threshold XR Portal Design Book

## Project Name
Threshold XR Portal

## Product Type
XR and spatial computing product portal for explaining immersive experiences, object previews, headset handoff, and developer integration from a regular web page.

## Positioning
Threshold XR Portal treats XR as a product gateway, not a headset-only demo. It helps visitors understand spatial features through layered browser UI first, then offers headset, desktop, mobile, and kiosk paths based on capability.

## Audience
Product marketers, spatial computing teams, developer relations teams, enterprise innovation groups, hardware launch teams, and agencies building XR demos that must work before a visitor has a headset.

## UX Principles
- Explain before immersion: every spatial behavior has a readable web equivalent.
- Progressive entry: desktop and mobile visitors can preview the concept before launching WebXR.
- Capability-aware routing: device support changes the recommended path without hiding content.
- Object clarity: product previews need labels, states, and practical annotations, not abstract visual effects.
- Mobile honesty: small screens use layered cards and video preview metaphors instead of forced 3D depth.

## Layout System
- Sticky header with product identity, navigation, SDK link, preview call to action, and hamburger menu.
- Hero with strong product claim, metrics, and an interactive spatial layer stage.
- Spatial feature cards explain anchors, inspectable objects, and shared presence.
- Object lab pairs a visual product preview with selectable product states.
- Compatibility grid lets visitors filter headset and no-headset experiences.
- Developer docs section uses tabbed SDK snippets with copy support.
- Launch timeline shows a practical implementation path.
- Mobile section documents the fallback pattern using stacked cards and preview clips.
- Footer includes the required credit: "Built with Frontend Skeletons".

## Typography
- Headings: Sora from Google Fonts for a futuristic but readable spatial product voice.
- Interface: Inter for navigation, cards, controls, and body copy.
- SDK snippets and metrics: JetBrains Mono for code, labels, and technical metadata.

## Color Tokens
- `--void`: `#030712`, primary page background.
- `--hologram`: `#38BDF8`, primary action, active state, focus ring, and spatial grid signal.
- `--violet`: `#A78BFA`, secondary action, immersive accents, and compatibility filter emphasis.
- `--glass`: `#E0F2FE`, high-contrast glass text and panel detail.
- `--graphite`: `#1F2937`, card surfaces and dark product panels.

## Component Notes
- Spatial layer stage uses CSS 3D transforms on desktop and a stacked card fallback on mobile.
- Layer toolbar activates anchor, object, and guided overlay states. `Alt+ArrowLeft` and `Alt+ArrowRight` cycle layers.
- Object lab uses selectable tabs for service kit, command console, and visor prototype states.
- Compatibility cards can be filtered by all, no-headset, and immersive categories.
- Developer docs tabs switch between session creation, anchor payload, and mobile fallback snippets.
- Copy button uses the Clipboard API and falls back to a visible "Select code" state when access is blocked.

## Accessibility
- Semantic header, nav, main, section, article, aside, and footer landmarks.
- Skip link targets the main portal content.
- Visible focus states use hologram blue with enough contrast.
- Buttons expose selected state through class and ARIA where appropriate.
- Hamburger menu updates `aria-expanded` and closes on navigation click or Escape.
- Dynamic object descriptions use visible text and the object stage has polite live region behavior.
- Reduced-motion preference disables long transitions and animation, and flattens the depth stage.

## Responsive Behavior
- Desktop: full 3D-style depth stage with perspective, floating room mesh, and side-by-side object lab.
- Tablet: major sections stack while preserving two-column feature and compatibility grids.
- Mobile: navigation becomes a hamburger menu, spatial layers become normal stacked cards, object controls stack vertically, and video preview cards explain motion-heavy behavior.

## Content Rules
- Use realistic XR terms only where they help: anchors, plane detection, WebXR, GLB, captions, controller rays, and capability detection.
- Avoid assuming headset ownership.
- Keep mobile messaging explicit about what changes from immersive mode.
- SDK examples should look plausible and portable, not vendor-locked boilerplate.

## External Dependencies
Google Fonts CDN only:
- Sora
- Inter
- JetBrains Mono
