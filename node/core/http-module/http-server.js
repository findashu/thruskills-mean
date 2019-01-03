const http = require('http');

// http.Server()

let server = http.createServer();


server.on('request', function(req,res) {

    console.log('Inside function')
    var data = []
    
    req.on('error', function (err) {
        console.log('err')
    });
    req.on('data', function(chunk) {
        data.push(chunk)
        console.log(data);
    })

    req.on('end', function() {
        res.on('error', function() {
            console.log('Error')
        });
        data = Buffer.concat(data).toString();
        res.end(data);
    })
})

server.listen(3000);
console.log(`Server running on port 3000`)
