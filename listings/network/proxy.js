var http = require('http');
var url = require('url');

http.createServer(function(req, res) { //<co id="http_proxy_1" />
  console.log('start request:', req.url);
  var options = url.parse(req.url);
  options.headers = req.headers;
  var proxyRequest = http.request(options, function(proxyResponse) { //<co id="http_proxy_2" />
    proxyResponse.on('data', function(chunk) { //<co id="http_proxy_3" />
      console.log('proxyResponse length:', chunk.length);
      res.write(chunk, 'binary');
    });

    proxyResponse.on('end', function() { //<co id="http_proxy_4" />
      console.log('proxied request ended');
      res.end();
    });

    res.writeHead(proxyResponse.statusCode, proxyResponse.headers); //<co id="http_proxy_5" />
  });

  req.on('data', function(chunk) { //<co id="http_proxy_6" />
    console.log('in request length:', chunk.length);
    proxyRequest.write(chunk, 'binary');
  });

  req.on('end', function() { //<co id="http_proxy_7" />
    console.log('original request ended');
    proxyRequest.end();
  });
}).listen(8080); //<co id="http_proxy_8" />
