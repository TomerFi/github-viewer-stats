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
  "totalContributions": 10200,
  "contributionsCollection": {
    "totalCommitContributions": 7547,
    "totalIssueContributions": 109,
    "totalPullRequestContributions": 375,
    "totalPullRequestReviewContributions": 645,
    "totalRepositoriesWithContributedCommits": 202,
    "totalRepositoriesWithContributedIssues": 51,
    "totalRepositoriesWithContributedPullRequestReviews": 39,
    "totalRepositoriesWithContributedPullRequests": 98,
    "totalRepositoryContributions": 131,
    "totalDiscussionContributions": 80,
    "totalGistContributions": 7,
    "totalPackageContributions": 0
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
    <li>admin:org</li>
  </ul>

  <em>admin:org</em> is only required for admin level organization stats, such as 2fa and pending members.<br/>
  If you do not require these admin properties or do not have admin permission to the organization to begin with, you can use <em>read:org</em> instead.<br/>
  Of course if won't use this tool for retrieving organization statistics, you can omit the <em>admin</em> all together.

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
// print cool-org-name organization statistics to the console
require('github-viewer-stats').org('cool-org-name').then(r => console.log(JSON.stringify(r, null, 2)));
// print my aioswitcher repository statistics to the console
require('github-viewer-stats').repo('aioswitcher').then(r => console.log(JSON.stringify(r, null, 2)));
```

<details>
  <summary>Detailed example</summary>
  <p>

  ```javascript
  const { contribs, org, repo } = require('github-viewer-stats');

  async function main() {
    // collect my user statistics
    let myContributions = await contribs();
    console.log(JSON.stringify(myContributions, null, 2));

    // collect my aioswitcher repository statistics
    let myOrg = await org('cool-org-name');
    console.log(JSON.stringify(myRepo, null, 2));

    // collect my aioswitcher repository statistics
    let myRepo = await repo('aioswitcher');
    console.log(JSON.stringify(myRepo, null, 2));
  }

  main();
  ```

  </p>
</details>

</details>
