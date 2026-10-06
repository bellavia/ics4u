// Exercise 4, Question 2: Full name and its length

let firstName: string = prompt("Enter your first name: ");
let lastName: string = prompt("Enter your last name: ");

let fullName: string = firstName + " " + lastName;

console.log("\nHello, " + fullName + "!");
// subtract 1 so the space between the names isn't counted
console.log("Your full name is " + (fullName.length - 1) + " characters long.");
