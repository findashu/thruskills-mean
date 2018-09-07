// Reading from a Stream

let fs = require('fs');

var data = '';


let readerStream = fs.createReadStream(__dirname+'/input.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk) {
    data += chunk;
});

readerStream.on('end', function() {
    console.log(data);
});

readerStream.on('error', function(err) {
    console.log('erererer');
    console.log(err);
});


