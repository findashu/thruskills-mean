const fs = require('fs');


try {

    //fs.readFileSync('abc.txt', {encoding:'utf-8'});
    console.log('No Errors')

}catch (error) {

    console.log(error);

}
finally {
    console.log('Executing Finally block')
}

console.log('hello')



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
