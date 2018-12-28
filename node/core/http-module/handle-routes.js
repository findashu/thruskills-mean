const http = require('http');
const URL = require('url');

http.createServer(function(req,res) {
    // parse the url
    var parsedUrl =  URL.parse(req.url, true);

    // check the path
    if(parsedUrl.pathname == '/') {
       
        res.writeHead(200, {'Content-Type':'text/html'})
        res.end(`Welcome ${parsedUrl.query.name}`)

    }else if(parsedUrl.pathname == '/blogs') {
        // check method
        switch (req.method) {

            case 'GET' : 
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end('List of Blogs') 
            break;

            case 'POST' :
            console.log('Came to post route')
            res.writeHead(200, {'Content-Type':'text/html'});
            res.end('Add New Blog') 
            break;
        }

    }else {
        res.writeHead(404, {'Content-Type':'text/html'});
        res.end('Page not found')
    }

}).listen(3008, () => console.log('Server up and running on port 3008'))