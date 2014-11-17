var fs = require('fs')
var hasLock = false
var lockDir = 'config.lock'

exports.lock = function (cb) {
  if (hasLock) return cb()
  fs.mkdir(lockDir, function (err) {
    if (err) return cb(err)

    fs.writeFile(lockDir+'/'+process.pid, function (err) {
      if (err) console.error(err)
      hasLock = true
      return cb()
    })
  })
}

exports.unlock = function (cb) {
  if (!hasLock) return cb()
  fs.unlink(lockDir+'/'+process.pid, function (err) {
    if (err) return cb(err)

    fs.rmdir(lockDir, function (err) {
      if (err) return cb(err)
      hasLock = false
      cb()
    })
  })
}

process.on('exit', function () {
  if (hasLock) {
    fs.unlinkSync(lockDir+'/'+process.pid)
    fs.rmdirSync(lockDir)
    console.log('removed lock')
  }
})
