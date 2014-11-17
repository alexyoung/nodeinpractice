var net = require('net');
var server = net.createServer(function(c) {
  c.setNoDelay(true); //<co id="callout-network-nagle-1" />
  c.write('\377\375\042\377\373\001', 'binary'); //<co id="callout-network-nagle-2" />
  console.log('server connected');
  c.on('end', function() {
    console.log('server disconnected');
    server.unref(); //<co id="callout-network-nagle-3" />
  });
  c.on('data', function(data) {
    process.stdout.write(data.toString()); //<co id="callout-network-nagle-4" />
    c.write(data.toString());
  });
});
server.listen(8000, function() {
  console.log('server bound');
});
