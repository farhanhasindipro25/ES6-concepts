const add = (first, second) => first + second;
const getFullName = (first, last) => first + " " + last;
const multiply = (a, b) => a * b;

const addSixNumbers = (a, b, c, d, e, f) => a + b + c + d + e + f;

// No parameter arrow function
const getPIValue = () => Math.PI;

// One paramater arrow function
const doubleNumber = (num) => num * 2;

// One parameter arrow function simple version
// One parameter does not need to be enclosed in brackets.
const fiveTimes = (num) => num * 5;

// Multiline Arrow function
const doMath = (x, y, z) => {
  const firstSum = x + y;
  const secondSum = y + z;
  const product = firstSum * secondSum;
  const result = product / 2;
  return product;
};
