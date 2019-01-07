var fs = require('fs');

var data = 'Hello this is writable stream';

var writeStream = fs.createWriteStream(__dirname+'/output.txt', {start:12,encoding:'utf-8'});

writeStream.write(data);

writeStream.on('finish', function() {
    console.log('Write completed');
});

writeStream.on('error', function(err) {
    console.log(err);
});

