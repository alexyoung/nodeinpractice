var fs = require('fs');
var os = require('os');
var tls = require('tls');

var options = {
  key: fs.readFileSync('client.pem'), //<co id="callout-network-tls-client-1" />
  cert: fs.readFileSync('client-cert.pem'), //<co id="callout-network-tls-client-2" />
  ca: [ fs.readFileSync('server-cert.pem') ], //<co id="callout-network-tls-client-3" />
  servername: os.hostname() //<co id="callout-network-tls-client-4" />
};

var cleartextStream = tls.connect(8000, options, function() {
  var authorized = cleartextStream.authorized ?
    'authorized' : 'unauthorized';
  console.log('Connected:', authorized);
  process.stdin.pipe(cleartextStream); //<co id="callout-network-tls-client-5" />
});

cleartextStream.setEncoding('utf8');

cleartextStream.on('data', function(data) {
  console.log(data);
});
