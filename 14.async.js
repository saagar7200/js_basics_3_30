//

//* setTimeout
//? setTimeout(callback,timer_out,...args)

// console.log("start");

// const timer_id = setTimeout(
//   (a, b) => {
//     console.log("processing", a, b);
//   },
//   2000,
//   12,
//   123,
// );

// // console.log(timer_id);
// clearTimeout(timer_id);

// let i = 0;

// const id = setInterval(() => {
//   console.log(i);
//   if (i === 10) {
//     clearInterval(id);
//   }
//   i++;
// }, 1000);

// console.log("end");

//todo: hh:mm:ss -> countdown timer
//todo:1:12:09

//todo: callback function

// function a(callback) {
//   console.log("a");

//   callback(12);
// }

// a((b) => {
//   console.log("callback", b);
// });

// getUser() api  / 3000

console.log("start");

const getUser = (callback) => {
  setTimeout(() => {
    console.log("User fetched");
    callback(null, {
      _id: 2,
      name: "John Doe",
      email: "john@gmail.com",
    });
    // callback({ message: "user fetch failed" });
  }, 3000);
};

const getPosts = (userId, callback) => {
  setTimeout(() => {
    console.log("posts fetched");

    callback(null, [
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
  }, 2000);
};

const getComments = (postId, callback) => {
  setTimeout(() => {
    console.log("comments fetched");
    callback(null, [
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
  }, 1000);
};

// getUser();
// getPosts(1);

// getComments(postId)

getUser((error, user) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(user);
  getPosts(user._id, (error, posts) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(posts);

    getComments(posts[0]._id, (error, comments) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log(comments);
    });
  }); //
});

console.log("end");

//! callback hell  -> promise
//* pyramid of doom
