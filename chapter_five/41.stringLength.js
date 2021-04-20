// String Length

var str = 'Abu Sufian';

var length = 0;

while (true) {
    if (str.charAt(length) == '') {
        break
    } else {
        length++
    }
}
console.log(length);

console.log(str.length);
console.log('something is better then nothing'.length);