# Design Book — Pulse Telemedicine

## Positioning

- Category: Telemedicine platform
- Mood: Clean, reassuring, medical
- Audience: Product, operations, and domain teams evaluating a premium frontend direction.

## Visual System

- Background: `#f6fbfb`
- Surface: `rgba(255,255,255,.92)`
- Text: `#123034`
- Accent: `#0ea5a4`
- Secondary accent: `#2563eb`
- Typography: Inter with JetBrains Mono for compact technical values.

## Interface Priorities

- **Video call:** Room ready — Secure session with camera, mute, and screen share controls.
- **Scheduler:** Today 11:30 — Provider availability, reminders, and intake progress.
- **Prescription list:** 3 active — Dosage, refill status, and pharmacy routing.
- **Symptom checker:** Low urgency — Guided intake with escalation markers.

## Responsive Behavior

The desktop layout uses a three-column application shell with sticky navigation and context rail. Tablet width collapses the rail beneath the main content. Mobile width hides the sidebar behind a hamburger menu and stacks metrics, cards, tables, and command controls.

## Interaction Notes

Buttons, navigation links, cards, inputs, and selectors include visible hover and focus states. Cards use subtle pointer tilt and staged entrance motion. The command form simulates queued feedback without leaving the page.
