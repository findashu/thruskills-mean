var fs = require('fs');

// Create a read stream

let readerStream = fs.createReadStream(__dirname+'/input.txt');

// Create a write stream

let writeStream = fs.createWriteStream(__dirname+'/output.txt');

// pipe read and write 

readerStream.pipe(writeStream);

console.log('End program');

