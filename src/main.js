#!/usr/bin/env node

require('./get-stats')().then(r => console.log(JSON.stringify(r, null, 2)));
