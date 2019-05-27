// Currying is the act of taking a function that normally receives more than one argument such as add and refactoring it so that it becomes a higher-order function that returns a series of functions each accepting only one argument and only evaluating once we receive our final argument.

// Normal Way
function add (x,y) {
    return x+y
}

// Convert the same function in Higher Order Function using currying

function sum(x) {
    return function(y) {
        return x+y;
    }
}

const valueTobeAdded = sum(2);

const firstAdd = valueTobeAdded(4);
const secondAdd = valueTobeAdded(5);

console.log(firstAdd)
console.log(secondAdd)

// Creating using ES6 way

const addition = x => y => x+y;

const valTobeAdded = addition(3);
const addOne = valTobeAdded(1)
const addTwo = valTobeAdded(2)

console.log(addOne);
console.log(addTwo);

// Call in series
console.log(addition(5)(5))

// Another example convert Array push method to as immutable;

// Meaning if I have a array a1 and assign it to another variable a2 and then if I push something in a2 using push it'll modify both a1 and a2 because both pointing to same reference.

const push = value => array => {
    const clone = [...array];
    clone.push(value);
    return clone;
}

const a1 = [1,2,3];

const a2 = push(4)(a1);

console.log(a2);
console.log(a1)