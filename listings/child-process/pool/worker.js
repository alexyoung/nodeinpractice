// var failTurn = Math.round(Math.random()*10)
// console.log('child process set to fail on', failTurn, 'turn')

process.on('message', function (job) {
  for (var i = 0; i < 1000000000; i++);
  process.send('finished: ' + job)
  // if (--failTurn == 0) throw new Error('some horrible error occurred')
})
