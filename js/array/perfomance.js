
const arr = [1, 2, 3];
//elements kind : PACKED_SMI_ELEMENTS
// SMI refers to => Small Integers

arr.push(4.56);
//elements kind : PACKED_DOUBLE_ELEMENTS

arr.push('x');
//elements kind : PACKED_ELEMENTS

arr.length; // 5

arr[9] = 1;

//console.log(arr);

// arr[5] until arr[8] are now holes
//elements kind : HOLEY_ELEMENTS

arr[8]; // undefined
// ??

// What are checks will happen to get the value of arr[8]???

// 8 >= 0 && 8 < arr.length; //bounds check 

// hasOwnProperty(arr,'8'); //true

// hasOwnProperty(Array.prototype, '8');

// hasOwnProperty(Object.prototype, '8');


// So Finally avoid those things
// Avoid Holes
// Avoid out-of-bound reads
// Avoid elements kind transitions
// Prefer arrays over array-like objects

// Homogeneous elements of an array stored in contiguous memory location
// Hetrogeneous elements are stored in diffrent-different memory locations


var b = [1,2,3,4,5];

var c = [1,'a',true,3,'sds'];

var start = Date.now();

for(var i=0;i<c.length;i++){
    console.log(i)
}
 
console.log('Total Time ' +(Date.now() - start));