<h1>Collect Your Own GitHub Statistics</h1>

<p>

<em>Run as a script (using my own token)</em>

```shell
npx github-viewer-stats contribs
```

</p>

<p>

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

```shell
npx github-viewer-stats repo aioswitcher
```

<!--START OF REPO-->

```json
{
  "name": "aioswitcher",
  "description": "PyPi module integrating with various Switcher devices",
  "language": "Python",
  "license": "apache-2.0",
  "collaborators": 2,
  "forks": 9,
  "stars": 14,
  "watchers": 2,
  "latest": "3.2.1"
}
```

<!--END OF REPO-->

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
// print my user statistics to the console
require('github-viewer-stats').contribs().then(r => console.log(JSON.stringify(r, null, 2)));
// print my aioswitcher repository statistics to the console
require('github-viewer-stats').repo('aioswitcher').then(r => console.log(JSON.stringify(r, null, 2)));
```

<details>
  <summary>Detailed example</summary>
  <p>

  ```javascript
  const { contribs, repo } = require('github-viewer-stats');

  async function main() {
    // collect user my statistics
    let myContributions = await contribs();
    console.log(JSON.stringify(myContributions, null, 2));

    // collect my aioswitcher repository statistics
    let myRepo = await repo('aioswitcher');
    console.log(JSON.stringify(myRepo, null, 2));
  }

  main();
  ```

  </p>
</details>

</details>
