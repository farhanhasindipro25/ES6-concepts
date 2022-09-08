const data = {
  name: "Alice",
  age: 23,
};
const dataCopy = data;

console.log("Data:", data);
console.log("Data Copy: ", dataCopy);
console.log();

data.age = 1000;

console.log("Data:", data);
console.log("Data Copy: ", dataCopy);
console.log();

// Both point to the same address

// Using spread operator (...) [Shallow Copy]
const dataCopy2 = { ...data };
// Now both points to different addresses

console.log("Data:", data);
console.log("Data Copy 2: ", dataCopy2);
console.log();

data.age = 1000;

console.log("Data:", data);
console.log("Data Copy 2: ", dataCopy2);
console.log();

// Using JSON parsing [Deep Copy]
const dataCopy3 = JSON.parse(JSON.stringify(data));

console.log("Data:", data);
console.log("Data Copy 3: ", dataCopy3);
console.log();

data.age = 1000;

console.log("Data:", data);
console.log("Data Copy 3: ", dataCopy3);
console.log();
