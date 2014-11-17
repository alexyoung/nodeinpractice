var express = require('express');
var app = express();
var Schema = require('validate');
var xml2json = require('xml2json');
var util = require('util');
var Page = new Schema();

Page.path('title').type('string').required(); //<co id="web-middleware-5-1"/>

function ValidatorError(errors) { //<co id="web-middleware-5-2"/>
  this.statusCode = 400;
  this.message = errors.join(', ');
}
util.inherits(ValidatorError, Error);

function xmlMiddleware(req, res, next) { //<co id="web-middleware-5-3"/>
  if (!req.is('xml')) return next();

  var body = '';
  req.on('data', function(str) { //<co id="web-middleware-5-4"/>
    body += str;
  });

  req.on('end', function() {
    req.body = xml2json.toJson(body.toString(), {
      object: true,
      sanitize: false
    });
    next();
  });
}

function checkValidXml(req, res, next) { //<co id="web-middleware-5-5"/>
  var page = Page.validate(req.body.page);
  if (page.errors.length) {
    next(new ValidatorError(page.errors)); //<co id="web-middleware-5-6"/>
  } else {
    next();
  }
}

function errorHandler(err, req, res, next) { //<co id="web-middleware-5-7"/>
  console.error('errorHandler', err);
  res.send(err.statusCode || 500, err.message);
}

app.use(xmlMiddleware); //<co id="web-middleware-5-8"/>

app.post('/pages', checkValidXml, function(req, res) { //<co id="web-middleware-5-9"/>
  console.log('Valid page:', req.body.page);
  res.send(req.body);
});

app.use(errorHandler); //<co id="web-middleware-5-10"/>

app.listen(3000);
