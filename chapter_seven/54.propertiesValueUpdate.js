/***
 * Update Value of Properties
 */

 var point = {
    x: 10,
    y: 20,
    z: 15
}


point.x = 45
point.a = 16

console.log(point);
console.log(point.d);

point['y'] = 100

console.log(point);

var prop = 'z'
point[prop] = 55

console.log(point);