// Exercise 4, Question 3: Removing characters (no .substring())

let sentence: string = prompt("Type a sentence: ");

// a) start index and length
let start: number = Number(prompt("Start index to erase: "));
let length: number = Number(prompt("Number of characters to erase: "));

let resultA: string = sentence.slice(0, start) + sentence.slice(start + length);
console.log("\nResult (a): " + resultA);

// b) start index and end index (end index is erased too)
let start2: number = Number(prompt("\nStart index to erase: "));
let end2: number = Number(prompt("End index to erase (inclusive): "));

let resultB: string = sentence.slice(0, start2) + sentence.slice(end2 + 1);
console.log("\nResult (b): " + resultB);
