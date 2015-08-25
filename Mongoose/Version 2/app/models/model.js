//dependencies and enviroment
var mongoose = require('mongoose');
var port = process.env.PORT || 27017;  //for custom port run app as $PORT=#### node server.js
console.log("Port connection is: " + port);

 //connect to 'test' database
 mongoose.connect('mongodb://localhost:' + port + '/test', function (err){
	if (err) throw err;
	console.log('Successfully connected to database!\n');
});

//reginstering the schema globally (can rename because not needed globally in this case)
var Schema = new mongoose.Schema({
	address: {
		building: String,
		coord: [],
		street: String,
		zipcode: String
	},
	borough: String,
	cuisine: String,
	grades: [{score: Number, grade: String, date: Date}],
	name: String,
	restaurant_id: String
});


//compile our model
var restaurantModel = mongoose.model('restaurants', Schema);

//export model for programs to use
module.exports = restaurantModel;