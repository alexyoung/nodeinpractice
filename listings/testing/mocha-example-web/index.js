var http = require('http');

var server = http.createServer(function(req, res) {
  if (req.url.match(/^\/square/)) {
    var params = req.url.split('/'); //<co id="callout-testing-mocha-web-app-1" />
    var number;
    if (params.length > 1 && params[2]) {
      number = parseInt(params[2], 10);
      res.writeHead(200);
      res.end((number * number).toString()); //<co id="callout-testing-mocha-web-app-2" />
    } else {
      res.writeHead(500); //<co id="callout-testing-mocha-web-app-3" />
      res.end('Invalid input');
    }
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
})

server.listen(8000);

module.exports = server;
