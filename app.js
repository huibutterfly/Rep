var express = require('express');
var bodyParser = require('body-parser');
var os = require('os');
var Route = express.Router();
var app = express();

app.get('/api/go',function(req, res, next){
    res.redirect('/admin');
});

app.get('/api/One/index',function(req, res, next){
    res.send('111');
})
app.get('/api/test/index',function(req, res, next){
    res.send('test');
})

app.listen(33, function () {
    console.log('app is listening at port 33');
});

