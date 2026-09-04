# Lesson 1: Setting Up Your Environment (Review)

**Previous:** [← Assignment 2](../unit1/4-assignment-2.md)

Welcome to Unit 2! This unit is a deeper review of the programming
fundamentals from ICS3U — variables, output, input, strings, selection,
loops, and a few new topics like error handling and file I/O — all
using the same TypeScript and Replit environment you already know.

## No New Setup Needed

Unlike some review courses that ask you to install a new IDE and SDK,
you don't need to install anything new for this review. You're already
set up: the same Replit account, the same compile-then-run workflow
(`npx tsc` → `node`), and the same Shell you used throughout Unit 1.

## Setting Up This Unit's Folder

Just like previous units, create a new folder for this unit's work,
inside the same Replit project you've been using:

```bash
mkdir unit-1
cd unit-1
```

!!! note "Naming convention"
    This folder is called `unit-1`, continuing on from `unit-0` in the
    last unit — this internal folder numbering is separate from the
    site's unit numbering (this is Unit 2 on the site). Don't worry
    about matching the two up.

## A Quick Environment Check

Before moving on, confirm the basics still work. Create a file named
`u1-check.ts`:

```typescript
console.log("Environment check: OK");
```

Compile and run it:

```bash
npx tsc u1-check.ts
node u1-check.js
```

If you see `Environment check: OK` printed in the Shell, you're ready
to continue.

!!! abstract "Keywords"
    - **Review** — revisiting previously learned material to reinforce
      and deepen understanding

---

**Next:** [Exercise 1: Setting Up Your Environment →](1-exercise-setting-up-environment.md)
