function outer() {
    let counter = 0;
    function incrementCounter() {
        counter++
        return counter
    }
    return incrementCounter;
}

const myNewFunction = outer();

console.log(myNewFunction());
console.log(myNewFunction());




/**
 * Create an index on the db and collection.
 *
 * @method
 * @param {Collection} a Collection instance.
 * @param {(string|object)} fieldOrSpec Defines the index.
 * @param {object} [options] Optional settings. See Collection.prototype.createIndex for a list of options.
 * @param {Collection~resultCallback} [callback] The command result callback
 * @return
 * @author Ashutosh
 */
