/*
//when we run our code, our code gets wrapped into a func like this, this functions is called module wrapper function
(function (exports, require, module, __filename, __dirname) {

console.log(__filename);
console.log(__dirname);


module.exports.log = log;
exports.log = log; //it is a shorthand of the above



})

*/
//the above is how it gets wrapped but below is what should be written




console.log(__filename); //output: C:\Users\NS\allDATA\Javascripts\node\lesson4.js
console.log(__dirname); //output: C:\Users\NS\allDATA\Javascripts\node


