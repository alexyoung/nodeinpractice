var net = require('net')
var repl = require('repl')

net.createServer(function (socket) {
  var r = repl.start({
    input: socket,
    output: socket
  })
  r.on('exit', function() {
    socket.end()
  })
}).listen(1337)

console.log('node repl listening on 1337')
