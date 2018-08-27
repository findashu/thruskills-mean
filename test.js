function square(num) {
  return new Promise(function(resolve, reject) {
    if(typeof num == 'number'){
      var d = num*num
      return resolve(d);
    }
    reject('Please pass numeric value');
  })
}

function add(a,b) {
  return new Promise(function(resolve, reject) {
    if(typeof a == 'number'){
      var d = a+b
      return resolve(d);
    }
    reject('Please pass numeric value');
  })
}


add(1,2)
  .then(data => square(data))
  .then(sq => console.log(sq))
  .catch(err => console.log(err))


// function add(a,b ,cb) {
//   if(typeof a == 'number'){
//    return cb(null, a+b)
//   }
//   cb('Pass numeric value', null)
// }

// function square(b ,cb) {
//   if(typeof b == 'number'){
//    return cb(null, b*b)
//   }
//   cb('Pass numeric value', null)
// }

// add(1,2, function(err, res) {
//   if(err) {
//    return console.log(err);
//   }
//   square(res, function(err,res) {
//     if(err) {
//       return console.log(err)
//     }
//     console.log(res)
//   })
// })