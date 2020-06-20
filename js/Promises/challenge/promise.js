// Challenge 1

function sayHello() {

}

// Uncomment the line below when ready
// sayHello(); // should log "Hello" after 1000ms


// Challenge 2
var promise = new Promise(function (resolve, reject) {
    // ADD CODE HERE
});

// Should print out "Resolved!"
// ADD CODE HERE


// Challenge 3

promise = new Promise(function (resolve, reject) {
    // ADD CODE HERE
})

// Should print out "Reject!"
// ADD CODE HERE


// Challenge 4

promise = new Promise(function (resolve, reject) {
    // ADD CODE HERE
});

// Uncomment the lines below when ready
// promise.then(() => console.log('Promise has been resolved!'));
// console.log("I'm not the promise!");


// Challenge 5
function delay() {

}

// Uncomment the code below to test
// This code should log "Hello" after 1000ms
// delay().then(sayHello);


// Challenge 6
//
// ADD CODE BELOW
// var secondPromise =
// var firstPromise =


// Challenge 7
const fakePeople = [
    { name: 'Rudolph', hasPets: false, currentTemp: 98.6 },
    { name: 'Zebulon', hasPets: true, currentTemp: 22.6 },
    { name: 'Harold', hasPets: true, currentTemp: 98.3 },
]

const fakeAPICall = (i) => {
    const returnTime = Math.floor(Math.random() * 1000);
    return new Promise((resolve, reject) => {
        if (i >= 0 && i < fakePeople.length) {
            setTimeout(() => resolve(fakePeople[i]), returnTime);
        } else {
            reject({ message: "index out of range" });
        }
    });
};

function getAllData() {
    // CODE GOES HERE
}