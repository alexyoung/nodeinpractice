var fs = require('fs')
process.on('message', function (message) {
  console.log('got one', message)
  process.send('no pizza')
  process.send(1)
  process.send({ my: 'object' })
  process.send(false)
  process.send(null)
})

console.log(process)
