const bottle = {
  color: "yellow",
  price: 50,
  isCleaned: true,
  capacity: "1 litre",
};

// for-of loop cannot be used in objects
// Option 1: Use Object.keys method to obtain the keys in an array and then use for-of loop on it.

const keys = Object.keys(bottle);
console.log(keys);
for (const key of keys) {
  console.log(key, ":", bottle[key]);
}
console.log();

// Option 2: for-in loop
for (const key in bottle) {
  console.log(key, ":", bottle[key]);
  console.log();
}

// Option 3: Using Object.entries method and destructing in for-of loop

const pair = Object.entries(bottle);
console.log(pair);
for (const [key, value] of pair) {
  console.log(key, ":", value);
}
