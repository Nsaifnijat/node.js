//here we use the event module


const EventEmitter = require('events');
//as you see EventEmitter is camelcased which means it is a class, a class is a container for a bunch of related methods and properties
//now in order to use the class we need to make its instance or object first and then use its methods

const emitter = new EventEmitter(); //class means human, but object means actual person like John.
// now here emitter is an object which has a bunch of methods

//create a listener which starts listening to an event when that event is raised the callback func of the listener will be executed
//the listener should be started before the event is raised, it takes two params, first event name, second a callback func
emitter.on('messageLogged', function() {
    console.log('Event was just called');
})


//raise and event
emitter.emit('messageLogged')



// we can also add extra info about our messageLogged event as below

// here we pass the extra info as arg of the callback func
//emitter.on('messageLogged', function(arg) { //argument can be named anything like, arg or e or eventArg are usually used
//in ECMA6 we have arrow function feature which is as below and works the same as above line
emitter.on('messageLogged', (arg) => {
    console.log('Event was just called', arg);
})



//raise an event with id 1 and a url text
//emitter.emit('messageLogged', 1,'http:/' );
//we can encapsulate the extra info inside an object as below
emitter.emit('messageLogged', {id: 1, url:'http:/'});









