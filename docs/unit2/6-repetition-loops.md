# Repetition: Loops (Review)

**Previous:** [← Exercise 5: Selection & Try-Catch](5-exercise-selection-trycatch.md)

Let's review `for` and `while` loops, and look at boolean flags,
`break`, and nested loops in more depth.

## Review: For Loops

```typescript
for (let x = 1; x <= 3; x++) {
  console.log(x);
}
```

**Output:**
```
1
2
3
```

A `for` loop has three parts: a **counter variable**, a **condition**,
and an **increment** — separated by semicolons.

```typescript
let name: string = prompt("Please enter your name: ") ?? "";

for (let x = 0; x < name.length; x++) {
  console.log("\nindex: " + x);
  console.log(name[x]);
}
```

## Review: While Loops

**While loops** are **indefinite** — useful when you don't know in
advance how many times you'll repeat:

```typescript
let count: number = 0;
while (count < 5) {
  console.log(count);
  count++;
}
```

## Boolean Flags & `break`

A **boolean flag** is a `true`/`false` variable used to track whether
something has happened, often combined with `break` to exit a loop
early:

```typescript
import promptSync from "prompt-sync";
const prompt = promptSync();

let validInput: boolean = false;
let x: number = 0;

while (!validInput) {
  try {
    x = Number(prompt("Please enter a number: "));
    if (isNaN(x)) {
      throw new Error("Not a valid number");
    }
    validInput = true;
  } catch {
    console.log("That wasn't a valid number — try again.");
  }
}

console.log("\nYou entered: " + x);
```

Here, `validInput` starts as `false`, so the loop keeps running. Once a
valid number is entered, `validInput` is set to `true`, and the loop's
condition (`!validInput`) becomes `false`, ending the loop.

`break` can also be used to exit a loop immediately, regardless of its
condition:

```typescript
for (let x = 0; x < 100; x++) {
  if (x === 5) {
    break;
  }
  console.log(x);
}
```

**Output:**
```
0
1
2
3
4
```

## Review: Nested Loops

```typescript
for (let x = 0; x < 3; x++) {
  for (let y = 0; y < 3; y++) {
    console.log("x: " + x + ", y: " + y);
  }
}
```

Nested loops are especially common for building character patterns:

```typescript
for (let x = 0; x < 5; x++) {
  for (let y = 0; y < 5; y++) {
    process.stdout.write("*");
  }
  console.log();
}
```

**Output:**
```
*****
*****
*****
*****
*****
```

!!! abstract "Keywords"
    - **Boolean flag** — a `true`/`false` variable tracking whether
      something has happened
    - **`break`** — immediately exits a loop
    - **Nested loop** — a loop inside another loop

---

**Next:** [Exercise 6: Repetition (Loops) →](6-exercise-repetition-loops.md)
