var http = require('http');
var fs = require('fs');
var zlib = require('zlib');

http.createServer(function(req, res) {
  res.writeHead(200, { 'content-encoding': 'gzip' }); //<co id="callout-streams-static-web-gz-1" />
  fs.createReadStream(__dirname + '/index.html')
    .pipe(zlib.createGzip())//<co id="callout-streams-static-web-gz-2" />
    .pipe(res);
}).listen(8000);
