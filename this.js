// Window
console.log(this);

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
    console.log(this);
    return this.name + " is currently busy completing a coding project.";
  },
  projectArrow: () => {
    console.log(this);
  },
  projectNested: () => {
    const arrow = () => {
      console.log(this);
    };
    arrow();
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

// whatever exists in the left side of . is called execution context.
// If anything does not exist in the left side of . it is called window object/global object.

person1.project();
person2.project = person1.project;
person2.project();

// Regular function considers it's immediate level object as this, arrow function does not set a this, but considers the global object, hence consoling window object.
person1.projectArrow();

person1.projectNested();

function clickHandler() {
  console.log("Inside Onclick", this);
}

document.getElementById("btn-click2").addEventListener("click", function () {
  console.log("Inside Add Event Listener", this);
});

/*
this keyword refers to an object.

- In an object method, this refers to the object.
- Alone, this refers to the global object(this).
- In a function, this refers to the global object.
- In an event, this refers to the element that received the event.
- Methods likle call(), apply(), and bind() can refer this to any object.
*/
