# Lesson 6: Two-Dimensional Arrays

**Previous:** [← Exercise 5: Arrays & Functions](5-exercise-arrays-and-functions.md)

A regular array is like a single row of values. But lots of real
information comes in **tables** — a seating chart, a spreadsheet, a
game board, the pixels of an image. A **two-dimensional (2D) array**
stores a table by making each element of the array *another array*.

## Creating a 2D Array

Each inner array is one **row**. The type is written with two sets of
brackets, `number[][]` — "an array of arrays of numbers":

```typescript
let grid: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
```

You can picture it as a table:

| | col 0 | col 1 | col 2 |
|---|---|---|---|
| **row 0** | 1 | 2 | 3 |
| **row 1** | 4 | 5 | 6 |
| **row 2** | 7 | 8 | 9 |

## Accessing Elements

Use **two** indexes: the **row** first, then the **column**:

```typescript
console.log(grid[1][2]);
console.log(grid[0][0]);

grid[2][1] = 50;
console.log(grid[2]);
```

**Output:**
```
6
1
[ 7, 50, 9 ]
```

`grid[1]` on its own is the whole second row (a regular array), and
`grid[1][2]` is the element at index 2 *within* that row.

The number of **rows** is `grid.length`, and the number of **columns**
in a row is the length of that row:

```typescript
console.log(grid.length);
console.log(grid[0].length);
```

**Output:**
```
3
3
```

## Looping Through a 2D Array

Visiting every element takes a **nested loop** — the outer loop moves
through the rows, and the inner loop moves through the columns in the
current row:

```typescript
let total: number = 0;

for (let row = 0; row < grid.length; row++) {
  for (let col = 0; col < grid[row].length; col++) {
    total += grid[row][col];
  }
}

console.log(total);
```

**Output:**
```
87
```

(That's `1+2+3+4+5+6+7+50+9` — remember we changed one element to `50`.)

To print the table, you can loop over the rows and use `join()` to
turn each row into a line of text:

```typescript
for (let row = 0; row < grid.length; row++) {
  console.log(grid[row].join(" "));
}
```

**Output:**
```
1 2 3
4 5 6
7 50 9
```

Processing **one row at a time** is a very common pattern — for
example, finding the total of each row:

```typescript
for (let row = 0; row < grid.length; row++) {
  let rowTotal: number = 0;
  for (let col = 0; col < grid[row].length; col++) {
    rowTotal += grid[row][col];
  }
  console.log("Row " + row + " total: " + rowTotal);
}
```

**Output:**
```
Row 0 total: 6
Row 1 total: 15
Row 2 total: 66
```

To process **one column at a time**, swap the loops so the **column**
loop is on the outside.

## Building a 2D Array with Loops

Typing out a big table by hand isn't practical. Instead, build each row
in a loop, then `push()` the row into the table:

```typescript
let rows: number = 3;
let cols: number = 4;
let table: number[][] = [];

for (let r = 0; r < rows; r++) {
  let line: number[] = [];
  for (let c = 0; c < cols; c++) {
    line.push(r * c);
  }
  table.push(line);
}

for (const line of table) {
  console.log(line.join(" "));
}
```

**Output:**
```
0 0 0 0
0 1 2 3
0 2 4 6
```

!!! warning "Don't build a grid with `fill()` on a row"
    It's tempting to create a grid in one line like this:

    ```typescript
    let bad: number[][] = new Array(3).fill(new Array(3).fill(0));
    bad[0][0] = 1;
    console.log(bad);
    ```

    **Output:**
    ```
    [ [ 1, 0, 0 ], [ 1, 0, 0 ], [ 1, 0, 0 ] ]
    ```

    We only changed one element, but **every row** changed! `fill()`
    put the **same** inner array in all three positions (remember,
    arrays are passed by reference), so the three rows are really one
    row with three names. Always create a **new** row for each pass of
    a loop, as in the example above.

## Rows Can Have Different Lengths

The rows of a 2D array don't have to be the same length. This is
useful when each row holds a different amount of data — for example,
the quiz marks earned by each student:

```typescript
let quizMarks: number[][] = [
  [8, 9, 7],
  [10, 6],
  [5, 9, 9, 10],
];

for (let i = 0; i < quizMarks.length; i++) {
  console.log("Student " + (i + 1) + " wrote " + quizMarks[i].length + " quizzes");
}
```

**Output:**
```
Student 1 wrote 3 quizzes
Student 2 wrote 2 quizzes
Student 3 wrote 4 quizzes
```

This is why the inner loop should always use `grid[row].length`, not a
fixed number.

## A Game Board Example

2D arrays can hold any type. Here's a tic-tac-toe board using strings:

```typescript
let board: string[][] = [
  ["X", "O", "X"],
  [" ", "X", "O"],
  ["O", " ", "X"],
];

for (let r = 0; r < board.length; r++) {
  console.log(board[r].join(" | "));
}

if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
  console.log(board[0][0] + " wins on the diagonal!");
}
```

**Output:**
```
X | O | X
  | X | O
O |   | X
X wins on the diagonal!
```

## Reading a Table from a File

Combine what you learned about files in Unit 2 with `split()`: create
a file called `data.txt` containing one student per line, with the
values separated by commas:

```
Ada,90,85,77
Linus,65,70,75
Grace,100,95,99
```

Split the file into lines, then split each line into its own row:

```typescript
import * as fs from "fs";

const contents: string = fs.readFileSync("data.txt", "utf-8").trim();
const lines: string[] = contents.split(/\r?\n/);

let table: string[][] = [];
for (const line of lines) {
  table.push(line.split(","));
}

for (const row of table) {
  let total: number = 0;
  for (let c = 1; c < row.length; c++) {
    total += Number(row[c]);
  }
  console.log(row[0] + ": " + total / (row.length - 1));
}
```

**Output:**
```
Ada: 84
Linus: 70
Grace: 98
```

Two details to notice. First, everything read from a file is a
**string**, so the marks must be converted with `Number()`. Second,
`.trim()` removes the blank line that many editors add at the end of a
file — without it, the last "line" would be an empty string and
produce a bogus row.

!!! abstract "Keywords"
    - **Two-dimensional (2D) array** — an array whose elements are
      themselves arrays, used to store a table
    - **Row** — one inner array of a 2D array (the first index)
    - **Column** — a position within a row (the second index)
    - **Nested loop** — a loop inside another loop, used to visit every
      element of a 2D array
    - **Jagged array** — a 2D array whose rows have different lengths

---

**Next:** [Exercise 6: Two-Dimensional Arrays →](6-exercise-two-dimensional-arrays.md)
