var http = require('http');
var server = http.createServer(function (request, response) {
       response.writeHead(200, {"Content-Type": "text/plain"});   
       response.end("Hello from App2!\n"); 
}); 
server.listen(3001); 
console.log("Server running at http://127.0.0.1:3001/");
