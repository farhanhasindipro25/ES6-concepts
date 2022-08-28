// Return Value is undefined

const products = [
  { id: 1, name: "laptop", price: 45000 },
  { id: 2, name: "mobile", price: 80000 },
  { id: 3, name: "watch", price: 3700 },
  { id: 4, name: "tablet", price: 39000 },
];

products.forEach((product) => console.log(product));
console.log();
products.forEach((product) => console.log(product.price));
console.log();
products.forEach((product) => console.log(product.name));
console.log();
