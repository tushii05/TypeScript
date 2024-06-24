### Interfaces in TypeScript

Interfaces in TypeScript define the structure of an object. They can specify properties, methods, and their types, and are used to enforce type checking. Unlike classes, interfaces do not provide implementations for methods.

#### Basic Interface

```typescript
interface Person {
    name: string;
    age: number;
    greet(): void;
}

const person: Person = {
    name: "Alice",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

person.greet(); // Hello, my name is Alice and I am 30 years old.
```

### Extending Interfaces

Interfaces can extend other interfaces. This allows you to build on existing interfaces and create more complex types.

#### Extending an Interface

```typescript
interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    breed: string;
    bark(): void;
}

const dog: Dog = {
    name: "Buddy",
    age: 5,
    breed: "Golden Retriever",
    bark() {
        console.log("Woof! Woof!");
    }
};

console.log(dog.name); // Buddy
console.log(dog.breed); // Golden Retriever
dog.bark(); // Woof! Woof!
```

### Interfaces vs. Abstract Classes

Both interfaces and abstract classes are used to define the structure of a class, but they have some key differences.

#### Interfaces

- Interfaces only declare the structure (properties and methods) and do not provide any implementation.
- A class can implement multiple interfaces.
- Interfaces are a way to define the shape of data.

#### Abstract Classes

- Abstract classes can provide both abstract methods (without implementation) and concrete methods (with implementation).
- A class can extend only one abstract class.
- Abstract classes are used when you want to share implementation among several closely related classes.

#### Example: Interface

```typescript
interface Shape {
    getArea(): number;
}

class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}

    getArea(): number {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle(10, 20);
console.log(rectangle.getArea()); // 200
```

#### Example: Abstract Class

```typescript
abstract class Shape {
    abstract getArea(): number;

    describe(): void {
        console.log(`This shape has an area of ${this.getArea()}.`);
    }
}

class Circle extends Shape {
    constructor(public radius: number) {
        super();
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

const circle = new Circle(10);
circle.describe(); // This shape has an area of 314.1592653589793.
```

### Summary

- **Interfaces** are used to define the structure of an object. They are useful for defining data shapes and can be extended to create complex types.
- **Abstract classes** provide a way to define common behavior for a group of related classes while forcing subclasses to implement specific methods. They can include both abstract methods and concrete methods with implementation.

Choosing between interfaces and abstract classes depends on the specific needs of your application. Use interfaces for defining data structures and abstract classes when you need to share common behavior among related classes.