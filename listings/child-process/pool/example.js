var http = require('http')
var makePool = require('./pooler')
var doJob = makePool('./worker')

http.createServer(function (req, res) {
  doJob('send dummy job', function (er, data) {
    if (er) return res.end('got an error:' + er.message)
    res.end(data)
  })
}).listen(3000)
