import * as fs from "fs";

// Splitting the file into LINES is fine; the values inside each line are
// separated with indexOf() and substring() only.
const lines: string[] = fs.readFileSync("input.csv", "utf-8").trim().split("\n");

let numRecords: number = Number(lines[0]);
let output: string = "";

for (let i = 1; i <= numRecords; i++) {
  let rest: string = lines[i];
  let sum: number = 0;

  let comma: number = rest.indexOf(",");
  let id: string = rest.substring(0, comma);
  rest = rest.substring(comma + 1);

  for (let j = 0; j < 4; j++) {
    comma = rest.indexOf(",");

    if (comma === -1) {
      sum += Number(rest);
    } else {
      sum += Number(rest.substring(0, comma));
      rest = rest.substring(comma + 1);
    }
  }

  output += id + "\n" + (sum / 4).toFixed(2) + "\n";
}

fs.writeFileSync("output.txt", output);
console.log(output);

export {};
