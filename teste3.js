/*
 * Funciona para console.log
 * Para finalizar, precisa fazer a captura do stream
 */

var url = require("url"), 
	http = require("http"), 
	fs = require("fs"), 
	path = require('path'),
//	operacao = function() {
//		fs.readFile('C:\\eula.1031.txt','utf-8', function (err, data){
//			if (err){
//				return console.log(err);
//			} else {
//				return console.log(data);
//			}
//		});
//	}, 
	onRequest = function(request, response) {
//		var file = operacao();
		var file = fs.readFile('C:\\Users\\lecol\\Desktop\\CD03 Siga.sql', 
				'utf-8', function(err, data) {
			if (err) {
				return console.log(err);
			} 
			return console.log(data);
		});
		response.writeHead(200, {
			"Content-Type" : "text/html"
		});
		response.write("<br />");
		response.write("" + file);
		response.end();
	};
http.createServer(onRequest).listen(669);
console.log("Node.js iniciado");
