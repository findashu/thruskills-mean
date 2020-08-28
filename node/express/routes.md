## Create Basic Routes
Once the Express server is listening, it can respond to any and all requests. But how does it know what to do with these requests? To tell our server how to deal with any given request, we register a series of routes. Routes define the control flow for requests based on the request's path and HTTP verb.

For example, if your server receives a GET request at ```'/hello'```, we will use a route to define the appropriate functionality for that ```HTTP verb (GET) and path (/hello)```.

The HTTP verb is always included in the request, and it is one of a finite number of options used to specify expected functionality. GET requests are used for retrieving resources from a server, and we will discuss additional request types in later exercises.(https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)

### Define Route

Syntax 

```
app.Method(Path,Handler)
```

```javascript
app.get('/' ,function(req,res) {
    res.send('Hello World!)
})
```

## Response Methods

* res.download() - Prompt a file to be downloaded.
* res.end() - End the response process.
* res.json() - Send a JSON response.
* res.jsonp() - Send a JSON response with JSONP support.
* res.redirect() - Redirect a request.
* res.render() - Render a view template.
* res.send() - Send a response of various types.
* res.sendFile() - Send a file as an octet stream.
* res.sendStatus() - Set the response status code and send its string representation as the response body.