let sentence: string = prompt("Enter a sentence: ") ?? "";
let vowels: number = 0;

for (let i = 0; i < sentence.length; i++) {
  let ch: string = sentence[i].toLowerCase();

  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    vowels++;
  }
}

console.log("There are " + vowels + " vowels.");

export {};
