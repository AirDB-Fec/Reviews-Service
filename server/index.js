require('newrelic');
const cluster = require('cluster');

const app = require('./app');

if (cluster.isMaster) {
  const cpuCount = require('os').cpus().length;
  // Create a worker for each CPU
  for (let i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }

// Code to run if we're in a worker process
} else {
  app.listen(app.get('port'), () => console.log(`listening on port ${app.get('port')}!`));
}
