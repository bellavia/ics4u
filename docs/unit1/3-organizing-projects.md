# Lesson 3: Creating a TypeScript Project

**Previous:** [← Lesson 2: Setting Up Replit](2-setting-up-replit.md)

In this lesson you'll create, write, compile, and run your first
TypeScript file.

## Creating and Opening a File

You can also create new files directly from the Shell instead of using
the Files panel. Try typing this into the Shell:

```bash
touch hello.ts
```

`touch` creates a new, empty file — in this case one called `hello.ts`.

!!! note "What is a `.ts` file?"
    `.ts` is the file extension for **TypeScript**, the programming
    language we're using throughout this course. TypeScript is built on
    top of JavaScript — one of the most widely used languages in the
    world, especially for building websites and apps — but adds extra
    structure that helps catch mistakes *before* your code even runs.

    Learning to code in TypeScript means everything you write (`.ts`
    files) gets translated into plain JavaScript before it actually
    runs, which is why you'll always see a **compile step** (`tsc`)
    before a **run step** (`node`) in this course.

You can confirm the file was created by typing:

```bash
ls
```

`ls` (short for "list") shows every file in your current folder. You
should see `hello.ts` listed.

![Touch and ls commands](../assets/images/replit-touch-ls-circle.png){: width="700" style="display:block;margin:0 auto;border:1px solid #ccc;border-radius:8px;" }

**To open the file and start coding:**

**Step 1.** Click back into the main project area (left panel), out of
the Shell

**Step 2.** Click the panel toggle icon in the top-right corner to open
the side panel, then click the **Files** tab (next to Library) — this
shows every file in your project

![Panel toggle and Files tab](../assets/images/replit-panel-toggle-circle.png){: width="700" style="display:block;margin:0 auto;border:1px solid #ccc;border-radius:8px;" }

**Step 3.** Click `hello.ts` from that list — it opens in the code
editor, ready for you to type

Write your code in the editor. For example:

```typescript
console.log("Hello, TypeScript!");
```

![hello.ts with code](../assets/images/replit-hello-ts-code-circle.png){: width="700" style="display:block;margin:0 auto;border:1px solid #ccc;border-radius:8px;" }

Once you're editing, the Shell tab stays open in the background — click
back to it any time to compile and run your file.

**Step 1.** Install TypeScript in your project (only needs to be done
once per project):

```bash
npm install typescript --save-dev
```

**Step 2.** Compile your file into plain JavaScript:

```bash
npx tsc hello.ts
```

**Step 3.** Run the compiled file:

```bash
node hello.js
```

- `npx tsc hello.ts` — runs the TypeScript compiler on your file. It
  checks your code for type errors, then converts `hello.ts` into a
  plain JavaScript file called `hello.js`. Node can't run TypeScript
  directly, so this translation step is required.
- `node hello.js` — runs the compiled JavaScript file, actually
  executing your code and printing the output to the Shell.

In short: **compile, then run** — two separate steps, since TypeScript
never runs directly; it always gets converted to JavaScript first.

![Compile and run output](../assets/images/replit-tsc-node-output-circle.png){: width="700" style="display:block;margin:0 auto;border:1px solid #ccc;border-radius:8px;" }

You should see `Hello, TypeScript!` printed in the Shell — your code
compiled and ran successfully.

## Checking Your Work

Now that you've compiled and run your file, run `ls` again in the
Shell:

```bash
ls
```

You should notice a few new things compared to before:

- **`hello.js`** — the compiled JavaScript file created by `npx tsc`
- **`node_modules`** — a folder created by `npm install`, containing
  the TypeScript compiler itself
- **`package.json`** and **`package-lock.json`** — files that keep
  track of which packages your project depends on

You can also check this two different ways at once: the **Shell**
output on the left, and the **Files** panel on the right, side by side.
Both should show the exact same set of files — a good habit to build,
since it confirms your commands actually did what you expected.

![ls output matching Files panel](../assets/images/replit-ls-files-match.png){: width="700" style="display:block;margin:0 auto;border:1px solid #ccc;border-radius:8px;" }

!!! abstract "Keywords"
    - **`touch`** — creates a new, empty file
    - **`ls`** — lists files and folders in the current location
    - **`.ts` file** — a TypeScript source code file
    - **Compile** — translating code into a form the computer can run
      (`npx tsc`)
    - **`.js` file** — the plain JavaScript file produced by compiling
    - **`npm install`** — downloads and installs a package (like
      TypeScript itself)
    - **`node_modules`** — a folder holding installed packages
    - **`package.json`** — a file tracking which packages a project
      depends on

---

**Next:** [Assignment →](3-assignment.md)
