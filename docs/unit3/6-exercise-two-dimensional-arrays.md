# Exercise 6: Two-Dimensional Arrays

**Previous:** [← Lesson 6: Two-Dimensional Arrays](6-two-dimensional-arrays.md)

!!! note "Reminder"
    Put `export {};` at the end of each file that doesn't already start
    with an `import`.

## Question 1

Create a new file named `u3-e6-1.ts`. Create this 2D array:

```typescript
let grid: number[][] = [
  [8, 1, 6],
  [3, 5, 7],
  [4, 9, 2],
];
```

Using loops, output the grid, then output the **total of each row**,
the **total of each column**, and the **total of each diagonal**. What
do you notice about the answers?

## Question 2

Create a new file named `u3-e6-2.ts`. Build a **multiplication table**
from 1 to 9 in a 2D array using loops (so that `table[r][c]` holds
`(r + 1) × (c + 1)`). Then output it as a neat table with the numbers
lined up in columns.

!!! note "Hint"
    `String(x).padStart(3)` pads a number's text on the left with
    spaces until it is 3 characters wide.

## Question 3: Seating Chart

Create a new file named `u3-e6-3.ts`. Create a seating chart for a
classroom with **4 rows and 5 columns**, where every seat starts as
`"O"` (open). Write a program that repeatedly:

1. Displays the chart (`X` for taken seats, `O` for open ones)
2. Asks the user for a row and a column to reserve (numbered from 1),
   or `0` to quit
3. Rejects seats that are outside the chart or already taken

When the user quits, output how many seats were reserved and how many
are still open.

## Question 4: Tic-Tac-Toe Winner

Create a new file named `u3-e6-4.ts`. Write a function called `winner`
that takes a 3×3 board (`string[][]`) and returns `"X"` if X has three
in a row (across, down, or diagonally), `"O"` if O does, or `"none"`
otherwise. Test it on at least four different boards that cover rows,
columns, diagonals, and no winner.

## Question 5

Create a new file named `u3-e6-5.ts`. Create a file named `marks.txt`:

```
Ada,90,85,77
Linus,65,70,75
Grace,100,95,99
Alan,55,60,80
```

Write a program that reads the file into a 2D array, then outputs each
student's **average**, followed by the name of the student with the
**highest average**.

## Question 6: Challenge

Create a new file named `u3-e6-6.ts`. The **transpose** of a table
swaps its rows and columns, so the element at row `r`, column `c`
moves to row `c`, column `r`:

```
1 2 3        1 4
4 5 6   →    2 5
             3 6
```

Write a function called `transpose` that takes a `number[][]` and
returns a **new** transposed `number[][]`. Test it with the example
above.

---

**Next:** [Assignment 2 →](6-assignment-2.md)
