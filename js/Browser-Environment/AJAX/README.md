## XMLHttpRequest

XMLHttpRequest() is an object (a constructor function) that allows you to send HTTP requests from JavaScript.
The common implementation of this object across browsers gave birth to the so-called Ajax applications, where it's no longer necessary to refresh the whole page every time you need new content. With JavaScript, you can make an HTTP request to the server, get the response, and update only a part of the page.

**Ajax** stands for **Asynchronous JavaScript and XML**:

* Asynchronous because, after sending an HTTP request, your code doesn't need to wait for the response; however, it can do other stuff and be notified, through an event, when the response arrives.
* JavaScript because it's obvious that XHR objects are created with JavaScript.
* XML because initially developers were making HTTP requests for XML documents and were using the data contained in them to update the page. This is no longer a common practice, though, as you can request data in plain text, in the much more convenient JSON format, or simply as HTML ready to be inserted into the page.


#### There are two steps to using the XMLHttpRequest object, which are as follows:

* **Send the request:** This includes creating an XMLHttpRequest object and attaching an event listener.
* **Process the response:** This happens when your event listener gets notified that the response has arrived, and your code gets busy doing something amazing with the response

## Sending the request

* Create the object
    `let xhr = new XMLHttpRequest()`

* Attach an event listener to the readystatechange event fired by the object.
    `xhr.onreadystatechange = myCallback;`

* Then, you will need to call the open() method, as follows:
`xhr.open('GET', 'somefile.txt', true);`
    * The First Parameter specifies the type of HTTP request GET, POST, HEAD and so on.
    * The second parameter is the URL you are requesting.
    * The last parameter is a Boolean specifying whether the request is asynchronous (true, always prefer this) or not (false, blocks all the JavaScript execution and waits until the response arrives).

* The last step is to fire off the request.
`xhr.send('');`
    * The send() method accepts any data you want to send with the request. For GET requests, this is an empty string because the data is in the URL. For POST request, it's a query string in the key=value&key2=value2 form


## Processing the response

A listener is attached to the `readystatechange` event. So, what exactly is the ready state and how does it change?

There is a property of the XHR object called `readyState`. Every time it changes, the `readystatechange` event fires. The possible values of the readyState property are as follows:
* 0-uninitialized
* 1-loading
* 2-loaded
* 3-interactive
* 4-complete


When readyState gets the value of 4, it means the response is back and ready to be processed. In myCallback, after you make sure readyState is 4, the other thing to check is the status code of the HTTP request.

```javascript
function myCallback() {
    if (xhr.readyState < 4) {
        return; // not ready yet
    }
    if (xhr.status !== 200) {
        console.log('Error!'); // the HTTP status code is not OK return;
    }
    // all is fine, do the work
    console.log(xhr.responseText); 
}
```

Once you've received the new content you requested, you can add it to the page.

Overall, this two-step process (send request and process response) is the core of the whole XHR/Ajax functionality.