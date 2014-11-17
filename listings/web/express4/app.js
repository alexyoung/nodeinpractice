var bodyParser = require('body-parser'); //<co id="callout-web-express4-1" />
var cookieParser = require('cookie-parser');
var csurf = require('csurf');
var session = require('express-session');
var methodOverride = require('method-override');
var express = require('express');
var app = express();

app.use(cookieParser('secret')); //<co id="callout-web-express4-2" />
app.use(session({ secret: 'secret' }));
app.use(bodyParser());
app.use(methodOverride());
app.use(csurf());

app.get('/', function(req, res) { //<co id="callout-web-express4-3" />
  res.send('Hello');
});

app.listen(3000);
