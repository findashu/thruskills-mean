// Node.js has a built-in module called HTTP, which allows Node.js to transfer data over
// the Hyper Text Transfer Protocol (HTTP).

var http = require('http');

// createServer returns a HTTP server


var server = http.createServer(function(req,res) {

    console.log(req);

    res.writeHead(200, {'Content-Type':'text/html'});

    res.end('Hello world');
})

// To start the server, simply call its listen function passing in the port number 

server.listen(3002, (err) => {

    if(err) console.log(err);
    console.log('Server listening on port ', 3002);

});



// http://localhost:3000/index.html?name=ashu&last=mishra



