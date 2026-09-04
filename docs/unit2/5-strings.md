# Lesson 5: Strings (Review)

**Previous:** [← Exercise 4: Input, BEDMAS, & Decimal Output](4-exercise-input-bedmas-decimal-output.md)

Let's review the major string concepts: string variables, input,
length, positions, substrings, and searching.

## Review: String Variables & Concatenation

```typescript
let s1: string = "Hello";
let s2: string = " World!";
let s3: string = "\nHave a great day!";
let s4: string = s1 + s2 + s3;
console.log(s4);
```

**Output:**
```
Hello World!
Have a great day!
```

Joining strings together with `+` is called **concatenation**.

## Review: String Input

```typescript
let myString: string = prompt("Enter your name: ") ?? "";
console.log("\n" + myString);
```

## Review: String Length

```typescript
let myString: string = "Hello World";
console.log("'myString' has a length of " + myString.length);
```

**Output:**
```
'myString' has a length of 11
```

## Review: String Positions

```typescript
let myString: string = "Hello World";
console.log("The seventh character is: " + myString[6]);
```

**Output:**
```
The seventh character is: W
```

String positions (**indexes**) start at `0`.

## Review: Substrings

```typescript
let myString: string = "Hello World";
console.log(myString.substring(2, 5));
```

**Output:**
```
llo
```

!!! warning "Substring signature reminder"
    `.substring(startIndex, endIndex)` takes a **start index** and an
    **end index** — not a length. It extracts everything up to, but
    not including, the end index.

## Review: Searching Strings

```typescript
let myString: string = "Hello World";
console.log(myString.indexOf("World"));   // 6
console.log(myString.indexOf("world"));   // -1 (case sensitive, not found)
```

`.indexOf()` can also take a second parameter — the index to start
searching from:

```typescript
console.log("Hello World, Hello Universe".indexOf("Hello", 1));  // 13
```

!!! abstract "Keywords"
    - **Concatenation** — joining strings together with `+`
    - **Index** — a character's position within a string, starting at 0
    - **`.substring(start, end)`** — extracts characters up to (not
      including) the end index
    - **`.indexOf()`** — searches for text, returning its index or `-1`

---

**Next:** [Exercise 5: Strings →](5-exercise-strings.md)
