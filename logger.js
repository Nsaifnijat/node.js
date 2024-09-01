

//suppose we want our logs to go to a url

var url = 'http://mylogger.io/log'; //its not real link

function log(message) {
    //send an HTTP request
    console.log(message);
}

//in now the above var and func is local
//to make them global we do the following, the following are objects, but we can also export funcs only

//module.exports.log = log;
//we can also write 
//exports.log = log
//module.exports.endPoint = url; // or module.exports.url = url;

//console.log(module)



//here we export funcs

module.exports= log;







