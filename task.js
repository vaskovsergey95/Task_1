"use strict";
let d;
let finish;
function solveEquation(a, b ,c) {
    d = b ** 2 - 4 * a * c;
    if (d < 0) {
        return finish = [];
    } else if (d === 0) {
        finish = [Math.sqrt(d)];
        return finish;
    } else if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        return finish = [x1, x2];
    }
}
solveEquation(3, -6, -110);
console.log(finish)


