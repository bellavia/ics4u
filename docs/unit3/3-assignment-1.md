# Assignment 1

**Previous:** [← Exercise 3: Arrays](3-exercise-arrays.md)

This assignment covers Lessons 1–3. Create a new file for each
question as noted below, inside your `unit-3` folder.

!!! warning "Array methods"
    You may use `.length` and `.push()` with arrays, but **no other
    array methods** (those come in the next lesson). Do not use any
    built-in array functions to find totals, largest values, etc. —
    write the loops yourself.

!!! note "Submission"
    Make sure your teacher has been invited to this Replit project.
    Add `export {};` to the end of each file.

## Question 1: Concepts

*Knowledge — 4 marks | Communication — 1 mark*

Create a new file named `u3-a1-1.ts`. Answer each of the following in
a comment at the top of the file, in your own words (1–3 sentences
each):

**a)** What is the difference between a **parameter** and an
**argument**?

**b)** What is the difference between a function that **returns** a
value and a function that uses `console.log()` to display one? Why is
returning usually more useful?

**c)** What is **scope**? Give an example of a variable that is *not*
accessible everywhere in a program.

**d)** What is an array's **index**, and what are the first and last
valid indexes of an array with 10 elements?

## Question 2: Triangle Toolkit

*Thinking — 2 marks | Application — 5 marks | Communication — 1 mark*

Create a new file named `u3-a1-2.ts`. Write the following functions:

- `isValidTriangle(a, b, c)` — returns `true` if the three sides can
  form a triangle (the sum of **any two** sides must be greater than
  the third)
- `perimeter(a, b, c)` — returns the perimeter
- `area(a, b, c)` — returns the area using **Heron's formula**:
  $s = \frac{a+b+c}{2}$, then $\text{area} = \sqrt{s(s-a)(s-b)(s-c)}$
- `triangleType(a, b, c)` — returns `"equilateral"` (all sides equal),
  `"isosceles"` (exactly two equal), or `"scalene"` (none equal)

Then write a program that asks the user for three side lengths. If the
sides can't form a triangle, output an error message. Otherwise, output
the type, perimeter, and area (to 2 decimal places).

```
Side a: 3
Side b: 4
Side c: 5
Type: scalene
Perimeter: 12
Area: 6.00
```

!!! note "Hint"
    Write a helper function (like `getPositiveNumber` from the lesson
    exercises) so you don't repeat the input-checking code three times.

## Question 3: Grade Book

*Application — 5 marks | Communication — 1 mark*

Create a new file named `u3-a1-3.ts`. Create an array containing the
marks `78, 92, 55, 83, 67, 99, 45, 71`. Write a function
`letterGrade(mark)` that returns `"A"` (80+), `"B"` (70–79), `"C"`
(60–69), `"D"` (50–59), or `"F"`.

Using loops, output:

1. Each mark with its letter grade, one per line
2. The highest mark and the lowest mark
3. The class average (2 decimal places)
4. How many students passed (50 or higher)
5. How many students earned an `A`

```
Mark 1: 78 (B)
Mark 2: 92 (A)
...
```

## Question 4: Number Analyzer

*Thinking — 2 marks | Application — 5 marks | Communication — 1 mark*

Create a new file named `u3-a1-4.ts`. Ask the user how many numbers
they want to enter (it must be a positive whole number — keep asking
until it is), then ask for that many numbers and store them in an
array. Output:

1. The numbers in **reverse** order
2. Whether the numbers were entered in **ascending order** (each
   number is greater than or equal to the one before it) — output
   `Sorted` or `Not sorted`
3. The **second-largest** value in the array (if the largest value
   appears more than once, then that value *is* the second-largest too)

```
How many numbers? 5
Number 1: 4
Number 2: 9
Number 3: 2
Number 4: 9
Number 5: 7
Reversed: 7 9 2 9 4
Not sorted
Second largest: 9
```

---

**Next:** [Lesson 4: Array Methods →](4-array-methods.md)
