var fs = require('fs');

// install zlib by running- npm i zlib
var zlib = require('zlib');

// Read the input file compress it 

// fs.createReadStream('input.txt')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('input.txt.gz'));

// decompress

fs.createReadStream(__dirname+'/input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('otpt.txt'));

console.log('End Program');
