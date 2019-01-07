const fs = require('fs');

let encoding = 'base64';
let mime = 'image/png';

let fileToLoad = 'flags.png';

let data = fs.readFileSync(fileToLoad).toString(encoding);


let uri = 'data:'+mime + ';'+encoding+','+data;

// console.log(uri);

// Convert data to image again
let dt = uri.split(',')[1];
let buf = Buffer(dt, 'base64');

fs.writeFileSync('./myimg.png',buf);