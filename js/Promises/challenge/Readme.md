# Promises

## Challenge 1

Let's start by reviewing asynchronous functions! Using setTimeout, print the string 'Hello!' after 1000ms.

## Challenge 2

Create a promise. Have it resolve with a value of 'Resolved!' in resolve after a delay of 1000ms, using setTimeout. Print the contents of the promise after it has been resolved by passing ```console.log``` to ```.then```

## Challenge 3

Create another promise. Now have it reject with a value of "Rejected!" without using setTimeout. Print the contents of the promise after it has been rejected by passing ```console.log``` to ```.catch```

## Challenge 4

Promises are asynchronous and we're now going to prove that they indeed are! Create a promise and have it resolve with the value of "Promise has been resolved!" Then uncomment the code at bottom of Challenge 4. What order do we expect "Promise has been resolved!" and "I'm not the promise!" to print? Why?

## Challenge 5

Write a function ```delay``` that returns a promise. And that promise should return a ```setTimeout``` that calls ```resolve``` after 1000ms

## Challenge 6

This challenge we'll chain promises together using ".then" Create two variables: firstPromise and secondPromise Set secondPromise to be a promise that resolves to "Second!" Set firstPromise to be a promise that resolves to ```secondPromise``` Call the ```firstPromise``` with a ".then", which will return the ```secondPromise>``` promise. Then print the contents of the promise after it has been resolved by passing ```console.log``` to ``` .then```

## Challenge 7

We have a API that gets data from a database, it takes an index parameter and returns a promise Your challenge is to use ```Promise.all``` to make 3 API calls and return all the data when the calls are complete