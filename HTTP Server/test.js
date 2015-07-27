var body = 'Hello World!';
var address = 'localhost';
var port = 8080;

var http = require('http');

var server = http.createServer(function (req, res) {
	res.writeHead({'Content-Length': body.length,'Content-Type': 'text.plain'});
	res.write(body);
	//res.end();
	//res.statusCode = 404;
	//res.statusMessage = 'Not found';
	res.end();

});

server.listen(port, address);

console.log('Server is up and running at http://' + address + ":" + port);
