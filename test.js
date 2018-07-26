 let  url ='localhost',
      port = 8080,
      env  = 'dev';   

var server = {
    url,
    port,
    env,
    myFn () {
        console.log('ES6 method declaration')
    }
}

console.log(server);

server.myFn();