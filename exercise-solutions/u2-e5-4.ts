let r: number = Math.floor(Math.random() * 10) + 1;
let guess: number = 0;
let validInput: boolean = true;

try {
  guess = Number(prompt("Guess a number from 1 to 10: "));

  if (isNaN(guess) || guess < 1 || guess > 10) {
    throw new Error("Invalid guess");
  }
} catch (error) {
  validInput = false;
}

if (!validInput) {
  console.log("You must enter a number from 1 to 10!");
} else if (guess === r) {
  console.log("Correct! The number was " + r + ".");
} else {
  console.log("Sorry, the number was " + r + ".");
}

export {};
