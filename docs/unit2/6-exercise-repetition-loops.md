# Exercise 6: Repetition (Loops)

**Previous:** [← Repetition: Loops (Review)](6-repetition-loops.md)

## Question 1

Create a new file named `u1-e06-1.ts`. Using a single `for` loop for
each part, produce the following outputs:

**a)** The first 10 natural numbers, each on a separate line:
```
1
2
3
4
5
6
7
8
9
10
```

**b)** Every 3rd number from 0 to 21, separated by a space on one line:
```
0 3 6 9 12 15 18 21
```

**c)** Every 4th number backwards from 50 to 40, separated by a space:
```
50 46 42
```

**d)** All numbers between a user-inputted number `x` and 35, separated
by a space:
```
Please enter an integer: 30
30 31 32 33 34 35
```

## Question 2

Create a new file named `u1-e06-2.ts`. Write a program that asks the
user for a sentence and calculates how many vowels are in it.

!!! note "Hint"
    Use a `for` loop to iterate through each character, and a separate
    counter variable that increments whenever a vowel is found. Check
    for both uppercase and lowercase vowels.

## Question 3

Create a new file named `u1-e06-3.ts`. Write a program that asks the
user for a sentence, then a character, and calculates how many times
that character appears in the sentence.

## Question 4

Create a new file named `u1-e06-4.ts`. Write a program that asks the
user how many numbers they wish to input.

**a)** Use a `for` loop to ask for all the numbers and accumulate their
total. Once the loop finishes, output the average to 2 decimal places.

**b)** After the loop, output the **lowest** and **highest** numbers
that were entered.

!!! note "Hint"
    Before your loop starts, create:
    ```typescript
    let highest: number = -Infinity;
    let lowest: number = Infinity;
    ```
    `-Infinity` and `Infinity` work well here since any real number
    entered will immediately be lower/higher than them, letting your
    comparisons inside the loop work correctly from the very first
    input.

**c)** Check for invalid input using a **try-catch** block, a
**boolean flag**, and a **break** statement, just like in the lesson.

## Question 5: Patterns

Create a new file named `u1-e06-5.ts`. Using nested `for` loops, output
each of the following patterns:

**a)**
```
0 1 2 3 4 5
0 1 2 3 4 5
0 1 2 3 4 5
```

**b)**
```
0 1 2 3 4 5
1 2 3 4 5 6
2 3 4 5 6 7
```

**c)**
```
     *
   ***
 *****
*******
```

**d)**
```
1
22
333
4444
55555
```

**e)**
```
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
```

!!! note "Hint"
    Use the modulus operator (`%`) for pattern (b).

!!! note "BONUS: Floyd's Triangle"
    ```
    1
    212
    32123
    4321234
    543212345
    ```

---

**Next:** [Input-Output Files & Algorithms →](7-files-algorithms.md)
