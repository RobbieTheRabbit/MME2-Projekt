//  Variante with Express
var express = require('express'); //  integrate the Express module
var app = express();


//   the Hello World mainpage
app.get('/', function (req, res) { //  add * in the route for the 1. task
    res.send('<h1>Hello World!</h1>'); //   TAG purpose
});

//  integrate the content from the first exercise
app.use('/public', express.static('static'));



//  Current time 
app.get('/time/', function (req, res) {
    res.type("text/plain");
    res.send('<h1>Hello World!</h1>');
});

//  Set Port and verification via terminal
app.listen(8000, function () {
    console.log('Server is running - localhost:8000!');
});





/*      Älterer Versuch

var http = require("http"); //  Einbinden des Moduls http

http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type":"text/html"});
    res.end("Hello World");

}).listen(8000,"localhost");    //  Angabe des Ports und der IP

  console.log('Server gestartet - öffne localhost:8000!');
*/
