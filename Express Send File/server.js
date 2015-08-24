//dependencies and enviroment
var express = require('express');
var path = require('path');

//enviroment and setup
var app = express();
app.set('dest', 'http://localhost');
app.set('port', process.env.PORT || 8000);

//routes
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + "/index.html"));
});

//binding
app.listen(app.get('port'), function() {
	console.log('Magic is happening at ' + app.get('dest') + ":" + app.get('port') + " !!");
});