
// var i = 0;
// while (i < 10) {
//     console.log('Abu Sufian');
//     i++
// }

var isRunning = true;

while(isRunning) {
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 9) {
        console.log('Winner winner Chicken Dinner');
        isRunning = false;
    } else {
        console.log('You have got ' + rand);
    }
}

var abuSufian = true;

while (abuSufian) {
    var sufian = Math.floor(Math.random() * 10 + 1);
    if (sufian === 6) {
        console.log('Congrats! You Win!!');
        abuSufian = false;
    } else {
        console.log('Your Number is: ' + sufian);
    }
}