var fs = require('fs');
var exec = require('child_process').exec;

function watch() {
  var child = exec('node server.js'); //<co id="callout-watcher-1" />
  var watcher = fs.watch(__dirname + '/server.js', function(event) { //<co id="callout-watcher-2" />
    console.log('File changed, reloading.');
    child.kill(); //<co id="callout-watcher-3" />
    watcher.close(); //<co id="callout-watcher-4" />
    watch(); //<co id="callout-watcher-5" />
  });
}

watch();
