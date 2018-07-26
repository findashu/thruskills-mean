// ES6 Features

// Destructuring syntax allows an object literal on the left-hand side of an assignment statement.

let config = {
    server : 'localhost',
    port : 8080,
    timeout : 900
}

let {server, port} = config;

console.log(server, port);

// Here server and port are local variables that got asigned properties from the config object because the name of the properties were the same as that of the local variables.

let {timeout : t} = config;
console.log(t);

//Here, we are only picking only timeout from the config object and assign it to a local variable t .
