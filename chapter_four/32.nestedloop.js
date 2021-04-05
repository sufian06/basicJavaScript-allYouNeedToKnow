// Nested Loop

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// var n = 5;
// for (var i = 1; i <= n; i++ ) {
//     var result = '';
//     for (var j = 1; j <= i; j++) {
//         result += j + ' ';
//     }
//     console.log(result);
// }

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// var o = 5;
// for (var p = 1; p <= o; p++) {
//     var foll = '';
//     for (var q = 1; q <= p; q++) {
//         foll += p + ' ';
//     }
//     console.log(foll);
// }

// var n = 5;
// for (var i = 1; i <= n; i++) {
//     var result = '';
//     for (var j = 1; j <= i; j++) {
//         result += j + ' ';
//     }
//     console.log(result);
// }

// var a = 10;
// for (var b = 1; b <= a; b++) {
//     var x = '';
//     for (var c = 1; c <= b; c++) {
//         x += c + ' ';
//     }
//     console.log(x);
// }

var n = 5;
for (i = 1; i <= n; i++) {
    var result = '';
    for (var j = 1; j <= n; j++) {
        result += '* '
    }
    console.log(result);
}


var e = 5;
for (var f = 1; f <= e; f++) {
    var h = '';
    for (var g = 1; g <= f; g++) {
        h += g + ' '
    }
    console.log(h);
}


var one = 7;

for (var two = 1; two <= one; two++) {
    var four = '';
    for (var three = 1; three <= two; three++) {
        four += '* '
    }
    console.log(four);
}

