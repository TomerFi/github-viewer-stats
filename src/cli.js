#!/usr/bin/env node

const [,, ...args] = process.argv

function help() {
  console.log(`
    available options for github-viewer-stats:

    contribs - prints user statistics
    org <org-name> - prints org statistics for <org-name>
    repo <repo-name> - prints repo statistics for <repo-name>
    scopes - prints the requires scopes for GITHUB_TOKEN
    help - prints this help
    version - prints app version
  `);
}

function scopes() {
  console.log(`
    required environment variable GITHUB_TOKEN scopes:

    repo
    read:packages
    read:user
    read:discussion
  `);
}

function version() {
  let pkgJsn = require('../package.json');
  console.log(`${pkgJsn.name} ${pkgJsn.version}`);
}

function verifyToken() {
  if (!('GITHUB_TOKEN' in process.env)) {
    console.error('missing required environment variable GITHUB_TOKEN');
    process.exit(1);
  }
}

function output(out){
  console.log(JSON.stringify(out, null, 2))
}

if ('help' == args[0]) {
  help();
  process.exit(0);
}

if ('version' == args[0]) {
  version();
  process.exit(0);
}

if ('scopes' == args[0]) {
  scopes();
  process.exit(0);
}

if (args.length == 0 || 'contribs' == args[0]) {
  verifyToken();
  require('./contribs')()
    .then(r => output(r))
    .then(() => process.exit(0));

} else if ('org' == args[0] || args[0].startsWith('org=')) {
  let org = args[0].includes('=') ? args[0].split('=')[1] : args[1];
  if (org == null || '' == org) {
    console.error('organization name required')
    process.exit(1);
  }
  verifyToken();
  require('./org')(org)
    .then(r => output(r))
    .then(() => process.exit(0));

} else if ('repo' == args[0] || args[0].startsWith('repo=')) {
  let repo = args[0].includes('=') ? args[0].split('=')[1] : args[1];
  if (repo == null || '' == repo) {
    console.error('repository name required')
    process.exit(1);
  }
  verifyToken();
  require('./repo')(repo)
    .then(r => output(r))
    .then(() => process.exit(0));

} else {
  console.error(`unclear request, ${args}`);
  help();
  process.exit(1);
}
