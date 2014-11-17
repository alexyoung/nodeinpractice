var assert = require('assert');
var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello, world.\r\n');
  res.end();
});

server.listen(8000, function() {
  console.log('Listening on port 8000');
});

function makeRequest() {
  var req = http.request({
    port: 8000
  }, function(res) {
    console.log('HTTP headers:', res.headers);
    res.on('data', function(data) {
      console.log('Body:', data.toString());
      assert.equal('Hello, world.\r\n', data.toString());
      assert.equal(200, res.statusCode);
      makeRequest();
    });
  });

  req.end();
}

makeRequest();
