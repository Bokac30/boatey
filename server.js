var http        = require('http');
var url         = require('url');
var querystring = require('querystring');
var fs         	= require('fs');
var port		= 3000;

http.createServer(function(request, response) {
    pathName = url.parse(request.url).pathname;
    if(pathName === '/') {
        pathName = '/index.html';
    }
    fs.readFile(__dirname + pathName, function(err, data) {
        if (err) {
            response.writeHead(404, {'Content-type':'text/plan'});
            response.write('Page Was Not Found' + pathName);
            response.end();
        } else {
            response.writeHead(200);
            response.write(data);
            response.end();
        }
    });
}).listen(port);
console.log("Server is started http://localhost:3000");
console.log("To stop the server press: Ctrl + C, then Y");