var express = require('express');
var router = express.Router(); //created our router file to be adjusted by all our routes so that it can be returned as our module.exports

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

//these are our routes that will modify the router object
router.get('/', function(req, res){ //get because we are responding to a get request + the callback of what to do when the user requests that default pathway
	//can do res.send() with a text or a json object or a number (for http code)
	//can do a templating res.render('index', {a json object of all the values that i want to send to that templating object}) which will return a specific file
	//can fo res.send({users:["Will","Laura"]}) and will return directly json to the screen (therefore very light for doing an api)
	//res.send('ok'); //looking in the console it automatically sets the type to 'text html'
	res.render('index', {title: 'My App!', age: 33}); //modification in the index.hjs file in views

	console.log(req.query); //for example on http://localhost:3000/?age=33&name=will will show { age: '33', name: 'will' } in the CLI
});

//module.exports is the return of what this whole file is going to be
module.exports = router; //esentially we are passing the module.exports of this file into the routes variable in app.js
