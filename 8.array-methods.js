//! array methods
// * push , pop , shift , unshift , splice , indexOf , includes ..

let numbers = [2, 4, 5, 6, 7];
// let double = [];

//? forEach
// arr.forEach(callback)

// const callback = (value, index, arr) => {
//   console.log(value, index, arr);
//   double[index] = arr[index] * 2;
// };

// const res = numbers.forEach(callback);
// numbers.forEach((v, i) => {
//   console.log(v, i);
// });
// console.log(res);
// console.log(double);

//* map x => y
// returns new array
// arr.map(callback)

// const double = numbers.map((num) => {
//   return num * 2;
// return "x";
// });

const double = numbers.map((num) => num * 2);
// console.log(double);

const users = [
  {
    name: "Ram",
    email: "ram@gmail.com",
  },
  {
    name: "John",
    email: "john@gmail.com",
  },
  {
    name: "Bob",
    email: "bob@gmail.com",
  },
];

//  users => ['Ram','John']

// [{
// name: "Ram",
// email: "ram@gmail.com",
// user_name :
//   }]
//  numbers => [ 4, 8, 10, 12, 14 ]

const users_with_user_name = users.map((user) => {
  return {
    ...user,
    user_name: user.name + "-" + user.email,
  };
});

// console.log(users_with_user_name);

//? filter
// arr.filter(callback)

// const even = numbers.filter((num, i) => {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

const even = numbers.filter((num, i) => num % 2 === 0);
const odd = numbers.filter((num, i) => num % 2 !== 0);
// console.log(even);
// console.log(odd);
// console.log(numbers.filter((num, i) => num >= 10));

//* reduce

// [2, 4, 5, 6, 7]  => sum

const sum = numbers.reduce((acc, value) => {
  return (acc += value);
}, 0);

// console.log(sum);

// console.log(numbers);

//todo:
let cart = {
  user: 1,
  items: [
    {
      product: {
        id: 1,
        price: 1000,
      },
      quantity: 10,
    },
    {
      product: {
        id: 2,
        price: 500,
      },
      quantity: 4,
    },
    {
      product: {
        id: 3,
        price: 1500,
      },
      quantity: 6,
    },
  ],
};

const totalPrice = cart.items.reduce((acc, item) => {
  return (acc += item.product.price * item.quantity);
}, 0);

//* find  -> value , undefined
//* findIndex -> index , -1
//* every -> boolean
//* some -> boolean
//* sort ->

const arr = [101, 10, 20, 2, 45, 4, 67, 6];
// [10, 20, 2, 45, 4, 67, 6, 101];

// console.log(arr);
arr.sort((a, b) => {
  return a - b;
  // a.localCompare(b)  // for string
});

// +ve  -> swap
// -ve -> no swap
// 0 -> no swap

// console.log(arr);

//

const students = [
  {
    name: "Ram",
    marks: [43, 65, 78, 76, 89],
  },
  {
    name: "Hari",
    marks: [34, 56, 78, 76, 80],
  },
  {
    name: "Sita",
    marks: [48, 50, 20, 76, 50],
  },
];

// let a = students.map((student) => {
//   // console.log(student);
//   return {
//     ...student,
//     avg_mark:
//       student.marks.reduce((acc, mark) => {
//         return (acc += mark);
//       }) / student.marks.length,
//   };
// });

// const passed = a.filter((std) => std.avg_mark >= 50);
// const passed = a.filter((std) => std.avg_mark >= 50);
// console.log(passed);

// result -> ['Ram' , 'Hari]

// const result =map((std) => std.name)

const calculateAvg = (arr) => {
  return (
    arr.reduce((acc, mark) => {
      return (acc += mark);
    }) / arr.length
  );
};

const result = students
  .map((student) => {
    return {
      ...student,
      avg_mark: calculateAvg(student.marks),
    };
  })
  .filter((std) => std.avg_mark >= 50)
  .map((std) => std.name);

console.log(result);

// avg >= 50
