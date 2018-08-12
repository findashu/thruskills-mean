var fs = require('fs');

var data = 'Hello this is writable stream';

var writeStream = fs.createWriteStream(__dirname+'/output.txt');

writeStream.write(data, 'UTF8');

writeStream.on('finish', function() {
    console.log('Write completed');
})

writeStream.on('error', function(err) {
    console.log(err);
});