// var stuff = require('./stuff');

// console.log(stuff.f1());
// console.log(stuff.pi);
// console.log(stuff.summation(2,7));
//checkup();


var events = require('events');
var utilities = require('util');
// var myEmitter = new events.EventEmitter(); 
// myEmitter.on('someEvent', function(message){ console.log(message);});
// myEmitter.emit('someEvent', 'event ho gaya!!!');


var person = function(name)
    {
        this.name = name;
    };

    utilities.inherits(person,events.EventEmitter);

    var james = new person('james');
    var mary = new person('mary');
    var ryan = new person('ryan');

    var people = [james, mary, ryan];
    people.forEach(function(person)
        {
            person.on('speak', function(msg)
            {
                console.log(person.name + ' says ' + msg);
            });
        });

james.emit('speak','hey....james here');
ryan.emit('speak', 'oh ho ho ho!!!');
