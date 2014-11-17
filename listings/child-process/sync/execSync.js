var ex = require('child_process').execSync
var stdout = ex('ps aux | grep node').toString()
console.log(stdout)
