var bignum = require('bignum')
module.exports = bignum

function bigiter (n) {
  var current = bignum('0'), next = bignum('1'), swap
  for (var i = 0; i < n; i++) {
    swap = current, current = next
    next = swap.add(next)
  }
  return current.toString()
}
