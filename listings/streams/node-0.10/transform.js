var fs = require('fs');
var stream = require('stream');

CSVParser.prototype = Object.create(stream.Transform.prototype, {
  constructor: { value: CSVParser }
});

function CSVParser(options) {
  stream.Transform.call(this, options);

  this.value = ''; //<co id="callout-streams-transform-1" />
  this.headers = [];
  this.values = [];
  this.line = 0;
}

CSVParser.prototype._transform = function(chunk, encoding, done) { //<co id="callout-streams-transform-2" />
  var c;
  var i;

  chunk = chunk.toString();

  for (i = 0; i < chunk.length; i++) { //<co id="callout-streams-transform-3" />
    c = chunk.charAt(i);

    if (c === ',') { //<co id="callout-streams-transform-4" />
      this.addValue();
    } else if (c === '\n') {
      this.addValue();
      if (this.line > 0) {
        this.push(JSON.stringify(this.toObject())); //<co id="callout-streams-transform-5" />
      }
      this.values = [];
      this.line++;
    } else {
      this.value += c;
    }
  }

  done(); //<co id="callout-streams-transform-6" />
};

CSVParser.prototype.toObject = function() {
  var i;
  var obj = {};
  for (i = 0; i < this.headers.length; i++) { //<co id="callout-streams-transform-7" />
    obj[this.headers[i]] = this.values[i];
  }
  return obj;
};

CSVParser.prototype.addValue = function() {
  if (this.line === 0) { //<co id="callout-streams-transform-8" />
    this.headers.push(this.value);
  } else {
    this.values.push(this.value);
  }
  this.value = '';
};

var parser = new CSVParser();
fs.createReadStream(__dirname + '/sample.csv')
  .pipe(parser)
  .pipe(process.stdout);
