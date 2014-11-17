var http = require('http'); //<co id="http_redirects_1" />
var https = require('https');
var url = require('url');
var request;

function Request() { //<co id="http_redirects_2" />
  this.maxRedirects = 10;
  this.redirects = 0;
}

Request.prototype.get = function(href, callback) {
  var uri = url.parse(href); //<co id="http_redirects_3" />
  var options = { host: uri.host, path: uri.path };
  var httpGet = uri.protocol === 'http:' ? http.get : https.get;

  console.log('GET:', href);

  function processResponse(response) { //<co id="http_redirects_4" />
    if (response.statusCode >= 300 && response.statusCode < 400) {
      if (this.redirects >= this.maxRedirects) {
        this.error = new Error('Too many redirects for: ' + href);
      } else {
        this.redirects++; //<co id="http_redirects_5" />
        href = url.resolve(options.host, response.headers.location);
        return this.get(href, callback);
      }
    }

    response.url = href;
    response.redirects = this.redirects;

    console.log('Redirected:', href);

    function end() {
      console.log('Connection ended');
      callback(this.error, response);
    }

    response.on('data', function(data) {
      console.log('Got data, length:', data.length);
    });

    response.on('end', end.bind(this)); //<co id="http_redirects_6" />
  }

  httpGet(options, processResponse.bind(this))
    .on('error', function(err) {
      callback(err);
    });
};

request = new Request(); //<co id="http_redirects_7" />
request.get('http://google.com/', function(err, res) {
  if (err) {
    console.error(err);
  } else {
    console.log('Fetched URL:', res.url,
      'with', res.redirects, 'redirects');
    process.exit();
  }
});
