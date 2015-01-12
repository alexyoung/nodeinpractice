var args = { //<co id="listing-globals-arguments-1" />
  '-h': displayHelp,
  '-r': readFile
};

function displayHelp() {
  console.log('Argument processor:', args);
}

function readFile(file) {
  console.log('Reading:', file);
  require('fs').createReadStream(file).pipe(process.stdout); //<co id="listing-globals-arguments-2" />
}

if (process.argv.length > 0) {
  process.argv.forEach(function(arg, index) {
    if (args[arg]) {
      args[arg].apply(this, process.argv.slice(index + 1)); //<co id="listing-globals-arguments-3" />
    }
  });
}
