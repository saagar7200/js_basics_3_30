//! operators

// //* arithmetic operators
// //? + , - , * , / , % , **
// console.log(2 + 12);

// let sum = 12 + 2;

// let a = 34;
// let b = 23;

// console.log(a + b); //

// console.log(11 / 2);
// console.log(11 % 2);
// console.log(2 ** 4);

// console.log("hello" + " " + "world");

// //* assignment
// //? = , += , -=

// let c = 10;
// let d = 10;

// c += 5; //c = c + 5;

// // c = c + d;
// c -= d; // 5

// console.log(c); //

// //* comparision
// //? == , === , < , > , <= >= ,  != , !==
// //? output -> boolean

// // console.log(10 < 10); // false
// // console.log(10 <= 10); // true

// let x = 10;
// let y = "10";

// console.log(x == y);
// console.log(x === y);

// //* logical
// //? and && , or || , not !

// console.log(true && true); //
// console.log(true && false); //
// console.log(true || true); //
// console.log(true || false); //
// console.log(false || false); //
// console.log(!true); //
// //

// console.log(false && "hello");

// let isAdmin = false;
// let res = isAdmin && "Admin";
// // console.log(res);

// x = "abc";
// //* typeof
// console.log("typeof");
// console.log(typeof x === "number");
// console.log(typeof x);

// // object = 1
// // number = 2
// // null = 1

// //* bitwise
// //  & , | ~
// console.log(2 & 3);
// // 010 & 011

// //! unary
// // increment  ++
// let z = 10;
// // post
// console.log(z++); // 10
// //  pre
// console.log(++z); // 12

// // decrement  --

// //! ternary
// //? conditioin ? exp_1 : exp_2
// let age = 17;

// let result = age >= 18 ? "can vote" : "can not vote";

// console.log(result);

//! type conversion

//todo: type conversion
//? explicit
console.log(Boolean(0)); //
console.log(Number("12rs"));
console.log(Number("abc"));
console.log(String(true));
//* parseInt
console.log(parseInt("123.23"));
console.log(parseInt("123rs"));

//* parseFloat
console.log(parseFloat("123.23"));

//? implicit

//todo: type coaercing
console.log(10 + "12"); //
console.log("10" - 4);
console.log("qbd" - 4);

//! truthy & falsy values
//? false , 0 ,-0 ,null , undefined , NaN , ''

console.log(Boolean(-0));

// if (10 < 12) {
//   console.log("if");
// }

// let user = findByid(id);
let user = null;

// if (user === null || user === undefined) {
//   throw new Error("user not found");
// }

if (!user) {
  throw new Error("user not found");
}
