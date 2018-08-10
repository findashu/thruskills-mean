let url = require('url');


let adr = 'http://localhost:3000/default.html?year=2018&month=feb'

let q = url.parse(adr,true);

console.log(q.query.year);




console.log(q.host);

console.log(q.pathname);

console.log(q.search);

let query = q.query;

console.log(query.month);

