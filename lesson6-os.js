//in this lesson we use the os module

const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory:' +totalMemory);
//we can write the above using Template string which is new ECMAScript 6 or ES6 or ES2015 feature like this with the help of backtick

console.log(`Total Memory : ${totalMemory}`);
console.log(`Free Memory : ${totalMemory}`);