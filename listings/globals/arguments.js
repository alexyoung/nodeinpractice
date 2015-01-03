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

// process.argv
// 0 : 'node'
// 1 : __filename
// 2 : ...
if (process.argv.length > 2) {
  process.argv.forEach(function(arg, index) {
    if(typeof args[arg] != 'undefined'){
      args[arg].apply(this, process.argv.slice(index + 1)); //<co id="listing-globals-arguments-3" />
    }
  });
}
