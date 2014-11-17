var assert = require('assert');
var net = require('net');
var clients = 0;
var expectedAssertions = 2;

var server = net.createServer(function(client) {
  clients++;
  var clientId = clients;
  console.log('Client connected:', clientId);

  client.on('end', function() {
    console.log('Client disconnected:', clientId);
  });

  client.write('Welcome client: ' + clientId + '\r\n');
  client.pipe(client);
});

server.listen(8000, function() {
  console.log('Server started on port 8000');

  runTest(1, function() { //<co id="callout-network-client-1" />
    runTest(2, function() {
      console.log('Tests finished');
      assert.equal(0, expectedAssertions); //<co id="callout-network-client-2" />
      server.close(); //<co id="callout-network-client-3" />
    });
  });
});

function runTest(expectedId, done) { //<co id="callout-network-client-4" />
  var client = net.connect(8000); //<co id="callout-network-client-5" />

  client.on('data', function(data) { //<co id="callout-network-client-6" />
    var expected = 'Welcome client: ' + expectedId + '\r\n';
    assert.equal(data.toString(), expected);
    expectedAssertions--;
    client.end(); //<co id="callout-network-client-7" />
  });

  client.on('end', done); //<co id="callout-network-client-8" />
}
