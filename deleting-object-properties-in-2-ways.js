const bottle = {
  color: "yellow",
  price: 50,
  isCleaned: true,
  capacity: "1 litre",
};

// Option1: delete object.property
console.log(bottle);
delete bottle.isCleaned;
console.log(bottle);

// Option2: const {property, ...rest} = object
console.log(bottle);
const { capacity, ...r } = bottle;
console.log(bottle);
