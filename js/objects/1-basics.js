// An object is a collection of related data and/or functionality (which usually consists of several variables and functions - which are also called properties and methods when they are inside objects)

// Object Literal Notation

var person = {

    name : 'Ryan dhal',

    age : 36,

    gender : 'male',

    interests : ['music', 'skiing'],

    bio : function () {
        console.log(`${this.name} is ${this.age} years old. He likes ${this.interests[0]} and ${this.interests[1]}`);
    },
    
    greetings : function () {
        console.log(`Hi I'm ${this.name}`);
    }
};

// The keys ( names of the properties ) can optionally be placed in quotation marks.
// Its recommended that you dont quote the names of the properties, but there are cases when you must use quotes.
// 1. If the property name is one of the reserved words in JS
// 2. If it contains spaces or special character
// 3. If it starts with number


// Accessing an object's properties
// There are two ways to access the property of an object

// 1.Dot Notation
// 2. Bracket Notation []
    console.log('Using dot notation =>' +person.name);
    console.log('Using bracket notation =>' + person['age']);
    person.greetings();

// If you try to access a non-existing property returns undefined

// Objects can contain any data, including other objects
    var book = {
        name : "shiva-trilogy",
        published: "2015",
        author : {
            firstName : 'Amish',
            lastName : 'Tripathi'
        }
    }
// To get firstName of author property
console.log('Dot notation =>' +book.author.firstName);
console.log('Bracket notation =>' +book['author']['firstName']);

// It works even if you mix both
console.log('Mixed => ' +book['author'].lastName);

// Another case where you need bracket notation is when the name of the property you need to access is not known beforehand. During runtime, it's dynamically stored in a variable.

var key = 'firstName';

console.log(book.author[key]);

// Altering properties/methods
// JS allows you to alter properties at any time. This includes adding new property or deleting them.

// Start with empty object

var hero = {};

// Adding properties

hero.breed = 'turtle',
hero.name = 'leonardo',
hero.sayName = function () {
    return hero.name
}

// Calling the method

console.log(hero.sayName());

// Deleting a property
delete hero.name; // will return true


// this keyword

// when you saying 'this', you're actually saying-this object or the current object.

var me = {
    name : 'ashu',
    sayName : function() {
        return this.name;
    }
}