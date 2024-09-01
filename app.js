
//to import a module

//require('./logger.js') // ./ is current folder. you can also remove .js

//subfolder
//require('./subfolder/logger')
//parent folder
//require('../logger')

/*
//to use modules

var logger = require('./logger')

//console.log(logger)

//if we override the logger var, we get error--TypeError: logger.log is not a function
logger =1

logger.log('message')



//if we set it as constant, we get a compile time error.

const logger = require('./logger')

//console.log(logger)

//if we override the logger var, we get error--TypeError: Assignment to constant variable.
logger =1

logger.log('message')

//we can run the above code using-- jshint app.js   --it gives much better error options


*/

//now we use the func not Object

const logger = require('./logger')

logger('message')


















