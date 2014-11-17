function makeLoad() {
  for(var i=0;i<1000000000;i++);
}
function logSomething() {
  console.log('something')
}

setInterval(makeLoad, 2000)
setInterval(logSomething, 0)
