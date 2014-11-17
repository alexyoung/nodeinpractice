var fs = require('fs');
var https = require('https');

var options = {
  key: fs.readFileSync('server.pem'), //<co id="callout-network-https-server-1" />
  cert: fs.readFileSync('server-cert.pem'), //<co id="callout-network-https-server-2" />
  ca: [ fs.readFileSync('client-cert.pem') ],
  requestCert: true //<co id="callout-network-https-server-3" />
};

var server = https.createServer(options, function(req, res) {
  var authorized = req.socket.authorized
    ? 'authorized' : 'unauthorized'; //<co id="callout-network-https-server-4" />
  res.writeHead(200);
  res.write('Welcome! You are ' + authorized + '\n');
  res.end();
});

server.listen(8000, function() {
  console.log('Server listening');
});
