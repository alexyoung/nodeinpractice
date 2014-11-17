var util = require('util')
var a = 0
util.log('starting')

function changeA () {
  a = 100
}

function addToA (toAdd) {
  a += toAdd
}

changeA()
addToA(25)
addToA(25)

util.log('ending')
