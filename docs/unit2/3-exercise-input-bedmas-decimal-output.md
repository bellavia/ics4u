# Exercise 3: Input, BEDMAS, & Decimal Output

**Previous:** [← Input, BEDMAS, & Decimal Output (Review)](3-input-bedmas-decimal-output.md)

## Question 1

Create a new file named `u2-e03-1.ts`. Create variables for each
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

Create a new file named `u2-e03-2.ts`. Write a program that asks the
user for **5 numbers**. Calculate the average and output it (with 2
decimal places) with an appropriate message.

## Question 3

Create a new file named `u2-e03-3.ts`. Write a program that asks the
user for the number of apples, the price per apple, and the HST tax
rate. Output the **subtotal**, **tax**, and **total** with appropriate
messages.

!!! note "Entering the tax rate"
    The tax rate is entered as a decimal — for 13%, the user types
    `.13`.

!!! note "Currency formatting"
    Format your currency values with `Intl.NumberFormat`. Create the
    formatter **once**, near the top of your file, then call
    `.format()` on each value you output:

    ```typescript
    const money = new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" });

    console.log(money.format(4.5));      // $4.50
    ```

    It adds the `$` sign and always shows 2 decimal places. For large
    amounts it also adds a comma (`$1,234.50`).

!!! example "Example"
    If the user enters **6** apples, a price of **.50**, and a tax rate
    of **.13**, your output should show:

    ```
    Subtotal: $3.00
    Tax: $0.39
    Total: $3.39
    ```

!!! info "Why not `.toFixed(2)`?"
    Computers store decimals in binary, and some decimals can't be
    stored exactly. For example, `0.585` is really stored as
    `0.58499999999999996...`, so `.toFixed(2)` sees a value just below
    the halfway point and rounds **down**:

    ```typescript
    console.log((0.585).toFixed(2));   // 0.58  (expected 0.59)
    console.log((1.005).toFixed(2));   // 1.00  (expected 1.01)
    ```

    Possible fixes:

    - **`Intl.NumberFormat`** (used above) rounds these correctly.
    - **`Math.round(x * 100) / 100`** shifts the decimal, rounds to a
      whole number, then shifts back. It fixes `0.585` but still gets a
      few values wrong, like `1.005`.
    - **Work in whole cents** (e.g. `75` cents instead of `0.75`) and
      divide by 100 only when displaying. Real payment systems do this.

## Question 4

Create a new file named `u2-e03-4.ts`. Write a program that asks the
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

Create a new file named `u2-e03-5.ts`. Write a program that asks the
user for the coordinates of points A and B, then calculates and
outputs the distance `d`, using `Math.pow()` and `Math.sqrt()`.

---

**Next:** [Strings (Review) →](4-strings.md)
