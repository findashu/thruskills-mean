// ES6 Features

// Object.assign()

// This method is used to copy properties of the target object into the source object. In other words, this method merges the source object with the target object and modifies the target object:

let a = {}
Object.assign(a, { age: 25 });
console.log(a) //{"age":25}

// The first parameter to Object.assign is the target on which source properties are copied. The same target object is returned to the caller. Existing properties are overwritten, while properties that aren't part of the source object are ignored:

let a = {age : 23, gender: "male"}
Object.assign(a, { age: 25 }) // age overwritten, but gender ignored console.log(a) //{"age":25, "gender":"male"}


// Object.assign can take multiple source objects. You can write Object.assign(target, source1, source2);

console.log(Object.assign({a:1, b:2}, {a: 2}, {c: 4}, {b: 3}))




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
