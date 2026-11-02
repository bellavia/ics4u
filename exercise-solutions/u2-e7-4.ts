let s: string = prompt("Enter a string: ") ?? "";
let result: string = "";

for (let i = 0; i < s.length; i++) {
  let ch: string = s[i].toLowerCase();

  if (ch !== "a" && ch !== "e" && ch !== "i" && ch !== "o" && ch !== "u") {
    result += s[i];
  }
}

console.log("String with no vowels: " + result);

export {};
