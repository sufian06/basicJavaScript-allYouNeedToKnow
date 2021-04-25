/**
 * Traverse Array
 */

// var arr = [9, 3, 6, 15, 14, 2, 5, 8]
// var str = 'Total'

// var sum = 0;

// for (var i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// console.log(sum);

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         sum += arr[i]
//     }
// }
// console.log('Sum of even Number = ' + sum);

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//         console.log(arr[i]);
//     }
// }

// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//         sum += arr[i]
//     }
// }

// console.log(('Sum of Odd Number = ') + sum);

/**
 * Data Search in Array
 */

// var arr = [12, 9, 3, 8, 4, 22, 51, 27]

// var find = 21
// var isFound = false

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === find) {
//         console.log('Data Found in Index = ' + arr[i]);
//         isFound = true;
//         break;
//     }
// }
// if (!isFound) {
//     console.log('Data Not Found in the Array');
// }

/**
 * Multi Dimentional Array
 */

// var arr = [
//     [78, 91, 76, 89],
//     [81, 95, 69, 83],
//     [94, 73, 82, 79]
// ]

// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//         console.log('Element '+ i + ': ' + arr[i][j]);
//     }
// }

/**
 * Reverse of Array Data
 */

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (var i = 0; i < (arr.length / 2); i++) {
//     var temp = arr[i]
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = temp;
// }

// console.log(arr);

// console.log(arr.reverse());


/**
 * Higher Order Function
 */

function add (a, b) {
    return a + b
}
// console.log(add(44, 10));

function manipulate(a, b, func) {
    var c = a + b
    var d = a - b

    return function() {
        var m = func(a, b)
        return c*d*m
    }
}
var multiply = manipulate(3, 4, add)
console.log(multiply());