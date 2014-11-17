var dns = require('dns'); //<co id="callout-network-dns-lookup-1" />

dns.lookup('www.manning.com', function(err, address) { //<co id="callout-network-dns-lookup-2" />

  if (err) {
    console.error('Error:', err);
  }
  console.log('Addresses:', address);
});
