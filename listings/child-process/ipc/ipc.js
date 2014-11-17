var cp = require('child_process')

var child = cp.spawn('./ipc', [], { stdio: [ 0, 1, 2, 'ipc'] })
child.on('message', function (msg) {
  console.log('parent received:', msg)
})

child.send('monkeys')
child.send(true)
child.send('larger than the characters you have in your 80 char buffer object, hope you survive')

setTimeout(function () {
  child.send(23)
  child.send({ an: 'object' })
}, 2000)

console.log(child)
