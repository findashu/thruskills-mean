// You can use string constructor function to create string object.
// String objects provide convenient methods for text manipulation

var primitive = 'Hello';

var obj = new String('world');

console.log(typeof primitive);

console.log(typeof obj);

//A String object is similar to an array of characters. String objects have an indexed property for each character (introduced in ES5, but long supported in many browsers, except old IEs), and they also have a length property.

console.log(obj.length);

console.log(obj[0]);


//To extract the primitive value from the String object, you can use the valueOf() or toString() method inherited from Object.

console.log(obj.valueOf());
console.log(obj.toString());


// The primitive strings are not objects, so they don't have any methods or properties

//* String objects are being created (and then destroyed) behind the scenes every time you treat a primitive string as if it were an object

console.log(primitive.length);

// Here's one more example to illustrate between a primitive string and a String Object

console.log(Boolean(""));

console.log(Boolean(new String("")));

// Some built-in methods

var s = 'Couch potato';

// toUpperCase and toLowerCase

console.log(s.toUpperCase());
console.log(s.toLowerCase());

// charAt()
// The charAt() method tells you the character found at the position you specify

console.log(s.charAt(0));

//If you pass a non-existent position to charAt(), you get an empty string:
console.log(s.charAt(20));

// indexOf()
// The indexOf() method allows you to search within a string. If there is a match, the method returns the position at which the first match is found. The position count starts at 0

console.log(s.indexOf('o'));

//You can optionally specify where (at what position) to start the search. The following finds the second o, because indexOf() is instructed to start the search at position 2

console.log(s.indexOf('o', 2));

// lastIndexOf()
// The lastIndexOf()starts the search from the end of the string (but the position of the match is still counted from the beginning):

console.log(s.lastIndexOf('o'));

// You can search , not only for characters, but also for strings, and the search is case sensitive:

console.log(s.indexOf('Couch'));

// If there is no match, the function returns position -1:

console.log(s.indexOf('couch'));

// slice() and substring();
// The slice()and substring() return a piece of the string when you specify the start and end positions:

console.log(s.slice(1,5));

console.log(s.substring(1,5));

// difference b/w slice and substring

// Note that the second parameter you pass is the end position, not the length of the piece


// split()

// The split() method creates an array from the string using another string that you pass as a separator

console.log(s.split(" "));

// concat();

// The concat() glues strings together, in the same way in which the + operator does for primitive strings

console.log(s.concat("es"));
