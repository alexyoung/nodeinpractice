var assert = require('assert')

var recurse = require('../lib/recurse')
var tail = require('../lib/tail')
var iter = require('../lib/iter')
// var bigiter = require('../lib/bigiter')

var suite = new (require('benchmark')).Suite

suite
  .add('recurse', function () { recurse(20) })
  .add('tail',    function () { tail(20) })
  .add('iter',    function () { iter(20) })
  // .add('bigiter', function () { bigiter(20) })
  .on('complete', function () {
    console.log('results:')

    this.forEach(function (result) {
      console.log(result.name, result.count, result.times.elapsed)
    })

    assert.equal(this.filter('fastest').pluck('name')[0], 'iter', 'expect iter to be the fastest')
  })
  .run()
