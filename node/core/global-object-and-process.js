// Most of Node is Javascript like it has
// Array, String, Primitives, Functions, Objects but
// Node !== Browser Javascript

// How do you access global properties (there is no window)

// In Node there is a global object (global or GLOBAL), you spell it lowercase or uppercase and it has a lot of properties.


// Ex. __filename which gives the absolute path and then the file name
// __dirname will get you only the path of the currently runing script.
 
console.log(__dirname);

console.log(__filename);

// Then we have modules natively so thats why there's global.module and global.require();
// To export and import modules.

//Module

// A module is a discrete program, contained in a single file in Node.js. Modules are therefore tied to files, with one module per file.

// Under the covers, the module keeps track of itself through an object named module. Inside each module, therefore, 'module' refers to the object representing the current module. This object holds metadata about the module.

console.log(module.filename);
console.log(module.id);
console.log(module.exports);
console.log('hi');

function test () {
    console.log('Hii test ')
}

test();

// module.exports

// Module object has a special property, called exports, which is reponsible for defining what a module makes available for other modules to use. 
// In node.js terminolgy, module.exports defines the values that the module exports.
// Remember that 'exporting' is simply making objects or values available for other modules to import and use.

// Exporting values
module.exports.temperature = 32;
module.exports.add = (a,b) => a+b;

console.log(module);


// Process

// Each Node.js process has a set of built-in functionality, accessible through the global process module.
//It doesn't need require - it is somewhat literally a wrapper around the currently executing process, and many of the methods it exposes are actually wrappers around calls into some of Node's core C libraries.

//Events

// There are two built-in events worth noting
// 1.exit
    // The exit event fires whenever the process is about to exit.
    process.on('exit', function () {
        console.log('Ending process')
    });
// 2. uncaughtException
// It fires, as you might guess, whenever an exception has occurred that hasn't been caught or dealt with somewhere else in your program. It's not the ideal way to handle errors, but it can be very useful as a last line of defense if a program needs to stay running indefinitely.

process.on('uncaughtException', function (err) {
    console.error('An uncaught error occurred!');
    console.error(err.stack);
});

// Streams
// The process object also provides wrappings for the three STDIO streams, stdin, stdout, and stderr. Put briefly, stdin is a readable stream (where one would read input from the user), stdout is a non-blocking writeable stream (writes to stdout are asynchronous, in other words), and stderr is a blocking (synchronous) writeable stream.
// The following from console.js in Node core

exports.log = function() {
    process.stdout.write(format.apply(this, arguments) + '\n');
};

// Other Properties

//process.pid OS Process ID
console.log(process.pid);

//process.version   node version
console.log(process.version)

// process.title //by default set to node, but it can be set to anything u want.

console.log(process.title);

// process.platform // platform

console.log(process.platform);


// Methods

// process.cwd()
console.log(process.cwd());


//process.memoryUsage() method returns an object describing the memory usage of the Node.js process measured in bytes.
console.log(process.memoryUsage());

//https://nodejs.org/api/process.html