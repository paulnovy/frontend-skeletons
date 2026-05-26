# Sonic Data Dashboard Design Book

## Product Direction
Sonic Data Dashboard is a premium analytics workspace for teams that need to monitor trend changes while moving between visual charts, notes, and live operations. The sonic layer is a companion to the interface, never a dependency. Audio starts off, requires explicit user action, and always has a caption that explains the state.

## Visual Identity
- Background: deep navy `#020617` with restrained glass panels and thin signal-grid texture.
- Primary signal: waveform cyan `#22D3EE` for charts, focus rings, and active audio states.
- Secondary signal: resonance purple `#8B5CF6` for anomaly accents and deep audio surfaces.
- Positive signal: signal green `#22C55E` for live status and improving trends.
- Foreground: white `#F8FAFC` with muted slate supporting text.

## Typography
- Data: IBM Plex Mono for values, labels, cue names, and technical readouts.
- Controls: Inter for navigation, buttons, captions, and operational copy.
- Section headings: Space Grotesk for dashboard titles and card headings.
- Letter spacing stays neutral; the product should feel precise without looking artificially compressed.

## Layout Rules
- The first viewport is the actual monitoring dashboard, not a marketing page.
- The hero region combines a decision summary, an explicit audio state caption, and a visual sound-stage meter.
- Metric cards use CSS Grid and stay readable as individual mobile cards.
- Each metric has a visual chart, a trend value, a sonic caption, and a preview button.
- The right rail contains analyst notes and the channel map; it stacks below metrics on smaller screens.

## Sonification UX
- Audio is off by default.
- Preview buttons update captions even when sound is off.
- Enabling audio requires a button press and creates the WebAudio context only after user interaction.
- Short previews are safer than continuous playback for dashboards.
- Captions use plain language: "ascending triad", "mild jitter", "captioned silence", and similar phrases.

## Accessibility
- Semantic HTML5 sections, headings, nav, articles, aside, and footer are used.
- Focus states are high contrast with the cyan ring.
- Keyboard users can move between metric cards with Alt+ArrowLeft and Alt+ArrowRight.
- Escape closes the mobile navigation menu.
- Reduced-motion mode disables animation and transition timing.
- Charts include textual labels or `aria-label` summaries where the visual is not enough.

## Mobile Behavior
- Navigation collapses into a hamburger menu.
- Metric cards become a single-column scan with full-width audio preview buttons.
- The timeline remains horizontally scrollable with fixed bar widths.
- Audio controls stay compact, and captions remain visible near the top of the experience.

## Content Tone
- Use realistic analytics language: revenue velocity, checkout latency p95, week 4 retention, fraud risk index, cohort movement, and validation calls.
- Avoid placeholder copy, empty product slogans, and vague AI claims.
- The dashboard should feel like it belongs in an operations room where people make decisions quickly.
