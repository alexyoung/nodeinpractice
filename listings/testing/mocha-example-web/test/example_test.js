var assert = require('assert');
var http = require('http');
var index = require('./../index');

function request(method, url, cb) {//<co id="callout-testing-mocha-web-1" />
  http.request({
    hostname: 'localhost',
    port: 8000,
    path: url,
    method: method
  }, function(res) {
    res.body = '';
    res.on('data', function(chunk) {//<co id="callout-testing-mocha-web-2" />
      res.body += chunk;
    });

    res.on('end', function() {
      cb(res);//<co id="callout-testing-mocha-web-3" />
    });
  }).end();
}

describe('Example web app', function() {
  it('should square numbers', function(done) {
    request('GET', '/square/4', function(res) {
      assert.equal(res.statusCode, 200);
      assert.equal(res.body, '16');//<co id="callout-testing-mocha-web-4" />
      done();
    });
  });

  it('should return a 500 for invalid square requests', function(done) {
    request('GET', '/square', function(res) {
      assert.equal(res.statusCode, 500);//<co id="callout-testing-mocha-web-5" />
      done();
    });
  });
});
