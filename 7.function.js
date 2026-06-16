// //* for of
// // array , strings
// let numbers = [4, 3, 5, 6];
// // for (let i = 0; i < numbers.length; i++) {
// //   console.log(numbers[i]);
// // }

// for (x of numbers) {
//   console.log(x);
// }

// for (value of "hello") {
//   console.log(value);
// }

// //* for in
// //? object
// let user = {
//   name: "Ram",
//   email: "ram@gmail.com",
//   pass: "1234556",
// };

// for (key in user) {
//   console.log(key, user[key]);
// }
// for (key in numbers) {
//   console.log(key);
// }

//! functions
// {}

//* function declaration
// function function_name() {
//   // body
//   console.log("hello");
// }

// //* function invocation / call
// function_name();

// function greet() {
//   console.log("hello world");
// }

// greet();
// greet();
// greet();
// greet();
// greet();

//? x -> f(x)  -> y

//* funtion with inputs
//! parameter & argument
// function greet(user, age) {
//   console.log("hello ", user, age);
// }

// greet("Ram", 26); // ram
// greet(26, "John"); // john

//* default parameter
function greet(user = "Guest") {
  console.log("hello ", user);
}

// greet("John"); // john
// greet(); //

// add()

// function add(a = 0, b = 0) {
//   console.log("the sum is :", a + b);
// }

// add(12, 5);
// add();

//* with return type
function add(a = 0, b = 0) {
  //   let sum = a + b;
  //   return sum;
  return a + b;
  //   console.log("the sum is :", a + b);
}

// let result = add(12, 5); // 12 + 5
// console.log(result);
// let res = add(4, 5);
// console.log(res);

// multiply

//* function expression
let x = 40;
// const multiply = function (a = 1, b = 1) {
//   return a * b;
// };

// console.log(multiply(12, 4));

//todo: arrow function, callback function , hof

//! arrow function
// const multiply = (a, b) => {
//   let res = a * b;
//   return res;
// };

const multiply = (a, b) => a * b;

// console.log(multiply(12, 5)); //
// let res = multiply(12, 6);

const fn = (obj) => obj.name;

// console.log(fn({ name: "John" })); //

//* callback function

const parent = (callback) => {
  console.log(callback);
  console.log("parent");
  callback(12); //
};

const child = (a) => {
  console.log("child", a);
  // console.log(a); //
};

parent(child); //
parent((a) => {
  console.log("child 1", a);
  // console.log(a); //
}); //
// parent(()=>{})

// calculate(a,b,operation)

// calculate(12, 23, add);

//! higher order function

const outer = () => {
  console.log("outer");
  const inner = () => {
    console.log("inner");
    return 10;
  };
  // inner()
  return inner;
}; //

const y = outer();
y();
console.log(y);

//! IIFE
(() => {
  console.log("IIFE");
})();

//todo: array methods
