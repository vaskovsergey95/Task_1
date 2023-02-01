"use strict";

let decision;
function solveEquation(a, b ,c) {
    let d;
    d = b ** 2 - 4 * a * c;
    if (d < 0) {
        return decision = [];
    } else if (d === 0) {
        decision = [Math.sqrt(d)];
        return decision;
    } else if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        return decision = [x1, x2];
    }
}
solveEquation(3, -6, -110);
console.log(decision)


