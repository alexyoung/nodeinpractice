var http = require('http')

var server = http.createServer()
server.on('request', function (req, res) {
  res.end('Hello World')
})
server.listen(3000)
