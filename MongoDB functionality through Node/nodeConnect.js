//variable declaration
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

//for connection with a running mongodb instance on localhost:27017
var url = 'mongodb://localhost:27017/test'; //database name: test

//database connection
MongoClient.connect(url, function (err, db) {
	assert.equal(null, err);
	console.log("Connected correctly to server. Now closing connection.");
	db.close();
	console.log("Connection has been closed.");
});