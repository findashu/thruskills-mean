// Higher order function is a function that does at least one of the following:

//1 .Takes one or more functions as arguments 
//2. Returns a function as a resultTakes 


// Inner (private) Functions :

//Bearing in mind that a function is just like any other value, there's nothing that stops you from defining a function inside another function, here's the example:

function outer(param) { 
    function inner(theinput) {
        return theinput * 2; 
    }
    return 'The result is ' + inner(param); 
}

// Using a function expression, this can also be written as follows:

var outer = function (param) {
    var inner = function (theinput) {
        return theinput * 2; 
    };
    return 'The result is ' + inner(param); 
};

// When you call the global outer()function, it will internally call the local inner()function. As inner() is local, it's not accessible outside outer(), so you can say it's a private function

outer(2); //"The result is 4"
outer(8); // "The result is 16"
inner(2); // ReferenceError: inner is not defined

// The benefits of using private functions are as follows:

//1.You can keep the global namespace clean, which is less likely to cause naming collisions 
//2.Privacy-you can expose only those functions to the outside world that you decide, and keep the functionality that is not meant to be consumed by the rest of the application to yourself


// Functions that return functions

