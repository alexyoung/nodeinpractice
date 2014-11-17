#!/usr/bin/env node
var fastfib = require('../')
var seqNo = Number(process.argv[2])

if (isNaN(seqNo)) return console.error('\nInvalid sequence number provided, try:\n fastfib 30\n')

console.log('The result is', fastfib(seqNo))
