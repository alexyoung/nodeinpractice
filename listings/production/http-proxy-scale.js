var http = require('http');
var httpProxy = require('http-proxy');

var targets = [
  { target: 'http://localhost:3000' },
  { target: 'http://localhost:3001' },
  { target: 'http://localhost:3002' }
];

var proxies = targets.map(function(options, i) {
  var proxy = new httpProxy.createProxyServer(options); //<co id="callout-production-http-proxy-scaling-1" />
  proxy.on('error', function(err) {
    console.error('Proxy error:', err);
    console.error('Server:', i);
  });
  return proxy;
});

var i = 0;
http.createServer(function(req, res) {
  proxies[i].web(req, res);
  i = (i + 1) % proxies.length; //<co id="callout-production-http-proxy-scaling-2" />
}).listen(9000);
