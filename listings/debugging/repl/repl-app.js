var http = require('http')

var stats = { numReqs: 0 }

var server = module.exports = http.createServer()
server.on('request', function (req, res) {
  stats.numReqs++
  res.end('Hello World')
})
server.listen(3000)
console.log('server listening on 3000')

var net = require('net')
var repl = require('repl')

net.createServer(function (socket) {
  var r = repl.start({
    input: socket,
    output: socket,
    terminal: true,
    useGlobal: true
  })
  r.on('exit', function() {
    socket.end()
  })
  r.context.server = server
  r.context.stats = stats
}).listen(1337)
console.log('repl listening on 1337')
