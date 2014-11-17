var http = require('http')

var server = http.createServer(function (req, res) {
  response.end('data') // ReferenceError
})
server.listen(3000)

process.on('uncaughtException', function (er) {
  console.error(er)
  server.close()
  setTimeout(process.exit, 15000, 1)
})
