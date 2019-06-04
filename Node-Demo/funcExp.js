
function callFunction(fun){
    fun();
}


var greetings = function(){
    console.log('namaste');
};

callFunction(greetings);