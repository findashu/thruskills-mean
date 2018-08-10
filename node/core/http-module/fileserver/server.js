let http = require('http');
let url = require('url');
let fs = require('fs');


http.createServer(function(req,res) {
    
    let q = url.parse(req.url, true);
    let filename = "." + q.pathname;

    console.log(filename);

    fs.readFile(filename, {'encoding':'utf8'}, function(err, data) {
        if(err) {
            res.writeHead(404, {'Content-Type':'text/html'});
            return res.end('404 not found');
        }
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        res.end();
    })
}).listen(3200, (error) => {
    if(error) console.log(error);
    console.log(`Server running on port 3200`);
});