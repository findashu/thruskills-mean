# Closure (scope and execution context)

* Closure is most esoteric of Javascript concepts
* Enables powerfull pro-level functions like **once** and **memoize**
* Many JavaScript design patterns including the module pattern use closure
* Build iterators, handle partial application and maintain state in an asynchronous world


## Functions with memories

* When your functions get called, we create a live store of data (local memory/variable environment/ state) for that functions executioncontext
* When the function finishes executing, its local memory is deleted (except the returned value)
* But what if our function could hold on to live data between executions?
* This would let our function definitions have an associated cache/persistent memory 
* But it all starts with us **returning a function from another function**


### Functions can be returned from another function in JavaScript

```javascript

function createFunction() {
    function multiplyBy2 (num) {
        return num*2
    }
    return multiplyBy2
}

// createFunction returns a function that gets stored in constant generateFunc
const generatedFunc = createFunction();

// because constant generateFunc hold a function expression we can call it
const result = generateFunc(3) // 6

```

### Calling a function outside of the function call in which it was defined

```javascript

function outer () {
    let counter = 0;
    function incrementCounter () {
       counter++
       return counter
    }
    return incrementCounter;
}

const myNewFunction = outer();

myNewFunction() // 1
myNewFunction() //2


```

* So what is happening here ?
* When you call outer it creates two local variable ```counter``` and ```incrementCounter``` and after returning ```incrementCounter``` its execution context and local memory viped out.
* Then how returned function ```incrementCounter``` is able to access ```counter value as 0``` and incrementing it.

## The Bond

When a function is defined, it gets a bond to the Local Memory ('Variable Environment') in which it has been defined.

## The 'backpack'

* We return incrementCounter's code (function definition) out of outer into global and give it a new name - myNewFunction
* We **maintain the bond to outer's live local memory** - it gets 'returned out' attached on the back of incrementCounter's function definition.
* So outer's local memory is now stored attached to myNewFunction - even though outer's execution context is long gone
* When we run myNewFunction in global, it will first look in its own local memory first(as we'd expect), but then in myNewFunction's 'backpack'


## What can we call this 'backpack'?

* Closed over 'Variable Environment' (C.O.V.E)
* Persistent Lexical Scope Referenced Data (P.L.S.R.D)
* 'Backpack'
* Closure

The 'backpack'(or 'closure') of live data is attached incrementCounter (then to myNewFunction) through a hidden property known as ```[[scope]] which persists when the inner function is returned out.

## Multiple Closure Instances

```javascript

function outer () {
    let counter = 0;
    function incrementCounter () {
       counter++
       return counter
    }
    return incrementCounter;
}

const myNewFunction = outer();

myNewFunction() // 1
myNewFunction() //2

const anotherFunction = outer();

anotherFunction(); // 1
anotherFunction(); // 2

```

## Individual Backpacks

If we run 'outer' again and store the returned 'incrementCounter' function definition in 'anotherFunction', this new incrementCounter function was created in a new execution context and therefore has a brand new independent backpack.

## Closure gives our functions persistent memories and entirely new toolkit for writing professional code

**Helper Functions:** Everyday professional helper functions like 'once' and 'memoize'

**Iterators and generators:** Which use lexical scoping and closure to achieve the most contemporary patterns for handling data in JavaScript

**Module Pattern:** Preserve state for the life of an application without polluting the global namespace

**Asynchronous JavaScript:** Callbacks and promises rely on closure to persist state in an asynchronous environment