var fs = require('fs');
var zlib = require('zlib');

function benchStream(inSize, outSize) {
  var time = process.hrtime(); //<co id="callout-streams-buffer-size-1" />
  var watermark = process.memoryUsage().rss;
  var input = fs.createReadStream('/usr/share/dict/words', {
    bufferSize: inSize
  });
  var gzip = zlib.createGzip({ chunkSize: outSize });
  var output = fs.createWriteStream('out.gz', { bufferSize: inSize });

  var memoryCheck = setInterval(function() { //<co id="callout-streams-buffer-size-2" />
    var rss = process.memoryUsage().rss;

    if (rss > watermark) {
      watermark = rss;
    }
  }, 50);

  input.on('end', function() { //<co id="callout-streams-buffer-size-3" />
    var memoryEnd = process.memoryUsage();
    clearInterval(memoryCheck);

    var diff = process.hrtime(time);
    console.log([
      inSize,
      outSize,
      (diff[0] * 1e9 + diff[1]) / 1000000,
      watermark / 1024].join(', ')
    ); //<co id="callout-streams-buffer-size-4" />
  });

  input.pipe(gzip).pipe(output); //<co id="callout-streams-buffer-size-5" />

  return input;
}

console.log('file size, gzip size, ms, RSS');

var fileSize = 128;
var zipSize = 5024;

function run(times) {
  benchStream(fileSize, zipSize).on('end', function() { //<co id="callout-streams-buffer-size-6" />
    times--;
    fileSize *= 2;
    zipSize *= 2;

    if (times > 0) {
      run(times); //<co id="callout-streams-buffer-size-7" />
    }
  });
}

run(10); //<co id="callout-streams-buffer-size-8" />
