//require the profile.js file
var profile = require("./profile.js"); //specifying .js is optional

//change to see error
//var username = "joshtimonen";

//profile.get("chalkers");
//profile.get("samarthpaboowal");
//profile.get("joshtimonen");

//putting users into an array
/**
var users = ['joshtimonen','chalkers'];
users.forEach(function(username){ //with a callback function
	profile.get(username);
});
//can also call directly users.forEach(profile.get);
**/

//there is a global object called process in node that allows us to access things like the current version of node and arguments passed in through the command line. insid this process there is an array called argv
//console.log(process.argv); //call as node app.js joshtimonen chalkers


var users = process.argv.slice(2); //we are interested starting with the second element of the array
users.forEach(profile.get); //call as node app.js joshtimonen

//TO IMPORVE:
//add friendly messages when there is a parse error or connection error
//make API call and create dropdown list to select which user
