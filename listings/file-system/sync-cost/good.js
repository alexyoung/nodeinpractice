var fs = require('fs')
var http = require('http')
var data = fs.readFileSync('./output.dat')

http.createServer(function (req, res) {
  res.end(data)
}).listen(3000)
