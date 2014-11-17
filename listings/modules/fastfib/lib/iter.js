module.exports = iter

function iter (n) {
  var current = 0, next = 1, swap
  for (var i = 0; i < n; i++) {
    swap = current, current = next
    next = swap + next
  }
  return current
}
