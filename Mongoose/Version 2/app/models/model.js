//dependencies and enviroment
var mongoose = require('mongoose');
var port = process.env.PORT || 27017;  //for custom port run app as $PORT=#### node server.js
console.log(port);

//conections
mongoose.connect('mongodb://localhost:' + port + '/test', function (err){
	if (err) throw err;
	console.log('Successfully connected!');
}); //connect to 'test' database

//reginstering the schema globally
var Schema = new mongoose.Schema({
		address: {
		building: String,
		coord: [],
		street: String,
		zipcode: String
	},
	borough: String,
	cuisine: String,
	grades: [{ score: Number,
		grade: String,
		date: Date }],
	name: String,
	restaurant_id: String
});


//compile our model
var restaurantModel = mongoose.model('restaurants', Schema);

//converted to JSON for print
restaurantModel.findOne({}).lean().exec(function (err, doc){
	if (err) throw err;
	console.log(JSON.stringify(doc));

});


module.exports = restaurantModel;




/*
//use the model to find a document and print it on screen
restaurantModel.findOne({}, function (err, doc) {
	if (err) throw err;
	console.log(doc);
});
*/