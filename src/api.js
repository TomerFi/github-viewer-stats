const { graphql } = require('@octokit/graphql');

module.exports = function() {
  function newApi() {
    if (!('GITHUB_TOKEN' in process.env)) {
      throw new Error('missing required environment variable GITHUB_TOKEN');
    }

    return graphql.defaults({
      headers: {
        authorization: `bearer ${process.env.GITHUB_TOKEN}`,
      }
    })
  }

  let api;

  return {
    getInstance: function() {
      if (!api) {
        api = newApi();
      }
      return api;
    }
  }
}();
