// && || !

// Logical Operators only used when we have Two or More conditions and result comes from both of their Participation

/**
 * A && B
 * true && true = true
 * true && false = false
 * false && false = false
 */

/**
 * A || B
 * true || true = true
 * true || false = true
 * false || false = false
 */

var a = 10
var b = 20
var c = 30
var d = 40

if (a > b && c > d) {
    console.log('A is gratter than B and C is gratter than D');
} else {
    console.log('At least one condition is false');
}

if (a > b || c > d) {
    console.log('A is gratter than B or C is gratter than D');
} else {
    console.log('There is none true condition');
}

var check = !(a > b)

console.log(check);