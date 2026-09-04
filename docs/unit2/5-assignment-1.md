# Assignment 1

**Previous:** [← Exercise 5: Strings](5-exercise-strings.md)

This assignment covers Lessons 1–5. Create a new file for each
question as noted below, inside your `unit-1` folder.

!!! warning "No selection, loops, or arrays"
    **Do not** use selection statements (if-statements), loops
    (for/while), or arrays for any of these questions — everything
    should be solvable with just variables, input, and calculations.

!!! note "Submission"
    Make sure your teacher has been invited to this Replit project.

## Question 1: Formulas

Create a new file named `u1-a1-1.ts`. Implement the following, making
sure to follow BEDMAS (TypeScript's single `number` type means you
don't need to worry about truncation here):

**a)** Ask the user for 3 numbers (`q`, `r`, `s`). Calculate and output:

$$\frac{q}{r} + 3$$

**b)** Ask the user for 3 numbers (`u`, `v`, `w`). Calculate and output:

$$\frac{u^4 + \frac{1}{v}}{3w - \sin{\frac{1}{w}}}$$

!!! note "Hint"
    Look up `Math.pow()`, and note `Math.sin()` uses radians.

## Question 2: Ice Cream Shop

An ice cream shop sells three flavours:

- Vanilla — $0.90 per scoop
- Chocolate — $1.00 per scoop
- Strawberry — $1.10 per scoop

A cone costs $0.60.

Create a new file named `u1-a1-2.ts`. Write a program that asks the
user how many scoops of each flavour they want. Output the subtotal,
tax (13% HST), and grand total in currency format (`$` sign, 2 decimal
places).

## Question 3: Piggy Bank

Create a new file named `u1-a1-3.ts`. Johnny has a piggy bank full of
coins. Write a program that asks Johnny for the number of each of the
following coins he has:

- # of nickels
- # of dimes
- # of quarters
- # of loonies
- # of toonies

Then ask Johnny how much the item he wants to buy costs. Output how
much Johnny has left over after the purchase (the answer could be
positive or negative).

## Question 4: Speaker Volumes

Create a new file named `u1-a1-4.ts`. Create the following string:

```typescript
let levels: string = "89233046";
```

Each character represents a volume level (0–9) for a particular
speaker — speaker 1 is at level `8`, speaker 2 at level `9`, speaker 3
at level `2`, and so on.

Write a program that asks the user for three speaker numbers (1–8),
then calculates and outputs the total combined volume of those three
speakers. For example, if the user enters speakers 2, 3, and 5, the
total would be `9 + 2 + 3 = 14`.

## Question 5: Finding All Occurrences

Create a new file named `u1-a1-5.ts`. Create the following string:

```typescript
let message: string =
  "This computer science course is a continuation of a previous " +
  "computer science course. Computer science is awesome!";
```

Recall `.indexOf()` can take a second parameter, the index to start
searching from: `.indexOf(searchValue, startIndex)`.

Using **only** `.indexOf()`, write a program that outputs each index
(on a separate line) where the word `'computer'` appears in `message`
above — **case-insensitive**.

!!! note "Hints"
    - Since `.indexOf()` is case-sensitive, convert `message` to all
      lowercase first with `.toLowerCase()`, and search for
      `"computer"` in lowercase too.
    - The `startIndex` for the next occurrence is calculated from the
      `startIndex` of the previous occurrence.

---

**Next:** [Lesson 6: Selection: If-Statements & Try-Catch →](6-selection-if-trycatch.md)
