# Swarm Agent Workspace Design Book

## Project Name
Swarm Agent Workspace

## Product Type
Premium autonomous AI agent workspace for teams supervising several specialized agents in parallel.

## Intended Audience
AI operations teams, product leads, staff engineers, research operators, legal reviewers, customer success leaders, and executives who need to inspect autonomous work before it affects customers or production systems.

## User Problem
Most agent products collapse complex work into a single chat transcript. That hides parallel work, ownership, uncertainty, and approval boundaries. This skeleton treats agents as inspectable task nodes so users can see what each specialist is doing, what evidence supports the work, and where human control is required.

## UX Concept
The interface is an autonomy console. It makes the swarm observable and controllable without turning the product into a chat room. The top level shows the mission, run health, and control envelope. The task graph exposes researcher, planner, coder, reviewer, and analyst nodes. The inspect area shows reasoning summaries and outputs for the selected agent. The right rail keeps approvals, logs, and policy visible.

## Layout Structure
- Desktop: persistent left navigation, central workspace, and right operations rail.
- Left navigation: mission sections, agent lanes, and current run progress.
- Hero: live mission summary with pause, approve, and rollback actions.
- Swarm graph: five specialized agent cards with progress, state, and role-specific color.
- Inspect panel: selected agent reasoning, evidence confidence, constraints, and output preview.
- Control panel: redirect composer and explicit decision controls.
- Right rail: approval queue, live agent log, and autonomy policy.
- Mobile: one active agent is visible, with agent tabs and a swarm overview drawer.

## Typography System
- UI: Inter for navigation, body copy, labels, controls, and dense operational content.
- Logs: JetBrains Mono for agent traces, preview output, metric values, and timestamps.
- Headings: Space Grotesk for workspace identity, section titles, and node names.

## Color System
- Black: `#050505`, primary application background.
- White: `#FAFAFA`, primary text.
- Agent cyan: `#22D3EE`, focus rings, primary action, active controls, live state.
- Planner violet: `#8B5CF6`, planning node and sequencing emphasis.
- Reviewer amber: `#F59E0B`, reviewer gate and cautionary decisions.
- Success green: `#22C55E`, safe checkpoints and approved state.
- Supporting red: `#EF4444`, rollback and blocked actions.
- Supporting blue: `#38BDF8`, researcher node.
- Supporting mint: `#34D399`, coder node.
- Supporting pink: `#F472B6`, analyst node.

## Explicit Design Tokens
- `--color-black`: `#050505`
- `--color-panel`: `#0B0D10`
- `--color-panel-2`: `#111419`
- `--color-panel-3`: `#171B22`
- `--color-line`: `rgba(250, 250, 250, 0.1)`
- `--color-line-strong`: `rgba(250, 250, 250, 0.18)`
- `--color-text`: `#FAFAFA`
- `--color-muted`: `#A6ADBA`
- `--color-dim`: `#717986`
- `--agent-cyan`: `#22D3EE`
- `--planner-violet`: `#8B5CF6`
- `--reviewer-amber`: `#F59E0B`
- `--success-green`: `#22C55E`
- `--font-ui`: `"Inter", system-ui, sans-serif`
- `--font-heading`: `"Space Grotesk", system-ui, sans-serif`
- `--font-mono`: `"JetBrains Mono", ui-monospace, monospace`
- `--radius-sm`: `8px`
- `--radius-md`: `12px`
- `--radius-lg`: `18px`
- `--shadow-panel`: `0 24px 80px rgba(0, 0, 0, 0.42)`
- `--shadow-cyan`: `0 0 44px rgba(34, 211, 238, 0.2)`
- `--motion-fast`: `140ms ease`
- `--motion-med`: `220ms ease`

## Component System
- Sidebar: mission links, agent lanes, progress status, and run identity.
- Hero panel: mission framing, current autonomy posture, and high-priority controls.
- Control envelope: metrics and checkpoints showing what autonomy is allowed to do.
- Agent node cards: specialized task cards with state, role, progress, and click-to-inspect behavior.
- Mobile agent strip: compact segmented control for switching the one visible agent.
- Reasoning summary: plain-language rationale, evidence confidence, and next constraint.
- Output preview: mono read-only artifact panel for summaries, diffs, notebooks, and review notes.
- Decision controls: pause, redirect, approve, and rollback as explicit operator actions.
- Operations rail: approval queue, live log, and policy guardrails.
- Swarm drawer: mobile overview that preserves parallel context without overcrowding the screen.

## Interaction Rules
- Every major control must have a visible focus state.
- Escape closes the navigation drawer and swarm overview drawer.
- Sidebar links close the mobile navigation after selection.
- Agent cards and mobile tabs update the reasoning summary, output preview, and log.
- Alt plus left/right arrow switches between agents for keyboard users.
- Redirect submission writes a visible log entry instead of silently changing state.
- Reduced-motion users receive instant transitions.

## Responsive Behavior
- Desktop above 1240px uses three columns.
- Tablet moves the right rail below the main workspace while keeping the sidebar visible.
- Mobile turns the sidebar into a hamburger drawer.
- Mobile shows one active agent card at a time.
- Mobile exposes the full swarm in a bottom overview drawer.
- Fixed-format controls use stable min-heights to prevent layout shift.

## Accessibility Notes
- Semantic landmarks are used for navigation, main workspace, asides, and footer.
- Skip link jumps directly to the workspace overview.
- Status is described with text, not only color.
- Agent controls use descriptive accessible names.
- The log uses `aria-live` so control changes are announced.
- Button targets are at least 42px high where practical.
- Color contrast is tuned for dark operational environments.

## Performance Notes
- Standalone HTML with inline CSS and JavaScript.
- The only external dependency is Google Fonts CDN.
- No framework, image, icon, or chart dependency is required.
- JavaScript is scoped to simple state changes and drawer controls.

## Commercial Use Cases
- Autonomous software development workspaces.
- AI research operations consoles.
- Legal or compliance review of agent-generated work.
- Enterprise AI procurement and renewal copilots.
- Internal data-room, proposal, and delivery-package automation.
- Multi-agent observability products for regulated teams.
