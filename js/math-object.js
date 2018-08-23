// Math is a little different from the other built-in global objects you have seen. It's not a function, and, therefore, cannot be used with new to create objects. Math is a built-in global object that provides a number of methods and properties for mathematical operations.

// The Math object's properties are constants, so you can't change their values. Their names are all in uppercase to emphasize the difference between them and a normal property

//The constant PI:
console.log(Math.PI);

// Square root of 2:
console.log(Math.SQRT2);

//Euler's constant:

console.log(Math.E);

// Natural logarithm of 2:

console.log(Math.LN2);

// Natural logarithm of 10

console.log(Math.LN10);

// Some methods

// Generating random number

// will a number between 0 to 1
console.log(Math.random());


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(getRandomArbitrary(1,100))

// If you only need an integer, you can use one of the following rounding methods:
// floor() to round down 
// ceil() to round up
// round() to round to the nearest

console.log(Math.floor(1.25));
console.log(Math.ceil(1.25));
console.log(Math.round(1.25));


// The Math object also provides the ability to perform mathematical operations for which you don't have a designated operator. This means that you can raise to a power using pow(), find the square root using sqrt(), and perform all the trigonometric operations-sin(), cos(), atan(), and so on.

console.log(Math.pow(2,2));

console.log(Math.sqrt(9));





