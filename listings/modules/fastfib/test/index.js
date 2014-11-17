var assert = require('assert')
var fastfib = require ('../')

assert.equal(fastfib(0), 0)
assert.equal(fastfib(1), 1)
assert.equal(fastfib(2), 1)
assert.equal(fastfib(3), 2)
assert.equal(fastfib(4), 3)
assert.equal(fastfib(5), 5)
assert.equal(fastfib(6), 8)
assert.equal(fastfib(7), 13)
assert.equal(fastfib(8), 21)
assert.equal(fastfib(9), 34)
assert.equal(fastfib(10), 55)
assert.equal(fastfib(11), 89)
assert.equal(fastfib(12), 144)

// if we get this far we can assume we are on the right track
