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

Using loops, output the grid, then the **total of each row** and the
**total of each column**.

## Question 2

Create a new file named `u3-e6-2.ts`. Build a **multiplication table**
from 1 to 9 in a 2D array using loops (`table[r][c]` holds
`(r + 1) × (c + 1)`), then output it with the numbers lined up in
columns.

!!! note "Hint"
    `String(x).padStart(3)` pads text on the left with spaces until it
    is 3 characters wide.

## Question 3: Seating Chart

Create a new file named `u3-e6-3.ts`. Create a classroom seating chart
with **4 rows and 5 columns**, where every seat starts as `"O"` (open).
Repeatedly display the chart (`X` for taken, `O` for open) and ask for a
row and column to reserve (numbered from 1, or `0` to quit). Reject
seats that are off the chart or already taken. On quitting, output how
many seats were reserved and how many are open.

## Question 4

Create a new file named `u3-e6-4.ts`. Create a file named `marks.txt`:

```
Ada,90,85,77
Linus,65,70,75
Grace,100,95,99
Alan,55,60,80
```

Read the file into a 2D array, then output each student's **average**
and the name of the student with the **highest average**.

---

**Next:** [Lesson 7: Objects →](7-objects.md)
