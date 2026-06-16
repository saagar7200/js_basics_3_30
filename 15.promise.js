//! promise
//* states
//? pending
//? fulfilled
//? rejected

console.log("start");

// const promise = new Promise((resolve, reject) => {
//   // async logic

//   setTimeout(() => {
//     // resolve("Success");
//     reject("error");
//   }, 2000);
// });

// console.log(promise);

// //! handling promise
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// const promiseFunction = () => {
//   return new Promise((resolve, reject) => {
//     // async logic

//     setTimeout(() => {
//       // resolve("Success");
//       reject("error");
//     }, 2000);
//   });
// };

// promiseFunction().then().catch()

const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      if (error) {
        reject({ message: "fetch user failed" });
      } else {
        resolve({
          _id: 2,
          name: "John Doe",
          email: "john@gmail.com",
        });
      }
    }, 3000);
  });
};

const fetchPosts = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = true;

      if (error) {
        reject({ message: "fetch posts failed" });
      } else {
        resolve([
          {
            _id: 1,
            userId: userId,
            title: "post 1",
          },
          {
            _id: 2,
            userId: userId,
            title: "post 2",
          },
        ]);
      }
    }, 2000);
  });
};

const fetchComments = (postId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;

      if (error) {
        reject({ message: "fetch comments failed" });
      } else {
        resolve([
          {
            _id: 1,
            postId: postId,
            title: "comment 1",
          },
          {
            _id: 2,
            postId: postId,
            title: "comment 2",
          },
        ]);
      }
    }, 1000);
  });
};

//! promise chaining

// fetchUser()
//   .then((user) => {
//     console.log(user);
//     return fetchPosts(user._id);
//   })
//   .then((posts) => {
//     console.log(posts);
//     return fetchComments(posts[0]._id);
//   })
//   .then((cmnts) => {
//     console.log(cmnts);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! fetch() //

// fetch("https://jsonplaceholder.typicode.com/users/9")
//   .then((response) => {
//     // console.log(response);
//     return response.json();
//   })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetchPosts(1)
//   .then((posts) => {
//     console.log(posts);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! async/await
//! try/catch
const a = async () => {
  try {
    const user = await fetchUser();
    console.log(user);
    const posts = await fetchPosts(user._id);
    console.log(posts);
    const comments = await fetchComments(posts[1]._id);
    console.log(comments);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
};

// a();

//* promise chain
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

//* try/catch
// const b = async () => {
//   try {
//     const resp = await fetch("https://jsonplaceholder.typicode.com/users/9");
//     const user = await resp.json();
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// };

//? /comments?postId=1

const b = async () => {
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await resp.json();
    console.log(posts[3]);

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${posts[3].id}`,
    );
    console.log(await response.json());
  } catch (error) {
    console.log(error);
  }
};

b();

console.log("end");

//todo: event loop
