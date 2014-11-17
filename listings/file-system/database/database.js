var fs = require('fs')
var EventEmitter = require('events').EventEmitter

var Database = function (path) {
  this.path = path
  this._records = Object.create(null)
  this._writeStream = fs.createWriteStream(this.path, {
    encoding: 'utf8',
    flags: 'a'
  })
  this._load()
}

Database.prototype = Object.create(EventEmitter.prototype)

Database.prototype._load = function () {
  var stream = fs.createReadStream(this.path, { encoding: 'utf8' })
  var database = this

  var data = ''
  stream.on('readable', function () {
    data += stream.read()
    var records = data.split('\n')
    data = records.pop()

    for (var i = 0; i < records.length; i++) {
      try {
        var record = JSON.parse(records[i])
        if (record.value == null)
          delete database._records[record.key]
        else
          database._records[record.key] = record.value
      } catch (e) {
        database.emit('error', 'found invalid record:', records[i])
      }
    }
  })

  stream.on('end', function () {
    database.emit('load')
  })
}

Database.prototype.get = function (key) {
  return this._records[key] || null
}

Database.prototype.set = function (key, value, cb) {
  var toWrite = JSON.stringify({ key: key, value: value }) + '\n'
  if (value == null)
    delete this._records[key]
  else
    this._records[key] = value
  this._writeStream.write(toWrite, cb)
}

Database.prototype.del = function (key, cb) {
  return this.set(key, null, cb)
}

module.exports = Database
