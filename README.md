<h1>Collect GitHub Statistics for Viewer</h1>

<h2>Install</h2>

<p>

```shell
npm install --save github-viewer-stats@0.1.0
```

</p>

<h2>Usage Example</h2>

<p>
<em>Set the <stronger>GITHUB_TOKEN</stronger> environnement variable with your token.</em>

```javascript
require('github-viewer-stats')().then(r => console.log(JSON.stringify(r, null, 2)));
```

</p>

<details>
  <summary>Clearer example</summary>
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

<details>
  <summary>Token scopes</summary>
  <p>
  <ul>
    <li>repo</li>
    <li>read:packages</li>
    <li>read:user</li>
    <li>read:discussion</li>
    <li>read:project</li>
  </ul>
  </p>
</details>

<h3>Print Result</h3>

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
