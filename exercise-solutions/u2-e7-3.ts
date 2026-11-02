let s: string = prompt("Enter a string: ") ?? "";
let previous: string = "";
let pairs: number = 0;

for (let i = 0; i < s.length; i++) {
  let current: string = s[i].toLowerCase();

  // Only letters count (a letter has different upper and lower case forms)
  let isLetter: boolean = current.toLowerCase() !== current.toUpperCase();

  if (isLetter && current === previous) {
    pairs++;
  }
  previous = current;
}

console.log("There are " + pairs + " side-by-side letter pairs.");

export {};
