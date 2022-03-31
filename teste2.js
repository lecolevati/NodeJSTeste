var url = require("url"), 
	http = require("http"), 
	fs = require("fs"), 
	resp = fs.readFileSync('resp.html'),
	operacao = function(a, b, op) {
		if (op === "-") {
			return a - b;
		} else {
			if (op === "*") {
				return a * b;
			} else {
				if (op === "/") {
					return a / b;
				} else {
					return parseFloat(a) + parseFloat(b);
				}
			}
		}
	}, 
	onRequest = function(request, response) {
		var url_parts = url.parse(request.url, true), 
			a = url_parts.query.a, 
			b = url_parts.query.b, 
			op = url_parts.query.op, 
			c = operacao(a, b, op);
		if (op === "soma"){
			op = "+";
		}
		response.writeHead(200, {
			"Content-Type" : "text/html"
		});
		response.write("<br />");
		response.write(a + " " + op + " " + b + " = " + c);
		response.end(resp);

	};
http.createServer(onRequest).listen(667);
console.log("Node.js iniciado");
