const fish = {
  name: "King Hilsha",
  address: "Padma",
  color: "silver",
  price: 4000,
};

// const color = fish.color;
// const price = fish.price;
// const address = fish.address;

// const{property} = object

const { price } = fish;
const { address } = fish;
console.log(price);
console.log(address);

console.log();

const { age, name, profession } = {
  name: "Farhan",
  age: 23,
  profession: "Web Developer",
};
console.log(age);
console.log(name);
console.log(profession);

// Array Destructuring
const [first, another] = [44, 99, 88, 456];
// Takes only first two elements
console.log(first, another);

const names = ["A", "B", "C"];
const [firstt, second, third] = names;
console.log(third, firstt, second);

function getNames() {
  return ["E", "F", "G"];
}
const [x, y, z] = getNames();
console.log(y, x, z);
