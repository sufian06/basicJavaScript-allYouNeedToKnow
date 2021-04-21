/**
 * Traverse Array
 */

var arr = [9, 3, 6, 15, 14, 2, 5, 8]
var str = 'Total'

var sum = 0;

for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum);

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}

var sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sum += arr[i]
    }
}
console.log(sum);

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
        console.log(arr[i]);
    }
}

var sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
        sum += arr[i]
    }
}

console.log(sum);