// Exercise 3, Question 1: Variables, BEDMAS, and decimals

// a) 7 multiplied by 3 plus 2, all multiplied by 6
let a: number = (7 * 3 + 2) * 6;
console.log(a);                    // 138

// b) the division of 3 by 2, all divided by 7
let b: number = (3 / 2) / 7;
console.log(b);                    // 0.21428571428571427

// c)
let r: number = 2;
let s: number = 5 / r;
console.log(s);                    // 2.5

// d)
let f: number = 4;
let g: number = 7;
let h: number = f / g;
console.log(h);                    // 0.5714285714285714

// e)
let w: number = 4;
let x: number = 5.3;
let z: number = w / x;
let e: number = z / (1 / w);
console.log(e);                    // 3.018867924528302

// f) (i plus 3 multiplied by 5) all divided by (j plus 3 multiplied by 6)
let i: number = 7;
let j: number = 2;
let k: number = (i + 3 * 5) / (j + 3 * 6);
console.log(k);                    // 1.1
