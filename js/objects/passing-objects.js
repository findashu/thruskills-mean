// passing object
// Objects in JS are reference type, it means if assign a object to another variable it will point to same object, it won't create another object.


var obj1 = {
    name:'ashu',
    age:24
}

var obj2 = obj1;

obj2.name = 'shivangi';

console.log(obj1.name);

console.log(obj2.name);


var a  = 1;

var b = a;


// Object.assign();
// If dont want to reference the same object use Object.assign() method to create duplicate object


var a = {};

Object.assign(a,obj1);

Object.assign(a , {profession: 'buck'});


Object.assign(a , {name: 'oscar'});

console.log(a);
