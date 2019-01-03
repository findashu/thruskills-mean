const fs = require('fs');
const server = require('http').createServer();

// server.on('request', (req, res) => {
//    fs.readFile(__dirname+'/big.txt', (err, data) => {
//      if (err){
//          console.log(err)
//      }

//      res.end(data);
//    });
// });


server.on('request', (req, res) => {
    const src = fs.createReadStream(__dirname+'/big.txt');
    src.pipe(res);
});

server.listen(8000)

console.log('Server started on port 8000');