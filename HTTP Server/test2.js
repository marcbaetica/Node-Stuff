var body = 'Hello World!';
var address = 'localhost';
var port = 8080;

require('http').createServer(function (req, res) {
	res.writeHead({'Content-Length': body.length,'Content-Type': 'text.plain'});res.write(body);res.end();}).listen(port, address);

console.log('Server is up and running at http://' + address + ":" + port);
