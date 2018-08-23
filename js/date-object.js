
// Date() is a constructor function that creates date objects. You can create a new object by passing:
// Nothing (defaults to today's date)
// A date-like string
// Separate values for day, month, time, and so on A timestamp

console.log(new Date());

console.log(new Date('2015 11 12'));

console.log(new Date('1 mar 2016 5:30'));

// a date object can be initialized with a timestamp (the number of milliseconds since the UNIX epoch, where 0 milliseconds is January 1, 1970):

console.log(new Date(1534474190471));

// methods

var d = new Date(2015, 5, 12);

console.log(d.getDate());

console.log(d.getMonth());

console.log(d.getFullYear());

console.log(d.getMinutes());

// Date.now() returns current timestamp
var strt = Date.now()

console.log(strt-Date.now());



