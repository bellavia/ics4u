// Exercise 3, Question 2: Average of 5 numbers entered by the user

let n1: number = Number(prompt("Enter number 1: "));
let n2: number = Number(prompt("Enter number 2: "));
let n3: number = Number(prompt("Enter number 3: "));
let n4: number = Number(prompt("Enter number 4: "));
let n5: number = Number(prompt("Enter number 5: "));

let average: number = (n1 + n2 + n3 + n4 + n5) / 5;

console.log("\nThe average of your numbers is " + average.toFixed(2));
