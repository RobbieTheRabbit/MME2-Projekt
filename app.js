/**
JavaScript Application to start the Node Server
Author: Oliver, Timo & Sven
Date: 29.10.2016

**/

//  integrate the Express module
var app = express();
var express = require('express');
//  Initializing A JavaScript Date
var timeNow = new Date();

//  Route --> integrate the content from the first exercise (3. task)
app.use('/public', express.static('static'));

//  Route --> time output with text/plain (4. task)
app.get('/time/', function (req, res) {
    res.type("text/plain");
    res.send(timeNow);
});

//  The Hello World mainpage for all other inputs/routes (1. task)
app.get('/*', function (req, res) {
    res.send('<h1>Hello World!</h1>'); //   purpose TAG 
});

//  Set Port and verification via terminal
app.listen(8000, function () {
    console.log('Server is now running - localhost:8000!');
});





/*      Älterer Versuch

var http = require("http"); //  Einbinden des Moduls http

http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type":"text/html"});
    res.end("Hello World");

}).listen(8000,"localhost");    //  Angabe des Ports und der IP

  console.log('Server gestartet - öffne localhost:8000!');
*/
