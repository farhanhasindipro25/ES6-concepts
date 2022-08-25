// Without default parameters

function addNonDefault(n1, n2) {
  const total = n1 + n2;
  return total;
}

const result1 = addNonDefault(10, 10);
console.log(result1);
const result2 = addNonDefault(10);
console.log(result2);
const result3 = addNonDefault();
console.log(result3);

console.log();

// With default parameters

function addDefault(n1 = 1, n2 = 1) {
  const total = n1 + n2;
  return total;
}

const result4 = addDefault(10, 10);
console.log(result4);
const result5 = addDefault(10);
console.log(result5);
const result6 = addDefault();
console.log(result6);
