//! hoisting
// var x;

// console.log(x);

// var x = 10;
// x = 10;

// console.log(x);

//* function declaration
// hoist();

// function hoist() {
//   console.log("hoist");
// }

// hoist();

//* function expression

// 12();

// undefined();

// fn(); // undefined()

// var fn = function () {
//   console.log("var function");
// };

// fn()

//* let

// console.log(y);

// let y = 13;

//? TDZ : temporal dead zone

// let z = 56

//
//! memory creation phase
//* memory allocation
// {x:undefined , hoist:(){} }
// script : { y: <not available>}

//! execution phase
// {x:34 ,hoist:(){} , y:45}
//* memory initialization
//* execute

console.log(x); //
var x = 34;
// x = "45";
console.log(x); // 34

hoist(); //

function hoist() {
  console.log(y);
  var y = 12;
  console.log(y);

  console.log("hoist");
}
hoist();

let z = 45;
console.log(z);

//todo: callstack ->
//todo: execution context

// GEC
//callstack

//

let z = 23;

function hoist() {
  console.log(y);
  var y = 12;
  console.log(y); //

  console.log("hoist");
}
hoist();
hoist();
