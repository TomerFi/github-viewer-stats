---
name: test-contribs
description: Test the contribs command locally (requires GITHUB_TOKEN)
---

Test the user contributions statistics command:

```bash
npm run contribs
```

**Prerequisites:**
- `GITHUB_TOKEN` environment variable must be set
- Token requires scopes: `repo`, `read:packages`, `read:user`, `read:discussion`

The command will print your GitHub user statistics as JSON.
