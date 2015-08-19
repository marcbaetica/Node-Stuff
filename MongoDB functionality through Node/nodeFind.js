//You can use the find method to issue a query to retrieve data from a collection in MongoDB. All queries in MongoDB have the scope of a single collection.
//Queries can return all documents in a collection or only the documents that match a specified filter or criteria. You can specify the filter or criteria in a document and pass as a parameter to the find method.
//The find method returns query results in a cursor, which is an iterable object that yields documents.

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var assert = require('assert');
var url = 'mongodb://localhost:27017/test';

//defining find function
var findValue = function (db, callback) {};




//connecting to db and calling find function
MongoClient.connect(url, function (err, db){
	assert.equal(null, err);
	findValue(db, function () {
		db.close();
		console.log('Successfully closed database.');
	});
});