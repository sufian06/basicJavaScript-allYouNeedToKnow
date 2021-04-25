/**
 * First Look at Clouser
 */

var b = 10

function a() {
    var x = 5

    return function() {
        console.log(x);
    }
}
var abc = a()
console.dir(abc)        //Please Open This At Browser Console