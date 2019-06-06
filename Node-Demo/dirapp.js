var fs = require('fs');
// fs.mkdir('stuff',function(){
//     fs.readFile('readme.txt', 'utf8', function(e, data)
//     {
//         fs.writeFile('./stuff/writeMe.txt', data, function(){});
//         console.log(data);
//     });
// });
fs.unlink('./stuff/writeMe.txt',function(){
    fs.rmdir('stuff', function(){});
});
