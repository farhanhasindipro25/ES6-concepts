const users = [
  {
    id: 1,
    name: "Farhan",
    job: "Unemployed",
  },
];
console.log(users[0].name);
console.log(users[0].id);
console.log(users[0].job);

const data = {
  count: 70909,
  data: [
    {
      id: 1,
      name: "Alkaline",
      job: "Graphic Designer",
    },
    {
      id: 2,
      name: "Foster",
      job: "Graphic Designer",
    },
  ],
};
console.log(data.data[0].job);
console.log(data.data[1].job);

const user = {
  id: 5001,
  name: "Thomas Edison",
  address: {
    street: {
      first: "35/A West Ham",
      second: "Third Floor",
      roomNo: "304",
    },
    city: "NYC",
    country: "USA",
  },
};

const userRoomNo = user.address.street.roomNo;
console.log(userRoomNo);

// Optional chaining (?) allows to move forward with the code if no value is found
const userFloor = user.address?.stret?.roomNo;
console.log(userFloor);
const userPhone = user.address?.phone?.roomNo;
console.log(userPhone);
