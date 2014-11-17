var assert = require('assert');
var http = require('http'); //<co id="callout-network-http-1" />

var server = http.createServer(function(req, res) { //<co id="callout-network-http-2" />
  res.writeHead(200, { 'Content-Type': 'text/plain' }); //<co id="callout-network-http-3" />
  res.write('Hello, world.\r\n'); //<co id="callout-network-http-4" />
  res.end();
});

server.listen(8000, function() { //<co id="callout-network-http-5" />
  console.log('Listening on port 8000');
});

var req = http.request({ //<co id="callout-network-http-6" />
  port: 8000
}, function(res) {
  console.log('HTTP headers:', res.headers);
  res.on('data', function(data) {
    console.log('Body:', data.toString());
    assert.equal('Hello, world.\r\n', data.toString()); //<co id="callout-network-http-7" />
    assert.equal(200, res.statusCode);
    server.unref();
  });
});

req.end();
