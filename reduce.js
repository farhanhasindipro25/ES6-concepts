const numbers = [1, 2, 3, 4, 5];
// .reduce (accumulatorFunction, initialValue)
// accumulatorFunction uses two parameters
// .reduce((previous, current) => previous + currrent, 0)

const total = numbers.reduce((previous, current) => {
  console.log(previous, current);
  return previous + current;
}, 0);
console.log(total);
