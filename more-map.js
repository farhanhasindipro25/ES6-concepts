const actors = [
  "Tom Cruise",
  "Tom Hiddleston",
  "Tom Hardy",
  "Tom Holland",
  "Tom Hanks",
];
const firstLetters = actors.map((actor) => actor[0]);
console.log(firstLetters);

const nameLengths = actors.map((actor) => actor.length);
console.log(nameLengths);

const products = [
  { id: 1, name: "laptop", price: 45000 },
  { id: 2, name: "mobile", price: 80000 },
  { id: 3, name: "watch", price: 3700 },
  { id: 4, name: "tablet", price: 39000 },
];

const items = products.map((product) => product.name);
const prices = products.map((product) => product.price);

console.log(items);
console.log(prices);
