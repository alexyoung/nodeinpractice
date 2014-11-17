var fs = require('fs');
var https = require('https');
var os = require('os');

var options = {
  key: fs.readFileSync('client.pem'), //<co id="callout-network-https-client-1" />
  cert: fs.readFileSync('client-cert.pem'), //<co id="callout-network-https-client-2" />
  ca: [ fs.readFileSync('server-cert.pem') ], //<co id="callout-network-https-client-3" />
  hostname: os.hostname(), //<co id="callout-network-https-client-4" />
  port: 8000,
  path: '/',
  method: 'GET'
};

var req = https.request(options, function(res) { //<co id="callout-network-https-client-5" />
  res.on('data', function(d) {
    process.stdout.write(d);
  });
});
req.end();

req.on('error', function(e) {
  console.error(e);
});
