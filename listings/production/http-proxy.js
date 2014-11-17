var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer({
  target: 'http://localhost:3000' //<co id="callout-production-http-proxy-basic-1" />
});

proxy.on('error', function(err) { //<co id="callout-production-http-proxy-basic-2" />
  console.error('Error:', err);
});

proxy.listen(9000); //<co id="callout-production-http-proxy-basic-3" />
