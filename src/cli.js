#!/usr/bin/env node

const [,, ...args] = process.argv

if (!('GITHUB_TOKEN' in process.env)) {
  console.error('missing required environment variable GITHUB_TOKEN');
  process.exit(1);
}

if (args.length == 0 || 'contribs' == args[0]) {
  require('./contribs')()
    .then(r => console.log(JSON.stringify(r, null, 2)))
    .then(() => process.exit(0));

} else if ('repo' == args[0] || args[0].startsWith('repo=')) {
  let repo = args[0].includes('=') ? args[0].split('=')[1] : args[1];
  if (repo == null || '' == repo) {
    console.error('repository name required')
    process.exit(1);
  }
  require('./repo')(repo)
    .then(r => console.log(JSON.stringify(r, null, 2)))
    .then(() => process.exit(0));

} else {
  console.error(`unclear request, ${args}`)
  process.exit(1);
}
