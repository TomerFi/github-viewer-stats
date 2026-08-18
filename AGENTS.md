# github-viewer-stats

Lightweight Node.js CLI tool and library for collecting GitHub statistics via the GraphQL API.

## AI Policy

This project has an [AI policy](AI_POLICY.md). Always read it and ensure all suggestions, code, and contributions comply. If any behavior seems to conflict with the policy, warn the user and ask for guidance.

## Architecture

### File Organization

- `src/index.js` — Main module exports
- `src/api.js` — GraphQL client factory (singleton)
- `src/cli.js` — CLI entrypoint
- `src/contribs.js` — User contribution stats
- `src/repo.js` — Repository stats
- `src/org.js` — Organization stats

### Dependency Policy

- Keep runtime dependencies minimal (only `@octokit/graphql`)
- Dev dependencies for linting only

### API Client

- Use `require('./api')` singleton for the GraphQL client
- Token authentication via `GITHUB_TOKEN` environment variable only
- Never hardcode tokens or credentials

## Working Environment

- This is a **Node.js** project. Use **`package.json`** for all dependencies and scripts.
- This project uses [**husky**][husky] for Git hooks with [**lint-staged**][lint-staged] for file-specific checks.
- The pre-commit hook blocks commits to `main`, verifies lock file consistency, checks assistant files are in sync via [aicfg](https://github.com/TomerFi/aicfg), and runs lint-staged on staged files.

## Linting

```bash
npm run lint                              # lint (read-only, includes eslint, ec)
npm run eslint                            # eslint src
npm run eslint:fix                        # eslint --fix src
npm run ec                                # editorconfig-checker
```

## Local Testing

Requires `GITHUB_TOKEN` with scopes: `repo`, `read:packages`, `read:user`, `read:discussion`, `read:org` (or `admin:org` for full org stats).

```bash
npm run contribs
npm run repo <repo-name>
npm run org <org-name>
```

[husky]: https://typicode.github.io/husky/
[lint-staged]: https://github.com/okonet/lint-staged
