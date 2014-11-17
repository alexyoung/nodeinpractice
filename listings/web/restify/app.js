var app;
var restify = require('restify');
var routes = require('./routes');

module.exports = app = restify.createServer({ //<co id="callout-web-restify-1" />
  name: 'NIP CMS',
});

app.use(restify.bodyParser()); //<co id="callout-web-restify-2" />

app.get('/pages', routes.pages.index); //<co id="callout-web-restify-3" />
app.get('/pages/:id', routes.pages.show);
app.post('/pages', routes.pages.create);
app.patch('/pages/:id', routes.pages.patch);
app.put('/pages/:id', routes.pages.update);
app.del('/pages/:id', routes.pages.remove);
