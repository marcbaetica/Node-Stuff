//dependencies
var mongoose = require('mongoose');
var isJSON = require('is-json');

//requesting a build of our model
console.log("\n Starting lookup for restaurant...\n");
var restaurantModel = require('./app/models/model');


//use the model to find a document and print it on the screen
restaurantModel.findOne({name: "We-Feedin'-You"}).lean().exec(function(err, doc) {
	if (err) throw err;
	//converted document to JSON if not already before printing
	console.log("Original MongoDB document is json: " + isJSON(doc));
	if(!isJSON(doc)){
		doc = JSON.stringify(doc);
		console.log("Document was converted to JSON format: " + isJSON(doc) + "\n");
	}
	console.log("The returned document in JSON format is:\n");
	console.log(doc);
});
