//! control flow

//! control statements

//* if
let age = 18;
if (age) {
  console.log("age is ", 17);
}

//* if else
if (age >= 18) {
  console.log("can vote");
} else {
  console.log("can not vote");
}

//* if-else  ladder / else if
if (age >= 60) {
  console.log("Major");
} else if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

//* switch-case
// let day = 9;

// switch (day) {
//   case 1: {
//     console.log("Sunday");
//     break;
//   }
//   case 2: {
//     console.log("Monday");
//     break;
//   }
//   case 3: {
//     console.log("Tuesday");
//     break;
//   }
//   case 4: {
//     console.log("Wednesday");
//     break;
//   }
//   case 5: {
//     console.log("Thursday");
//     break;
//   }
//   case 6: {
//     console.log("Friday");
//     break;
//   }
//   case 7: {
//     console.log("Saturday");
//     break;
//   }
//   default: {
//     console.log("Enter day between 1-7");
//   }
// }

let day = 6;

switch (day) {
  case 1:
  case 7: {
    console.log("Weekend");
    break;
  }
  case 2:
  case 3:
  case 4:
  case 5:
  case 6: {
    console.log("working day");
    break;
  }

  default: {
    console.log("Enter day between 1-7");
  }
}

// 1 & 7 weekend ,, working day

//? loops
//* while loop
let i = 11;
while (i <= 10) {
  console.log(i);
  i++;
}

//* do-while loop
let j = 11;
console.log("do-while");
do {
  console.log(j);
  j++;
} while (j <= 10);

//* for loop
console.log("for loop");

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

//* for-of

//* for-in

//* jump / branch statements
//? break
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
//? continue
// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }

for (let i = 0; i <= 10; i++) {
  if (i === 5 || i === 6) {
    continue;
  }
  console.log(i);
}

//? return
// for (let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     return 34;
//   }
//   console.log(i);
// }
