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