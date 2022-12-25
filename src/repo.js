const { graphql } = require('@octokit/graphql');

module.exports = function(repo) {
  if (!('GITHUB_TOKEN' in process.env)) {
    throw new Error('missing required environment variable GITHUB_TOKEN');
  }

  const requestParams = {
    headers: {
      authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    }
  };

  return getRepo(requestParams, repo);
}

async function getRepo(requestParams, repo) {
  const repoQuery = `#graphql
    {
      viewer {
        repository(name: "${repo}") {
          name
          collaborators {
            totalCount
          }
          description
          forkCount
          languages(first: 1, orderBy: {direction: DESC, field: SIZE}) {
            nodes {
              name
            }
          }
          latestRelease {
            tagName
          }
          licenseInfo {
            key
          }
          stargazerCount
          watchers {
            totalCount
          }
        }
      }
    }
  `;

  let repoInfo = await graphql(repoQuery, requestParams);
  return constructReturn(repoInfo.viewer.repository)
}

function constructReturn(repo) {
  let returnRepo = {
    name: repo.name,
    description: repo.description,
    language: repo.languages.nodes[0].name,
    license: repo.licenseInfo.key,
    collaborators: repo.collaborators.totalCount,
    forks: repo.forkCount,
    stars: repo.stargazerCount,
    watchers: repo.watchers.totalCount
  };

  if (repo.latestRelease != null) {
    returnRepo.latest = repo.latestRelease.tagName;
  }

  return returnRepo;
}
