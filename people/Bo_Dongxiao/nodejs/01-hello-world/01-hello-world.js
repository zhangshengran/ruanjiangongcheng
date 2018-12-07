var http = require('http');

http.createServer(function(req,res){
    res.writeHeader(200,{'Content-Type':'text/plain'});
    res.end('Hello World!');
}).listen(3000);

console.log("Server is starting...");
