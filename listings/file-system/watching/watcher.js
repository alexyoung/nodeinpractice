var fs = require('fs')
fs.watch('./watchdir', console.log)
fs.watchFile('./watchdir', console.log)

fs.watch('./watchfile', console.log)
fs.watchFile('./watchfile', console.log)
