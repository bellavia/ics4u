# Selection: If-Statements & Try-Catch

**Previous:** [← Assignment 1](4-assignment-1.md)

Let's review if-statements, then look at a genuinely new topic:
handling errors gracefully with try-catch.

## Review: If-Statements

```typescript
let input: number = Number(prompt("What is 5 + 5? "));

if (input === 10) {
  console.log("You are correct!");
}
```

Recall TypeScript uses `===` for equality (not a single `=`, which is
assignment), and the relational operators `!==`, `>`, `<`, `>=`, `<=`.

## Review: `else` and `else if`

```typescript
let input: number = Number(prompt("Enter the number '5': "));

if (input === 5) {
  console.log("Great! You typed 5!");
} else if (input < 5) {
  console.log("Sorry, you entered a number less than 5");
} else {
  console.log("Sorry, you entered a number greater than 5");
}
```

You can chain as many `else if`s as you like, but only one final
`else` (the **default condition**) is allowed.

## Review: Logical Operators

| Logical Operator | Description |
|-------------------|--------------|
| `&&` | AND — both conditions must be true |
| `\|\|` | OR — at least one condition must be true |

```typescript
let input: number = Number(prompt("Enter an odd number between 1 and 10: "));

if (input > 0 && input <= 10 && input % 2 !== 0) {
  console.log("Great! You entered an odd number between 1 and 10");
} else {
  console.log("That is not an odd number between 1 and 10");
}
```

## Review: Nested If-Statements

If-statements can be nested inside each other, just like nested loops.
Pay close attention to which `else` belongs to which `if` when reading
nested code.

## Exceptions

You may have already seen a program crash when it receives input it
doesn't expect. In TypeScript, this is a bit different from what you
might see in other languages — `Number()` never crashes on bad input;
it just quietly returns a special value called `NaN` ("Not a Number"):

```typescript
let x: number = Number(prompt("Please enter a number: "));
console.log("\nYour number is: " + x);
```

**Sample input & output:**
```
Please enter a number: hello
Your number is: NaN
```

The program doesn't crash — but `NaN` silently spreading through the
rest of your calculations is arguably worse, since nothing warns you
something went wrong. This is exactly the kind of situation where we
want our program to **detect** the bad input and handle it
deliberately, rather than letting it fail silently.

## Throwing Your Own Exceptions

TypeScript lets you deliberately **throw** an exception using the
`throw` keyword, whenever your code detects something has gone wrong:

```typescript
let x: number = Number(prompt("Please enter a number: "));

if (isNaN(x)) {
  throw new Error("You did not enter a valid number!");
}

console.log("\nYour number is: " + x);
```

`isNaN(x)` checks whether `x` is `NaN`. If it is, `throw new
Error("...")` deliberately crashes the program with our own custom
error message, rather than silently continuing with a broken value.

**Sample input & output:**
```
Please enter a number: hello
Uncaught Error: You did not enter a valid number!
```

This crashes the program — which is progress (we caught the problem!),
but crashing still isn't ideal. This is where **try-catch** comes in.

## Try-Catch Statements

A **try-catch** statement lets you **handle** an exception when it
occurs, instead of letting it crash your program:

```typescript
let x: number = 0;

try {
  x = Number(prompt("Please enter a number: "));
  if (isNaN(x)) {
    throw new Error("Not a valid number");
  }
} catch {
  console.log("\nYou did not enter a valid number!");
  process.exit(0);
}

console.log("\nYour number is: " + x);
```

**Sample input & output:**
```
Please enter a number: hello

You did not enter a valid number!
```

**Sample input & output:**
```
Please enter a number: 4

Your number is: 4
```

Code inside the `try { }` block runs normally. If an exception is
**thrown** anywhere inside that block, execution immediately jumps to
the `catch { }` block instead of continuing. If no exception occurs,
the `catch { }` block is skipped entirely.

`process.exit(0)` ends the program immediately — the TypeScript
equivalent of C#'s `Environment.Exit(0)`.

!!! note "The general pattern"
    Any time you anticipate your code might receive bad input or
    otherwise fail, surround that code with a `try { }` block, `throw`
    an error when you detect a problem, and use a `catch { }` block to
    handle it gracefully. This is the basic shape of error handling —
    there's more to explore later (like catching different types of
    errors specifically), but this covers the essentials.

!!! abstract "Keywords"
    - **Exception** — an error that occurs while a program is running
    - **`NaN`** — "Not a Number," returned when a numeric conversion
      fails
    - **`throw`** — deliberately raises an exception
    - **`try` / `catch`** — runs code that might fail, and handles the
      failure gracefully instead of crashing
    - **`process.exit()`** — immediately ends the program

---

**Next:** [Exercise 5: Selection & Try-Catch →](5-exercise-selection-trycatch.md)
