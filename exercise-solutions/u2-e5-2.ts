let a: number = Number(prompt("Enter number 1: "));
let b: number = Number(prompt("Enter number 2: "));
let c: number = Number(prompt("Enter number 3: "));

let largest: number = a;

if (b >= a && b >= c) {
  largest = b;
} else if (c >= a && c >= b) {
  largest = c;
}

console.log("The largest number is " + largest);

export {};
