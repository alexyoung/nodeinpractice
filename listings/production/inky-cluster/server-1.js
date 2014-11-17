var app = require('./app');
var cluster = require('cluster'); //<co id="callout-production-cluster-1-1" />

if (cluster.isMaster) {
  var totalWorkers = require('os').cpus().length - 1; //<co id="callout-production-cluster-1-2" />

  console.log('Running %d total workers', totalWorkers);

  for (var i = 0; i < totalWorkers; i += 1) {
    cluster.fork(); //<co id="callout-production-cluster-1-3" />
  }
} else {
  console.log('Worker PID:', process.pid); //<co id="callout-production-cluster-1-4" />
  app.listen(process.env.PORT || 3000);
}
