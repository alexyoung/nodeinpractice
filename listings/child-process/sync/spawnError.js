var sp = require('child_process').spawnSync
try {
  var ps = sp('cd', ['non-existant-dir'])
  console.log(ps)
}
catch (er) {
  console.log('error')
}
