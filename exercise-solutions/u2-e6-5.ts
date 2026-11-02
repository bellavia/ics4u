// a)
for (let r = 0; r < 3; r++) {
  let line: string = "";
  for (let c = 0; c <= 5; c++) {
    line += c + " ";
  }
  console.log(line.trim());
}
console.log("");

// b)
for (let r = 0; r < 3; r++) {
  let line: string = "";
  for (let c = 0; c <= 5; c++) {
    line += ((r + c) % 10) + " ";
  }
  console.log(line.trim());
}
console.log("");

// c) pyramid
for (let r = 0; r < 4; r++) {
  let line: string = "";
  for (let s = 0; s < 3 - r; s++) {
    line += " ";
  }
  for (let st = 0; st < 2 * r + 1; st++) {
    line += "*";
  }
  console.log(line);
}
console.log("");

// d)
for (let r = 1; r <= 5; r++) {
  let line: string = "";
  for (let c = 0; c < r; c++) {
    line += r;
  }
  console.log(line);
}
console.log("");

// e)
let n: number = 1;
for (let r = 1; r <= 5; r++) {
  let line: string = "";
  for (let c = 0; c < r; c++) {
    line += n + " ";
    n++;
  }
  console.log(line.trim());
}
console.log("");

// BONUS: Floyd's triangle
for (let r = 1; r <= 5; r++) {
  let line: string = "";
  for (let c = r; c >= 1; c--) {
    line += c;
  }
  for (let c = 2; c <= r; c++) {
    line += c;
  }
  console.log(line);
}

export {};
