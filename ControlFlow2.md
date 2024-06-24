Control flow statements in TypeScript help manage the flow of execution in a program. These statements include conditional statements (`if...else`, `switch...case`), looping statements (`for`, `while`, `do...while`), and jump statements (`break`, `continue`). Here are detailed explanations and examples for each:

### `if...else` Statement

The `if...else` statement executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed.

```typescript
let age: number = 20;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Output: "You are an adult."
```

### `switch...case` Statement

The `switch...case` statement executes one block of code from multiple choices based on the value of a variable.

```typescript
let day: number = 3;
let dayName: string;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName);

// Output: "Wednesday"
```

### `for` Loop

The `for` loop repeats a block of code a specified number of times.

```typescript
for (let i: number = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
}

// Output:
// Iteration 0
// Iteration 1
// Iteration 2
// Iteration 3
// Iteration 4
```

### `while` Loop

The `while` loop repeats a block of code as long as a specified condition is true.

```typescript
let count: number = 0;

while (count < 5) {
    console.log(`Count is ${count}`);
    count++;
}

// Output:
// Count is 0
// Count is 1
// Count is 2
// Count is 3
// Count is 4
```

### `do...while` Loop

The `do...while` loop is similar to the `while` loop, but it executes the block of code once before checking the condition.

```typescript
let num: number = 0;

do {
    console.log(`Number is ${num}`);
    num++;
} while (num < 5);

// Output:
// Number is 0
// Number is 1
// Number is 2
// Number is 3
// Number is 4
```

### `break` Statement

The `break` statement terminates the loop or `switch` statement and transfers control to the statement following the terminated statement.

```typescript
for (let i: number = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(`Iteration ${i}`);
}

// Output:
// Iteration 0
// Iteration 1
// Iteration 2
```

### `continue` Statement

The `continue` statement skips the remaining statements in the current iteration of the loop and proceeds to the next iteration.

```typescript
for (let i: number = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(`Iteration ${i}`);
}

// Output:
// Iteration 0
// Iteration 1
// Iteration 2
// Iteration 4
```
