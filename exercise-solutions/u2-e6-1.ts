// a) First 10 natural numbers, one per line
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// b) Every 3rd number from 0 to 21
let lineB: string = "";
for (let i = 0; i <= 21; i += 3) {
  lineB += i + " ";
}
console.log(lineB.trim());

// c) Every 4th number backwards from 50 to 40
let lineC: string = "";
for (let i = 50; i >= 40; i -= 4) {
  lineC += i + " ";
}
console.log(lineC.trim());

// d) From user's number x up to 35
let x: number = Number(prompt("Please enter an integer: "));
let lineD: string = "";
for (let i = x; i <= 35; i++) {
  lineD += i + " ";
}
console.log(lineD.trim());

export {};
