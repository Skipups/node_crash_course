const EventEmitter = require('events')


//Create class
class MyEmmiter extends EventEmitter {}

//Init object
const myEmitter = new MyEmmiter();

//Event listener
myEmitter.on('event', ()=> console.log('Event fired!'))

//Init event
myEmitter.emit('event')
myEmitter.emit('event')

