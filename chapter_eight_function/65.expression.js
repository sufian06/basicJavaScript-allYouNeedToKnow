var addition = function (a, b) {
    return a+b;
}
addition(10, 40)
// console.log(addition(10, 40));

setTimeout(function () {
    console.log('I will call after 5 secone');
}, 5000)

var another = addition
console.log(another(7, 8));