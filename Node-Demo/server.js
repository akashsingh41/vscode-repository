var http = require('http');

var server = http.createServer(function(request, response)
{
    console.log('request made @ '+request.url);
    response.writeHead(200, {'content-type' : 'text/plain'});
    response.end('heyyy users!!!');
});

server.listen(3000, '127.0.0.1');
console.log('yooo....listening at port 3000!!!');