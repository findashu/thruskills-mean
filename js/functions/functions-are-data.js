// Functions are data, that means you can create a function and assign it to a variable.

var f = function () {
    return 1;
}
 
// This way of defining a function is sometimes referred to as function literal notation.

// The 'function () { return 1; }' part is a function expression. 
// Function expression can optionally have a name, in which case it becomes a named function expression(NFE)

// Anonymous Functions

// As you know function expression can be defined without name, this is also often called an anonymous function, especially when such a function expression used even without assigning it to a variable.

// There can be two elegant uses for such anonymous functions.


// 1. Self Executing Or Immediate Functions
// You can define an anonymous function and execute it right away.

(
    function () {
        console.log(`Hi, I'm self executing function`);
    }
)();

// You can pass arguments also to your anonymous function

(
    function (name) {
        console.log(`Hello ${name}`);
    }
)('ashu');

// 2. Callbacks
// As a function is just like any other data assigned to a variable, it can be defined, copied, and also passed as an argument to other functions.


function fn1() {
    return 1
}

function fn2() {
    return 2
}



function finalResult(a, b) {
    return a() + b();
}

var res = finalResult(fn1, fn2);

console.log(res);

var res2 = finalResult(function (){return 5}, function () { return 5});

console.log(res2);