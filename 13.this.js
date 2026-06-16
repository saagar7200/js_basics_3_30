//! this ->  object
//!

console.log(this);
// module.exports = {}

function a() {
  console.log(this.name);
}

// a(); //* global object

// let user = {
//   name: "John doe",
//   email: "j@gmail.com",
//   getName: function () {
//     // console.log(this.name);
//     console.log(user.name);
//   },
// };

// user.getName(); // john doe

// user.getName(); // john doe

// const fn = user.getName;
// fn(); //

// let user = {
//   name: "John doe",
//   email: "j@gmail.com",
//   getName: () => {
//     console.log(this.name); // undefined
//   },
// };

// let user = {
//   name: "John doe",
//   email: "j@gmail.com",
//   getName: function () {
//     const a = () => {
//       console.log(this.name); //John doe
//     };
//     a();
//   },
// };

// user.getName();

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getName() {
    return this.name;
  }
}

// const u = new User("john", "j@gmail.com");
// {}  <- this

// console.log(u.getName()); //

//! function object
// function introduce() {
//   console.log("Hello ", this.name);
// }
// console.log(introduce.name);
// console.log(introduce.)
// introduce();

//! call , apply & bind methods

let user = {
  name: "John doe",
  email: "j@gmail.com",
};

let user1 = {
  name: "John doe 1",
  email: "j@gmail.com",
};

function introduce(age, email) {
  console.log("Hello ", this.name, age, email);
}

//* introduce.call(user, 12, "email");
// introduce.call(user1);

//* introduce.apply(user1, [26, "gmail"]);

//? bind
const fn = introduce.bind(user, 27, "abc@gmail.com");
// fn();
