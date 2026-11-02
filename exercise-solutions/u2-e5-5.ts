let mph: number = 0;
let kt: number = 0;
let kmh: number = 0;
let validInput: boolean = true;

try {
  mph = Number(prompt("Please enter a value for mph: "));
  kt = Number(prompt("Please enter a value for kt: "));
  kmh = Number(prompt("Please enter a value for km/hr: "));

  if (isNaN(mph) || isNaN(kt) || isNaN(kmh) || mph < 0 || kt < 0 || kmh < 0) {
    throw new Error("Invalid speed");
  }
} catch (error) {
  validInput = false;
}

if (!validInput) {
  console.log("\nYou did not enter valid speeds!");
} else {
  // Only one speed is non-zero, so we can test all three units at once.
  let category: number = 0;

  if ((mph >= 74 && mph <= 95) || (kt >= 64 && kt <= 82) || (kmh >= 119 && kmh <= 153)) {
    category = 1;
  } else if ((mph >= 96 && mph <= 110) || (kt >= 83 && kt <= 95) || (kmh >= 154 && kmh <= 177)) {
    category = 2;
  } else if ((mph >= 111 && mph <= 130) || (kt >= 96 && kt <= 113) || (kmh >= 178 && kmh <= 209)) {
    category = 3;
  } else if ((mph >= 131 && mph <= 155) || (kt >= 114 && kt <= 135) || (kmh >= 210 && kmh <= 249)) {
    category = 4;
  } else if (mph > 155 || kt > 135 || kmh > 249) {
    category = 5;
  }

  if (category === 0) {
    console.log("\nThat is not a hurricane.");
  } else {
    console.log("\nThat is a Category " + category + " hurricane.");
  }
}

export {};
