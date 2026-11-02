let sentence: string = prompt("Enter a sentence: ") ?? "";
let target: string = prompt("Enter a character: ") ?? "";
let count: number = 0;

for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === target) {
    count++;
  }
}

console.log("'" + target + "' appears " + count + " time(s).");

export {};
