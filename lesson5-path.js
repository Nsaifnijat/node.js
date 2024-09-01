//in this lesson we learn how to use node's built in modules

//the following is a builtin module, but if we require our own modules we should write its full path or give ./path before them

const path = require('path') //here we import the module, get the result which is an object and store it in a constant
//the above is an object which has some methods in the following line we use its methods and save them in a const

const pathObj = path.parse(__filename);

console.log(pathObj)










