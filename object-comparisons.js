// Option 1: Not Recommended

const first1 = {
  a: 5,
  b: 2,
  c: 5,
};
const second1 = {
  a: 5,
  b: 2,
  c: 5,
};
const first1String = JSON.stringify(first1);
const second1String = JSON.stringify(second1);

if (first1String === second1String) {
  console.log("Same");
} else {
  console.log("Different");
}

const first2 = {
  a: 5,
  b: 2,
  c: 5,
};
const second2 = {
  a: 5,
  c: 5,
  b: 2,
};
const first2String = JSON.stringify(first2);
const second2String = JSON.stringify(second2);

if (first2String === second2String) {
  console.log("Same");
} else {
  console.log("Different");
}

// Option 2
function compareObjects(first, second) {
  const firstKeys = Object.keys(first);
  const secondKeys = Object.keys(second);
  if (firstKeys.length === secondKeys.length) {
    for (const key of firstKeys) {
      if (first[key] !== second[key]) {
        return false;
      }
    }
    return true;
  }
}

const result = compareObjects(first1, second1);
console.log(result);
