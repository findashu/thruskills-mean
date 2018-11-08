// What is Middleware?
//Express app is usually a web framework that consists of middleware and router. Therefore, an express application works through a series of middleware functions.

//Middleware is:

// One or a series of callback functions that sits on top of the actual request handler and has the exact same parameter as actual request.
// A series of functions are invoked by the router layer of express app before the final request handler.
// A series of functions are invoked in order. This means the order in which they are written/included in a server.js file, are the order in which they are executed, given that the route matches.
// A function that receives the request and response objects of an HTTP request/response cycle.
// A function that can modify the request or response object before sending them to next middleware function in the series.
// It may update the response object or discontinue the chain if necessary.

// A function with a signature of (req, res, next), for example:

function logger(req, res, next) {
    console.log(new Date(), req.method, req.url);
    next();
}

// Here in this example, the next() continues the chain of the series of functions known as middleware. next is the third parameter in the middleware function and needs to be explicitly called at the end of the operation executed inside the function as, express has no way to understand when the function has come to the end of execution of current operation and the next method in the series needs to be invoked, therefore, next() method needs to be called.


// Types of Middleware
// Application-level middleware
// Router-level middleware
// Error-handling middleware
// Built-in middleware
// Third-party middleware

// Application-level Middleware - This kind of middleware method is bind to the app Object using app.use() method.

app.use(function (req, res, next) {
    console.log('Current Time:', Date.now())
    next()
})
// In this example, a middleware function that prints the current time, has been mounted with app Object using app.use() method. However, this middleware function has neither mount path nor mount point. It is just executing a single instruction and not connecting to router.

// in the second example,the middleware has a mount path ‘/book/:id’. Therefore app.use() accepts an optional path parameter just like the app.get() and other routes as follows:

app.use('/book/:id', function (req, res, next) {
    console.log('Current Time:', Date.now())
    next()
})

// In the third example, application-level middleware has both mount-path and mount-point and instead of a single method, this example shows a series of middleware functions that are invoked one after another.

app.use('/book/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl);
    next()
}, function (req, res, next) {
    console.log('Request Type:', req.method);
    next()
},
function (req, res, next) {
    res.send();
})

// Router-level Middleware
// Router-level middleware can be used by using router.use() or router.METHOD().

router.use('/book/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
  }, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
  })

// Error-handling Middleware
// Unlike application-level and router-level, error-handling middleware takes four arguments, for example:

app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// Built-in Middleware
// Starting with version 4.x, there is only one built-in middleware which is express.static.

// This middleware function is based on serve-static, and is responsible for loading static assets such as HTML files, images, and so on.The function signature is:

express.static(root, [options])
// Here, root is the directory name and options are several options

