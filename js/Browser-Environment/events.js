// Inline HTML attributes

<div onclick="alert('Ouch!')">click</div>

// Element Properties

<div id="my-div">click</div> 
<script>
    var myelement = document.getElementById('my-div');
    myelement.onclick = function () {
        alert('Ouch!');
        alert('And double ouch!'); 
    };
</script>

// DOM event listeners


var mypara = document.getElementById('closer'); 
mypara.addEventListener('click', function () {
        alert('Boo!');
    }, false); 
mypara.addEventListener(
    'click', console.log.bind(console), false);

// Capturing and bubbling

// In the calls to addEventListener(), there was a third parameter-false.

// Let's say you have a link inside an unordered list, which is as follows:

<body>
<ul>
 <li><a href="http://phpied.com">my blog</a></li> </ul>
</body>

// When you click on the link, you're actually also clicking on the list item, <li>, the <ul> list, the <body> tag, and eventually, the document as a whole.

// Event capturing: This click happens in the document first, then it propagates down to the body, the list, the list item, and finally, to the link
// Event bubbling: This click happens on the link and then bubbles up to the document

// The third parameter to addEventListener() specifies whether or not capturing should be used. In order to have your code more portable across browsers, it's better to always set this parameter to false and use bubbling only.

// You can stop the propagation of the event in your listeners so that it stops bubbling up and never reaches the document. To do this, you can call the stopPropagation() method of the event object; there is an example in the next section.


// Stop propagation

// The function you add as a listener receives the event object as a parameter, and you can call the stopPropagation() method of that event object 
e.stopPropagation();

// Prevent default behavior


// Some browser events have a predefined behavior. For example, clicking a link causes the browser to navigate to another page. You can attach listeners to clicks on a link, and you can also disable the default behavior by calling the preventDefault() method on the event object.

function (e) { // handler
    if (!confirm('Sure you want to follow this link?')) { 
        e.preventDefault();
} 

// Types of events

// Now you know how to handle cross-browser events. What other events are happening out there? As you can probably guess, different browsers provide different events. There is a subset of cross-browser events, and some browser-specific ones. For a full list of events, you should consult the browser's documentation, but here's a selection of cross-browser events.

// Mouse events

// mouseup, mousedown, click (the sequence is mousedown-up-click), dblclick mouseover (mouse is over an element), mouseout (mouse was over an element but left it), mousemove

// Keyboard events
// keydown, keypress, keyup (occur in this sequence)

// Loading/window events
// load (an image or a page and all of its components are done loading), unload (user leaves the page), beforeunload (the script can provide the user with an option to stop the unload)

// abort (user stops loading the page or an image in IE), error (a JavaScript error, also when an image cannot be loaded in IE)

// resize (the browser window is resized), scroll (the page is scrolled), contextmenu (the right-click menu appears)

// Form events
// focus (enter a form field), blur (leave the form field)
// change (leave a field after the value has changed), select (select text in a text field) reset (wipe out all user input), submit (send the form)


// Additionally, modern browsers provide drag events (dragstart, dragend, drop, and among others) and touch devices provide touchstart, touchmove, and touchend.