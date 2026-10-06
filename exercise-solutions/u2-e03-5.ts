// Exercise 3, Question 5: Distance between two points

let x1: number = Number(prompt("Enter x1: "));
let y1: number = Number(prompt("Enter y1: "));
let x2: number = Number(prompt("Enter x2: "));
let y2: number = Number(prompt("Enter y2: "));

let d: number = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log("\nThe distance between the points is " + d.toFixed(2));
