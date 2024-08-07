module.exports = async function() {
  return getContributions(await require('./api').getInstance());
}

async function getContributions(api) {
  const query = `#graphql
    {
      viewer{
        name
        login
        createdAt
        company
        status {
          message
        }
        contributionsCollection {
          contributionYears
        }
        gists {
          totalCount
        }
        packages {
          totalCount
        }
        repositoryDiscussionComments {
          totalCount
        }
      }
    }
  `;

  let viewerInfo = await api(query);
  let start = viewerInfo.viewer.createdAt;
  let contributionsCollection = await getContributionsFrom(api, start);

  let from = new Date(start);
  from.setFullYear(from.getFullYear() + 1);
  let now = new Date()
  while (diffYears(from, now) > 0) {
    await getContributionsFrom(api, from.toISOString(), contributionsCollection);
    from.setFullYear(from.getFullYear() + 1);
  }

  return constructReturn(viewerInfo.viewer, contributionsCollection);
}

async function getContributionsFrom(api, from, totalContributions = {
  contributionsCollection: {
    contributionCalendar: {
      totalContributions: 0
    },
    totalCommitContributions: 0,
    totalIssueContributions: 0,
    totalPullRequestContributions: 0,
    totalPullRequestReviewContributions: 0,
    totalRepositoriesWithContributedCommits: 0,
    totalRepositoriesWithContributedIssues: 0,
    totalRepositoriesWithContributedPullRequestReviews: 0,
    totalRepositoriesWithContributedPullRequests: 0,
    totalRepositoryContributions: 0
  }
}) {

  const query = `#graphql
    query($from: DateTime!) {
      viewer{
        contributionsCollection(from: $from) {
          contributionCalendar {
            totalContributions
          }
          totalCommitContributions
          totalIssueContributions
          totalPullRequestContributions
          totalPullRequestReviewContributions
          totalRepositoriesWithContributedCommits
          totalRepositoriesWithContributedIssues
          totalRepositoriesWithContributedPullRequestReviews
          totalRepositoriesWithContributedPullRequests
          totalRepositoryContributions
        }
      }
    }
  `;

  let currentYear = await api({query, from});

  totalContributions.contributionsCollection.contributionCalendar.totalContributions +=
    currentYear.viewer.contributionsCollection.contributionCalendar.totalContributions;

  totalContributions.contributionsCollection.totalCommitContributions +=
    currentYear.viewer.contributionsCollection.totalCommitContributions;

  totalContributions.contributionsCollection.totalIssueContributions +=
    currentYear.viewer.contributionsCollection.totalIssueContributions;

  totalContributions.contributionsCollection.totalPullRequestContributions +=
    currentYear.viewer.contributionsCollection.totalPullRequestContributions;

  totalContributions.contributionsCollection.totalPullRequestReviewContributions +=
    currentYear.viewer.contributionsCollection.totalPullRequestReviewContributions;

  totalContributions.contributionsCollection.totalRepositoryContributions +=
    currentYear.viewer.contributionsCollection.totalRepositoryContributions;

  totalContributions.contributionsCollection.totalRepositoriesWithContributedCommits +=
    currentYear.viewer.contributionsCollection.totalRepositoriesWithContributedCommits;

  totalContributions.contributionsCollection.totalRepositoriesWithContributedIssues +=
    currentYear.viewer.contributionsCollection.totalRepositoriesWithContributedIssues;

  totalContributions.contributionsCollection.totalRepositoriesWithContributedPullRequestReviews +=
    currentYear.viewer.contributionsCollection.totalRepositoriesWithContributedPullRequestReviews;

  totalContributions.contributionsCollection.totalRepositoriesWithContributedPullRequests +=
    currentYear.viewer.contributionsCollection.totalRepositoriesWithContributedPullRequests;

  return totalContributions;
}

function diffYears(from, to) {
  let diff =(to.getTime() - from.getTime()) / 1000;
  diff /= (60 * 60 * 24);
  return Math.abs(Math.round(diff/365.25));
}

function constructReturn(viewer, contributions) {
  let returnViewer = {
    name: viewer.name !== null  ? viewer.name : viewer.login
  };

  if (viewer.company !== null) {
    returnViewer.company = viewer.company;
  }

  if (viewer.status !== null && viewer.status.message !== null) {
    returnViewer.status = viewer.status.message;
  }

  returnViewer.contributingSince = viewer.contributionsCollection.contributionYears.sort((a, b) => a -b)[0];
  returnViewer.totalContributions = contributions.contributionsCollection.contributionCalendar.totalContributions;

  let returnContributions = {...contributions}
  delete returnContributions.contributionsCollection.contributionCalendar

  returnContributions.contributionsCollection.totalDiscussionContributions = viewer.repositoryDiscussionComments.totalCount;
  returnContributions.contributionsCollection.totalGistContributions = viewer.gists.totalCount;
  returnContributions.contributionsCollection.totalPackageContributions = viewer.packages.totalCount;

  return {...returnViewer, ...returnContributions}
}
