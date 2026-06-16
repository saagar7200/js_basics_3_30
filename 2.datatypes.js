//! Data types

//! primitive

//* number
let a = 23;
let b = 345.455;

//* string
let c = "hello";
// c[1] = "a";
// c = "sjd";
let d = "";

//? template literal  => ``

let user = "John";
// let e = `Hello  ${2 + 2}`;
let e = `Hello  ${user}`;
console.log(e); //

//* boolean
let f = true;

let g = false;

//* undefined
let h;

console.log(h);

//* null
let i = null;
console.log(i);

//? diff betn undefined & not defined

// let j;
j = 34; //ReferenceError: j is not defined
// console.log(j); //ReferenceError: j is not defined

let k;
console.log(k); // undefined

//! non primitive
//? object
//? array
//? function
