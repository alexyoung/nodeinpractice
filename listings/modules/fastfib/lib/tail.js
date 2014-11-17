module.exports = tail

function tail (n) { return fib(n, 0, 1) }

function fib (n, current, next) {
  if (n === 0) return current
  return fib(n - 1, next,  current + next)
}
