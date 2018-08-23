const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const appMiddleware = require('./middleware');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(appMiddleware.logger);
app.use(express.static(__dirname+'/static'));



// app.Method(route, handler)
let data = {
    "name":"express",
    "version": "4.x.x",
    "app":"web-application"
}



app.get('/', function(req,res) {
    res.send('Hello express');
});


app.get('/response-code',  (req,res) => {
    res.status(404).send('Sending response with status code');
})

app.get('/index', function(req,res) {
    res.sendFile(__dirname+'/index.html', (err) => {
        if(err) {
            res.status(404).send('File not found');
        }
    })
})



app.post('/post-route/:name', appMiddleware.checkUser, function(req,res) {
    console.log(req.body);
    res.send(`THis is post route and params id is ${req.params.name},query is ${req.query.name} ${req.query.version} ${req.body.name}`)
});

app.put('/put-route', function(req,res) {
    res.send('This is put route')
});

app.use(appMiddleware.notFound);

app.use(appMiddleware.serverError);


const PORT = process.env.port || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

