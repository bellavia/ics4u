# Exercise 2: Functions in Depth

**Previous:** [← Lesson 2: Functions in Depth](2-functions-in-depth.md)

## Question 1: Predict the Output

Create a new file named `u3-e2-1.ts` and type in the following code:

```typescript
let a: number = 1;

function f(): void {
  let a: number = 2;
  console.log(a);
}

function g(a: number): void {
  a = a + 10;
  console.log(a);
}

f();
g(a);
console.log(a);
```

**Before running it**, write a comment at the top of the file with the
three lines you predict will be output. Then run it, and add a second
comment explaining any differences between your prediction and the real
output.

## Question 2

Create a new file named `u3-e2-2.ts`. Write a function called
`getPositiveInteger` that takes a message, then keeps asking the user
until they enter a **positive whole number**, and returns it. Use it to
ask the user how many times to repeat the word `Hello`, then output
that many lines.

!!! note "Hint"
    Check both `isNaN()` and `Number.isInteger()`, as well as that the
    number is greater than `0`.

## Question 3

Create a new file named `u3-e2-3.ts`. Write a function called `isPrime`
that takes a whole number and **returns** `true` if it is prime, and
`false` otherwise. Use it to output all the prime numbers between 1 and
50.

!!! note "Hint"
    A prime number is greater than 1 and has no divisors other than 1
    and itself. You only need to test divisors up to the number's
    square root.

## Question 4

Create a new file named `u3-e2-4.ts`. Write a function called
`repeatChar` that takes a character and a number of times, and
**returns** a string with that character repeated. The number of times
should have a **default value of 10**. Test it:

```
repeatChar("*")      →  **********
repeatChar("-", 4)   →  ----
```

## Question 5

Create a new file named `u3-e2-5.ts`. Write a function called
`letterGrade` that takes a mark and returns `"A"` (80+), `"B"` (70–79),
`"C"` (60–69), `"D"` (50–59), or `"F"`. Write a **second** function
called `isPassing` that takes a mark and returns `true` if the mark is
a passing grade — it must **call `letterGrade`** to decide.

Ask the user for a mark and output both the letter grade and whether
they passed.

## Question 6: Challenge

Create a new file named `u3-e2-6.ts`. The **greatest common divisor**
(GCD) of two numbers is the largest number that divides both evenly.
**Euclid's algorithm** finds it like this:

1. While `b` is not `0`:
    - Replace `a` with `b`, and `b` with the remainder of `a ÷ b`
      (you'll need a temporary variable).
2. The answer is `a`.

Write a function called `gcd` that implements this, and test it with
`gcd(48, 18)` (answer: `6`) and `gcd(17, 5)` (answer: `1`).

---

**Next:** [Lesson 3: Arrays →](3-arrays.md)
