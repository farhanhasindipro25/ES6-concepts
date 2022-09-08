// 1. Creating Objects using object literals
const player = {};
// Object Properties
player.name = "Alkaline Foster";
player.speciality = "Sentinel";
// Object Methods
player.aim = function () {
  console.log("Aim straight for the head you amazing piece of aimbot");
};

console.log(player);
player.aim();

const student = {
  name: "Farhan Hasin",
  job: "Web Developer",
  code: function () {
    console.log("Code with no bugs");
  },
  salary: 0,
};

// 2. Object Constructor(Not used much)
const person = new Object();
console.log(person);

// 3. Object.Create() method
const item1 = Object.create(null);
console.log(item1);
// Passing on the student object to item2 creates a prototypical chain with the student object.
const item2 = Object.create(student);
console.log(item2);
// If the name property is not found within item2, it searches a level higher caused by prototypical chaining.
console.log(item2.name);
// Does not exist in either it's own level or a level higher
console.log(item2.friend);

// 4. Class - Syntactic Sugar
class Person {
  name = "A";
  address = "B";
  constructor(age) {
    this.age = age;
  }
}

const person1 = new Person(16);
console.log(person1);

// 5. Constructor Function

function Car(model, price) {
  this.model = model;
  this.price = price;
}

const tesla = new Car("TS2", 400000000);
console.log(tesla);
