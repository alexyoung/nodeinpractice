var cp = require('child_process')

var child = cp.fork('./child', { silent: true })
child.send('monkeys')
child.on('message', function (message) {
  console.log('got message from child', message, typeof message)
})
child.stdout.pipe(process.stdout)

setTimeout(function () {
  child.disconnect()
}, 3000)
