//! Object

// object constructor
const obj = new Object();

// //! object literal  -> {}
// // let user = {
// //   name: "John",
// //   email: "john@gmail.com",
// // };

// // let u = ["john", "john@gmail.com"];
// // let u2 = ["email", "name"];

// // let users = [["john", "john@gmail.com"],["email", "name"]]

// // let users = [
// //   {
// //     name: "John",
// //     email: "john@gmail.com",
// //   },
// //   {
// //       email: "john@gmail.com",
// //     name: "John",
// //   },
// // ];

// let user = {
//   name: "John",
//   email: "john@gmail.com",
//   address: {
//     city: "kathmandu",
//     contry: "npl",
//   },
//   hobby: [],

//   //   key: "123456",
// };

// console.log(user.address.city);
// console.log(user["address"]["city"]);

// //! reading properties
// //* dot notation .
// const name = user.name;
// console.log(name); //

// //* bracket notation []
// console.log(user["email"]);
// //!
// console.log(user["name"]);

// let key = "email";
// console.log(user[key]); //? user['email'] -> john@gmail.com

// key = "name";
// console.log(user[key]); //? user['name'] -> John
// // console.log(user.key); //? undefined

// console.log(user);

// //! adding new properties
// user.password = "12345";

// user["age"] = 27;

// console.log(user);

// // user.address = {

// // }

// //!
// // user.password = "password";

// // //! delete
// // delete user.age;
// // console.log(user);

// // {x:23,y:12}

// // let x = 12;
// // let y = x;
// // x = 23;

// // console.log(x, y);

// let user2 = user;

// user.name = "abc";

// console.log(user, user2);

//{user:&1234 , user2:&1234}

//heap
// &1234  =>  {name:'abc'}
//

let a = {
  a: 1,
  b: 2,
};

let c = {
  d: 1,
  a: 20,
};

//* spread operator  ...
let b = { ...a, ...c };
let d = [...[12, 3], ...[4, 56]];
console.log(d);
a.c = 3;
console.log(a, b);

//* destructuring
let john = {
  name: "John",
  email: "john@gmail.com",
  password: "12345",
};

let john1 = {
  name: "John Doe",
  email: "john@gmail.com",
  password: "12345",
};

// let name = john.name;
// let email = john.email
// let { name, email, password } = john;
let { name: user_name, email: user_email, password: user_pass } = john1;

// console.log(name, email, password);
console.log(user_name);

//! rest operator ...
// let { name, email, ...others } = john;

// console.log(others);

//
console.log(Object.keys(john)); // ['name',]
console.log(Object.values(john));
console.log(Object.entries(john));

let entries = [
  ["name", "John"],
  ["email", "john@gmail.com"],
  ["password", "12345"],
];
console.log(Object.fromEntries(entries));
