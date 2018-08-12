var http=require('http');
var url = require('url');
var server= http.createServer(function(req,res){
var path = url.parse(req.url).pathname;
console.log('hi');
switch(path){
    case '/':
    res.writeHead(200, {'content-type': 'text/html'}); 
    res.end('hello world');
    break;
    case '/home':
    res.writeHead(200, {"content-type": "text/html"});
    res.end('Welcome to home page');
    break;
    default:
    res.writeHead(404);
    res.end("not found - 404");
    break;
}
console.log('server started');
});
server.listen(3000);
console.log("server listening on port",3000);