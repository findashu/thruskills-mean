var person = {
    name:'ashu',
    age:14
}

var person2 = {
    name:'ashu',
    age:13
}

console.log(JSON.stringify(person) === JSON.stringify(person2));

console.log(person.toString() === person2.toString());//