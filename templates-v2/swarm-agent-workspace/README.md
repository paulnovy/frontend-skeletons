# Swarm Agent Workspace

## Category
Autonomous AI Agent Workspace / Multi-Agent Operations Console

## Description
Swarm Agent Workspace is a premium standalone frontend skeleton for supervising multiple specialized AI agents working in parallel. It presents researcher, planner, coder, reviewer, and analyst nodes as inspectable task cards with reasoning summaries, output previews, approval gates, logs, and explicit human controls.

## How to View
Open `index.html` directly in a browser, or serve the folder with a local HTTP server:

```bash
cd "/home/marian/clawd/frontend-skeletons/templates-v2/swarm-agent-workspace"
python3 -m http.server 3005
```

Then visit:

```text
http://localhost:3005/
```

## Key Features
- Standalone `index.html` with inline CSS and JavaScript.
- Google Fonts CDN only: Inter, JetBrains Mono, and Space Grotesk.
- Black operational interface using `#050505`, `#22D3EE`, `#8B5CF6`, `#F59E0B`, `#22C55E`, and `#FAFAFA`.
- Five specialized agent nodes: researcher, planner, coder, reviewer, and analyst.
- Observable autonomy controls: pause, redirect, approve, and rollback.
- Reasoning summaries, evidence confidence notes, output previews, and live agent logs.
- Desktop three-column workspace with navigation, active mission surface, and operations rail.
- Mobile pattern showing one active agent with a swarm overview drawer.
- Semantic HTML, CSS Grid/Flexbox, custom properties, focus states, keyboard navigation, and reduced-motion support.
- Footer credit: "Built with Frontend Skeletons".

## Interaction Notes
- Click any agent node to update the reasoning summary and output preview.
- Use the mobile agent strip to switch the one visible agent on small screens.
- Use Alt + ArrowLeft or Alt + ArrowRight to move between agents with the keyboard.
- Use Escape to close the navigation drawer or swarm overview drawer.
- Submit a redirect brief to add a visible instruction to the live log.

## Screenshot Reference
Recommended screenshot: desktop viewport at `1440x1100`, showing the sidebar, live mission hero, five-agent swarm grid, inspect panel, and operations rail.
