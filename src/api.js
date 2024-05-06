module.exports = function() {
  async function newApi() {
    if (!('GITHUB_TOKEN' in process.env)) {
      throw new Error('missing required environment variable GITHUB_TOKEN');
    }

    const graphql = await import('@octokit/graphql')

    return graphql.graphql.defaults({
      headers: {
        authorization: `bearer ${process.env.GITHUB_TOKEN}`,
      }
    })
  }

  let api;

  return {
    getInstance: async function() {
      if (!api) {
        api = await newApi();
      }
      return api;
    }
  }
}();
