var fs = require('fs')
var join = require('path').join

exports.findSync = function (nameRe, startPath) {
  var results = []

  function finder (path) {
    var files = fs.readdirSync(path)

    for (var i = 0; i < files.length; i++) {
      var fpath = join(path,files[i])
      var stats = fs.statSync(fpath)

      if (stats.isDirectory()) finder(fpath)
      if (stats.isFile() && nameRe.test(files[i])) results.push(fpath)
    }
  }

  finder(startPath)
  return results
}

exports.find = function (nameRe, startPath, cb) {
  var results = []
  var asyncOps = 0

  function finder (path) {
    asyncOps++
    fs.readdir(path, function (er, files) {
      if (er) return cb(er)

      files.forEach(function (file) {
        var fpath = join(path,file)

        asyncOps++
        fs.stat(fpath, function (er, stats) {
          if (er) return cb(er)

          if (stats.isDirectory()) finder(fpath)
          if (stats.isFile() && nameRe.test(file)) results.push(fpath)

          asyncOps--
          if (asyncOps == 0) cb(null, results)
        })
      })

      asyncOps--
      if (asyncOps == 0) cb(null, results)
    })
  }

  finder(startPath)
}

console.log(exports.findSync(/file.*/, '.'))
exports.find(/file.*/, '.', console.log)
