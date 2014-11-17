var assert = require('assert');
var dgram = require('dgram');
var fs = require('fs');
var defaultSize = 16;
var port = 41234;

function Client(remoteIP) {
  var socket = dgram.createSocket('udp4');
  var readline = require('readline'); //<co id="callout-network-client-server-1" />
  var rl = readline.createInterface(process.stdin, process.stdout);

  socket.send(new Buffer('<JOIN>'), 0, 6, port, remoteIP); //<co id="callout-network-client-server-2" />

  rl.setPrompt('Message> ');
  rl.prompt();

  rl.on('line', function(line) {
    sendData(line); //<co id="callout-network-client-server-3" />
  }).on('close', function() {
    process.exit(0);
  });

  socket.on('message', function(msg, rinfo) { //<co id="callout-network-client-server-4" />
    console.log('\n<' + rinfo.address + '>', msg.toString());
    rl.prompt();
  });

  function sendData(message) {
    socket.send(new Buffer(message), 0, message.length, port, remoteIP,
      function(err, bytes) { //<co id="callout-network-client-server-5" />
        console.log('Sent:', message);
        rl.prompt();
      }
    );
  }
}

function Server() {
  var clients = [];
  var server = dgram.createSocket('udp4');

  server.on('message', function(msg, rinfo) { //<co id="callout-network-client-server-6" />
    var clientId = rinfo.address + ':' + rinfo.port; //<co id="callout-network-client-server-7" />

    msg = msg.toString();

    if (!clients[clientId]) { //<co id="callout-network-client-server-8" />
      clients[clientId] = rinfo;
    }

    if (msg.match(/^</)) { //<co id="callout-network-client-server-9" />
      console.log('Control message:', msg);
      return;
    }

    for (var client in clients) { //<co id="callout-network-client-server-10" />
      if (client !== clientId) {
        client = clients[client];
        server.send(
          new Buffer(msg), 0,
          msg.length, client.port, client.address,
          function(err, bytes) {
            if (err) console.error(err);
            console.log('Bytes sent:', bytes);
          }
        );
      }
    }
  });

  server.on('listening', function() {
    console.log('Server ready:', server.address());
  });

  server.bind(port);
}

module.exports = {
  Client: Client,
  Server: Server
};

if (!module.parent) {
  switch (process.argv[2]) {
    case 'client':
      new Client(process.argv[3]);
      break;

    case 'server':
      new Server();
      break;

    default:
      console.log('Unknown option');
  }
}
