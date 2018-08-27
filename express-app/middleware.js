module.exports.logger = function(req,res,next) {
    console.log(req.method, req.url);
    next();
}

module.exports.checkUser = function(req,res,next) {
    console.log(req.params.name);
    if(req.params.name == 'ashu') {
        return next();
    }
    next(new Error('User not recognised'))
};

module.exports.notFound = function(req,res,next) {
    // res.status(404).send('Not found');
    res.render('404', {
        title:'Not found'
    })
};

module.exports.serverError = function (err,req,res,next){
    console.log(err)
    res.status(500).send('Something went wrong');
}