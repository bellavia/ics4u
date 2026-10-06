// Exercise 3, Question 4: Swapping two values using a temporary variable

let a: number = Number(prompt("Enter a: "));
let b: number = Number(prompt("Enter b: "));

console.log("\nBefore swap: a = " + a + ", b = " + b);

let temp: number = a;   // hold a's original value
a = b;
b = temp;

console.log("After swap:  a = " + a + ", b = " + b);
