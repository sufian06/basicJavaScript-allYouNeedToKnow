/**
 * Arguments Object in Javascript
 */

function test() {
    // console.log(arguments);
    // console.log(typeof a);

    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
test(10, 20, 30)

function addAll () {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum);
}

addAll(1, 2, 3)
addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)