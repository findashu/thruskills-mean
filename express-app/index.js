const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const appMiddleware = require('./middleware');
const hbs = require('hbs');

// view engine setup
app.set('views', __dirname+'/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(appMiddleware.logger);
app.use(express.static(__dirname+'/static'));


function middle(req,res,next){
    console.log('hii');
    next('hello world');
}

// app.Method(route, handler)
let data = {
    "name":"express",
    "version": "4.x.x",
    "app":"web-application"
}

app.get('/', middle, (req,res) =>{
    res.send('Application working')
})

app.get('/learning-hbs', function(req,res) {
    //res.send('Hello express');
    res.render('learning-hbs',{
        name:'Learning HBS',
        htmlTag: '<p>Hello html</p>',
        data: data,
        arr: [{name:'pen',color:'red'},{name:'pencil',color:'black'}]
    });
});

app.get('/contact', (req,res) => {
    res.render('contact', {
        title: 'Contact Page',
        layout: 'layout'
    })
})

app.post('/contact', (req,res) => {
    var data = req.body;
    res.json(data);
})

app.get('/signin', (req,res) => {
    res.render('signin', {
        layout: 'layout',
        title:'Sign In page',
        nav:true
    })
})


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

