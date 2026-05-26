# Nova Health Patient Portal Design Book

## Project Name
Nova Health Patient Portal

## Product Type
Premium healthtech patient portal.

## Product Positioning
Nova Health is a calm patient portal for people managing routine appointments, medications, labs, messages, and care plans. The interface is designed to lower anxiety by leading with what is steady, then naming the next practical step.

## Intended Audience
Patients, caregivers, healthtech product teams, clinics, and care coordination groups that need a polished portal starting point with realistic healthcare content and accessible interaction patterns.

## User Problem
Many patient portals feel clinical in the wrong way: raw values, hard-to-find messages, and alert language that makes routine follow-up feel alarming. Nova gives patients a prioritized overview, shows who is helping them, and keeps actions close to the content they affect.

## UX Concept
The first screen answers, "Am I okay, and what do I need to do next?" A top care-status banner states the current condition in plain English. The left column handles priorities and care team context, the center column contains appointments, labs, and messages, and the right rail keeps prescriptions and care plan steps visible.

## Layout Structure
- Sticky patient app shell with brand, navigation, message action, schedule action, and hamburger menu.
- Top care-status banner with patient greeting, steady-state language, next appointment, and open tasks.
- Left overview column with care priorities, care team, and reassuring emergency-context note.
- Center workflow column with upcoming appointments, lab result tabs, and secure messages.
- Right rail with prescriptions, fast actions, and care plan cards.
- Footer includes the required credit: "Built with Frontend Skeletons".

## Typography System
- Interface: Atkinson Hyperlegible for all labels, buttons, navigation, cards, body text, values, and patient-facing detail.
- Editorial explanations: Source Serif 4 for the greeting, section headings, and reassuring explanatory passages.
- The type system uses zero letter spacing and avoids viewport-scaled body text so healthcare labels remain readable on small screens.

## Color System
- Clinical white `#FAFCFF`: primary background and low-stress clinical surface.
- Deep teal `#0A5C5A`: primary action, trusted status, and care team anchor.
- Sky `#BDEBFF`: low-pressure highlight for appointments and calm information.
- Lavender `#E8E2FF`: care plan and secondary context surfaces.
- Soft red `#FFB4A8`: attention state without emergency framing.
- Navy `#182333`: primary text and high-contrast toast/focus support.

## Explicit Design Tokens
- `--clinical-white`: `#FAFCFF`
- `--deep-teal`: `#0A5C5A`
- `--sky`: `#BDEBFF`
- `--lavender`: `#E8E2FF`
- `--soft-red`: `#FFB4A8`
- `--navy`: `#182333`
- `--font-ui`: `"Atkinson Hyperlegible", system-ui, sans-serif`
- `--font-editorial`: `"Source Serif 4", Georgia, serif`
- `--radius-sm`: `8px`
- `--radius-md`: `14px`
- `--radius-lg`: `20px`
- `--shadow-card`: `0 14px 34px rgba(24, 35, 51, 0.07)`

## Component System
- Care-status banner: a patient greeting, steady status pill, explanatory paragraph, and immediate next milestones.
- Priority cards: "Needs your attention" and "Review when ready" labels instead of frightening alerts.
- Appointment cards: date tile, appointment details, large mobile-first action row, and preparation notes.
- Medication cards: realistic drug names, doses, refill meters, and calm refill guidance.
- Lab cards: value, unit, explanation, and visual range line with text context.
- Secure message cards: sender, preview, state tag, timestamp, and reply or save actions.
- Care plan cards: numbered small steps with clear time windows.
- Quick actions: large tap targets for logging blood pressure, uploading documents, viewing summaries, and downloading medications.

## Interaction Rules
- Escape closes the mobile navigation drawer.
- Mobile navigation links close the drawer after selection.
- Lab result tabs support click plus left/right arrow keyboard navigation.
- Action buttons show stable toast feedback without shifting layout.
- Focus rings are visible and high contrast against clinical white, sky, lavender, and teal surfaces.
- Reduced-motion preferences disable transitions.

## Mobile Behavior
- Appointment actions appear before appointment detail.
- Medication refill action remains directly inside the relevant prescription card.
- Message reply action stays visible beside the message preview and becomes full-width on narrow screens.
- Content collapses into a single column with minimal nesting and large 50px tap targets.
- The order favors patient action first: status, appointments, messages, prescriptions, then supporting context.

## Accessibility Notes
- Semantic landmarks are used for header, navigation, main content, sections, asides, and footer.
- The skip link jumps directly to care status.
- Status is conveyed by text labels, not color alone.
- Lab panels use `role="tablist"`, `role="tab"`, and `role="tabpanel"`.
- Buttons use descriptive accessible labels or visible text.
- The palette maintains strong text contrast; soft colors are reserved for backgrounds and state context.

## Content Rules
- Use realistic patient names, clinician names, appointment dates, medication names, doses, lab values, message previews, and care plan steps.
- Avoid filler phrasing, draft-only labels, and abstract dashboard content.
- Avoid alarming language unless describing true emergency guidance.
- Prefer human labels such as "Needs your attention", "Review when ready", "Reply helpful", and "No reply needed".
- Explain lab values in practical patient language before exposing deeper clinical detail.

## Commercial Use Cases
- Patient portal redesign concepts.
- Digital front door prototypes for clinics.
- Care coordination SaaS dashboards.
- Medication adherence experiences.
- Lab result explanation products.
- Healthcare design system demonstrations.
