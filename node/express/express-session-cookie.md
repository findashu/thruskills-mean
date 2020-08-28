## Cookie

A cookie is usually a small piece of data that gets sent between a web server to your web browser. It allows the server to store information relevant to a specific user. 

One common use for cookies is to store session data. This works in the following way.

The server issues a cookie that gets sent to the web browser and stored for a period of time (called the expiration time).

When a user makes a subsequent request to the web server, this cookie gets sent along with the request, and the server can read the information that is in it.

The server can manipulate the cookie if it needs to, and then sends it back to the browser.


## Session

Data is stored on the server side.

A cookie is issued which contains an ID.

This ID gets send back to the server on every request, due to the fact that the browser sends the cookies.

Now the server can re-associate the ID in the cookie - commonly called Session ID or short SID - with the session data stored on the server.

Where this data gets stored on the server

### MemoryStore

Express comes with a built-in session store called MemoryStore, which is the default when you don’t specify one explicitly.

MemoryStore uses the application RAM for storing session data and works right out of the box, without the need for any database. Seeing how easily it is to set up, you might be tempted to make it the session store of your choice, but it is not recommended to do so because of the following reasons:
* Memory consumption will keep growing with each new session.
* In case the app is restarted for any reason; all session data will be lost.
* Session data cannot be shared by other instances of the app in a cluster.

### How express-session works

When a client makes an HTTP request, and request does not contain a session cookie, a new session will be created by ```express-session``` 

**Creating a new session does few things**

* Generate a unique session id
* Store that session id in a session cookie ( so subsequent request made by the client can be identified )
* Create an empty session object, as ```req.session```
* Depending on the value of ```saveUninitialized```, at the end of the request, the session object will be stored in the session store (which is generally some sort of database or memory store).


**saveUninitiazed : false**

During the lifetime of the request the session object isn't modified then, at the end of the request the session object will not be stored in the session store.

The reason behind this is that it prevents lot of empty session objects being stored in the session store.