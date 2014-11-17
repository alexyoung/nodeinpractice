var ex = require('child_process').execFileSync
var stdout = ex('echo', ['hello']).toString()
console.log(stdout)
