let age: number = 18;

if (age >= 18) {
  console.log("you are an adult");
} else {
  console.log("you are a minor");
}

let day: number = 1;
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

for (let i: number = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}

let count: number = 0;

while (count < 5) {
  console.log(`Count is ${count}`);
  count++;
}

for (let i: number = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(`Iteration ${i}`);
}

for (let i: number = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(`Iteration ${i}`);
}

