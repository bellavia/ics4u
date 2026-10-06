// Exercise 4, Question 4: Find and replace

let sentence: string = prompt("Enter a sentence: ");
let oldWord: string = prompt("Enter a word from this sentence that you would like to replace: ");
let newWord: string = prompt("Enter a word to replace '" + oldWord + "' with: ");

console.log(sentence.replace(oldWord, newWord));

export {};
