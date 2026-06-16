//! scope
//* visibility or accessibility of variables

//? global scope
// let x = 10;
// const y = 34;
// var z = 45;

//? block scope -> {}
{
}

// let x = 34;
// let z = 678;

if (true) {
  //   let x = 10;
  //   const y = 34;
  //   var z = 45;
  //   console.log(x, y, z);
}
// console.log(z);

//* function scope

// const scope = () => {
//   let x = 10;
//   const y = 34;
//   var z = 45;

//   //   console.log(x, y, z);
// };
// scope();

// console.log(z); //

// todo:
//* lexical scope

// let x = 10;
const outer = () => {
  const y = 34;
  var z = 45;

  const inner = () => {
    let a = "a";
    // x = "x";
    console.log(x);
  };
  inner();
  // console.log(a);
  //   console.log(x, y, z);
};
// outer();

//* scope chain

// let x = 45;

if (true) {
  let x = 23;
  if (true) {
    console.log(x); //
    x = 56;
    console.log(x); //
  }

  console.log(x); //
}
