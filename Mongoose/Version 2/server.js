//connecting to server
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', function (err) {
	if (err) throw err;
	console.log('Connected!');
});



var ourSchema = new mongoose.Schema({
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

//create model
var model = mongoose.model('restaurants', ourSchema); //looks for the restaurants collection automatically


model.findOne({}).lean().exec(function (err, doc) {
	if (err) throw err;
	console.log(doc);
}); 
