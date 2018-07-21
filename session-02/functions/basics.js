// Functions allows you to group together a code, give it a name, and reuse it later.

// Lets take a example

function sum(a,b){
    let res = a+b;
    return res;
}


// Parts that make-up a function

// 1. Function Keyword
// 2. Name of function
// 3. Function Parameter. A function can take any number of Parameters or no parameters, seperated by comma
// 4. Code block, also called as Body.
// 5. The return statement. A function always returns a value. If it doesn't return a value explicitly, it implicitly returns the value undefined.

// The preceding syntax is called a function declaration. Its just a one ways to create a function in JS

// Calling a function

var result = sum(1);

console.log(`Result of function sum => ${result}`);

// Parameters
// When defining a function, you can specify what parameters the function expects to recieve when its called.
// Function may not require a parameter, but if it does, and you forget to pass them, JS will assign the undefined value to the ones you skipped.

// If you pass more than the function expects, the extra one will be silently ignored.

var extraParams = sum(2,3,4,5);
console.log(`Extra params result => ${extraParams}`);

// Arguments Keyword
// You can create functions that are flexible about the number of parameters using 'arguments' keyword.
// It gets created automatically inside each function.

function args() {
    return arguments
}

console.log(args());
console.log(args(1,2,'fdf',23));

// lets improve add() function to accept any number of arguments

function sum() {
    var res = 0;
    for(var i=0; i< arguments.length; i++){
        res += arguments[i];
    }
    return res;
}

console.log(sum(1,2,3,4));

// Arguments is not an array, but an array like object.

// Default Parameters
// Function parameters can be assigned default values, while calling the function, if a parameter is omitted, the default value assigned to the parameter is used

function defaultParams(temp=20,humidity=40){
    return `Temprature is ${temp}, and humidity ${humidity}`
}

console.log(defaultParams(25));