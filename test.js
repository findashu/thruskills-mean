var fs = require('fs');

//var data = fs.readFileSync('me.txt','utf8');

var data = fs.readFile('m.txt','utf8',function(err,data){
    if(err){
        console.log(err)
        console.log(data)
    }else{
        console.log(data);
    }
});
//console.log(data);

console.log('After fs read');