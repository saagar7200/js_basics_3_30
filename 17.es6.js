// ES -> ECMA Script

//* ES6  -> 2015

//! let , const

//! template literal  -> ``

//! arrow function

//! es module -> import/export

//! promise

//! async/await

//! enhanced object literals
let name = "John";

let key = "email";

let obj = {
  name, //name: name,
  [key]: "", // email:''

  getName: function () {
    return this.name;
  },

  getEmail() {
    return this.email;
  },
};

//! class

//! destructuring
let john = {
  name: "John",
  email: "john@gmail.com",
  password: "12345",
};

// let { name, email, password } = john;

//! spread operator ...

//! rest operator ...

//! default parameter

//! rest parameter ...
// function add(a = 0, b = 0) {
//   return a + b;
// }

function add(...numbers) {
  console.log(numbers);
  //   return a + b;
}

console.log(add(12));
console.log(add(12, 45, 6, 7, 8, 9));
