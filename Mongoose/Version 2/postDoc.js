//this script is automatically called as as a postinstall npm setup within package.js 

//dependencies
var mongoose = require('mongoose');
var ourModel = require('./app/models/model.js');
var isJSON = require('is-json');

//creating a document
var jsonData = JSON.stringify({
	_id: mongoose.Schema.Types.ObjectId("21354321234324"),
	address: {
		building: "6909",
		coord: [ -74.0259567, 40.6353674 ],
		street: "3 Avenue",
		zipcode: "11209"
	},
	borough: "Brooklyn",
	cuisine: "Delicatessen",
	grades: [{}], //score: 4, grade: "A", date: ISODate("2014-08-21T00:00:00Z")
	name: "We-Feedin'-You",
	restaurant_id: "40361390" 
});


var toPost = new ourModel(jsonData, function() {console.log("\nThe document has been created!\n")});  // ERROR: gets blocked here ... need to find fix for:
/*
if (obj && '_id' in obj) continue;
                          ^
TypeError: Cannot use 'in' operator to search for '_id' in {callback = function() {console.log("\nThe document has been created!\n")}
*/


//saving the document
toPost.save(function(err){
	if (err) throw err; //or process.exit(1);
	console.log("New restaurant 'We-Feedin'-You' info has been posted to our database!\n\n");
});
