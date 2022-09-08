const student = {
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

console.log(student.project());
console.log(student.projectPush("Gear Up"));
console.log(student.calculateProjectFee(10));
