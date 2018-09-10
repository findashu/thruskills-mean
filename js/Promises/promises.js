function add(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a == 'number') {
            var d = a + b;
            return resolve(d)
        }
        return reject('Pass a numeric value')
    })
}

function square(num) {
    return new Promise(function (resolve, reject) {
        if (typeof num == 'number') {
            return resolve(num * num)
        }
        return reject('Pass a number to square')
    })
}

// add('assa',2).then(function(data) {
//     console.log(data)
// }, function(err) {
//     console.log(err)
// })


// chaining promises
add(1, 2)
    .then(data => square(data))
    .then(sqr => console.log('Square is ' + sqr))
    .catch(err => console.log(err))


  // function add (a,b, cb) {
  //     if(typeof a == 'number'){
  //         return cb(null, a+b);
  //     }
  //    return cb('Pass numeric value', null);
  // }

  // function square(num, cb) {
  //     if(typeof num == 'number') {
  //         return cb(null, num*num);
  //     }
  //     cb('Pass a number to square', null)
  // }




  // add(1,2, );


  // What is callback
  // What is error first callback
  // Callback hell
  // How to overcome from callback hell
      // 1. modularise Code
      // 2. Using Promise
      // 3 . Async Await

  // What is promises , how create and consume
  // Promise.all();