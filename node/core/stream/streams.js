// “Streams are Node’s best and most misunderstood idea.”
// — Dominic Tarr

// reading File

const fs  = require('fs');

// asynchronous

// fs.readFile(__dirname+'/practice.txt', {encoding:'utf-8'}, function(error, data){
//     if(error) {
//        return console.log(error)
//     }
     // console.log(data)
// });

//synchronous

// try {
//     var d = fs.readFileSync(__dirname+'/practice.txt', 'utf-8')
//     console.log(d);

// } catch (error) {
//     console.log('Got error', error)
   
// }

// Writing to a file

// asynchronous

// fs.writeFile(__dirname+'/message.txt', 'Hello Node.js', (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

// fs.writeFileSync(__dirname+'/message.txt', 'Hello Node.js');

fs.readdir(__dirname, (err, data) => {
    if (err) throw err
    console.log(data);
})