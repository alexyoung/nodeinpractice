var signals = require('signals');
var myObject = {
  started: new signals.Signal()
};

function onStarted(param1, param2){
  console.log(param1, param2);
}

myObject.started.add(onStarted); //<co id="callout-events-alternatives-4-1" />
myObject.started.dispatch('hello', 'world'); //<co id="callout-events-alternatives-4-2" />
