// Exercise 3, Question 4: Swapping two values using a temporary variable

let m: number = Number(prompt("Enter m: "));
let n: number = Number(prompt("Enter n: "));

console.log("\nBefore swap: m = " + m + ", n = " + n);

let temp: number = m;   // hold m's original value
m = n;
n = temp;

console.log("After swap:  m = " + m + ", n = " + n);
