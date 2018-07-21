// Scope Of Variables

// Variables in JS are not defined in block scope, but in a function scope, that means if a variable is defined inside a function, its not visible outside of the function.

// The code inside a function has access to all global variables.

var global = 'I am declared in global scope';

function testScope(){
    var inner = 'I am declared inside a function scope';
    console.log(global);
    console.log(inner);
}

testScope();

// try to access variable declared inside function.
 console.log(inner); // ReferenceError: inner is not defined

// Note => If you don't use var to declare a variable, this variable is automatically assigned a global scope.
// Test it by declaring a variable inside a function without using var

// Variable Hoisting

var a = 123;

function f() {
    console.log(a);
    var a = 1;
    console.log(a);
}

f();
// This unexpected behaviour is because of hoisting.

// When your JS program execution enters a new function, all the variables "declared" anywhere in the function are moved, elevated or hoisted to the top of the function.

// Only the declaration is hoisted, meaning only the presence of variable is moved to the top.

// In ES6, variables declared by the let keyword are hoisted to block scope. However, referencing the variable before its declaration is an error.