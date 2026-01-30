---
name: code-reviewer
description: Pre-commit code review checklist
---

# Pre-Commit Code Review

Review the code changes:

## Code Quality

- [ ] All async functions use `await` (no floating promises)
- [ ] GraphQL queries are syntactically correct
- [ ] Error handling wraps all API calls with try/catch
- [ ] No hardcoded tokens, secrets, or credentials in code
- [ ] ESLint passes: `npm run lint`

## API Client Usage

- [ ] Uses `require('./api')` singleton for GraphQL client
- [ ] Token comes from environment variable only
- [ ] Error messages are clear and actionable

## Testing

Test manually:

```bash
npm run contribs
npm run repo <repo-name>
npm run org <org-name>
```
