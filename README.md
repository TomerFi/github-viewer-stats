<h1>Collect GitHub Statistics for Viewer</h1>

<h2>Install</h2>

<p>

```shell
npm install --save github-viewer-stats@0.1.0
```

</p>

<h2>Usage Example</h2>

<p>
<b>GITHUB_TOKEN</b> <em>environnement variable is required.</em>

<details>
  <summary>Token scopes</summary>
  <p>
  <ul>
    <li>repo</li>
    <li>read:packages</li>
    <li>read:user</li>
    <li>read:discussion</li>
  </ul>
  </p>
</details>

```javascript
require('github-viewer-stats')().then(r => console.log(JSON.stringify(r, null, 2)));
```

</p>

<p>
<b>Print result</b> <em>using my own token.</em>

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
