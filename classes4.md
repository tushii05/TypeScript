Classes in TypeScript provide a powerful way to create reusable components, encapsulate data, and implement object-oriented programming principles. Here's a comprehensive look at how to use classes in TypeScript, covering construction, access modifiers, readonly modifier, getters & setters, inheritance, static methods & properties, and abstract classes.

### Constructing a Class

To define a class in TypeScript, you use the `class` keyword followed by the class name. You can then define properties and methods within the class.

```typescript
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person1 = new Person("Alice", 30);
person1.greet(); // Hello, my name is Alice and I am 30 years old.
```

### Access Modifiers

Access modifiers control the visibility of class members. TypeScript provides three access modifiers: `public`, `private`, and `protected`.

- `public`: Members are accessible from anywhere.
- `private`: Members are accessible only within the class.
- `protected`: Members are accessible within the class and its subclasses.

```typescript
class Employee {
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    public getDetails(): string {
        return `Name: ${this.name}, Department: ${this.department}`;
    }

    private getSalary(): number {
        return this.salary;
    }
}

let employee1 = new Employee("John", 50000, "HR");
console.log(employee1.getDetails()); // Name: John, Department: HR
// console.log(employee1.getSalary()); // Error: Property 'getSalary' is private and only accessible within class 'Employee'.
```

### The `readonly` Modifier

The `readonly` modifier makes a property immutable after it has been initialized.

```typescript
class Car {
    readonly model: string;
    readonly year: number;

    constructor(model: string, year: number) {
        this.model = model;
        this.year = year;
    }
}

let car1 = new Car("Toyota", 2021);
console.log(car1.model); // Toyota
// car1.model = "Honda"; // Error: Cannot assign to 'model' because it is a read-only property.
```

### Getters & Setters

Getters and setters allow you to control access to a class's properties.

```typescript
class Circle {
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        if (value <= 0) {
            throw new Error("Radius must be positive.");
        }
        this._radius = value;
    }

    getArea(): number {
        return Math.PI * this._radius * this._radius;
    }
}

let circle1 = new Circle(5);
console.log(circle1.radius); // 5
circle1.radius = 10;
console.log(circle1.getArea()); // 314.1592653589793
```

### Inheritance

Inheritance allows you to create a new class that extends an existing class. The new class (subclass) inherits the properties and methods of the existing class (superclass).

```typescript
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distance: number): void {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

class Dog extends Animal {
    bark(): void {
        console.log("Woof! Woof!");
    }
}

let dog = new Dog("Buddy");
dog.bark(); // Woof! Woof!
dog.move(10); // Buddy moved 10 meters.
```

### Static Methods & Properties

Static methods and properties belong to the class itself rather than to instances of the class.

```typescript
class MathUtil {
    static PI: number = 3.14159;

    static circleArea(radius: number): number {
        return MathUtil.PI * radius * radius;
    }
}

console.log(MathUtil.PI); // 3.14159
console.log(MathUtil.circleArea(5)); // 78.53975
```

### Abstract Classes

Abstract classes cannot be instantiated and are meant to be subclassed. They can contain abstract methods, which must be implemented by subclasses.

```typescript
abstract class Shape {
    abstract getArea(): number;

    describe(): void {
        console.log(`This is a shape with an area of ${this.getArea()}.`);
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

let rectangle = new Rectangle(10, 20);
rectangle.describe(); // This is a shape with an area of 200.
```
