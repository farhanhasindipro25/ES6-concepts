// function declaration
function add(first, second) {
  const total = first + second;
  return total;
}

// function expression
const add1 = function add1(first, second) {
  const total = first + second;
  return total;
};

// function expression with anonymous function
const add2 = function add1(first, second) {
  const total = first + second;
  return total;
};

function add3(first, second) {
  return first + second;
}
const add4 = function (first, second) {
  return first + second;
};

// Arrow function syntax
// Variable declaration = (parameter1, parameter2) => return statement.

const add5 = (first, second) => first + second;

const result = add5(10, 43);
console.log(result);
