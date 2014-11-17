// Run with:
//   cat file.txt | node process.js

process.stdin.resume(); //<co id="callout-globals-stdout-1" />
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(text) {
  process.stdout.write(text.toUpperCase()); //<co id="callout-globals-stdout-2" />
});
