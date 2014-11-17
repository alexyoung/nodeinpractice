var cheerio = require('cheerio');
var fs = require('fs');

fs.readFile('./index.html', 'utf8', function(err, html) {
  var $ = cheerio.load(html); //<co id="web-cheerio-manning-1" />
  var releases = $('.Releases a strong'); //<co id="web-cheerio-manning-2" />

  releases.each(function(i) {
    console.log('New release:', this.text()); //<co id="web-cheerio-manning-3" />
  });
});
