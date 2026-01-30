---
name: test-org
description: Test the org command locally (requires GITHUB_TOKEN)
---

Test the organization statistics command:

```bash
npm run org <org-name>
```

Replace `<org-name>` with an organization name you have access to.

**Prerequisites:**
- `GITHUB_TOKEN` environment variable must be set
- Token requires scopes: `read:org` (or `admin:org` for admin-level stats like 2FA and pending members)

The command will print organization statistics as JSON.
