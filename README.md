# agents

Reusable GitHub Actions workflows powered by Claude.

## Angular Code Review

Automatically reviews Angular PRs using Claude and posts a comment.

### Setup

1. Add `ANTHROPIC_API_KEY` to your repo's **Settings → Secrets → Actions**.

2. Create `.github/workflows/review.yml` in your Angular repo:

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

3. Replace `YOUR_GITHUB_USERNAME` with your GitHub username.

That's it. Every PR will get an automated Angular review comment.
