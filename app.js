/**
* Created with Nodejs-with-google-maps.
* User: johny
* Date: 2014-03-23
* Time: 03:12 PM
* To change this template use Tools | Templates.
*/


var express = require('express');

var app = express();

var port = process.env.PORT || 3001; 

app.configure(function() {	
  app.use(app.router);				
});

var fs = require('fs');
var inputFile = fs.readFileSync('index.html').toString();

app.get('/', function(req, res) {
  res.send(inputFile);
});

app.listen(port);

console.log("Server running at http://localhost" + port);

