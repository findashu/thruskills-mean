// Object Literal Notation

var obj = {

    a : 12,
    b : 'My value',
    c : false,
    d : [1,2,3],
    obj2 : {
        a1 : 'something',
        a2 : 'nothing'
    },

    fn : function () {
        console.log('objects function');
    } 

};

//console.log(obj);

// Dot operator
// Bracket Notation


var hello = 'hi';

obj[hello] = 'Greetings from my side';

console.log(obj);

