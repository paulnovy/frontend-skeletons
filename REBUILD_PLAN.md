# REBUILD PLAN — Frontend Skeletons v3

## Status
- **Started:** 2026-05-28 02:44
- **Current:** #28 hearth-community-hub (next)
- **Completed:** 27/100

## Rules (CONTEXT-SAFE)
1. Work ONE template at a time. No parallel builds.
2. After each skeleton: `git add` + `git commit`. No batch commits.
3. The BRIEF is at: `/home/marian/clawd/frontend-skeletons-brief.md` (929 lines, 100 templates)
4. ALWAYS read the brief section before building. Don't from memory.
5. Each skeleton gets its OWN unique colors and fonts from the brief — NOT the generic palette.
6. After context compaction: read THIS file to know where you are, then continue.
7. Model: use default (mimo v2.5 pro). Do NOT spawn subagents for skeleton generation.
8. Screenshots: generate with Playwright AFTER the HTML is committed.
9. DESIGN_BOOK.md and README.md: write for every skeleton.

## File structure per skeleton
```
/templates-v2/{kebab-case-name}/
  index.html          ← standalone HTML, inline CSS+JS, 600-1000 lines
  DESIGN_BOOK.md      ← full 14-section design book per brief
  README.md           ← project description
  screenshot.png      ← generated via Playwright
```

## Color palette rule
Every skeleton MUST use its own 6 colors from the brief. 
The generic palette (#F6F8FC, #19212B, #4F46E5, #06B6D4, #A3E635, #FB7185) is FORBIDDEN.

## Progress tracker
Mark each as: ✅ done | ⏳ in progress | ❌ failed | ⏭ skipped

### GROUP A — Flagship (01-70)
- [x] 01 atlas-ai-command-center ✅ (1914535)
- [x] 02 prism-ai-product-landing ✅ (2eeb691) — restyled
- [x] 03 lumen-finance-dashboard ✅ (30b5ed9) — restyled
- [x] 04 nova-health-patient-portal ✅ (4f0dddf)
- [x] 05 pulse-telemedicine-landing ✅ (61f19ac)
- [x] 06 arcadia-edtech-campus ✅ (ca96f23)
- [x] 07 forge-devtools-docs ✅ (e015d68)
- [x] 08 sentryline-cybersecurity-suite ✅ (7181f6e)
- [x] 09 orbit-cloud-observability ✅ (88c2b81) — restyled
- [x] 10 meridian-crm-pipeline ✅ (c56d513)
- [x] 11 ember-hr-talent-os ✅ (7b6c45d)
- [x] 12 tempo-productivity-suite ✅ (3a169c2)
- [x] 13 northstar-project-board ✅ (ec9dc87)
- [x] 14 kairos-scheduling-flow ✅ (db15755)
- [x] 15 clarity-analytics-studio ✅ (c7dc8c5)
- [x] 16 velvet-commerce-studio ✅ (cae9b8e) — restyled
- [x] 17 aurelia-beauty-dtc ✅
- [x] 18 spoon-marketplace ✅
- [x] 19 roam-travel-booking ✅
- [x] 20 solstice-resort-luxury ✅
- [x] 21 bricklane-real-estate ✅
- [x] 22 haven-interior-studio ✅
- [x] 23 verdant-climate-platform ✅
- [x] 24 chargegrid-ev-network ✅
- [x] 25 nestwave-smart-home ✅
- [x] 26 signal-iot-fleet ✅
- [x] 27 creatorforge-marketplace ✅
- [ ] 28 hearth-community-hub
- [ ] 29 inkline-editorial-media
- [ ] 30 resonance-podcast-platform
- [ ] 31 cineflow-streaming-ui
- [ ] 32 echo-music-discovery
- [ ] 33 arena-esports-hub
- [ ] 34 kinetic-sports-analytics
- [ ] 35 stride-fitness-app
- [ ] 36 aura-wellness-subscription
- [ ] 37 mindbridge-therapy-platform
- [ ] 38 impact-nonprofit-story
- [ ] 39 civic-service-portal
- [ ] 40 lexora-legaltech-docs
- [ ] 41 shield-insurtech-quote
- [ ] 42 vault-digital-wallet
- [ ] 43 cargo-b2b-marketplace
- [ ] 44 routewise-logistics-os
- [ ] 45 tableflow-restaurant-pos
- [ ] 46 summit-event-ticketing
- [ ] 47 frontier-conference-site
- [ ] 48 atelier-portfolio-system
- [ ] 49 monolith-agency-site
- [ ] 50 pine-venture-capital
- [ ] 51 seedling-startup-waitlist
- [ ] 52 ignition-product-launch
- [ ] 53 tierlab-pricing-page
- [ ] 54 beacon-support-portal
- [ ] 55 atlas-knowledge-base
- [ ] 56 horizon-careers-board
- [ ] 57 openquad-university-admissions
- [ ] 58 museo-cultural-archive
- [ ] 59 apex-automotive-luxury
- [ ] 60 moda-editorial-commerce
- [ ] 61 sentinel-enterprise-security
- [ ] 62 helix-research-dashboard
- [ ] 63 retailops-control-room
- [ ] 64 billow-subscription-billing
- [ ] 65 chronicle-data-annual-report
- [ ] 66 localist-service-booking
- [ ] 67 pocketwise-personal-finance
- [ ] 68 craft-inventory-studio
- [ ] 69 farmgrid-agritech-platform
- [ ] 70 relay-customer-success-os

### GROUP B — Unconventional (71-90)
- [ ] 71 duality-brand-lab
- [ ] 72 radial-research-archive
- [ ] 73 cartograph-marketplace
- [ ] 74 timefold-product-story
- [ ] 75 whisper-support-interface
- [ ] 76 moodshift-wellness-os
- [ ] 77 infinite-canvas-strategy-tool
- [ ] 78 cutpaste-editorial-zine
- [ ] 79 decision-wall-comparison
- [ ] 80 spatial-product-room
- [ ] 81 brutal-freelance-market
- [ ] 82 sensorial-restaurant-menu
- [ ] 83 stacksite-no-scroll
- [ ] 84 ambient-smart-city-os
- [ ] 85 ritual-onboarding-flow
- [ ] 86 heartbeat-auction-platform
- [ ] 87 climate-data-poetry
- [ ] 88 command-palette-website
- [ ] 89 generative-brand-playground
- [ ] 90 spreadsheet-gallery-crm

### GROUP C — Radical (91-100)
- [ ] 91 gravityless-spatial-web
- [ ] 92 organism-portfolio-engine
- [ ] 93 chaos-commerce-anti-grid
- [ ] 94 sonic-data-dashboard
- [ ] 95 threshold-xr-portal
- [ ] 96 neurographic-knowledge-system
- [ ] 97 glitch-diplomacy-newsroom
- [ ] 98 liquid-identity-onboarding
- [ ] 99 swarm-agent-workspace
- [ ] 100 post-interface-living-website
