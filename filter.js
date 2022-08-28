const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const numbersMoreThan20 = numbers.filter((number) => number > 20);
// console.log(numbersMoreThan20);
const numbersLessThan20 = numbers.filter((number) => number < 20);
// console.log(numbersLessThan20);
const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);
const oddNumbers = numbers.filter((number) => number % 2 !== 0);
// console.log(oddNumbers);

const products = [
  { id: 1, name: "laptop", price: 45000 },
  { id: 2, name: "mobile", price: 80000 },
  { id: 3, name: "watch", price: 3700 },
  { id: 4, name: "tablet", price: 39000 },
];

const expensive = products.filter((product) => product.price > 10000);
console.log(expensive);

