var dns = require('dns');

dns.resolve('www.manning.com', function(err, addresses) { //<co id="callout-network-resolve-1" />
  if (err) {
    console.error(err);
  }

  console.log('Addresses:', addresses);
});
