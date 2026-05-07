# agents

Reusable AI agents and GitHub Actions workflows for Angular projects.

**[→ View Agent Hierarchy Dashboard](https://colewill.github.io/agents)**

---

## Agents

| Agent | Role | File |
|-------|------|------|
| Project Manager | Planning — user stories, branch scoping | [project-manager.md](project-manager.md) |
| Architect | Planning — system design, data models, security | [architect.md](architect.md) |
| Senior Engineer | Execution — Angular/TypeScript code, tests | [senior-engineer.md](senior-engineer.md) |
| UX Designer | Execution — UI design, accessibility, components | [ux-designer.md](ux-designer.md) |

The hierarchy is defined in [`agents.json`](agents.json) and visualized on the dashboard.

---

## Adding an agent

1. Create a `<role>.md` file in this repo
2. Add an entry to `agents.json`:

```json
{
  "id": "my-agent",
  "name": "My Agent",
  "group": "execution",
  "description": "One sentence description.",
  "capabilities": ["skill 1", "skill 2"],
  "mdFile": "my-agent.md",
  "status": "active"
}
```

3. Push to `main` — the dashboard auto-updates via GitHub Actions.

---

## Project-specific overrides

Agents are intentionally general. In a child project repo, create a local override file that extends the base agent:

```markdown
<!-- extends: ../../agents/senior-engineer.md -->

## Project Context

- App: My Angular App — a task management SPA
- Stack: Angular 20, Firebase Auth, Firestore
- Key files: `src/app/app.config.ts`, `src/app/app.routes.ts`
- Never commit `environment.ts`
```

Reference the override file instead of the base when prompting the agent.

---

## Viewing locally

Open `index.html` directly in a browser — no server needed:

```bash
open index.html   # macOS
```

---

## GitHub Actions

### Angular Code Review

Automatically reviews Angular PRs using Claude and posts a comment.

**Setup:** Add `ANTHROPIC_API_KEY` to your repo's **Settings → Secrets → Actions**, then create `.github/workflows/review.yml`:

```yaml
name: Code Review
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    uses: colewill/agents/.github/workflows/angular-review.yml@main
    secrets:
      ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
```
