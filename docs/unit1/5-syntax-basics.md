# Basic TypeScript Syntax

**Previous:** [← Assignment 1](4-assignment.md)

Now that you're comfortable creating, compiling, and running a
TypeScript file, let's cover the core syntax you'll be using
throughout this course. If you took ICS3U in a different language,
this lesson translates the concepts you already know into TypeScript's
specific syntax.

## Variables and Types

A **variable** is a named location in memory that stores a value. In
TypeScript, variables are declared with `let` (or `const` if the
value should never change after it's set), followed by a **type
annotation** that tells the compiler what kind of value the variable
is allowed to hold:

```typescript
let age: number = 17;
let name: string = "Alex";
let isEnrolled: boolean = true;
const pi: number = 3.14159;
```

| Keyword | Meaning |
|---------|---------|
| `let` | A variable that can be reassigned later |
| `const` | A variable that cannot be reassigned after it's set |

| Type | Holds |
|------|-------|
| `number` | Any numeric value (integer or decimal) |
| `string` | Text, written in quotes |
| `boolean` | Only `true` or `false` |

TypeScript is **statically typed** — once a variable is declared with
a type, trying to assign it a value of a different type is a compile
error, not something you discover later at runtime:

```typescript
let age: number = 17;
age = "seventeen"; // Compile error: Type 'string' is not assignable to type 'number'.
```

This is one of the biggest differences from a language like Python:
mismatched types get caught by `tsc` *before* your program ever runs,
which is part of why TypeScript is a good fit for larger, more
structured programs like the ones you'll build in this course.

You can reassign a `let` variable as long as the new value matches the
declared type:

```typescript
let age: number = 17;
age = 18; // fine — still a number
```

But `const` variables can't be reassigned at all, even to another
value of the same type:

```typescript
const pi: number = 3.14159;
pi = 3.14; // Compile error: Cannot assign to 'pi' because it is a constant.
```

!!! note "When to use `let` vs `const`"
    Use `const` by default. Only switch to `let` when you know the
    variable's value needs to change later in the program (like a
    loop counter or a running total).

## Input and Output

**Output** means displaying information — in this course, that's done
with `console.log()`, which prints its argument(s) to the Shell:

```typescript
console.log("Hello, world!");
console.log(age);
```

You can print multiple values in one call by separating them with
commas — `console.log` will print them all on the same line, separated
by spaces:

```typescript
let name: string = "Alex";
let age: number = 17;
console.log("Name:", name, "Age:", age);
// Output: Name: Alex Age: 17
```

You can also combine text and variables into a single string using
**template literals** — backticks (`` ` ``) instead of quotes, with
variables inside `${}`:

```typescript
console.log(`Name: ${name}, Age: ${age}`);
// Output: Name: Alex, Age: 17
```

This course doesn't rely on reading keyboard **input** at runtime the
way some languages do with a `readline` prompt — instead, you'll set
values directly in your code as variables, which keeps programs
simple to test and run inside Replit's Shell.

## Selection (if / else)

**Selection** is code that runs conditionally, based on whether a
condition is `true` or `false`. The condition is written inside
parentheses after `if`, and the code to run goes inside curly braces:

```typescript
let age: number = 17;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

| Operator | Meaning |
|----------|---------|
| `>` `<` | greater than / less than |
| `>=` `<=` | greater than or equal to / less than or equal to |
| `===` | equal to |
| `!==` | not equal to |

!!! note "Use `===`, not `=`"
    A single `=` is *assignment* (it stores a value into a variable).
    Comparing two values for equality requires `===`. Mixing these up
    is one of the most common beginner mistakes.

You can chain additional conditions with `else if`, checked in order
from top to bottom — as soon as one condition is `true`, its block
runs and the rest are skipped:

```typescript
let mark: number = 72;

if (mark >= 80) {
  console.log("Level 4");
} else if (mark >= 70) {
  console.log("Level 3");
} else if (mark >= 60) {
  console.log("Level 2");
} else {
  console.log("Level 1 or below");
}
```

You can also combine multiple conditions using `&&` (**and** — both
sides must be true) and `||` (**or** — at least one side must be
true):

```typescript
let age: number = 17;
let hasPermission: boolean = true;

if (age >= 16 && hasPermission) {
  console.log("Allowed.");
}
```

## Repetition (loops)

A **loop** repeats a block of code, either a set number of times or
until some condition is no longer true.

**For loop** — used when you know how many times to repeat, or when
you're counting through a range of values. It has three parts inside
the parentheses: a starting value, a condition checked before each
repetition, and an update that runs after each repetition:

```typescript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0 1 2 3 4
```

Walking through this line by line: `let i = 0` runs once, at the very
start. Then, before each pass through the loop, TypeScript checks
`i < 5` — if it's `true`, the loop body runs; if it's `false`, the
loop stops. After each pass, `i++` runs (short for `i = i + 1`),
increasing `i` by 1. Notice the loop starts at 0 and stops before 5 —
this is why it prints `0` through `4`, five values in total, not `1`
through `5`.

**While loop** — used when you don't know in advance how many times
you'll repeat, only the condition that should keep it going:

```typescript
let count: number = 0;
while (count < 5) {
  console.log(count);
  count++;
}
```

A `while` loop only has the condition — you're responsible for both
setting up the starting value *before* the loop, and updating it
*inside* the loop body. If you forget to update `count` inside the
loop, the condition never becomes `false`, and you get an **infinite
loop** that never stops.

!!! note "For vs. while"
    If you can count the exact number of repetitions before the loop
    starts, use `for`. If you're repeating "until something happens"
    and don't know how many passes that will take, use `while`.

## Arrays

An **array** is an ordered list of values, all of the same type. Think
of it as a single variable that holds many values, each accessible by
its position:

```typescript
let scores: number[] = [85, 90, 78, 92];
```

The `number[]` type annotation means "an array of numbers." You'd
write `string[]` for an array of strings, `boolean[]` for an array of
booleans, and so on.

Each value in an array has an **index** — its position in the list.
Indexes start at 0, not 1, so the first element is `scores[0]`, the
second is `scores[1]`, and so on:

```typescript
console.log(scores[0]);   // 85 — the first element
console.log(scores[3]);   // 92 — the fourth element
```

Every array has a `.length` property, giving the number of elements it
contains — this is especially useful for looping through an array
without hardcoding its size:

```typescript
console.log(scores.length); // 4
```

Combining arrays with a `for` loop lets you process every element,
one at a time, without writing a separate line for each:

```typescript
for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}
```

Here, `i` takes on each valid index in turn — `0`, `1`, `2`, `3` —
and `scores[i]` gives the value at that position. Using
`scores.length` as the loop's stopping point (rather than typing `4`
directly) means the loop still works correctly even if you add or
remove elements from `scores` later.

You can also change a value at a specific index, or add a new one:

```typescript
scores[0] = 88;          // replace the first element
scores.push(100);        // add a new value to the end
console.log(scores);     // [88, 90, 78, 92, 100]
```

## Functions

A **function** is a named, reusable block of code that you can call
whenever you need to run that logic — instead of copying and pasting
the same code every time you need it.

```typescript
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3));   // 5
```

Breaking this down:

- `function add(...)` — declares a function named `add`
- `(a: number, b: number)` — the **parameters**: named, typed inputs
  the function expects to receive
- `: number` after the parentheses — the function's **return type**,
  the type of value it will send back
- `return a + b;` — the **return statement**, which ends the function
  and sends the result back to wherever the function was called

The values `2` and `3` in `add(2, 3)` are called **arguments** — the
actual values passed in when the function is called, matched up to
the parameters `a` and `b` in order.

Not every function needs to return a value. If a function only
performs an action (like printing something) without sending a result
back, its return type is `void`:

```typescript
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

greet("Alex"); // Hello, Alex!
```

Functions can also call other functions, and can use loops and
selection inside them — a function is just a named container for any
code you've already learned to write:

```typescript
function sumArray(values: number[]): number {
  let total: number = 0;
  for (let i = 0; i < values.length; i++) {
    total += values[i]; // shorthand for: total = total + values[i]
  }
  return total;
}

console.log(sumArray([85, 90, 78, 92])); // 345
```

!!! abstract "Keywords"
    - **Variable** — a named storage location for a value
    - **Type annotation** — specifies what kind of value a variable holds
    - **`let` / `const`** — declare a reassignable / fixed variable
    - **Selection** — code that runs conditionally (`if`/`else`)
    - **Loop** — code that repeats (`for`/`while`)
    - **Array** — an ordered list of values, accessed by index
    - **Index** — a value's position within an array, starting at 0
    - **Function** — a reusable, named block of code
    - **Parameter / argument** — a function's declared input / the actual value passed in when called
    - **Return statement** — sends a value back from a function to its caller

---

**Next:** [Assignment 2 →](6-assignment-2.md)
