//console.log('...shuruaat');


//module.exports.f1 = function(){
    var f1 = function(){
        return 'just checking up';
    };

//module.exports.summation = function(a, b)
 var summation = function(a,b)
{
    return `The sum of two nos. id ${a+b}`;
};

var pi =3.142;
//module.exports.pi = pi;

module.exports = {
    summation : summation,
    f1 : f1,
    pi : pi
}