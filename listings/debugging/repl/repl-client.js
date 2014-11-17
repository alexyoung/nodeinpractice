var net = require('net')
var socket = net.connect(1337)

process.stdin.setRawMode(true)
process.stdin.pipe(socket)
socket.pipe(process.stdout)

socket.once('close', function () {
  process.stdin.destroy()
})
