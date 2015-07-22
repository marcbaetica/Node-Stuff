//connects to teamtreehouse API and returns JSON data. Info is red and parsed for it to be printed on the screen

//for final information printing
//return badge count and total information
function printMessage (username, badgeCount, points) {
	var message = username +  " has " + badgeCount + " total badge(s) and " + points + " points.";
	console.log(message);

}

//connecting to URL through node HTTP API
var username = "joshtimonen";

//adding the http api into the file
var http = require('http');

//also defined a callback function which takes argument response and print out part of the object (console.dir(response) = prints the whole response object on the screen)
var data = http.get("http://teamtreehouse.com/"+username+".json", function(response){
	console.log("Server response was "+response.statusCode+".");
	var body = ""; //response will be stored as a string
	
	response.on("data", function(chunk) {
		body += chunk; 
		//cant do console.log(BODY: chunk) because node runs the thread as non-blocking. therefore the word BODY: would appear multiple times in the output (every time a new network packet is processed and printed on the screen)
	});

	//return whole JSON object at the end
	response.on("end", function(){
		//console.log(body);
		//parsing = converting a string into a data structure
		//JSON is a native object to JavaScript
		var profileJSON = JSON.parse(body);
		//console.dir(profileJSON);
		printMessage(username, profileJSON.badges.length, profileJSON.points.JavaScript); //badges is an array so we apply the length method on it
	});
});


//handeling an error on the data retreival
data.on("error", function (error){console.log(error.message)}); //all errors have the message property
