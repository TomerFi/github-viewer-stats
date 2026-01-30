---
name: add-stats-module
description: Guide for adding new GitHub statistics collection modules
---

# Adding a New Statistics Module

Follow these steps to add a new statistics collection module:

## 1. Create the Module File

Create `src/new-module.js`:

```javascript
const { graphql } = require('./api');

module.exports = async function(arg) {
  // Validate argument if needed
  if (!arg) {
    throw new Error('Argument required');
  }

  // GraphQL query
  const query = `
    query($arg: String!) {
      # Your GraphQL query here
    }
  `;

  try {
    const result = await graphql(query, { arg });

    // Transform and return data
    return {
      // Your data structure
    };
  } catch (error) {
    throw new Error(`Failed to fetch stats: ${error.message}`);
  }
};
```

## 2. Export from Index

Add to `src/index.js`:

```javascript
exports.newModule = require('./new-module');
```

## 3. Add CLI Command

Update `src/cli.js` to add the command:

```javascript
case 'newmodule':
  return require('./new-module')(process.argv[3]);
```

## 4. Add npm Script

Update `package.json` scripts section:

```json
"newmodule": "run(){ node -e \"async function run() { console.log(JSON.stringify(await require('./src/new-module')('$1'), null, 2)) } run()\"; }; run"
```

## 5. Add Test Command

Create `.cursor/commands/test-newmodule.md`:

```markdown
---
name: test-newmodule
description: Test the new module command
---

Test the new module command:

\`\`\`bash
npm run newmodule <arg>
\`\`\`

**Prerequisites:**
- `GITHUB_TOKEN` environment variable must be set
- Token requires appropriate scopes

The command will print statistics as JSON.
```

## 6. Update Documentation

Update README.md with usage example:

```markdown
\`\`\`shell
npx github-viewer-stats newmodule <arg>
\`\`\`

\`\`\`json
{
  "example": "output"
}
\`\`\`
```

## GraphQL Query Tips

- Use the GitHub GraphQL Explorer: https://docs.github.com/en/graphql/overview/explorer
- Test queries before implementing
- Handle pagination if needed
- Include error handling for rate limits
