// Object

// Object is parent of all JS objects, which means that every object you create inherits from it.
// To create a new empty object, you can use the literal notation or the Object() constructor function.

// The following two lines are equivalent
var o = {};

var ob = new Object();


// Prototype

// The functions in JS are objects, and they contain methods and properties.
// Some properties are like length and constructor.

function foo (a,b) {
    return a*b;
}

console.log(foo.length);

console.log(foo.constructor);

// Another property of function objects is prototype.

// The prototype property is a property that is available to you as soon as you define the function.
// Its initial value is empty object.


console.log(foo.prototype);
console.log(typeof foo.prototype);


// You can augment this empty object with properties and methods. They won't have any effect on the foo() function itself; they'll only be used if you call foo() as a constructor.


// Adding methods and properties using the prototype.

function Gadget(name, color) {
    this.name = name;
    this.color = color;
    this.whatAreYou = function () {
        return `I am a ${this.color} ${this.name}`
    }
}

Gadget.prototype.price = 100;
Gadget.prototype.rating = 3;
Gadget.prototype.getInfo = function() {
    return `Rating ${this.rating} Price ${this.price}`
} 

// Using the prototype's methods and properties

// All the methods and properties you added to the prototype are available as soon as you create new object using the constructor.

var newToy = new Gadget('webcam', 'black');

console.log(newToy.name);

console.log(newToy.price);

console.log(newToy.getInfo());

// In JS prototypes are live, objects are passed by reference in JS, and therefore, the prototype is not copied with every new object instance.
// It means that you can modify the prototype at any time, and all the objects, even those created before modification, will see the changes.

Gadget.prototype.get = function (what) {
    return this[what];
}

console.log(newToy.get('price'));

// Even though the newtoy object was created before the get() method was defined, the newtoy object still has access to the new method.

// Own Properties versus prototype properties

// Now from here things will get a bit confusing 


// When you try to access a property of newtoy, say, newtoy.name, the JavaScript engine looks through all the properties of the object searching for one called 'name', and if it finds it, it returns its value

console.log(newToy.name);

// What if you try to access the rating property? The JS engine examines all of the properties of the newtoy object and doesn't find the one called rating. Then, the script engine identifies the prototype of the constructor function used to create this object. If the property is found in the prototype object, the following property is used;

console.log(newToy.rating);

// You can do the same to access the property directly. Every object has a constructor property, which is a reference to the function that created the object, look at the following code

console.log(newToy.constructor === Gadget);

console.log(newToy.constructor.prototype.rating);


// Now, let's take this lookup one step further. Every object has a constructor. The prototype is an object, so it must have a constructor too, which, in turn, has a prototype. You can go up the prototype chain, and you will eventually end up with the built-in Object() object, which is the highest-level parent.

// In practice, this means that if you try newToy.toString() and newToy doesn't have its own toString() method, and its prototype doesn't either, in the end, you'll get the Object's toString() method :

console.log(newToy.toString());

// Lets verify that 

console.log(newToy.hasOwnProperty('name'));

console.log(newToy.hasOwnProperty('toString'));

console.log(newToy.constructor.hasOwnProperty('toString'));

console.log(newToy.constructor.prototype.hasOwnProperty('toString'));

console.log(Object.hasOwnProperty('toString'));

console.log(Object.prototype.hasOwnProperty('toString'));

// Secret __proto__  link

// The rating property doesn't exist as a property of the newToy object, so the prototype is looked up, as if there is a secret link or passageway that leads to the prototype object

console.log(newToy.rating);

// The secret link is exposed in most modern JS environments as the __proto__ property

console.log(newToy.__proto__);

// Beaware that __proto__ is not the same as prototype, as __proto__ is a property of the instances(objects), whereas prototype is a property of the constructor functions used to create those objects : 

console.log(typeof newToy.__proto__);

console.log(typeof newToy.prototype);

console.log(typeof newToy.constructor.prototype);

// Augmenting built-in objects

// The objects created by the built-in constructor functions, such as Array, String and even Object and Function, can be augmented(or inhanced) through the use of prototypes.

// This means you can add new methods to the Array prototype, and in this way you can make them available to all arrays.

// Lets add sum() to Array prototype to get addition of all the elements of an array

Array.prototype.sum = function() {
    let res = 0;
    for(let i =0; i< this.length; i++) {
        res += this[i];
    }
    return res;
}

let arr = [1,2,3,4,5];

console.log(arr.sum());
