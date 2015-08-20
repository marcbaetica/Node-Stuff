//dependencies and variable declaration
var express = require('express');
var app = express();
var destiantion;

//environments
//setting env.port from in App Settings Table
app.set('port', process.env.PORT || 8000);  //otherwise set as $ PORT=1234 node serverDB-connection.js
app.set('dest', 'localhost');
app.set('mainRoute', '/');

//middleware
app.use(function (req, res, next){
	console.log('\nThe request method was: ' + req.method);
	console.log('The requested URL was: http://' + req.hostname + '\n');
	console.log('Magic is still happening at http://' + app.get('dest') + ':' + app.get('port') + app.get('mainRoute') + ' !!\n');
	next();
});


//routes
app.get(app.get('mainRoute'), function(req, res){
	res.json({name: "Marc"});
});

//binding app
app.listen(app.get('port'), function() {
	console.log('Magic is happening at http://' + app.get('dest')  + ':' + app.get('port') + app.get('mainRoute') + ' !!');
});

