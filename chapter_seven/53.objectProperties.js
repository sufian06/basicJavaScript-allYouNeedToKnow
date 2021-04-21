/**
 * Object Properties
 */

var point = {
    x: 10,
    y: 20,
    z: 15
}

console.log(point.x);
console.log(point.z);
console.log(point.x + point.z);

console.log(point['y']);
console.log(point['z']);

var show = 'z'
console.log(point[show]);