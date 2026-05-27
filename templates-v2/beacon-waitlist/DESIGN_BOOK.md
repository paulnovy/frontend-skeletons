# Beacon Waitlist Design Book

Beacon Waitlist is a premium pre-launch signup page for startup teams that need a polished waitlist, countdown, and referral loop before public release.

## Identity

- Category: Startup pre-launch
- Mood: focused, credible, high-signal
- Audience: founders, launch operators, investors, and early adopters
- Footer credit: Beacon Waitlist — designed by Northstar Studio.

## Typography

- Headings use Manrope from Google Fonts.
- UI, body copy, forms, buttons, and navigation use Inter from Google Fonts.
- Letter spacing stays neutral for clarity and a modern product feel.

## Color System

- Cloud `#F6F8FC`: page background and soft surfaces
- Ink `#19212B`: primary text and dark panels
- Indigo `#4F46E5`: primary action and core accent
- Cyan `#06B6D4`: live states, secondary signals, interactive details
- Lime `#A3E635`: healthy status and completed referral tiers
- Coral `#FB7185`: alert accent and high-energy visual emphasis

Opacity-based tints are derived from the same colors only.

## Layout

- Sticky top navigation with desktop links and primary CTA.
- Mobile hamburger opens a keyboard-accessible slide-in drawer.
- Hero pairs direct launch messaging with a dashboard-style product preview.
- Countdown cards use strong dark contrast to make the launch date feel concrete.
- Referral section uses a dark share panel and a light progress panel for clear hierarchy.
- Social proof combines a logo strip with concise testimonial cards.
- FAQ uses accessible accordion controls.

## Interaction Notes

- Countdown is driven by inline JavaScript.
- Referral link can be copied, shared to Twitter, or opened in email.
- Signup form confirms entry with a live status toast.
- FAQ buttons update `aria-expanded` and reveal answers.
- Drawer supports Escape, backdrop close, focus return, and basic focus trapping.

## Accessibility

- Semantic landmarks are used for header, nav, main, sections, and footer.
- Focus-visible styles are clear and consistent.
- Motion is reduced for users with `prefers-reduced-motion`.
- Form fields, drawer controls, countdown, and accordions include accessible names or live regions.
