/**
 * Traverse an Array
 */

var arr = [4, 5, 1, 6, 8, 9, 40, 10, 11]

// arr[0]
// arr[1]
// arr[2]
// arr[3]
// arr[arr.length - 1]

// for (var i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);
//     arr[i] = arr[i] +2
// }

// console.log(arr);

var sum = 0
for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum);

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

// Odd  number
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
        console.log(arr[i]);
    }
}

// sum of odd number
var sum2 = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
        sum2 += arr[i]
    }
}
console.log(sum2);

// sum of even number
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sum += arr[i]
    }
}
console.log(sum);