var locker = require('./locker')

locker.lock(function (err) {
  if (err) throw err
  console.log('locked')

  locker.unlock(function () {
    console.log('unlocked')
  })
})
