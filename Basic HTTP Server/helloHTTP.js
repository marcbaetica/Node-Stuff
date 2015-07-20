var body = 'Hello World!\n';

var http = require('http');
var server = http.createServer(function (request, response) {
	response.writeHead(200, {
		'Content-Length': body.length, 
		'Content-Type': 'text/plain'});
	response.write(body);
	response.end();
});
server.listen(8080,'localhost');

console.log("The server is up and running at http://localhost:8080");
