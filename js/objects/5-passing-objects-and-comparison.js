// passing object
// Objects in JS are reference type, it means if assign a object to another variable it will point to same object, it won't create another object.


var obj1 = {
    name:'ashu',
    age:24
}

var obj2 = obj1;

obj2.name = 'shivangi';

//console.log(obj1.name);

//console.log(obj2.name);

var a  = 1;

var b = a;

// Object.assign();
// If dont want to reference the same object use Object.assign() method to create duplicate object


var a = {};

//Object.assign(a,obj1);

Object.assign(a , {profession: 'buck'});


Object.assign(a , {name: 'oscar'});

//console.log(a);

// Comparision

// When you try to compare two diffrent instances or objects using strict check will give you false;

let ob1 = {
    val1 :'object1',
    val2 : 12
}

let ob2 = {
    val1 :'object1',
    val2 : 12
}

console.log(ob1 === ob2); // false
// Beacuse it wont compare the properties and values

// But if you check 2 objects pointing to single instance/object will give you true

let ob3 = ob2;

console.log(ob3 === ob2);

// One easy way to compare two diffrent objects is by converting them into JSON

console.log(JSON.stringify(ob1) === JSON.stringify(ob2));