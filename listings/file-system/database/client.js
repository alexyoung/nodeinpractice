var Database = require('./database')
var client = new Database('./test.db')

client.on('load', function () {
  var foo = client.get('foo')

  client.set('bar', 'my sweet value', function (er) {
    if (er) console.error(er)
    console.log('write successful')
  })

  client.del('baz')
})
