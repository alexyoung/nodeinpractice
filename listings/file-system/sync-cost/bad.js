var fs = require('fs')
var http = require('http')

http.createServer(function (req, res) {
  var data = fs.readFileSync('./output.dat')
  res.end(data)
}).listen(3000)
