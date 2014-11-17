var args = {
  '-h': displayHelp,
  '-r': readFile
};

function displayHelp() {
  console.log('Argument processor:', args);
}

function readFile(file) {
  if (file && file.length) {
    console.log('Reading:', file);
    require('fs').createReadStream(file).pipe(process.stdout);
  } else {
    console.error('A file must be provided with the -r option');
    process.exit(1); //<co id="listing-globals-arguments-1-1" />
  }
}

if (process.argv.length > 0) {
  process.argv.forEach(function(arg, index) {
    args[arg].apply(this, process.argv.slice(index + 1));
  });
}
