// Requiring other modules 

// In order to import the module, we need to use special keyword used to import things, and it is called 'require'.

// Where module.exports lets us set things for export, require lets us specify modules to be imported into the current module.

// require available in the global scope.

// To import a defined in other file, we would require('relative path'), where we have specified the relative path.

// module.exports is returned by require().


// Importing single functionality or value
//var temp = require('./global-object-and-process').temperature;

// Import complete file

var calc = require('./global-object-and-process');


// console.log(temp);

console.log(calc.add(1,2));