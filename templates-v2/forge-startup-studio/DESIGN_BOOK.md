# Forge Startup Studio Design Book

## Concept

Forge Startup Studio is a premium accelerator portal for founders, investors, mentors, and operating partners. The interface combines a public program overview with enough application and portfolio detail to feel like a real accelerator operating system.

## Design Tokens

- Cloud: `#F6F8FC`
- Ink: `#19212B`
- Indigo: `#4F46E5`
- Cyan: `#06B6D4`
- Lime: `#A3E635`
- Coral: `#FB7185`
- Heading font: Manrope
- UI font: Inter
- Radii: 8px, 14px, 22px
- Surfaces: cloud cards for public content and an ink command panel for cohort intelligence

## Layout

- Sticky top navigation with brand, required links, primary CTA, and a keyboard-navigable mobile drawer.
- Hero section with a founder-facing headline, two calls to action, stats strip, and live cohort command panel.
- Program overview uses three cards for Seed, Growth, and Scale tracks with duration, funding, and mentor counts.
- Portfolio showcase sits on an ink band so startup cards feel more editorial and investor-facing.
- Application flow pairs a three-step progress indicator with a realistic form preview.
- Events and mentor sections use consistent card grids for fast scanning.
- Footer includes the visible required studio credit.

## UX Rules

- The page should feel operational, not decorative: metrics, stages, and events all imply a working accelerator.
- Founder actions are clear and low-friction, with the main application CTA repeated in navigation and hero.
- Portfolio and mentor cards use concise labels so users can scan sector, stage, and expertise quickly.
- The application preview is intentionally not a full submission flow, but it gives developers a ready structure for expansion.

## Accessibility

- Semantic landmarks include header, nav, main, sections, aside, form, and footer.
- The mobile drawer updates `aria-expanded` and `aria-hidden`, closes with Escape, and returns focus to the opener.
- The skip link and focus-visible states support keyboard users.
- Buttons are used for interactive application steps and drawer controls.
- Reduced-motion preferences disable long transitions.

## Mobile Behavior

- Desktop navigation collapses into a slide-in drawer below tablet widths.
- Program, portfolio, events, mentor, stat, and application grids collapse into one or two columns based on available width.
- Buttons stretch on small screens to preserve tap targets and avoid cramped text.
- The hero command panel remains below the copy on narrow screens.

## Content Model

The skeleton includes realistic accelerator content:

- Three program tracks
- Six portfolio companies
- Three application steps
- Three upcoming events
- Six mentor profiles
- Visible footer credit
