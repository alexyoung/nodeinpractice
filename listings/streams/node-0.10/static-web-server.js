var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  fs.createReadStream(__dirname + '/index.html').pipe(res); //<co id="callout-streams-static-web-server" />
}).listen(8000);
