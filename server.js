'use strict';

var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
	console.log(request.url);
	if ( request.url == '/' ) {
		fs.readFile('login.html', function(err, data) {
			response.end(data);
		});
	} else if ( request.url == '/login.css' ) {
		fs.readFile('login.css', function(err, data) {
			response.end(data);
		});
	} else if ( request.url == '/signup' ) {
	    request.pipe(response);
	}
}).listen(8000);