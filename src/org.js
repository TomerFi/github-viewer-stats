module.exports = async function(org) {
  if (org == null || '' == org) {
    throw TypeError('organization name required');
  }

  return getOrg(await require('./api').getInstance(), org);
}

async function getOrg(api, org) {
  const query = `#graphql
    query($org: String!) {
      viewer {
        organization(login: $org) {
          name
          description
          login
          membersWithRole {
            totalCount
          }
          repositories {
            totalCount
          }
          teams {
            totalCount
          }
          websiteUrl
          viewerCanAdminister
        }
      }
    }
  `;

  const adminQuery = `#graphql
    query($org: String!) {
      viewer {
        organization(login: $org) {
          pendingMembers {
            totalCount
          }
          requiresTwoFactorAuthentication
          webCommitSignoffRequired
        }
      }
    }
  `;

  let orgInfo = await api({query, org});

  let orgAdminInfo = {};
  if (orgInfo.viewer.organization.viewerCanAdminister) {
    orgAdminInfo = await api({query: adminQuery, org});
  }

  return constructReturn({...orgInfo.viewer.organization, ...orgAdminInfo.viewer.organization});
}

function constructReturn(org) {
  let returnRepo = {
    name: org.name ? org.name : org.login,
    description: org.description,
    members: org.membersWithRole.totalCount,
    teams: org.teams.totalCount,
    repositories: org.repositories.totalCount,
  }

  if (org.pendingMembers != null) {
    returnRepo.pending = org.pendingMembers.totalCount;
  }

  if (org.requiresTwoFactorAuthentication != null) {
    returnRepo.twoFactorAuthentication = org.requiresTwoFactorAuthentication;
  }

  if (org.webCommitSignoffRequired != null) {
    returnRepo.webCommitSignoff = org.webCommitSignoffRequired;
  }

  if (org.websiteUrl != null) {
    returnRepo.websiteUrl = org.websiteUrl;
  }

  return returnRepo;
}
