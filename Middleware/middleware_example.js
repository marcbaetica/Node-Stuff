//to write


var express = require('express');
var app = express();

app.use(function (req, res, next){
	console.log('%s - %s', 'first thing', 'second thing'); //just testing something
	console.log('\nThis was the requested url: ' + req.url);
	console.log('This was the requested method on the url: ' + req.method);
	
	console.log('This was the destination address: ' + req.hostname + '\n');
	console.log('These are the headers of the request:');
	console.log(req.headers);

	next();
});



app.get('/', function (req, res) {
	//res.send("Hello World!");
	res.json({name: "Marc"});
	//res.send('Hello World!');
});


app.listen(3000);
console.log("Magic is happening at port 3000!");
