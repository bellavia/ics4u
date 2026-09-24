# Assignment 2

**Previous:** [← Exercise 7: Input-Output Files & Algorithms](7-exercise-files-algorithms.md)

This assignment covers Lessons 6–8. Create a new file for each
question as noted below, inside your `unit-1` folder.

!!! note "Submission"
    Make sure your teacher has been invited to this Replit project.

## Question 1: Student Login Generator

A student login is generated using the **first 7 letters** of a last
name, plus the **first 2 letters** of a first name, plus the **last 3
digits** of a student number.

Create a new file named `u1-a2-1.ts`. Write a program that reads
student records from a file and generates each student's login
(output the logins to the console). Use `.length` and `.substring()`.

!!! note "Notes"
    - If a last name has fewer than 7 letters, use the entire last
      name.
    - You can assume the first name always has at least 2 letters.
    - The student number is always 9 digits.

**Sample input file (`input.txt`):**
```
3
John
Smith
225563486
Jane
Doe
225574593
Jack
White
225589475
```

The first line indicates how many records follow. Each record after
that is 3 lines: first name, last name, and student number.

## Question 2: Electricity Bill

Create a new file named `u1-a2-2.ts`. Write a program that asks the
user for a number of electricity units used (a whole number), and
calculates their total bill:

- First 50 units: $0.50/unit
- Next 100 units: $0.75/unit
- Next 100 units: $1.20/unit
- All units above 250: $1.50/unit
- An additional 20% surcharge is added to the total bill

## Question 3: Golf Par Ratings

The USGA yardage guidelines for par ratings:

| | Men | Women |
|---|-----|-------|
| **Par 3** | Up to 250 yards | Up to 210 yards |
| **Par 4** | 251–470 yards | 211–400 yards |
| **Par 5** | 471–690 yards | 401–575 yards |
| **Par 6** | 691+ yards | 576+ yards |

Create a new file named `u1-a2-3.ts`. Write a program that asks the
user for their gender (male or female), then the hole length in yards,
and outputs whether the hole is a par 3, 4, 5, or 6. Use logical
operators in your conditions.

## Question 4: Factorial

The factorial of a non-negative integer `n` (written `n!`) is the
product of all positive integers less than or equal to `n`. For
example, `5! = 5 × 4 × 3 × 2 × 1 = 120`. The one exception: `0! = 1`.

Create a new file named `u1-a2-4.ts`. Write a program that:

1. Uses a **while loop** to keep asking the user for a non-negative
   integer until they enter a valid one (do some basic error
   checking).
2. Uses a **for loop** to calculate the factorial of that integer, and
   outputs the result with an appropriate message.

!!! note "Special case"
    Handle the case where the user enters `0` — the factorial is `1`,
    and the for loop doesn't need to run at all.

## Question 5: Patterns

Using nested `for` loops, output each of the following patterns:

**a)**
```
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
```

**b)**
```
1
0 1
0 1 0
1 0 1 0
1 0 1 0 1
```

!!! note "Hint"
    Use the modulus operator (`%`) for pattern (b).

**c)** Ask the user how many rows they want, then output this pattern
based on that number of rows (example shows 5 rows):

```
* * * * *
* * * *
* * *
* *
*
```

Create a new file named `u1-a2-5.ts` for all three parts (submit only
one file for this question).

---

*This is the final assignment for this unit.*
