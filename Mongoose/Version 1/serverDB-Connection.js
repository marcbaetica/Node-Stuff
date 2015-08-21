//dependencies and variable declaration
var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', function(err) {
	if (err) throw err;
	console.log('connected!');
});
var Restaurant = mongoose.model('restaurants', {}); //compiling a model (fancy constructor compiled from our Schema definition -> instance of a model is a document)


//environments
//setting env.port from in App Settings Table
app.set('port', process.env.PORT || 8000);  //otherwise set as $ PORT=1234 node serverDB-connection.js
app.set('dest', 'localhost');
app.set('mainRoute', '/rest');

//middleware for request logs
app.use(function (req, res, next){
	console.log('\nThe request method was: ' + req.method);
	console.log('The requested URL was: http://' + req.hostname + '\n');
	console.log('Magic is still happening at http://' + app.get('dest') + ':' + app.get('port') + app.get('mainRoute') + ' !!\n');
	next();
});


//routes
app.get(app.get('mainRoute'), function(req, res){
	//find a document using the compiled model constructor
	//http://mongoosejs.com/docs/models.html states we can query with find, findById, findOne, or where static methods
	Restaurant.findOne({}, function(err, restaurant) {
		if (err) throw err;
		res.json(restaurant); //send document to client
	});
});

//binding app
app.listen(app.get('port'), function() {
	console.log('Magic is happening at http://' + app.get('dest')  + ':' + app.get('port') + app.get('mainRoute') + ' !!');
});

