# Design Book: Quant Data Pipeline

## Design Direction

A premium operations dashboard for quantitative data teams. The interface emphasizes live pipeline state, high-density monitoring, and quick triage during market data windows.

## Typography

- Headings: Manrope
- UI and body: Inter
- Font delivery: Google Fonts CDN

## Color System

- Cloud `#F6F8FC` for the page background and light surfaces
- Ink `#19212B` for primary text and dark panels
- Indigo `#4F46E5` for primary controls and queued states
- Cyan `#06B6D4` for live indicators and running jobs
- Lime `#A3E635` for healthy states and successful checks
- Coral `#FB7185` for failures and critical alerts

Opacity-based tints keep the palette consistent while preserving hierarchy.

## Core Sections

- Top navigation with brand, section links, search, refresh, and accessible mobile drawer
- KPI strip for operational health at a glance
- CSS-based DAG with extract, transform, quality, and load nodes
- Job monitoring table with status badges and scheduling context
- Data quality cards with score, trend, threshold bar, and check time
- Alerts with severity, pipeline reference, timestamp, and acknowledge action
- Run history timeline using duration bars and status colors

## Accessibility

The page uses semantic landmarks, visible focus states, keyboard-operable drawer behavior, reduced-motion handling, accessible labels, and descriptive section headings.
