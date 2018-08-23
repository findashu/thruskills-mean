
// The DOM represents an XML or an HTML document as a tree of nodes. Using DOM methods and properties, you can access any element on the page, modify or remove elements, or add new ones.

// Document Node
// The document node gives you access to the current document
console.dir(document)

// documentElement

// For HTML documents, the root is the <html> tag. To access the root, you will use the documentElement property of the document object.

// Child nodes

// In order to check if a node has any children, you will use hasChildNodes()

// You can access them using the childNodes array-like collection, as follows:

document.documentElement.hasChildNodes();

document.documentElement.childNodes.length;

document.documentElement.childNodes[0];

//Assign a reference to element to a variable

var bd = document.documentElement.childNodes[2];


// DOM access shortcuts

// getElementsByTagName();
// The getElementsByTagName() method takes a tag name (the name of an element node) and returns an HTML collection (array-like object) of nodes with the matching tag name. 

// document.getElementsByTagName('p').length;

document.getElementsByTagName('p')[0]

// document.getElementById()

document.getElementById('your elements id');

// document.getElementsByClassName()
// returns all the elements matching the class name


// querySelector()

// querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. 

document.querySelector('#id');
document.querySelector('.className');

// you can selectors also 

document.querySelector("div.someclassName input[name='text']")


// querySelectorAll()



