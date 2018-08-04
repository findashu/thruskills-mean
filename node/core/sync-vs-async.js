// Lets demonstrate synchronous and asynchronous by using built-in module fs

const fs = require('fs');

// Reading file synchronously by using readFileSync() method provided by fs module

// console.log ('Start reading synchronously');
// let content = fs.readFileSync('file.txt', 'utf8');
// console.log(content);
// console.log('End reading');

// Lets read the file using readFile() method provided by fs module asynchronously

console.log('Start reading asynchronously');

fs.readFile('file.txt', {'encoding':'utf8'}, function(err,data) {
    if(err) throw err;
    console.log(data);
});

console.log('End reading');
