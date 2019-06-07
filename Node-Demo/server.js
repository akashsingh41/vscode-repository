var http = require('http');
var fs = require('fs');

 var server = http.createServer(function(request, response)
 {
    console.log('request made @ '+request.url);
    response.writeHead(200, {'content-type' : 'application/json'});
    var myobject = {
                        name: 'username',
                        email: 'admin@emailaccount.com',
                        age: 29,
                        gender: 'male',                    
                   };
    //var myReadStream = fs.createReadStream(__dirname+'/index.html','utf8');    
    //myReadStream.pipe(response);    

    response.end(JSON.stringify(myobject));

});

server.listen(3000, '127.0.0.1');
console.log('yooo....listening at port 3000!!!');



// myReadStream.on('data', function(chunk)
// {
//     console.log('data chunk received:');
//     myWriteStream.write(chunk);
// });

