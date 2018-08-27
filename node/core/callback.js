function myCallback(err, data) {
    if(err) {
        return console.error(err)
    }else {
        return console.log(data)
    }
}


function square(num,fn) {
    if(typeof num === 'number') {
        var res = num * num;
        fn(null, res)
    }else {
        fn('You should pass a number', null);
    }
}

square(2,myCallback);