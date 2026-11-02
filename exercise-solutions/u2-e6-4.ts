let validInput: boolean = true;
let count: number = 0;
let total: number = 0;
let highest: number = -Infinity;
let lowest: number = Infinity;

try {
  count = Number(prompt("How many numbers do you wish to input? "));
  if (isNaN(count) || count < 1) {
    throw new Error("Invalid count");
  }
} catch (error) {
  validInput = false;
}

if (validInput) {
  for (let i = 1; i <= count; i++) {
    let n: number = 0;

    try {
      n = Number(prompt("Enter number " + i + ": "));
      if (isNaN(n)) {
        throw new Error("Not a number");
      }
    } catch (error) {
      validInput = false;
      break;
    }

    total += n;
    if (n > highest) {
      highest = n;
    }
    if (n < lowest) {
      lowest = n;
    }
  }
}

if (validInput) {
  console.log("\nAverage: " + (total / count).toFixed(2));
  console.log("Lowest: " + lowest);
  console.log("Highest: " + highest);
} else {
  console.log("\nYou did not enter a valid number!");
}

export {};
