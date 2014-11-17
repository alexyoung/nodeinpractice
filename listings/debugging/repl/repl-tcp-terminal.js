var net = require('net')
var repl = require('repl')

net.createServer(function (socket) {
  var r = repl.start({
    input: socket,
    output: socket,
    terminal: true
  })
  r.on('exit', function() {
    socket.end()
  })
  // r.context.socket = socket
}).listen(1337)

console.log('node repl listening on 1337')
