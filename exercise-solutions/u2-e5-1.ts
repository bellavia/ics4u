let fruit: string = (prompt("Type 'apple', 'orange', or 'banana': ") ?? "").toLowerCase();

if (fruit === "apple") {
  console.log("An apple a day keeps the doctor away!");
} else if (fruit === "orange") {
  console.log("Oranges are full of vitamin C!");
} else if (fruit === "banana") {
  console.log("Bananas are a great source of potassium!");
} else {
  console.log("Sorry, that is not one of the fruits I asked for.");
}

export {};
