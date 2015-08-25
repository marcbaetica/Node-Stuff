//this server app has two routers: one to provide basic routing to desired URLs and one for exposure of an internal API

//dependencies and environment
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 8000);
app.set('dest', 'http://localhost');
var router1 = express.Router(); //express router
var routerAPI = express.Router(); //api express router


//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------


//routes go here
router1.use(function(req, res, next){
	console.log('A request has been made for URL ' + app.get('dest') + ":" + app.get('port') + req.url + " with HTTP method " + req.method);
	next();
});


//middleware for params extraction
router1.param('name', function(req, res, next, name){
	console.log('Doing name validation for "' + name + '"');
	//validation for input name GOES HERE
	req.name = name; //store for next callback
	next();
});

//using params extraction
router1.get('/user/:name', function (req, res) {
	res.send('Hello! You are looking for username: ' + req.name);
});


//API router
//api.route(path) is a shortcut from instantiating an express.Router(). instead of creating another instance we can call route directly on the app itself
app.route('/login')  //sign app.route lets us define multiple actions on a single login route. We’ll need a GET route to show the login form and a POST route to process the login form
		.get(function (req, res) {
			res.send('This is the login form!');
		})
		.post(function (req, res) {
			console.log('Processing...');
			res.send('Processing the login form!');
		});



//adding our routes to the application
app.use('/', router1);
//app.use('/api', routerAPI);


app.get('/', function(req, res) {
	res.send('Welcome to our homepage!! Our name section is located at the /user/USERNAME resources and our API can be found at /login.');
});


//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

//binding to port
app.listen(app.get('port'), function() {
	console.log('Magic is happening at ' + app.get('dest') + ":" + app.get('port'));
});

