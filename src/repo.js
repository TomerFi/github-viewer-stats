module.exports = async function(repo) {
  if (repo == null || '' == repo) {
    throw TypeError('repository name required');
  }

  return getRepo(await require('./api').getInstance(), repo);
}

async function getRepo(api, repo) {
  const query = `#graphql
    query($repo: String!) {
      viewer {
        repository(name: $repo) {
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

  let repoInfo = await api({query, repo});
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
