// Immediately Invoked Function(IIFE)
const results = (function (a, b) {
    return a + b;
})(2, 5);
console.log(results); // Output: 7

//currying 
function add(a) {
    return function (b) {
        return a + b;
    }
}
console.log(add(2)(5));

//memoization
function addTo256(num) {
    return num + 256;
}
console.log(addTo256(20));

// constructor function
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var person1 = new Person("Vivek", 76, "male");
console.log(person1);

// arrow function

var add = (a, b) => {
    return a + b;
}

console.log(add(4, 5));

