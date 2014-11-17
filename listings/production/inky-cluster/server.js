var app = require('./app');
var cluster = require('cluster');

if (cluster.isMaster) {
  var totalWorkers = require('os').cpus().length - 1;

  console.log('Running %d total workers', totalWorkers);

  for (var i = 0; i < totalWorkers; i += 1) {
    cluster.fork();
  }

  cluster.on('exit', function(worker) { //<co id="callout-production-cluster-2-1" />
    console.log('Worker %d died', worker.id);
    cluster.fork(); //<co id="callout-production-cluster-2-2" />
  });
} else {
  console.log('Worker PID:', process.pid);
  app.listen(process.env.PORT || 3000);
}
