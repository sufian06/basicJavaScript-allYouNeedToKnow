/**
 * What is Pure Function?
 *  - It returns the same result if given the same argument.
 *  - It does not cause any observable side effects.
 */

function sqr (n) {
    return n*n
}
console.log(sqr(2));
console.log(sqr(2));
console.log(sqr(3));
console.log(sqr(2));