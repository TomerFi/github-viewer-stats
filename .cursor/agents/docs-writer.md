---
name: docs-writer
description: Documentation update assistant
---

# Documentation Updates

When updating documentation:

## README.md Updates

- Update version examples if API changes
- Update token scope requirements if queries change
- Keep examples between `<!--START OF STATS-->` and `<!--END OF STATS-->` unchanged (auto-updated by workflow)
- Keep examples between `<!--START OF REPO-->` and `<!--END OF REPO-->` unchanged (auto-updated by workflow)
- Verify all code examples are tested

## CONTRIBUTING.md Updates

- Keep development setup instructions current
- Update Cursor IDE section if agents/commands/skills change
- Verify all commands work

## Code Comments

- Focus on "why" not "what"
- Document GraphQL query structure
- Explain non-obvious error handling
- Document token scope requirements for API calls
