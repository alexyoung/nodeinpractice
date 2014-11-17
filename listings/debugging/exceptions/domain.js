var domain = require('domain')
var http = require('http')

var d = domain.create()
d.on('error', function () {
  console.error(er)
  server.close()
  setTimeout(process.exit, 15000, 1)
})

d.run(function () {
  var server = http.createServer(function (req, res) {
    response.end('data') // ReferenceError
  })
  server.listen(3000)
})
