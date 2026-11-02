let n: number = Number(prompt("Enter an integer: "));

if (isNaN(n) || n !== Math.trunc(n)) {
  console.log("That is not an integer!");
} else if (n % 2 === 0) {
  console.log(n + " is even.");
} else {
  console.log(n + " is odd.");
}

export {};
