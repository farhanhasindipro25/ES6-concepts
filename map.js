// MAP: MORPH ARRAY PIECE BY PIECE
// [a1, a2, ... , an].map(input value => transformation)
// [a1, a2, ... , an].map(parameter => return statement)
// new Array is created based on the callback function.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubleIt = (num) => num * 2;

const makeDouble = numbers.map(doubleIt);
console.log(makeDouble);

const makeDoubleDirect1 = numbers.map((num) => num * 2);
console.log(makeDoubleDirect1);
const makeDoubleDirect2 = numbers.map((x) => x * 2);
console.log(makeDoubleDirect2);

const makeFiveTimes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => x * 5);
console.log(makeFiveTimes);
