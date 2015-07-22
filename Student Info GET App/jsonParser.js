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
var data = http.get("http://teamtreehouse.com/"+username+".json", function(response){console.log(response.statusCode);});

//handeling an error on the data retreival
data.on("error", function (error){console.log(error.message)}); //all errors have the message property
