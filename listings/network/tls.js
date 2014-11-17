var fs = require('fs');
var tls = require('tls');

var options = {
  key: fs.readFileSync('server.pem'), //<co id="callout-network-tls-server-1" />
  cert: fs.readFileSync('server-cert.pem'), //<co id="callout-network-tls-server-2" />
  ca: [ fs.readFileSync('client-cert.pem') ], //<co id="callout-network-tls-server-3" />
  requestCert: true //<co id="callout-network-tls-server-4" />
};

var server = tls.createServer(options, function(cleartextStream) {
  var authorized = cleartextStream.authorized ?
    'authorized' : 'unauthorized'; //<co id="callout-network-tls-server-5" />
  console.log('Connected:', authorized);
  cleartextStream.write('Welcome!\n');
  cleartextStream.setEncoding('utf8');
  cleartextStream.pipe(cleartextStream);
});

server.listen(8000, function() {
  console.log('Server listening');
});
