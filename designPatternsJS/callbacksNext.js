
var express = require('express');
var app = express();

var cb0 = function (req, res, next) {
	console.log('CB0');
	next();
	console.log('after next');
};

var cb1 = function (req, res) {
	console.log('CB1');
};

var cb2 = function (req, res, next) {
	res.send('Hello from C!');
	next();
};

app.get('/', [cb0, cb1, cb2]);


app.listen(3000);
