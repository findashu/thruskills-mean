// Events == Node Observer Pattern

// We have observers or eventlistens on a subject

// Subject
// Observers (event listeners) on a object
// Event Triggers

let events = require('events');

let emitter = new events.EventEmitter(); 

// We can have more than one listener for each event, by default Node allows up to 10 listeners on one event at once, if more are created, node will issue a warning.

// We can change this by using setMaxListeners(); 

emitter.on('knock', function() {
    console.log('Who\'s there');
})

emitter.removeListener('knock', )


emitter.on('knock', function(results) {
    console.log('Go away');
})

// emitter.on('knock', () => console.log(3));
// emitter.on('knock', () => console.log(4));
// emitter.on('knock', () => console.log(5));
// emitter.on('knock', () => console.log(6));
// emitter.on('knock', () => console.log(7));
// emitter.on('knock', () => console.log(8));
// emitter.on('knock', () => console.log(9));
// emitter.on('knock', () => console.log(10));
// emitter.on('knock', () => console.log(11));

// emitter.setMaxListeners(20);

emitter.emit('knock');

emitter.emit('knock');

// count number of listerner on an Event

console.log(events.EventEmitter.listenerCount(emitter, 'knock'));


// emitter.once();
//It's just like the on method, except that it only works once. After being called for the first time, the listener is removed.

emitter.once('once', function() {
    console.log('sss')
})

emitter.emit('once');
emitter.emit('once');

// passing parameters to emitter callback function

emitter.on('greet', function(name) {
    console.log(`Hello, ${name}`)
})

emitter.emit('greet','ashu');

// removing event listener

// To remove a listener use removeListener() method 
// method accepts two parameters one is event name the second is listener function

function greet() {
    console.log('sdfs')
}

emitter.on('hello', greet)
emitter.emit('hello')

emitter.removeListener('hello', greet);

emitter.emit('hello')


// Removing all listeners by using removeAllListeners()

// Removing all listeners on a specific event;
// To remove all listeners of an event pass the event name to removeAllListeners
emitter.removeAllListeners('knock');

// Remove all listeners from all the events

emitter.removeAllListeners();



