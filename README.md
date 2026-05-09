# agents

Reusable AI agents and GitHub Actions workflows for Angular projects.

**[→ View Agent Hierarchy Dashboard](https://colewill.github.io/agents)**

---

## Resuming work with Kiro

Open a terminal in this directory and run `kiro-cli chat`. The file `.kiro/steering/agents-project.md` is automatically loaded, giving Kiro full context about the squad without any manual setup. See `CONTEXT.md` for the full project history and decision log.

---

## Agents

### Coordination
| Agent | Role | File |
|-------|------|------|
| Orchestrator | Routes work, tracks progress, coordinates the squad | [orchestrator.md](orchestrator.md) |

### Planning
| Agent | Role | File |
|-------|------|------|
| Project Manager | User stories, branch scoping, acceptance criteria | [project-manager.md](project-manager.md) |
| Architect | System design, data models, security | [architect.md](architect.md) |

### Execution
| Agent | Role | File |
|-------|------|------|
| Senior Engineer | Angular/TypeScript code, tests, commits | [senior-engineer.md](senior-engineer.md) |
| UX Designer | Accessible, mobile-first UI | [ux-designer.md](ux-designer.md) |
| QA Engineer | Test strategy, E2E, bug triage | [qa-engineer.md](qa-engineer.md) |
| Code Reviewer | PR reviews, best practices enforcement | [code-reviewer.md](code-reviewer.md) |

### Operations
| Agent | Role | File |
|-------|------|------|
| DevOps Engineer | CI/CD, Firebase deploys, rollback | [devops-engineer.md](devops-engineer.md) |
| Git Manager | Day-to-day git workflow, branching, commits, stash | [git-manager.md](git-manager.md) |

### Support
| Agent | Role | File |
|-------|------|------|
| Researcher | Angular/Firebase updates, library evaluation | [researcher.md](researcher.md) |
| Technical Writer | READMEs, component docs, changelogs | [technical-writer.md](technical-writer.md) |
| Security Specialist | OWASP, dependency scans, Firestore rules | [security-specialist.md](security-specialist.md) |

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
