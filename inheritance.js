class TeamMember {
  name;
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  provideFeedback() {
    console.log(`${this.name}. Thank you for your feedback.`);
  }
}

class Instructor extends TeamMember {
  designation = "Web Course Instructor";
  team = "Web Team";
  constructor(name, location) {
    super(name, location);
  }
  // Methods
  startSupportSession(time) {
    console.log(`Start the support session at ${time}.`);
  }
  createQuiz(module) {
    console.log(`Please create quiz for module ${module}.`);
  }
}
class Developer extends TeamMember {
  designation = "Web Developer";
  team = "Web Team";
  tech;
  constructor(name, location, tech) {
    super(name, location);
    this.tech = tech;
  }
  // Methods
  developFeature(feature) {
    console.log(`Please Develop the ${feature}.`);
  }
  release(version) {
    console.log(`Please release the ${version}.`);
  }
}
class JobPlacement extends TeamMember {
  designation = "Job Placement Executive";
  team = "Job Placement Team";
  region;
  constructor(name, location, region) {
    super(name, location);
    this.region = region;
  }
  // Methods
  provideResume(name) {
    console.log(`Please create the resume ${this.name}.`);
  }
  prepareStudent(name) {
    console.log(`Please prepare the student ${this.name}.`);
  }
}

const alia = new Developer("Alia", "Dhaka", "React");
console.log(alia);
alia.provideFeedback();
