Type annotations in TypeScript are used to explicitly specify the types of variables, function parameters, and return values. This helps in catching errors early and makes the code more readable and maintainable. Here are some examples of type annotations in TypeScript:

### Basic Type Annotations

```typescript
let isDone: boolean = false;
let age: number = 25;
let firstName: string = "John";
let list: number[] = [1, 2, 3, 4, 5];
let tuple: [string, number] = ["hello", 10]; // Tuple
```

### Function Type Annotations

1. **Function Parameters and Return Types**

```typescript
function add(x: number, y: number): number {
    return x + y;
}

let result: number = add(2, 3);
```

2. **Optional Parameters and Default Values**

```typescript
function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}`;
}

let message: string = greet("Alice");
```

3. **Rest Parameters**

```typescript
function buildName(firstName: string, ...restOfName: string[]): string {
    return firstName + " " + restOfName.join(" ");
}

let fullName: string = buildName("John", "Doe", "Smith");
```

### Interface Type Annotations

```typescript
interface Person {
    firstName: string;
    lastName: string;
    age?: number; // Optional property
}

function getPersonDetails(person: Person): string {
    return `${person.firstName} ${person.lastName}`;
}

let user: Person = {
    firstName: "John",
    lastName: "Doe"
};

let details: string = getPersonDetails(user);
```

### Class Type Annotations

```typescript
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distance: number = 0): void {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

let cat: Animal = new Animal("Kitty");
cat.move(10);
```

### Generics

```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output1: string = identity<string>("myString");
let output2: number = identity<number>(100);
```

### Enums

```typescript
enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Green;
```

### Type Aliases

```typescript
type StringOrNumber = string | number;

let sample: StringOrNumber;
sample = "Hello"; // Valid
sample = 10; // Valid
// sample = true; // Invalid, will cause an error
```

### Union and Intersection Types

```typescript
function padLeft(value: string, padding: string | number): string {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

let paddedString: string = padLeft("Hello", 4);
```

////////////////////////////////////////////////////////////////////////////


Function type annotations in TypeScript allow you to specify the types of function parameters and return values. This makes your functions safer and easier to understand. Here are some detailed examples with definitions:

### Function Type Annotations

1. **Basic Function with Parameter and Return Type**

```typescript
function add(x: number, y: number): number {
    return x + y;
}

// Usage
let result: number = add(2, 3); // 5
```

In this example, the `add` function takes two parameters, `x` and `y`, both of type `number`, and returns a value of type `number`.

2. **Function with Optional Parameters**

```typescript
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}`;
    } else {
        return `Hello, ${name}`;
    }
}

// Usage
let message1: string = greet("Alice"); // "Hello, Alice"
let message2: string = greet("Alice", "Good morning"); // "Good morning, Alice"
```

Here, the `greeting` parameter is optional, denoted by the `?`. If it's not provided, the function uses a default greeting.

3. **Function with Default Parameters**

```typescript
function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}`;
}

// Usage
let message1: string = greet("Alice"); // "Hello, Alice"
let message2: string = greet("Alice", "Good morning"); // "Good morning, Alice"
```

This example sets a default value for the `greeting` parameter. If no value is provided for `greeting`, "Hello" is used.

4. **Function with Rest Parameters**

```typescript
function buildName(firstName: string, ...restOfName: string[]): string {
    return firstName + " " + restOfName.join(" ");
}

// Usage
let fullName: string = buildName("John", "Doe", "Smith"); // "John Doe Smith"
```

The `restOfName` parameter uses the rest parameter syntax (`...`) to accept any number of additional arguments, which are stored in an array.

5. **Function Type Expressions**

```typescript
let myAdd: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

// Usage
let result: number = myAdd(5, 3); // 8
```

In this example, `myAdd` is a variable that holds a function. The type annotation `(x: number, y: number) => number` specifies a function that takes two `number` parameters and returns a `number`.

6. **Function Returning `void`**

```typescript
function logMessage(message: string): void {
    console.log(message);
}

// Usage
logMessage("Hello, World!"); // "Hello, World!" is logged to the console
```

The `logMessage` function doesn't return a value, so its return type is `void`.

7. **Function with Union Types in Parameters**

```typescript
function format(input: string | number): string {
    if (typeof input === "number") {
        return input.toFixed(2);
    } else {
        return input.toUpperCase();
    }
}

// Usage
let formattedString: string = format("hello"); // "HELLO"
let formattedNumber: string = format(123.456); // "123.46"
```

This function accepts either a `string` or a `number` as an argument, demonstrating the use of union types.

8. **Function with Intersection Types in Return**

```typescript
interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}

interface ArtworksData {
    artworks: { title: string }[];
}

function handleResponse(response: ArtworksData & ErrorHandling): string {
    if (response.success) {
        return `Found ${response.artworks.length} artworks.`;
    } else {
        return `Error: ${response.error?.message}`;
    }
}

// Usage
let response: ArtworksData & ErrorHandling = {
    success: true,
    artworks: [{ title: "Mona Lisa" }]
};

let result: string = handleResponse(response); // "Found 1 artworks."
```

Here, the `handleResponse` function uses an intersection type (`ArtworksData & ErrorHandling`) for its parameter, combining the properties of both interfaces.

These examples illustrate the flexibility and power of function type annotations in TypeScript, helping to ensure type safety and clarity in your code.