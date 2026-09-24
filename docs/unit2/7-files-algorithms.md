# Input-Output Files & Algorithms

**Previous:** [← Exercise 6: Repetition (Loops)](6-exercise-repetition-loops.md)

In this lesson we'll look at how to read from and write to files, and
then discuss what an algorithm actually is.

## Reading and Writing Files in Replit

Node (which runs your compiled TypeScript) has a built-in module
called `fs` ("file system") for reading and writing files — no
installation needed.

**Step 1.** Create a new file named `input.txt` in the **same folder**
as your `.ts` file, using the Files panel in Replit. Type in the
following:

```
Smith
John
87
Doe
Jane
93
Sacramento
Bob
57
```

This file contains **3 records**, where each record is 3 lines: last
name, first name, and mark.

**Step 2.** Import `fs` at the top of your `.ts` file:

```typescript
import * as fs from "fs";
```

## Reading a File

Unlike some languages that read a file one line at a time from a
stream, Node typically reads the **entire file at once** into memory,
then splits it into lines:

```typescript
import * as fs from "fs";

const INPUT_FILE = "input.txt";
const OUTPUT_FILE = "output.txt";

// read the entire file, then split it into an array of lines
const fileContents: string = fs.readFileSync(INPUT_FILE, "utf-8");
const lines: string[] = fileContents.split(/\r?\n/);

let total: number = 0;
let count: number = 0;

// step through the lines 3 at a time (one record = 3 lines)
for (let i = 0; i < lines.length; i += 3) {
  const lastName: string = lines[i];
  const firstName: string = lines[i + 1];
  const mark: number = Number(lines[i + 2]);

  console.log(firstName + " " + lastName + ": " + mark);

  total += mark;
  count++;
}

const avg: number = total / count;
console.log("\nClass Average: " + avg);

// write the average to an output file
fs.writeFileSync(OUTPUT_FILE, avg.toString());
```

**Output:**
```
John Smith: 87
Jane Doe: 93
Bob Sacramento: 57

Class Average: 79
```

This also creates a file called `output.txt` in the same folder,
containing `79`.

Walking through the key pieces:

- **`fs.readFileSync(INPUT_FILE, "utf-8")`** — reads the whole file's
  contents into one big string. The `"utf-8"` tells Node how to
  interpret the file's text encoding.
- **`.split(/\r?\n/)`** — breaks that string into an array of
  individual lines, one array element per line. (The `/\r?\n/` pattern
  handles both Windows-style and Mac/Linux-style line endings safely.)
- **`for (let i = 0; i < lines.length; i += 3)`** — since we know each
  record is exactly 3 lines, we can step through the array 3 at a
  time, rather than reading and checking for an "end of file" signal
  the way some other languages do.
- **`fs.writeFileSync(OUTPUT_FILE, avg.toString())`** — writes a
  string to a file, creating it if it doesn't exist, or overwriting it
  completely if it does. Note that `.toString()` is needed since
  `fs.writeFileSync()` expects a string, not a number.

!!! note "Reading vs. writing"
    `fs.readFileSync()` returns a file's contents as a string.
    `fs.writeFileSync()` takes a string and saves it to a file,
    completely replacing whatever was there before. There's no
    separate "open" or "close" step needed — each function handles the
    whole file in one call.

## Algorithms

What we've built in this lesson — and in several examples throughout
this course — are called **algorithms**. An algorithm is a set of
steps designed to solve a problem, built so it works correctly for
*any* valid input, not just one specific case. Our student-records
program above is an algorithm: it works correctly no matter how many
records the input file actually contains.

Algorithms can become extremely complex — think of the algorithm
behind a search engine like Google, running on servers worldwide,
constantly refined by teams of engineers. But at its core, every
algorithm — simple or complex — is just a sequence of steps solving a
problem.

!!! note "There's no single 'right' algorithm"
    Different programmers often solve the same problem with different,
    equally valid algorithms. A good algorithm usually comes down to
    simplicity and efficiency — a skill that improves with practice and
    experience.

!!! abstract "Keywords"
    - **`fs`** — Node's built-in file system module
    - **`fs.readFileSync()`** — reads an entire file's contents as a
      string
    - **`fs.writeFileSync()`** — writes a string to a file, overwriting
      any existing contents
    - **Algorithm** — a set of steps designed to solve a problem for
      any valid input

---

**Next:** [Exercise 7: Input-Output Files & Algorithms →](7-exercise-files-algorithms.md)
