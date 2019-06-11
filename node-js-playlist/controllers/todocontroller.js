var bodyParser = require('body-parser');
var mongoose = require('mongoose');


//connect to the database
mongoose.connect('mongodb+srv://test:test@todo-qhxfy.azure.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true} , function(error) {
    // if error is truthy, the initial connection failed.
    console.log('This error encountered : '+ error);
  });
//create a schema - like a bluepint
var todoSchema = new mongoose.Schema({
    item: String
});

var ToDo = mongoose.model('ToDo', todoSchema);
//var itemOne = ToDo({item: 'wash dishes'}).save(function(err){
  //  if(err) throw err;
    //console.log('item saved');
//});


//var data = [{item: 'get 1 litre milk'},
            // {item: 'clean kitchen sink'},
            // {item: 'cut veggies for dinner'},
            // {item: 'listen to RJ podcasts'}           
            // ];

var urlparser = bodyParser.urlencoded({extended:false});

module.exports  = function(app)
{
    app.get('/todo',function(request, response){
        //get data from mongo db and pass it to view
        ToDo.find({},function(err, data){
            if(err) throw err;
            response.render('todo', {todos: data});
        })        
    });

    app.post('/todo', urlparser, function(request, response){
        //get data from the view and add it to mongo db
        var newToDo = ToDo(request.body).save(function(err,data){
            response.json(data);
            
        });
        //alert('item added!');
        //data.push(request.body);               
        //console.log(JSON.stringify(data));
    });

    app.delete('/todo/:item',function(request, response){
        //delete the requested item from mongo db
        ToDo.find({item : request.params.item.replace(/\-/g, " ")}).findOneAndRemove(function(err,data){
            if(err) throw err;
            response.json(data);
        });
        // data = data.filter(function(todo){
        //     return todo.item.replace(/ /g, '-') != request.params.item;           
        // });
        // response.json(data);
        //alert('item removed!');
    });
};