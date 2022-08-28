// .find() finds the first element as per the condition.
// .filters() finds all elements as per the condition.

const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];

const fivesFirst = numbers.find((num) => num % 5 === 0);
const fivesAll = numbers.filter((num) => num % 5 === 0);
console.log(fivesFirst);
console.log(fivesAll);

const products = [
  { id: 1, name: "laptop", price: 45000 },
  { id: 2, name: "mobile", price: 80000 },
  { id: 3, name: "watch", price: 3700 },
  { id: 4, name: "tablet", price: 39000 },
];

const cheap = products.find((product) => product.price < 40000);
console.log(cheap);
