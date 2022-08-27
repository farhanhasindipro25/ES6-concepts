const person1 = "Adam Sandler";
const person2 = "Ben White";
// ES6 string format: Backticks(``)
const person3 = `Donald Trump`;

console.log(person1);
console.log(person2);
console.log(person3);

console.log();

// Multiline String
const multiline =
  "First Line \n" + "Second Line \n" + "Third Line \n" + "Fourth Line \n";

console.log(multiline);
console.log();

// ES6 Multiline String
const multilineES6 = `
First Line
Second Line
Third Line
Fourth Line
Fifth Line`;

console.log(multilineES6);

const a = 20;
const b = 30;
const summary = "Sum of " + a + " and " + b + " is: " + (a + b);
console.log(summary);

// Dynamic Strings
// ${placeholder}
const sum = `Sum of ${a} and ${b} is: ${a + b}`;
console.log(sum);

const nums = [78, 98, 45, 21, 6, 444];
len = `${nums.length}`;
console.log(len);

// Template Literals:

/*
Template literals are enclosed by backtick (`) characters instead of double or single quotes, allowing for the following:

1. Multi-line strings.
2. String Interpolation.
*/
