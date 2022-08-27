const numbers = [12, 85, 999, 78];

// Finding the largest number from an array using spread operator.
const largest = Math.max(...numbers);
console.log(largest);

console.log();

// Copying an array using spread operator.
const numbers2 = numbers;
console.log(numbers2);
numbers.push(4);
console.log(numbers2);
numbers2.push(343);
console.log(numbers);
console.log(numbers2);

const numbers3 = [numbers];
numbers3.push(88);
console.log(numbers3);

const numbers4 = [...numbers];
console.log(numbers4);
numbers.push(3);
console.log(numbers);
console.log(numbers4);
numbers4.push(4343);
console.log(numbers);
console.log(numbers4);

const numbers5 = [444, 56, ...numbers, 111, 2];
console.log(numbers5);
