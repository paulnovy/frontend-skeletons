# Sentryline Cybersecurity Suite Design Book

## Project Name
Sentryline Cybersecurity Suite

## Product Type
Cybersecurity platform landing page with SOC dashboard preview.

## Product Positioning
Sentryline is an enterprise security command surface for teams that need to detect material threats, contain blast radius, and prove control performance without separating analyst workflow from executive reporting.

## Intended Audience
Security executives, SOC managers, incident responders, GRC teams, and enterprise platform buyers evaluating MDR, XDR, CNAPP, identity risk, and compliance automation capabilities.

## UX Concept
The page conveys urgency without panic. It opens with a live threat map and a clear "Detect, contain, prove" operating model, then moves into risk cards, an incident timeline, a SOC dashboard preview, compliance modules, and outcome-driven case studies.

## Layout Structure
- Sticky header with brand, section navigation, live status pill, primary briefing CTA, and mobile hamburger menu.
- Hero split: left narrative and proof metrics, right live threat console.
- Mobile hero replaces the map with stacked threat cards for fast scanning.
- Risk command section with score cards and exposure explanation.
- Animated incident timeline showing detection, containment, hunt, and evidence production.
- SOC dashboard preview with watched assets, high-confidence alert queue, signal chart, and case owners.
- Compliance module grid mapped to SOC 2, ISO 27001, NIST CSF, and PCI DSS.
- Case studies with realistic outcomes.
- Footer includes "Built with Frontend Skeletons".

## Typography System
- Headings: Archivo, strong and compressed enough for enterprise security presence.
- Body/interface: Inter for operational readability.
- Threat IDs and metrics: IBM Plex Mono for alert IDs, risk scores, case IDs, timestamps, and framework references.
- Letter spacing remains neutral for legibility and consistency.

## Color System
- Black `#050505`: page base and high-confidence security backdrop.
- Tactical gray `#18181B`: panels, cards, dashboard surfaces, and console backgrounds.
- Acid green `#B6FF3B`: primary action, positive containment status, scan lines, proof state, and focus rings.
- Alert red `#FF3B4F`: high severity alerts and incident pressure.
- Steel `#94A3B8`: secondary text, labels, and calm metadata.
- Ice `#E2E8F0`: primary readable text on dark surfaces.

## Explicit Design Tokens
- `--black`: `#050505`
- `--gray`: `#18181B`
- `--gray-2`: `#232328`
- `--gray-3`: `#2E2E35`
- `--green`: `#B6FF3B`
- `--red`: `#FF3B4F`
- `--steel`: `#94A3B8`
- `--ice`: `#E2E8F0`
- `--font-head`: `"Archivo", system-ui, sans-serif`
- `--font-body`: `"Inter", system-ui, sans-serif`
- `--font-mono`: `"IBM Plex Mono", monospace`
- `--radius-sm`: `8px`
- `--radius-md`: `14px`
- `--radius-lg`: `22px`
- `--shadow-panel`: `0 26px 80px rgba(0, 0, 0, 0.42)`

## Component System
- Threat console: dark panel with map grid, scan animation, threat nodes, beams, and live operational metrics.
- Mobile threat cards: stacked incident summaries replacing the map on narrow screens.
- Flow strip: "Detect, contain, prove" operating model with numbered mono labels.
- Risk cards: executive-readable posture cards with numeric score emphasis and operational explanation.
- Incident timeline: compact chain of custody with realistic timestamps, threat IDs, owners, and evidence bundle references.
- SOC dashboard preview: three-column operational dashboard with assets, alerts, graph bars, and case owners.
- Compliance modules: framework cards with control references and evidence coverage meters.
- Case studies: realistic industry contexts, incident outcomes, and measurable improvements.

## Interaction Rules
- Header navigation highlights the active section while scrolling.
- Hamburger menu opens and closes with click, Escape, and mobile link activation.
- Timeline live state rotates only when reduced motion is not requested.
- Focus states are high contrast and visible on all interactive elements.
- Primary actions stay concise and action-oriented.

## Responsive Behavior
- Desktop uses a split hero and three-column dashboard preview.
- Tablet collapses large grids to two columns where useful.
- Mobile stacks the hero, hides the map, presents threat cards, compresses the timeline to a single-column incident log, and stacks dashboard panels.
- Buttons become full-width on mobile to reduce missed taps.

## Accessibility Notes
- Semantic HTML5 landmarks and section labels are used throughout.
- Skip link jumps directly to main content.
- Mobile menu exposes `aria-expanded` and closes on Escape.
- Chart-like visuals have surrounding labels and text context.
- Color is paired with labels such as High, Guarded, Medium, and evidence percentages.
- Motion respects `prefers-reduced-motion`.

## Content Rules
- Use realistic threat IDs, incident IDs, framework names, risk scores, owners, and operational outcomes.
- Avoid panic language, fearmongering, and vague claims.
- Every metric should support a security workflow or buying decision.
- Avoid generic filler copy.

## Commercial Use Cases
- Cybersecurity SaaS landing pages.
- XDR, MDR, CNAPP, SIEM, SOAR, and identity protection product demos.
- SOC dashboard concepts.
- Security sales engineering prototypes.
- Enterprise GRC and audit automation presentations.
