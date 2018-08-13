var http = require('http');
var express = require('express');

var app = express();

app.use(function (request, response, next){
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

app.get('/', function (request, response) {
    response.send('Hello there');
    response.end();
});

app.get('/streets', function (request, response) {
    response.send({data:"This is a data from the streets!"});
    response.end();
});

app.get('/music', function (request, response) {
    response.send({data:"Here's some music for your soul!"});
    response.end();
});

app.get('/poetry', function (request, response) {
    response.send({data:"This is some good poems to soothe ya soul!"});
    response.end();
});

app.get('/all', function (request, response) {
    response.send({data:"This is everything that has been posted!"});
    response.end();
});

http.createServer(app).listen('4201');