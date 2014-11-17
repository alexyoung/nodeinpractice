var ex = require('child_process').execFileSync

try {
  ex('cd', ['non-existent-dir'], {
    encoding: 'utf8'
  })
} catch (er) {
  console.log('exit status was', er.status)
  console.log('stderr', er.stderr)
}
