Functions in TypeScript allow you to write reusable pieces of code that can be called with different parameters. TypeScript provides features like function types, optional parameters, default parameters, rest parameters, and function overloading to enhance the functionality and flexibility of functions.

### Function Type

In TypeScript, you can specify the types of parameters and the return type of a function. This helps in ensuring that the function is used correctly throughout the codebase.

```typescript
function add(x: number, y: number): number {
  return x + y;
}

let result: number = add(5, 3); // 8
```

### Optional Parameters

Optional parameters are defined by placing a `?` after the parameter name. These parameters are not required when calling the function.

```typescript
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}`;
  } else {
    return `Hello, ${name}`;
  }
}

let message1: string = greet("Alice"); // "Hello, Alice"
let message2: string = greet("Alice", "Good morning"); // "Good morning, Alice"
```

### Default Parameters

Default parameters allow you to initialize parameters with default values if no value or `undefined` is passed.

```typescript
function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}`;
}

let message1: string = greet("Alice"); // "Hello, Alice"
let message2: string = greet("Alice", "Good morning"); // "Good morning, Alice"
```

### Rest Parameters

Rest parameters allow you to pass an indefinite number of arguments as an array.

```typescript
function buildName(firstName: string, ...restOfName: string[]): string {
  return firstName + " " + restOfName.join(" ");
}

let fullName: string = buildName("John", "Doe", "Smith"); // "John Doe Smith"
```

### Function Overloading

Function overloading allows you to define multiple signatures for a function. The actual implementation should match one of the defined signatures.

```typescript
function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x: any): any {
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  } else if (typeof x == "number") {
    let suits = ["hearts", "spades", "clubs", "diamonds"];
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [
  { suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 },
  { suit: "hearts", card: 4 },
];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log(`card: ${pickedCard1.card} of ${pickedCard1.suit}`);

let pickedCard2 = pickCard(15);
console.log(`card: ${pickedCard2.card} of ${pickedCard2.suit}`);
```

In the above example, the `pickCard` function is overloaded to handle both an array of card objects and a single card number.

These features of TypeScript functions provide a lot of flexibility and type safety, making your code more robust and maintainable.
