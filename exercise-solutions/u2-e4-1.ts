// Exercise 4, Question 1: Words and first letters of a string

let myString: string = "Computer Science is the best course ever!";

// each word using .substring(start, end)
console.log(myString.substring(0, 8));     // Computer
console.log(myString.substring(9, 16));    // Science
console.log(myString.substring(17, 19));   // is
console.log(myString.substring(20, 23));   // the
console.log(myString.substring(24, 28));   // best
console.log(myString.substring(29, 35));   // course
console.log(myString.substring(36, 41));   // ever!

// first letter of each word using square-bracket indexing
console.log(myString[0]);    // C
console.log(myString[9]);    // S
console.log(myString[17]);   // i
console.log(myString[20]);   // t
console.log(myString[24]);   // b
console.log(myString[29]);   // c
console.log(myString[36]);   // e
