// Node is JS runtime environment built upon Chrome-V8

// Node.js is single-threded uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.


// Blocking - Code

console.log('Step : 1 ');
for(var i = 0; i< 1000000000; i++){
    // will take around 100-1000ms
}
console.log('Step:2')

// Synchronous
// 

var a = 10;

var b = 20;


// Asynchronous

console.log('Hii');

setTimeout(function(){
    console.log('inside settime out');
},2000);

console.log('end program')


// Compare the above example with this Java Code

    // System.out.println('Step -1');
    // System.out.println('Step -1');
    // Thread.sleep(2000);
    // System.out.println('Step -3');


