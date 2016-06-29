var http = require("http");
var fs = require('fs');
var url = require('url');


http.createServer(function(request,response){

  var name = url.parse(request.url).pathname;
  console.log(name.substr(1)  + "\n" );

  fs.readFile(name.substr(1), function (err, data) {
     if (err) {
        console.log(err);
        response.writeHead(404, {'Content-Type': 'text/html'});
     }else{
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data.toString());
     }
     response.end();
  });
}).listen(8080);

console.log("server running at port 8080");
