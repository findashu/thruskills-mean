// A list of values. Instead of using one variable to
// store one value, you can use one array variable to store any number of values as elements of the
// array.

// Declaring a variable that contains empty array. Also known as array literal
    var emp_array = [];

// Defining a array that has three elements
    var arr = [1, 2, 3]

// Accessing an array Element
    console.log(arr[0]);

// Adding / Updating array elements

    arr[2] = 'three';

// if you add a new element but leave a gap in the array, those elements in between don't exist and return the undefined value if accessed.
    
    arr[4] = 'five';
    console.log(arr[3]);

// Defining an array using constructor
    var new_array = new Array();

// You can pass the values also to constructor function
    var cArray = new Array(1,2,3);

// An exception to this is when you pass a single number to the constructor, the number is considered to be the length of the array;

    var fixed_length = new Array(5);

    console.log(typeof fixed_length);
    console.log(fixed_length instanceof Array);
    
    fixed_length[0];
    fixed_length[6];
    