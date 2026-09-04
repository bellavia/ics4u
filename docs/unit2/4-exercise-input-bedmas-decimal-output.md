# Exercise 4: Input, BEDMAS, & Decimal Output

**Previous:** [← Lesson 4: Input, BEDMAS, & Decimal Output (Review)](4-input-bedmas-decimal-output.md)

## Question 1

Create a new file named `u1-e04-1.ts`. Create variables for each
mathematical expression below and output each result to the console.
Use BEDMAS.

**a)** Variable `a` equals 7 multiplied by 3 plus 2, all multiplied by
6 (output `a`)

**b)** Variable `b` equals the division of 3 by 2, all divided by 7
(output `b`)

**c)**
```typescript
let r: number = 2;
```
Variable `s` equals 5 divided by `r` (output `s`)

**d)**
```typescript
let f: number = 4;
let g: number = 7;
```
Variable `h` equals `f` divided by `g` (output `h`)

**e)**
```typescript
let w: number = 4;
let x: number = 5.3;
```
Variable `z` equals `w` divided by `x`. Variable `e` equals `z` divided
by the result of 1 divided by `w` (output `e`)

**f)**
```typescript
let i: number = 7;
let j: number = 2;
```
Variable `k` equals `i` plus 3 multiplied by 5, all divided by `j` plus
3 multiplied by 6 (output `k`)

## Question 2

Create a new file named `u1-e04-2.ts`. Write a program that asks the
user for **5 numbers**. Calculate the average and output it (with 2
decimal places) with an appropriate message.

## Question 3

Create a new file named `u1-e04-3.ts`. Write a program that asks the
user for the number of apples, the price per apple, and the HST tax
rate. Output the **subtotal**, **tax**, and **total** with appropriate
messages.

!!! note "Entering the tax rate"
    The tax rate is entered as a decimal — for 13%, the user types
    `.13`.

!!! note "Currency formatting"
    Output currency values with a `$` sign and 2 decimal places, using
    `.toFixed(2)`.

## Question 4

Create a new file named `u1-e04-4.ts`. Write a program that asks the
user for two numbers (`a` and `b`), then swaps the values so `a` equals
the original value of `b`, and `b` equals the original value of `a`.

!!! note "Hint"
    You'll need a third, temporary variable to hold one of the values
    during the swap.

## Question 5: Distance Between Two Points

Consider two points, **A** and **B**, on a Cartesian plane, each with
an `x` and `y` value: **A**(x1, y1) and **B**(x2, y2). The distance
between them is:

$$d = \sqrt{(x2 - x1)^2 + (y2 - y1)^2}$$

Create a new file named `u1-e04-5.ts`. Write a program that asks the
user for the coordinates of points A and B, then calculates and
outputs the distance `d`, using `Math.pow()` and `Math.sqrt()`.

---

**Next:** [Lesson 5: Strings (Review) →](5-strings.md)
