<h1>Collect Your Own GitHub Statistics</h1>

<p>

<em>Run as a script</em>

```shell
npx github-viewer-stats
```

</p>

<p>
<em>Running with my own token</em>

<!--START OF STATS-->

```json
{
  "name": "Tomer Figenblat",
  "company": "Red Hat",
  "status": "pr is coming",
  "contributingSince": 2017,
  "totalContributions": 10174,
  "contributionsCollection": {
    "totalCommitContributions": 7524,
    "totalIssueContributions": 109,
    "totalPullRequestContributions": 372,
    "totalPullRequestReviewContributions": 645,
    "totalRepositoriesWithContributedCommits": 202,
    "totalRepositoriesWithContributedIssues": 51,
    "totalRepositoriesWithContributedPullRequestReviews": 39,
    "totalRepositoriesWithContributedPullRequests": 98,
    "totalRepositoryContributions": 131,
    "totalGistContributions": 7,
    "totalDiscussionContributions": 80
  }
}
```

<!--END OF STATS-->

</p>

<details>
  <summary>Requires a <em>GITHUB_TOKEN</em> environnement variable (click for the scopes)</summary>
  <p>
  <ul>
    <li>repo</li>
    <li>read:packages</li>
    <li>read:user</li>
    <li>read:discussion</li>
  </ul>
  </p>
</details>

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
