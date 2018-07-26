// let, const

// const => Identifier can't be reassigned
// let => Can be reassigned, and also it will be used only in the blocks it's defined in

const b = 'hello';

if (b == 'hello'){
    let a = 10;
}
// b = 'hi'; // will throw error
// console.log(a); // will throw error a is not defined

// Arrow Functions
// Arrow function expression has a shorter syntax than a function expression
// Does not have its own this, arguments, super

/*
    (param1, param2, …, paramN) => { statements } 
    (param1, param2, …, paramN) => expression
    // equivalent to: => { return expression; }
*/

// Paranthesis are optional when there's only one parameter name: 
    // (singleParam) => { statements }
    // singleParam => { statements }