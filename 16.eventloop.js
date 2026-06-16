//! event loop

//* callstack

//* web apis : timer , Dom , promise:{onResolve :(){},onReject:(){},} , fetch , geolocation

//* task queue -> FIFO
//? 1. macro / callback queue -> 2 ,
//? 2. microtask queue  -> 1

//* event loop

// const b = async () => {
//   try {
//     const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts = await resp.json();
//     console.log(posts[3]);

//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/comments?postId=${posts[3].id}`,
//     );
//     console.log(await response.json());
//   } catch (error) {
//     console.log(error);
//   }
// };

// b();

// fetch("https://jsonplaceholder.typicode.com/users/9")
//   .then((response) => {
//     return response.json();
//   })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// setTimeout(() => {
//   console.log("processing");
// }, 2000);

// const fetchUser = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const error = false;

//       if (error) {
//         reject({ message: "fetch user failed" });
//       } else {
//         resolve({
//           _id: 2,
//           name: "John Doe",
//           email: "john@gmail.com",
//         });
//       }
//     }, 3000);
//   });
// };

// fetchUser()
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

console.log("1");

setTimeout(() => {
  console.log("2");
  Promise.resolve().then(() => {
    console.log("3");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("4");
});

Promise.resolve().then(() => {
  console.log("5");
});

console.log("6");
