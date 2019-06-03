console.log("You are inside current directory: "+ __dirname);
console.log("You are working on current file: "+ __filename);
var time = 0;
var timer = setInterval(function(){
    time += 2;     
    console.log(time + " seconds passed");
    if(time>=10)
    {
        clearInterval(timer);
    }
    },2000)
