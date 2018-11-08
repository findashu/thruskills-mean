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
console.log(Object.keys(person));

Object.keys(person).forEach(key => console.log(key, person[key]))


// for (const key of Object.keys(person)) {
//      console.log(key, person[key])
// }



// Object.entries(person).forEach(([key,value]) => {
//      console.log(key, value);
// })


//console.log(person.hasOwnProperty('helo')); 

// for( var prop in person) {
//     if(person.hasOwnProperty(prop)){
//         console.log(prop)
//         console.log(person[prop])
//     }
// }
