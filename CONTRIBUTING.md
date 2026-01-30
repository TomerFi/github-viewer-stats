# Contributing to github-viewer-stats

Thank you for your interest in contributing to github-viewer-stats!

## Development Setup

### Prerequisites

- Node.js >= 18
- npm >= 9
- GitHub Personal Access Token with required scopes

### Local Development

1. Clone and install:

   ```bash
   git clone https://github.com/TomerFi/github-viewer-stats.git
   cd github-viewer-stats
   npm install
   ```

2. Set up your GITHUB_TOKEN:

   ```bash
   export GITHUB_TOKEN="your_token_here"
   ```

   Required scopes:
   - `repo` - Repository statistics
   - `read:packages` - Package information
   - `read:user` - User contribution statistics
   - `read:discussion` - Discussion contributions
   - `read:org` or `admin:org` - Organization statistics

3. Test locally:

   ```bash
   npm run lint
   npm run contribs
   npm run repo <your-repo-name>
   npm run org <org-name>
   ```

## Cursor IDE Integration

This project is optimized for Cursor IDE with specialized agents, commands, and skills.

### Agents

- **code-reviewer** - Pre-commit review checklist for ensuring code quality
- **docs-writer** - Documentation update patterns and guidelines

### Commands

- `/lint` - Run ESLint on source files
- `/test-contribs` - Test user contributions statistics (requires GITHUB_TOKEN)
- `/test-repo` - Test repository statistics (requires GITHUB_TOKEN)
- `/test-org` - Test organization statistics (requires GITHUB_TOKEN)

### Skills

- **add-stats-module** - Step-by-step guide for adding new statistics modules

## Project Structure

```
src/
├── api.js      # GraphQL client factory (singleton pattern)
├── cli.js      # CLI entrypoint
├── contribs.js # User contribution statistics
├── repo.js     # Repository statistics
├── org.js      # Organization statistics
└── index.js    # Module exports
```

## Coding Standards

### JavaScript Style

- Use CommonJS modules (`require`, `module.exports`)
- Prefer `async`/`await` over raw Promises
- Use template literals for string interpolation
- Follow `.editorconfig` (2 spaces, LF line endings)

### Error Handling

- Validate `GITHUB_TOKEN` environment variable before API calls
- Provide clear, actionable error messages
- Handle GraphQL API errors gracefully

### API Usage

- Use `@octokit/graphql` for GitHub GraphQL API calls
- Singleton pattern for API client (see `src/api.js`)
- Token authentication via `GITHUB_TOKEN` environment variable

## Testing

Currently, testing is manual using the npm scripts:

```bash
# Test user contributions
npm run contribs

# Test repository stats (replace with your repo name)
npm run repo <repo-name>

# Test organization stats (replace with org you have access to)
npm run org <org-name>
```

## Pull Request Process

1. Fork the repository and create a feature branch
2. Make your changes following the coding standards
3. Run `npm run lint` to check code quality
4. Test your changes locally with your own GITHUB_TOKEN
5. Commit using conventional commit format (see below)
6. Push your branch and create a pull request
7. All commits must be GPG signed

## Conventional Commits

Use conventional commit format for all commits:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation only
- `chore:` - Maintenance tasks (dependencies, CI, etc.)
- `refactor:` - Code restructuring without functionality changes

Examples:

```
feat: add support for repository discussions statistics
fix: handle rate limit errors gracefully
docs: update token scope requirements in README
chore: update @octokit/graphql to v9.1.0
```

**Important**: PR titles must use conventional commit format as they become the squash merge commit message, which `version-bumper-action` uses to determine the next version.

## Commit Signing

All commits must be GPG signed. Configure your git:

```bash
git config commit.gpgsign true
git config user.signingkey <your-key-id>
```

Never use `--no-gpg-sign`.

## Adding New Statistics Modules

See the `add-stats-module` skill in `.cursor/skills/add-stats-module/` for detailed step-by-step guidance.

Basic steps:
1. Create module file in `src/`
2. Export from `src/index.js`
3. Add CLI command
4. Add npm script
5. Create Cursor command
6. Update documentation

## Questions?

- Open an [issue](https://github.com/TomerFi/github-viewer-stats/issues) for bugs
- Start a [discussion](https://github.com/TomerFi/github-viewer-stats/discussions) for questions or ideas
- Check the [README](README.md) for usage documentation

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before participating.
