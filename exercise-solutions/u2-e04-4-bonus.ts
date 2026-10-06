// Exercise 4, Question 4 BONUS: works even if capitalization doesn't match

let sentence: string = prompt("Enter a sentence: ");
let oldWord: string = prompt("Enter a word from this sentence that you would like to replace: ");
let newWord: string = prompt("Enter a word to replace '" + oldWord + "' with: ");

// find the word's position ignoring case, then rebuild the sentence
let index: number = sentence.toLowerCase().indexOf(oldWord.toLowerCase());

if (index === -1) {
    console.log(sentence);   // word not found, leave the sentence alone
} else {
    console.log(sentence.slice(0, index) + newWord + sentence.slice(index + oldWord.length));
}
