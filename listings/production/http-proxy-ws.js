var http = require('http');
var httpProxy = require('http-proxy');

var proxy = new httpProxy.createProxyServer({
  target: 'http://localhost:3000'
});

var wsProxy = new httpProxy.createProxyServer({ //<co id="callout-production-http-proxy-ws-1" />
  target: 'http://localhost:3001'
});

var proxyServer = http.createServer(function(req, res) {
  proxy.web(req, res);
});

proxyServer.on('upgrade', function(req, socket, head) { //<co id="callout-production-http-proxy-ws-2" />
  wsProxy.ws(req, socket, head);
});

proxyServer.listen(9000);
