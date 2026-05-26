# Pulse Telemedicine Landing Design Book

## Project Name
Pulse Telemedicine Landing

## Product Type
Premium telemedicine service homepage.

## Product Positioning
Pulse is a reassuring digital front door for patients who need timely virtual care without feeling rushed or confused. The page leads with booking, coverage clarity, clinician credibility, and plain emergency guidance.

## Intended Audience
Telemedicine startups, clinic networks, employer health benefit teams, healthtech design teams, and product builders who need a polished homepage skeleton with realistic service and pricing content.

## User Problem
People looking for virtual care usually have two immediate questions: "Can someone help me soon?" and "What will this cost?" Pulse puts booking and coverage above the fold, then supports trust with doctors, insurance badges, testimonials, and transparent pricing.

## UX Concept
The first viewport works like a digital front desk. The left side explains the value and reassurance. The right side shows doctor and patient split cards, then anchors a booking widget directly over the hero so the next step is obvious.

## Layout Structure
- Sticky header with brand, navigation, primary "Book a visit" CTA, secondary "Check coverage" CTA, and hamburger menu.
- Full-width hero with large headline, reassuring microcopy, doctor/patient split image cards, and embedded appointment booking widget.
- Insurance badge strip with realistic provider names and coverage hints.
- Service category grid for urgent care, primary care, mental health, and dermatology.
- Doctor carousel with realistic names, specialties, photos, ratings, and availability labels.
- Social proof section with testimonials and performance metrics.
- Pricing section with single visit, membership, and employer care tiers.
- Emergency disclaimer with strong but calm life-threatening symptom guidance.
- Footer includes "Built with Frontend Skeletons".

## Typography System
- Headings: Plus Jakarta Sans from Google Fonts CDN.
- Body: DM Sans from Google Fonts CDN.
- Type uses zero letter spacing for normal text, strong heading weight, and conservative body sizing for readability on mobile.

## Color System
- Warm white `#FFFDF8`: page background and calm clinical surface.
- Medical blue `#2563EB`: primary CTA, trust, navigation active state.
- Aqua `#41D6C3`: focus ring, secondary care accent, coverage reassurance.
- Leaf `#7BC67E`: availability and completed reassurance states.
- Graphite `#1E293B`: primary text and high-contrast surfaces.
- Blush `#FFE1E1`: emergency disclaimer background.

## Explicit Design Tokens
- `--warm-white`: `#FFFDF8`
- `--medical-blue`: `#2563EB`
- `--aqua`: `#41D6C3`
- `--leaf`: `#7BC67E`
- `--graphite`: `#1E293B`
- `--blush`: `#FFE1E1`
- `--font-heading`: `"Plus Jakarta Sans", system-ui, sans-serif`
- `--font-body`: `"DM Sans", system-ui, sans-serif`
- `--radius-sm`: `8px`
- `--radius-md`: `16px`
- `--radius-lg`: `24px`
- `--shadow-card`: `0 16px 38px rgba(30,41,59,0.08)`
- `--shadow-soft`: `0 26px 70px rgba(30,41,59,0.10)`

## Component System
- Hero split cards: doctor and patient image cards with gradient captions.
- Booking widget: three fields on desktop; on mobile it becomes a three-step flow for symptoms, time, and provider.
- Insurance badges: compact provider cards that name plan compatibility without overclaiming.
- Service cards: category, clinical scope, price or access note, and expected timing.
- Doctor carousel: horizontally scrollable clinician cards with keyboard arrow support.
- Testimonials: patient quotes grounded in realistic visit outcomes.
- Pricing cards: transparent visit, membership, and employer tiers.
- Emergency disclaimer: explicit safety guidance in blush without competing with the booking CTA.

## Interaction Rules
- Escape closes the mobile navigation drawer.
- Navigation links close the drawer after selection.
- Booking form submit shows a non-disruptive confirmation toast.
- Mobile booking progress buttons move between the three required steps.
- Doctor carousel buttons scroll the track; the focused track supports left and right arrow keys.
- Coverage CTAs trigger a toast that describes the expected next step.
- Focus rings are visible and high contrast on buttons, links, selects, and carousel controls.

## Mobile Behavior
- The hero collapses into one column.
- The split doctor/patient cards stack.
- The booking widget moves below the split cards and becomes a three-step flow: symptoms, time, provider.
- Pricing, service categories, insurance badges, and stats collapse into single-column cards.
- Header keeps the hamburger menu visible and hides secondary desktop actions to preserve space.

## Accessibility Notes
- Semantic landmarks are used for header, nav, main, section, and footer.
- A skip link jumps directly to booking.
- Buttons and links have clear visible labels.
- Booking progress uses `role="tablist"` and `aria-selected` state.
- Status and availability are communicated with text, not color alone.
- Reduced-motion preferences disable transitions and smooth scrolling.
- Contrast is maintained by using soft colors as backgrounds and graphite or medical blue for text.

## Content Rules
- Use production-style care copy instead of draft filler.
- Use realistic clinician names, specialties, insurer names, pricing, and patient quotes.
- Emergency copy must be direct and must not imply telemedicine is suitable for life-threatening symptoms.
- Microcopy should be reassuring, practical, and explicit about coverage and price transparency.

## Commercial Use Cases
- Telemedicine homepage prototypes.
- Digital front door demos for clinic systems.
- Employer virtual care benefit landing pages.
- Healthcare design system examples.
- Conversion-focused healthtech landing page concepts.
