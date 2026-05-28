# Resonance — Podcast Network

A dark, audio-first podcast platform skeleton with persistent player, show discovery, and transcript integration.

## Overview

Resonance is designed for podcast networks and audio platforms that want a premium, immersive listening experience. The dark interface lets artwork and waveforms shine while keeping audio controls always accessible via a sticky bottom player.

## Features

- **Featured episode hero** — Large artwork + episode details with play action
- **Show catalog grid** — Four-column discovery with artwork, host, and stats
- **Host profiles** — Personality-driven cards with bios
- **Transcript preview** — Timestamped, speaker-colored transcript excerpts
- **Recommendation carousel** — Horizontal scroll for cross-show discovery
- **Sticky player** — Fixed bottom bar with transport, progress, and volume
- **Responsive** — Adapts from desktop to mobile with simplified player

## Typography

- **Display:** Archivo Black (Google Fonts) — bold show titles
- **Body:** Inter (Google Fonts) — clean UI text
- **Timestamps:** IBM Plex Mono (Google Fonts) — monospace timecodes

## Color Palette

| Name | Hex | Role |
|------|-----|------|
| Deep Navy | `#030712` | Background |
| Waveform Purple | `#8B5CF6` | Primary accent |
| Magenta | `#EC4899` | Show highlights |
| Cyan | `#22D3EE` | Timestamps, data |
| Gray | `#9CA3AF` | Secondary text |
| White | `#F9FAFB` | Primary text |

## Files

- `index.html` — Standalone HTML with inline CSS, SVG icons, and waveform JS
- `DESIGN_BOOK.md` — Full 14-section design specification
- `README.md` — This file

## Usage

Open `index.html` in any modern browser. No build step or dependencies required.

## Customization

Replace gradient artwork placeholders with real show artwork. Connect the player to a real audio backend (Web Audio API, Howler.js). Wire transcript timestamps to actual audio positions. Add real show data from your CMS.
