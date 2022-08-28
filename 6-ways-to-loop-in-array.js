// 1. for loop

let array = [1, 2, 3, 4, 5];

console.log("For Loop: ");
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
console.log();

// 2. do-while loop
console.log("Do-While Loop: ");
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
console.log();

// 3. while loop
console.log("While Loop: ");
let j = 0;
while (j < array.length) {
  console.log(array[j]);
  j++;
}
console.log();

// 4. for of
console.log("For-of Loop: ");
for (let i of array) {
  console.log(i);
}
console.log();

// 5. map() method
console.log("Map() function");
const names = ["Lincoln", "Donlet", "Tabitha", "Mcleo"];
let newArr = names.map((index) => console.log(index));
console.log();

// 6. forEach()
console.log("For-Each Loop");
array.forEach((index) => console.log(index));
