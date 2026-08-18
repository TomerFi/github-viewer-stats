# Contributing to github-viewer-stats

Thank you for contributing. This guide covers the essentials.

## AI Policy

This project has a clear AI policy — read [AI_POLICY.md](AI_POLICY.md) and follow it. You're responsible for everything you submit.

## Setup

```bash
git clone <repo-url>
cd github-viewer-stats
npm install
```

See [AGENTS.md](AGENTS.md) for linting and testing commands.

## Local Checks

This project uses [husky][husky] with [lint-staged][lint-staged]. The pre-commit hook enforces:

- **Branch protection** — blocks commits directly to `main`
- **Lock file consistency** — verifies `package-lock.json` matches `package.json`
- **Assistant files** — uses [aicfg](https://github.com/TomerFi/aicfg) to sync project instructions (`.agents`, `AGENTS.md`) across editors; run `npm run link-ai-files` to link for Claude Code
- **File-specific checks** — eslint, editorconfig-checker run only on changed files via [lint-staged][lint-staged]

```bash
# Auto-installed by `npm install`
# Runs automatically on every commit (unless on main, which is blocked)
```

To run checks manually against all files:

```bash
npm run lint
```

To run lint-staged manually:

```bash
npm run lint-staged
```

## Commit Style

- Conventional commits: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`
- One logical change per commit

## PR Process

1. Branch from `main` with a conventional name: `feat/add-org-stats`, `fix/rate-limit-handling`
2. Commit with a descriptive message
3. Run all checks before submitting: `npm run lint`
4. Open PR with a clear description of what changed and why
5. Address feedback

[husky]: https://typicode.github.io/husky/
[lint-staged]: https://github.com/okonet/lint-staged
