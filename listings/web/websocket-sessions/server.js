var express = require('express');
var WebSocketServer = require('ws').Server;
var parseCookie = express.cookieParser('some secret'); //<co id="callout-web-websockets-1-1" />
var MemoryStore = express.session.MemoryStore; //<co id="callout-web-websockets-1-2" />
var store = new MemoryStore();

var app = express();
var server = app.listen(process.env.PORT || 3000);
var webSocketServer;

app.use(parseCookie);
app.use(express.session({ store: store, secret: 'some secret' })); //<co id="callout-web-websockets-1-3" />
app.use(express.static(__dirname + '/public'));

app.get('/random', function(req, res) { //<co id="callout-web-websockets-1-4" />
  req.session.random = Math.random().toString();
  res.send(200);
});

webSocketServer = new WebSocketServer({ server: server }); //<co id="callout-web-websockets-1-5" />

webSocketServer.on('connection', function(ws) { //<co id="callout-web-websockets-1-6" />
  var session;

  ws.on('message', function(data, flags) {
    var message = JSON.parse(data);

    if (message.type === 'getSession') { //<co id="callout-web-websockets-1-7" />
      parseCookie(ws.upgradeReq, null, function(err) {
        var sid = ws.upgradeReq.signedCookies['connect.sid']; //<co id="callout-web-websockets-1-8" />

        store.get(sid, function(err, loadedSession) { //<co id="callout-web-websockets-1-9" />
          if (err) console.error(err);
          session = loadedSession;
          ws.send('session.random: ' + session.random, {
            mask: false
          }); //<co id="callout-web-websockets-1-10" />
        });
      });
    } else {
      ws.send('Unknown command');
    }
  });
});
