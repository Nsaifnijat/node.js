//global objects
console.log();

setTimeout(); //used to call a func after a delay
clearTimeout();

setInterval();//used to call a func after a delay
clearInterval();//stop a func from being called repeatedly

//in browsers or javascript we a window object which presents our global scope, like
//all of the above gets prefexed like the following

window.console.log();
window.setTimeout();
window.setInterval();
//even a variale
var message = '';
//it gets this
window.message
//all does the same thing

//but in node we dont have window but we have global

global.setTimeout();
global.setInterval();

//but variables are not added to global module

//in node every file is a module, and the funcs and vars defined in that module is scoped to that module only

console.log(module);