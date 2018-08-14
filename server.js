var http = require('http');
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'artips-frontend/dist')));
app.use(function (request, response, next){
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

app.get('/', function (request, response) {
    response.sendFile('/artips-frontend/dist/index.html');
    response.end();
});

//GET
app.get('/film', function (request, response) {
    response.send({data:"This is some cool film for ya 'Netflix-and-chill'!"});
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