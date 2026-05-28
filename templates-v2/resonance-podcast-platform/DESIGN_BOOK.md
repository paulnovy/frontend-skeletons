# Design Book — Resonance Podcast Platform

## 1. Project Overview
Resonance is a podcast network and audio platform designed for immersive listening experiences. The interface prioritizes audio-first interaction with a persistent player, visual show discovery, and transcript integration for accessibility.

## 2. Design Philosophy
**"Hear it. Feel it. Find it."** The dark interface reduces visual noise and lets content — artwork, waveforms, and text — pop. Audio controls are always within reach. The design treats listening as the primary action, with reading and browsing as supporting experiences.

## 3. Color System
| Token | Hex | Usage |
|-------|-----|-------|
| Deep Navy | `#030712` | Page background |
| Waveform Purple | `#8B5CF6` | Primary accent, player, CTAs |
| Magenta | `#EC4899` | Show highlights, secondary accent |
| Cyan | `#22D3EE` | Metadata, timestamps, live indicators |
| Gray | `#9CA3AF` | Secondary text, timestamps |
| White | `#F9FAFB` | Primary text |

### Palette Rules
- Background is always Deep Navy — the darkness is intentional
- Purple is the dominant accent for interactive elements
- Cyan exclusively marks timecodes and data metadata
- Magenta highlights featured content and show badges
- White text on navy maintains 15:1+ contrast ratio

## 4. Typography
**Display:** Archivo Black — bold, punchy, for show titles and section headers
**Body:** Inter — clean sans-serif for descriptions and UI
**Timestamps:** IBM Plex Mono — monospace for timecodes and data

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Logo | Archivo Black | 400 | 1.5rem |
| Show titles | Archivo Black | 400 | 1–2.75rem |
| Body text | Inter | 400 | 0.85–1rem |
| UI labels | Inter | 500–600 | 0.7–0.85rem |
| Timestamps | IBM Plex Mono | 400 | 0.7–0.8rem |
| Chapter markers | IBM Plex Mono | 500 | 0.8rem |

## 5. Layout System
### Hero
- Two-column: artwork (left) + episode info (right)
- Full-width on mobile with stacked layout
- Minimum artwork size: 280px

### Shows Grid
- Four-column card grid
- Responsive: 2 columns tablet, 1 column mobile
- Cards include artwork, title, host, and stats

### Hosts
- Three-column centered grid
- Avatar circles with gradient backgrounds
- Single column on mobile

### Transcript
- Left-aligned timestamps (monospace)
- Speaker names with distinct colors
- Max-width 800px for readability

## 6. Components
### Sticky Player
- Fixed to bottom of viewport
- Contains: artwork thumbnail, title/show info, transport controls, progress bar, volume
- Progress bar with purple fill
- Play button as primary action (purple circle)
- On mobile: simplified to art + info + play/pause only

### Show Cards
- Rounded corners (12px)
- Subtle background with hover elevation
- Art placeholder with gradient + emoji
- Stats in monospace font

### Waveform Visualization
- Generated via JavaScript (40 bars)
- Random heights between 10–40px
- Semi-transparent white bars
- Position: bottom of hero artwork

### Recommendation Carousel
- Horizontal scroll with snap
- Fixed-width cards (280px)
- Show name in magenta, meta in monospace

## 7. Navigation
- Horizontal header with logo, nav links, and CTA button
- "Listen Now" button as purple pill
- Active state: white text, inactive: gray
- No hamburger on mobile — nav links shrink

## 8. Responsive Breakpoints
| Breakpoint | Layout Changes |
|------------|---------------|
| > 768px | Full layout — 2-col hero, 4-col shows, 3-col hosts |
| ≤ 768px | Stacked hero, 2-col shows, 1-col hosts, simplified player |
| ≤ 480px | Single-column shows, smaller recommendation cards |

## 9. Interactions
- **Show cards:** Hover lifts card 4px and lightens background
- **Play button:** Purple background with darker hover
- **Nav links:** Gray to white on hover
- **Sticky player:** Always visible, never covers content entirely
- **Waveform:** Static display (animation optional in production)

## 10. Accessibility
- All player controls have ARIA labels
- Color contrast ≥ 7:1 for body text
- Keyboard-navigable transport controls
- Transcript provides text alternative to audio
- Semantic HTML: `<article>`, `<nav>`, `<header>`, `<footer>`, `<section>`
- Focus indicators on all interactive elements

## 11. Content Strategy
- Featured episode rotates weekly
- Shows grid showcases the full network catalog
- Host profiles build personality and trust
- Transcripts make audio searchable and accessible
- Recommendations drive cross-show discovery

## 12. Performance Considerations
- Fonts loaded via Google Fonts with `display=swap`
- CSS-only layout with minimal JavaScript (waveform only)
- SVG icons inline — no icon font dependency
- Lazy loading for artwork images in production

## 13. Audio UX Principles
- Player is always accessible — never more than one click away
- Progress bar shows exact position with timestamp
- Chapter markers (future) allow jumping to key moments
- Transcripts sync with playback position
- Volume control separate from system volume

## 14. Future Enhancements
- Real audio playback with Web Audio API
- Transcript syncing with playback position
- Chapter markers and show notes
- Queue management and playlist creation
- Live episode streaming with real-time chat
- Offline download indicators
- Podcast subscription management
