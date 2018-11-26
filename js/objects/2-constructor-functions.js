// There is another way to create objects-using constructor functions.

function Person(name,occupation) {
    this.name = name;
    this.occupation = occupation;
    this.bio = function () {
        return `I'm ${this.name} and I'm a ${this.occupation}`;
    }
}

// Now you can create different objects using same constructor

var me = new Person('ashu', 'ninja');

console.log(me.bio());

// If you call a function that is designed to be a constructor but you omit the new operator, it is not an error. However, it doesn't give you the expected result

function Book (name) {
    this.name = name;
    this.about = function () {
        return `this.name`;
    }
}
var b = Book('hello');
console.log(b); // undefined
console.log(name); 

// So whats happening in upper code

// As you had this keyword inside the function Book, a global variable (a property of global object) called name was created.

// If you call the same constructor function using new, then a new object is returned, and this refers to it 

var b2 = new Book('JS');

console.log(b2.name);


