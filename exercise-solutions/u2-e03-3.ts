// Exercise 3, Question 3: Apple purchase with HST

// formats numbers as Canadian dollars ($4.50) and rounds correctly
const money = new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" });

let apples: number = Number(prompt("How many apples? "));
let price: number = Number(prompt("Price per apple: "));
let taxRate: number = Number(prompt("HST rate (e.g. .13): "));

let subtotal: number = apples * price;
let tax: number = subtotal * taxRate;
let total: number = subtotal + tax;

console.log("\nSubtotal: " + money.format(subtotal));
console.log("Tax:      " + money.format(tax));
console.log("Total:    " + money.format(total));
