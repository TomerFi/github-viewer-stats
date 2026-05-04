# github-viewer-stats

Lightweight Node.js CLI tool and library for collecting GitHub statistics via the GraphQL API.

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

## Coding Conventions

### JavaScript Style

- Use CommonJS modules (`module.exports`, `require`)
- Prefer `async`/`await` over raw Promises
- Use template literals for string interpolation
- 2-space indentation (per `.editorconfig`)

### Error Handling

- Validate `GITHUB_TOKEN` environment variable before API calls
- Provide clear, actionable error messages
- Wrap all GraphQL calls with try/catch

### API Client

- Use `require('./api')` singleton for the GraphQL client
- Token authentication via `GITHUB_TOKEN` environment variable only
- Never hardcode tokens or credentials

## Development

### Linting

```bash
npm run lint
```

ESLint configured via `eslint.config.mjs`.

### Local Testing

Requires `GITHUB_TOKEN` with scopes: `repo`, `read:packages`, `read:user`, `read:discussion`, `read:org` (or `admin:org` for full org stats).

```bash
npm run contribs
npm run repo <repo-name>
npm run org <org-name>
```

