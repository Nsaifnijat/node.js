//here we use files module

const fs = require('fs');

const files = fs.readdirSync('./'); //this is a synchronous method which returns all the files of this folder,its a blocking method

console.log(files)

//now lets look at an async form of this method, all these async funcs take two parameters. here first is path and the second is a function
//the second param which is a func is named a callback func and it is called when the async operation is completed.
//the callback func has two parameters: first is error and the second is the result

 fs.readdir('./', function(err, files) {
    if (err) console.log('Error', err); //if error happend
    else console.log('Result', files); //else if result was given

})

