import * as fs from "fs";

const lines: string[] = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

let numRecords: number = Number(lines[0]);
let output: string = "";
let grandTotal: number = 0;

for (let i = 0; i < numRecords; i++) {
  let start: number = 1 + i * 5;
  let id: string = lines[start];

  let sum: number = 0;
  for (let j = 1; j <= 4; j++) {
    sum += Number(lines[start + j]);
  }
  let average: number = sum / 4;
  grandTotal += average;

  output += id + "\n" + average.toFixed(2) + "\n";
}

// BONUS: overall average
output += "Overall average: " + (grandTotal / numRecords).toFixed(2) + "\n";

fs.writeFileSync("output.txt", output);
console.log(output);

export {};
