const http = require('http');

const server = http.createServer();


server.on('request', function(req,res){
    res.end('Hello Emitter')
});

server.listen(3000);

console.log('Server up and running');