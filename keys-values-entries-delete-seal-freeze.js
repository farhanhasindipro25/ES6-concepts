const bottle = {
  color: "yellow",
  price: 50,
  isCleaned: true,
  capacity: "1 litre",
};
const bottle2 = {
  color: "yellow",
  price: 50,
  isCleaned: true,
  capacity: "1 litre",
};
const bottle3 = {
  color: "yellow",
  price: 50,
  isCleaned: true,
  capacity: "1 litre",
};
console.log(bottle);

// keys
const keys = Object.keys(bottle);
console.log("Keys:", keys);

// values
const values = Object.values(bottle);
console.log("Values:", values);

// entries
const pair = Object.entries(bottle);
console.log("Entries in pairs:", pair);

const twoDimensionalArray = [
  ["color", "yellow"],
  ["price", 50],
  ["isCleaned", true],
  ["capacity", "1 litre"],
];

console.log("Before deleting isCleaned property:", bottle);
delete bottle.isCleaned;
console.log("After deleting isCleaned property:", bottle);
console.log();

// seal
/*
Allows to modify property values but does not allow to remove or add new properties.
*/
console.log("Before sealing bottle object", bottle2);
Object.seal(bottle2);
delete bottle2.isCleaned;
bottle2.price = 80;
bottle2.height = "12cm";
console.log(
  "After sealing bottle object and deleting isCleaned property",
  bottle2
);
console.log();

// freeze
/*
    Does not allow to remove or add new properties. Does not allow to modify property values
*/
console.log("Before freezing bottle object", bottle3);
Object.freeze(bottle3);
delete bottle3.isCleaned;
bottle3.price = 80;
bottle3.height = "12cm";
console.log(
  "After freezing bottle object and deleting isCleaned property",
  bottle3
);
console.log();
