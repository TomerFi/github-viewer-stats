---
name: test-org
description: Test the org command locally (requires GITHUB_TOKEN)
---

Test the organization statistics command.

**Usage:**

```bash
npm run org <org-name>
```

**Prerequisites:**
- `GITHUB_TOKEN` environment variable must be set
- Token requires scopes: `read:org` (or `admin:org` for admin-level stats like 2FA and pending members)

The command will print organization statistics as JSON.

**Example:**

```bash
npm run org my-org-name
```
