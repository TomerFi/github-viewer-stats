---
name: docs-writer
description: Documentation update assistant for github-viewer-stats
---

## What I do

Provide detailed guidance for updating documentation in this project.

### README.md Updates

- Update version examples if API changes
- Update token scope requirements if queries change
- Keep examples between `<!--START OF STATS-->` and `<!--END OF STATS-->` unchanged (auto-updated by workflow)
- Keep examples between `<!--START OF REPO-->` and `<!--END OF REPO-->` unchanged (auto-updated by workflow)
- Verify all code examples are tested

### CONTRIBUTING.md Updates

- Keep development setup instructions current
- Update opencode sections if agents/commands/skills change
- Verify all commands work

### Code Comments

- Focus on "why" not "what"
- Document GraphQL query structure
- Explain non-obvious error handling
- Document token scope requirements for API calls

## When to use me

Use this when you are updating documentation: README.md, CONTRIBUTING.md, or adding code comments in source files.

When the user is changing GraphQL API queries and token scope requirements, consult the canonical scope list in AGENTS.md's "Local Testing" section. Ask clarifying questions only when changes appear to fall outside the documented scope.
