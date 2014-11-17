var assert = require('assert');
var exitCode = 0;
var filenames = process.argv.slice(2);

it = function(name, test) { //<co id="callout-testing-runner-1"/>
  var err;

  try {
    test();//<co id="callout-testing-runner-2"/>
  } catch (e) {
    err = e;
  }

  console.log(' - it', name, err ? '[FAIL]' : '[OK]');//<co id="callout-testing-runner-3"/>

  if (err) {
    console.error(err);
    console.error(err.stack);//<co id="callout-testing-runner-4"/>
    exitCode = 1;
  }
};

filenames.forEach(function(filename) {//<co id="callout-testing-runner-5"/>
  console.log(filename);
  require('./' + filename);
});

process.on('exit', function() {//<co id="callout-testing-runner-6"/>
  process.exit(exitCode);
});
