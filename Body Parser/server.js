//dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json(); //not used for now
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//enviroment setup
app.set('port', process.env.PORT || 8000);
app.set('dest', 'http://localhost');

//routing
app.route('/api/user')
	.all(function (req, res, next) {console.log('There has been a request at our API!'); next()})
	.get(function (req, res) {res.json({name:'Marc'})})
	.post(urlencodedParser, function (req, res) {res.send('Your POST request has the values: id(' + req.body.id + ") and token(" + req.body.token + ")")}); //console.log(req.body)

//binding to port
app.listen(app.get('port'), function () {
	console.log('Magic is happening at ' + app.get('dest') + ":" + app.get('port')); 
});