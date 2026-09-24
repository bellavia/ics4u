# Exercise 4: Strings

**Previous:** [← Strings (Review)](4-strings.md)

!!! note "Many ways to solve these"
    There's often more than one correct approach. Your creativity is
    important!

## Question 1

Create a new file named `u1-e04-1.ts`. Create the following string:

```typescript
let myString: string = "Computer Science is the best course ever!";
```

Output each word to the console on a separate line, using
`.substring()`. Also output the first letter of each word (using
square-bracket indexing) each on a separate line.

## Question 2

Create a new file named `u1-e04-2.ts`. Write a program that asks the
user for their first name and last name (2 separate variables). Create
a third variable called `fullName` and use string concatenation to
combine them. Output a greeting using their full name, and tell the
user how many characters long their full name is (not counting the
space between first and last name).

## Question 3: Removing Characters

TypeScript doesn't have a built-in "remove" function, but you can
rebuild the same effect using `.slice()`:

```typescript
let s: string = "Computer Science is the best";
s = s.slice(0, 16) + s.slice(16 + 7);
console.log(s);
```

**Output:**
```
Computer Science best
```

Create a new file named `u1-e04-3.ts`. **Do not** use `.substring()`
for these questions:

**a)** Write a program that asks the user to type a sentence, then asks
for a **start index** and a **length** to erase. Output the resulting
string.

**b)** Modify the program so instead of a start index and length, it
asks for a **start index** and an **end index** (removing all
characters from the start index up to and including the end index).

## Question 4: Find and Replace

Create a new file named `u1-e04-4.ts`. Write a program that asks the
user to type a sentence, then a word from that sentence to replace,
then a word to replace it with. Output the resulting sentence.

Your input and output should work **exactly** like the following:

```
Enter a sentence: Hello Computer Science students in this class!
Enter a word from this sentence that you would like to replace: students
Enter a word to replace 'students' with: pupils
Hello Computer Science pupils in this class!
```

!!! note "Hint"
    Look up the built-in `.replace()` string function.

!!! note "BONUS"
    Modify your program so it works even if the word to replace
    doesn't match the sentence's capitalization exactly. Hint:
    `.toUpperCase()` or `.toLowerCase()`.

---

**Next:** [Assignment 1 →](4-assignment-1.md)
