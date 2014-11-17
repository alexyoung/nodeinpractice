function Server(requestListener) {
  net.Server.call(this, { allowHalfOpen: true }); //<co id="callout-intro-http-1" />

  this.addListener('connection', connectionListener);
  this.addListener('clientError', function(err, conn) {
    conn.destroy(err);
  });
}

util.inherits(Server, net.Server); //<co id="callout-intro-http-2" />
