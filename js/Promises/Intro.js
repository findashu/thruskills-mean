// A promise is a state machine representation of an asynchronous operation and can be in one of 3 states: "pending", "fulfilled", or "rejected".

// pending: The initial state, a pending promise represents an asynchronous operation that's in progress meaning that the promise has not yet settled

// fulfilled: fulfilled promise represents an asynchronous operation that's completed successfully and has an associated value.

// rejected: A rejected promise represents an asynchronous operation that failed for some reason and the promise has an associated error

// A promise is a class whose constructor takes an 'executor' function.

new Promise(function(){});

// The 'executor' function takes 2 parameters, resolve() and reject()

new Promise(function(resolve, reject) {})

// Now we can resolve to fullfill a promise and reject to reject

new Promise(function(resolve,reject) {
    // Do your stuff
    if(success){
        return resolve(data)
    }
    return reject('With error message')
});

// Consuming a promise

// The then() function 

// then() function takes two parameters, onFulfilled() and onRejected(). 

// The then() function is responsible for making sure onFulfilled() gets called if the promise is fulfilled, and onRejected() if the promise is rejected.

then(
    success => {
        // Do something
    },
    err => // handle error
);

