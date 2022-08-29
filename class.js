// Class in ES6: Syntactic Sugar
// Class name must begin with a capital letter

class Instructor {
  name;
  designation = "Web Course Instructor";
  team = "Web Team";
  location;

  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  // Methods
  startSupportSession(time) {
    console.log(`Start the support session at ${time}.`);
  }
  createQuiz(module) {
    console.log(`Please create quiz for module ${module}.`);
  }
}

const aamir = new Instructor("Aamir", "Mumbai");
console.log(aamir);
aamir.startSupportSession("9:00");
aamir.createQuiz(60);

const solaiman = new Instructor("Solaiman", "Dhaka");
console.log(solaiman);
solaiman.startSupportSession("4:00");
solaiman.createQuiz(65);
