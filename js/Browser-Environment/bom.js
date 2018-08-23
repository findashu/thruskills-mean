// The BOM is a collection of objects that give you access to the browser and the computer screen. These objects are accessible through the global object window.


// Window Object

// As you already know, in JavaScript, there's a global object provided by the host environment. In the browser environment, this global object is accessible using window.

window.myVar = 10;

console.log(myVar) //10

// Additionally, all the core JavaScript functions, discussed previously, Primitive Data Types, Arrays, Loops, and Conditions, are methods of the global object. Consider the following piece of code:

parseInt('123ab');

window.parseInt('123a');


// In addition to being a reference to the global object, the window object also serves a second purpose-providing information about the browser environment. There's a window object for every frame, iframe, pop up, or browser tab.

// window.navigator

//The navigator is an object that has some information about the browser and its capabilities.

window.navigator.userAgent;

// window.location
// The location property points to an object that contains information about the URL of the currently loaded page

for (var i in location) {
    if (typeof location[i] === "string") {
        console.log(i + ' = "' + location[i] + '"'); 
    }
}

// There are also three methods that location property provides, namely reload(), assign(), and replace().

window.location.href = 'https://thruskills.com'; 
location.href = 'https://thruskills.com';
location = 'https://thruskills.com';
location.assign('https://thruskills.com');

//The replace() method is almost the same as assign(). The difference is that it doesn't create an entry in the browser's history list 

location.replace('https://www.thruskills.com');

//To reload a page, you can use the following code:
location.reload();

// window.history

// The window.history property allows limited access to the previously visited pages in the same browser session.

// you can see how many pages the user has visited before coming to your page.

window.history.length;

// You cannot see the actual URLs though. For privacy reasons, this doesn't work.

window.history[0];

// You can, however, navigate back and forth through the user's session as if the user had clicked on the back/forward browser buttons

history.forward(); 

history.back();

// You can also skip pages back and forth with history.go(). This is the same as calling history.back().

history.go(-1);

// Reload the current page using the following code:

history.go(0);

// window.screen property

screen.width;

screen.availWidth;


// Methods on window Object

// window.open

// window.open() allows you to open new browser windows (pop ups). Various browser policies and user settings may prevent you from opening a pop up (due to abuse of the technique for marketing purposes), but generally, you should be able to open a new window if it was initiated by the user.


window.open('https://www.thruskills.com', 'thruskills', 'width=300,height=300,resizable=yes');

// window.alert() => to alert user with some message
// window.confirm() => This gives the user two options, OK and Cancel
// window.prompt() => This collects textual input

// window.confirm() 
// Clicking on OK returns true, clicking on Cancel or closing the message using the X icon, or the ESC key, returns false.

// Good way to use 

if(confirm('Are you sure')){
    // do something
}else {
    // something else
}

// window.prompt - presents the user with a dialog to enter text

var answer = prompt('What is your name?');
console.log(answer);

// The value of answer is one of the following:

// null : This happens if you click on Cancel, the X icon, or press ESC key
// "" : This happens if you click on OK or press Enter without typing anything A text // string: This is if you type something and then click on OK or press Enter

// The function also takes a string as a second parameter and displays it as a default value prefilled into the input field.

// window.setTimeout();

// The setTimeout() method attempts to execute the given code once, after a specified number of milliseconds.

function greet() {
    alert('hi');
}

setTimeout(greet, 2000);

// It will return a ID, you can use this ID to clear timeout by using clearTimeout(id).

// window.setInterval()
// The setInterval() method attempts to execute it repeatedly after a specified number of milliseconds has passed.

setInterval(foo, 2000);

// you can cancel the scheduled execution with clearInterval()
