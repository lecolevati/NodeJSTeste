var http = require("http"), 
	url = require("url"), 
	fs = require("fs"), 
	index = fs.readFileSync('index.html');
var onRequest = function(request, response) {

	response.writeHead(200, {
		"Content-Type" : "text/html"
	});
	response.end(index);
};
http.createServer(onRequest).listen(668);
console.log("Node.js iniciado");
