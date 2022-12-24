<h1>Collect GitHub Statistics for a Viewer (viewing user)</h1>

<p>

<em>Run as a script</em>

```shell
npx github-viewer-stats
```

<details>
  <summary>requires <em>GITHUB_TOKEN</em> environnement variable (click for scopes)</summary>
  <p>
  <ul>
    <li>repo</li>
    <li>read:packages</li>
    <li>read:user</li>
    <li>read:discussion</li>
  </ul>
  </p>
</details>

</p>

<p>
<em>Prints for my own token</em>

```json
{
  "name": "Tomer Figenblat",
  "contributionsCollection": {
    "contributionCalendar": {
      "totalContributions": 10133
    },
    "totalCommitContributions": 7485,
    "totalIssueContributions": 109,
    "totalPullRequestContributions": 371,
    "totalPullRequestReviewContributions": 644,
    "totalRepositoriesWithContributedCommits": 202,
    "totalRepositoriesWithContributedIssues": 51,
    "totalRepositoriesWithContributedPullRequestReviews": 38,
    "totalRepositoriesWithContributedPullRequests": 97,
    "totalRepositoryContributions": 131
  }
}
```

</p>

<details>
<summary>Use as a module</summary>

<p>

```shell
npm install --save github-viewer-stats
```

</p>

```javascript
require('github-viewer-stats')().then(r => console.log(JSON.stringify(r, null, 2)));
```

<details>
  <summary>Detailed example</summary>
  <p>

  ```javascript
  const ghViewerStats = require('github-viewer-stats');

  async function main() {
    let stats = await ghViewerStats();
    console.log(JSON.stringify(stats, null, 2));
  }

  main();
  ```

  </p>
</details>

</details>
