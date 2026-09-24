# Input, BEDMAS, & Decimal Output (Review)

**Previous:** [← Exercise 2: Data Types, Variables, & Errors](2-exercise-data-types-variables-errors.md)

In this lesson we'll review how to receive user input, revisit BEDMAS,
and look at how TypeScript handles decimal output and division.

## Setting Up Input in Replit

To ask the user for input, we use a small package called `prompt-sync`.

**Step 1.** In the Shell, install `prompt-sync` and its type
definitions (only needs to be done once per project):

```bash
npm install prompt-sync
npm install --save-dev @types/prompt-sync
```

**Step 2.** At the top of your `.ts` file, import and set it up:

```typescript
import promptSync from "prompt-sync";
const prompt = promptSync();
```

## Review: User Input with `prompt()`

```typescript
import promptSync from "prompt-sync";
const prompt = promptSync();

let length: number = 0;
let width: number = 0;

length = Number(prompt("Please enter a length: "));
width = Number(prompt("Please enter a width: "));

let area: number = length * width;
console.log("\nThe area of your rectangle is: " + area);
```

`prompt("...")` displays the message, keeps the cursor on the same
line, and pauses until the user types something and presses Enter.
Since `prompt()` always returns a **string**, wrap it in `Number(...)`
to convert it into a number your variable can use in calculations.

**Output:**
```
Please enter a length: 3
Please enter a width: 2

The area of your rectangle is: 6
```

## Review: BEDMAS

```typescript
console.log(2 + 3 * 10);
```

**Output:**
```
32
```

Multiplication happens before addition, so `3 * 10` is calculated
first, then added to `2`.

## Review: Division & Decimals

Recall that TypeScript only has one numeric type — `number` — and
division always returns a complete decimal result:

```typescript
let x: number = 5;
let y: number = 4;
console.log(x / y);
```

**Output:**
```
1.25
```

This is different from languages like C#, which **truncate** integer
division and would give you `1` instead of `1.25`. Since TypeScript
doesn't split numbers into separate integer/decimal types, this
problem doesn't come up.

If you ever want just the whole-number part of a division on purpose,
use `Math.floor()` or `Math.trunc()`:

```typescript
console.log(Math.floor(20 / 6));   // 3
console.log(20 % 6);               // 2 (the remainder)
```

## Review: Formatting Decimal Output

```typescript
let money: number = 5.43 * 2.4;
console.log("You have $" + money);
```

**Output:**
```
You have $13.031999999999998
```

Use `.toFixed()` to control the number of decimal places:

```typescript
let money: number = 5.43 * 2.4;
console.log("You have $" + money.toFixed(2));
```

**Output:**
```
You have $13.03
```

## Review: Built-in Methods

Recall built-in methods like `Math.pow()` (power) and `Math.sqrt()`
(square root):

```typescript
let x: number = Math.pow(5, 2);
console.log(x);          // 25
console.log(Math.sqrt(25));  // 5
```

!!! abstract "Keywords"
    - **`prompt()`** — displays a message and pauses the program to
      receive user input as a string
    - **`Number()`** — converts a string into a number
    - **`.toFixed()`** — formats a number to a fixed number of decimal
      places
    - **`Math.floor()` / `Math.trunc()` / `%`** — force whole-number
      division or get a remainder

---

**Next:** [Exercise 3: Input, BEDMAS, & Decimal Output →](3-exercise-input-bedmas-decimal-output.md)
