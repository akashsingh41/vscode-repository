var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlparser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');

app.get('/',function(request, response){
    response.sendFile('index');
});

app.get('/contact',function(request, response){

    response.render('contact', {qs: request.query});
});

app.post('/contact', urlparser, function(request,response){
    console.log(request.body);
    response.render('contact-success',{data:request.body});
});

app.get('/profile/:name', function(request, response)
{
    var data = {age: 28, job: 'avenger', hobbies: ['cooking','painting','singing']};
    response.render('profile', {person: request.params.name, data: data});
});

//app.get

app.listen(3000);
