---
name: test-repo
description: Test the repo command locally (requires GITHUB_TOKEN)
---

Test the repository statistics command:

```bash
npm run repo <repo-name>
```

Replace `<repo-name>` with the name of one of your repositories (e.g., `aioswitcher`).

**Prerequisites:**
- `GITHUB_TOKEN` environment variable must be set
- Token requires scopes: `repo`, `read:packages`

The command will print repository statistics as JSON.
