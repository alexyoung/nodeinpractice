var name = 'alex';
var user = { name: 'alex' };

console.log('Hello');
console.log('Hello %s', name); //<co id="callout-globals-console-1" />
console.log('Hello:', name); //<co id="callout-globals-console-2" />
console.log('Hello:', user);

console.error('Error, bad user:', user);
