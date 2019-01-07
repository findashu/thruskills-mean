// “Streams are Node’s best and most misunderstood idea.”
// — Dominic Tarr

// Streams are objects that lets you read data from a source or write data to the destination in a continuous fashion.

// Stream in Node.js simply means a sequence of data being moved from one point to the other over time. The whole concept is, you have a huge amount of data to process, but you don’t need to wait for all the data to be available before you start processing it.

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

// append file
// In cases where we just want to add to a file’s contents, we can use the fs.appendFile high level method and its synchronous counterpart, fs.appendFileSync. Using the fs.appendFile creates the file if it does not exist, and appends to the file otherwise.

fs.appendFile('filepath', 'data to append', (err) => {
    if(err){
        console.log(err)
    }
    console.log('Done writing')
})