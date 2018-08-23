// Express is a Node module, so in order to use it, we will need to import it into our program file. To create a server, the imported express function must be invoked.

const express = require('express');
const app = express();

// On the first line, we import the Express library with require.
//When invoked on the second line, it returns an instance of an Express application. This application can then be used to start a server and specify server behavior.

// The purpose of a server is to listen for requests, perform whatever action is required to satisfy the request, and then return a response. In order for our server to start responding, we have to tell the server where to listen for new requests by providing a port number argument to a method called app.listen(). The server will then listen on the specified port and respond to any requests that come into it.

// The second argument is a callback function that will be called once the server is running and ready to receive responses.

const PORT = 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

