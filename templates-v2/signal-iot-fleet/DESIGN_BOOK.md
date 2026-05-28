# Signal IoT Fleet Design Book

## 1. Template Identity
Signal IoT Fleet is a dense enterprise monitoring dashboard for operations teams managing distributed industrial devices.

## 2. Brief Match
- Type: IoT fleet monitoring dashboard.
- Layout: dense monitoring grid with asset map, health cards, alert queue, telemetry charts, and maintenance predictions.
- UX: anomalies are presented first, with clear live, degraded, offline, and maintenance states.
- Responsive: mobile shifts to an alert-first field technician interface.

## 3. Audience
Fleet operators, field technicians, reliability engineers, and shift leads who need fast anomaly triage.

## 4. Information Architecture
The screen starts with a P1 incident banner, then moves through fleet health, asset geography, risky devices, alerts, telemetry, and operator handoff.

## 5. Layout System
The desktop layout uses a persistent left rail and a two-column dashboard grid. The right column contains alert-first operational controls.

## 6. Responsive System
Below 760px the sidebar disappears, alert tabs appear, the alert queue moves before the map, and device cards become single-column field work items.

## 7. Typography
IBM Plex Sans is used for UI labels, headings, and operational copy. IBM Plex Mono is used for telemetry, asset IDs, status pills, and metric values.

## 8. Color System
- Industrial black: #0A0A0A
- Steel: #374151
- Telemetry cyan: #06B6D4
- Safety orange: #F97316
- Success green: #22C55E
- White: #F3F4F6

## 9. State Language
Success green means live and healthy, safety orange means degraded or urgent, cyan means telemetry or maintenance, steel means offline or unavailable.

## 10. Components
Core components include incident banner, navigation rail, summary metrics, SVG asset map, health cards, alert queue, telemetry bars, risk rings, and handoff cards.

## 11. Interaction Model
Alert rows update the incident banner. Mobile tabs provide one-hand friendly technician navigation without hiding critical P1 context.

## 12. Accessibility
Semantic regions, clear labels, strong color contrast, text-backed status labels, and button semantics are used throughout.

## 13. Visual Assets
The asset map is an inline operational SVG with zones, routes, and device state nodes instead of decorative stock imagery.

## 14. Implementation Notes
The skeleton is standalone HTML with inline CSS and JavaScript, suitable for catalog preview, screenshot generation, and downstream framework migration.
