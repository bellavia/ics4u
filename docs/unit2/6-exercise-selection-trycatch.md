# Exercise 6: Selection & Try-Catch

**Previous:** [← Lesson 6: Selection: If-Statements & Try-Catch](6-selection-if-trycatch.md)

!!! note "Try to use logical operators where you can"
    There are many ways to attempt these questions — your creativity
    is important!

## Question 1

Create a new file named `u1-e06-1.ts`. Write a program that asks the
user to type 'apple', 'orange', or 'banana'. Output an appropriate
message for the fruit they chose, or an error message otherwise.

## Question 2

Create a new file named `u1-e06-2.ts`. Write a program that asks the
user to input three numbers. Output the largest of the three.

## Question 3

Create a new file named `u1-e06-3.ts`. Write a program that asks the
user to input an integer. Output whether the number is odd or even.

## Question 4: Guess the Number

The following code generates a random whole number from 1 to 10:

```typescript
let r: number = Math.floor(Math.random() * 10) + 1;
```

Create a new file named `u1-e06-4.ts`. Write a program that asks the
user to guess a number from 1 to 10, generates a random number using
the code above, and checks if they guessed correctly.

!!! note "Requirements"
    - Test whether the input was actually in range (between 1 and 10).
    - Use a **try-catch** block (with `isNaN` and `throw`, as covered
      in the lesson) to handle bad input.

## Question 5: Hurricane Categories

The Saffir-Simpson Hurricane Scale rates hurricanes by intensity.
Create a new file named `u1-e06-5.ts`. Write a program that asks for 3
hurricane speeds — the first in mph, the second in kt, and the third
in km/hr.

!!! warning "How to run it"
    Tell the user to enter a value for only **one** of the three
    speeds, and `0` for the other two. For example:
    ```
    Please enter a value for mph: 0
    Please enter a value for kt: 85
    Please enter a value for km/hr: 0
    ```

**Saffir-Simpson Hurricane Scale for wind speeds:**

- **Category 1:** 74–95 mph or 64–82 kt or 119–153 km/hr
- **Category 2:** 96–110 mph or 83–95 kt or 154–177 km/hr
- **Category 3:** 111–130 mph or 96–113 kt or 178–209 km/hr
- **Category 4:** 131–155 mph or 114–135 kt or 210–249 km/hr
- **Category 5:** greater than 155 mph or 135 kt or 249 km/hr

Output which category each of the 3 inputted speeds falls into. Try to
use as few if-statements as possible by combining conditions with
logical operators. Use a try-catch block to handle bad data.

---

**Next:** [Lesson 7: Repetition: Loops (Review) →](7-repetition-loops.md)
