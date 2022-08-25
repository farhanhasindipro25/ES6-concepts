// let: Variables can be re-assigned.

let money = 25;
console.log(money);
money = 45;
console.log(money);

// const: Variables are not allowed to be re-assigned.

const firstName = "Alkaline";
console.log(firstName);

//firstName = "Farhan";
console.log("TypeError: Assignment to constant variable.");

const fullName = firstName + " Foster";
console.log(fullName);

const numbers = [12, 89, 65, 45];
console.log(numbers);
// Reassigning is not allowed
// numbers = [77, 66, 55, 22, 99];
console.log("TypeError: Assignment to constant variable.");

// Elements can be pushed inside a const array
numbers.push(123);
console.log(numbers);
// Elements of a const array can be set by index value
numbers[1] = 59;
console.log(numbers);

const student = {
  name: "Student1",
  address: "Address1",
};
console.log(student);
// Specific values of const objects can be changed.
student.name = "Student5";
console.log(student);

//
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  sum += number;
}
console.log("number: Cannot be accessed outside it's scope");
console.log(sum);

let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  sum1 += number;
}
console.log(number, ": The last element of the array");
console.log(sum1);
