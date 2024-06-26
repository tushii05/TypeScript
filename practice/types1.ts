let firstName: string = "Dylan"; // Explicit type assignment are easier to read and more intentional.
console.log(typeof firstName);

let lastName = "Dylan"; // Implicit - TypeScript will "guess" the type, based on the assigned value:
console.log(typeof lastName);

const json = JSON.parse("67");
console.log(typeof json);

let isDone: boolean = false;
let age1: number = 25;
let firsName: string = "John";
let list: number[] = [1, 2, 3, 4, 5];
let tuple: [string, number] = ["hello", 10];

console.log(isDone, age, firsName, list[1], tuple[1]);

function add(x: number, y: number) {
  return x + y;
}

let result: number = add(2, 3);
console.log(result);

function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}`;
}

let message: string = greet("Alice");

console.log(message);

function buildName(firstName: string, ...restOfName: string[]): string {
  return firstName + " " + restOfName.join(" ");
}

let fullName: string = buildName("John", "Doe", "Smith");
console.log(fullName);

interface Person {
  firstName: string;
  lastName?: string;
  age?: number; // Optional property
}

function getPersonDetails(person: Person): string {
  return `${person.firstName} `;
}

let user: Person = {
  firstName: "John",
  //   lastName: "Doe",
};

let details: string = getPersonDetails(user);
console.log(details);

function greatIng(great: string, name?: string): string {
  if (name) {
    return `${great} ${name}`;
  } else {
    return `${great}`;
  }
}

let message1: string = greatIng("Alice");
console.log(message1);

function format(input: string | number): string {
  if (typeof input === "number") {
    return input.toFixed(1);
  } else {
    return input.toUpperCase();
  }
}

let formattedString: string = format("hello"); 
let formattedNumber: string = format(123.456);

console.log(formattedNumber, formattedString);


const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
// comment line below out to see the successful assignment
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head = numbers[3];

console.log(head);