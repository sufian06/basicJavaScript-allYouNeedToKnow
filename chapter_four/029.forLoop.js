// For Loop

// for (i = 0; i < 1000; i+=100) {
//     console.log((i) + ' Abu Sufian');
// }

// for (initializer; condition; increment) {}

// for (i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

var sum = 0;
for (var i = 1; i <= 10; i++) {
    console.log(sum + ' + ' + i + ' = ' + (sum + i));
    sum += i;
}
console.log('result = ' + sum);