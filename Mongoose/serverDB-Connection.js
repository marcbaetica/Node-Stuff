//dependencies and variable declaration
var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', function(err) {
	if (err) throw err;
	console.log('connected!');
});
var Restaurant = mongoose.model('restaurants', {});


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
	//res.json({name: "Marc"});
	/** mongoose.model('restaurants', find (function (err, restaurants){ 
		res.send(restaurants);
	}));**/
	Restaurant.findOne({}, function(err, restaurant) {
		if (err) throw err;
		res.send(restaurant);
	});
	//mongoose.model('restaurants', find()); 
});

//binding app
app.listen(app.get('port'), function() {
	console.log('Magic is happening at http://' + app.get('dest')  + ':' + app.get('port') + app.get('mainRoute') + ' !!');
});

