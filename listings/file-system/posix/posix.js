var fs = require('fs')
var assert = require('assert')

var fd = fs.openSync('./file.txt', 'w+')
var writeBuf = new Buffer('some data to write')
fs.writeSync(fd, writeBuf, 0, writeBuf.length, 0)

var readBuf = new Buffer(writeBuf.length)
fs.readSync(fd, readBuf, 0, writeBuf.length, 0)
assert.equal(writeBuf.toString(), readBuf.toString())

fs.closeSync(fd)
