const person1 = {
  name: "Farhan",
  money: 5000,
  study: "Web Development",
  technology: [
    "HTML5",
    "CSS3",
    "Javascript",
    "ES6",
    "Bootstrap",
    "Tailwind",
    "Github",
  ],
  project: function () {
    return this.name + " is currently busy completing a coding project.";
  },
  projectPush: function (project) {
    this.project();
    return `${this.name} is pushing the ${project} project into Github.`;
  },
  calculateProjectFee: function (noOfPages) {
    const income = 300 * noOfPages;
    return income;
  },
};

const person2 = {
  name: "A",
  money: 8000,
};

// Option 1: .call method
const result = person1.project.call(person2);
console.log(result);

// Option 2: .call(objectBorrowingTheMethod, parameters if any separated by commas)
const result1 = person1.calculateProjectFee.call(person2, 12);
console.log(result1);

// Option 3: .apply(objectBorrowingTheMethod, [parameters if any within an array])
const result2 = person1.calculateProjectFee.apply(person2, [15]);
console.log(result2);

// Option 4: bind method
const person2ProjectCost = person1.calculateProjectFee.bind(person2);
const fee = person2ProjectCost(25);
console.log(fee);
