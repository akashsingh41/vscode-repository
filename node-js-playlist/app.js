var express = require('express'); //module express
var todocontroller = require('./controllers/todocontroller');
var app = express();


app.set('view engine', 'ejs'); //view engine
app.use(express.static('./public')); //static files

todocontroller(app); //fire controller

app.listen(3000); //listening port
console.log('listening to port# 3000');