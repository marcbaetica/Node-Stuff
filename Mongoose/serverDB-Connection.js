//dependencies and variables
var express = require('express');
var port = process.env.PORT || 8000;
var app = express();
var destination;
var route;

//middleware
app.use(function (req, res, next){
	console.log('\nThe request method was: ' + req.method);
	console.log('The requested URL was: http://' + req.hostname + '\n');
	this.destination = req.hostname;
	this.route = req.path;
	console.log('Magic is still happening at http://' + req.hostname + ':' + port + req.path + ' !!\n');
	next();
});


//routes
app.get('/', function(req, res){
	res.json({"name": "Marc"});
});

//binding app
app.listen(port);
console.log('Magic is happening at http://localhost' + /** destiantion +**/ ':' + port +/** route +**/ ' !!');

