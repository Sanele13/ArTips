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
http.createServer(app).listen('8080');