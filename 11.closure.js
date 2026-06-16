const a = () => {
  console.log("a");
  const b = () => {
    console.log("b");
    const c = () => {
      console.log("c");
    };
    c();
  };

  b();
};

// a();
// a();
// a();

//callstack

//! closure

// const parent = () => {
//   let x = "parent";
//   const child = () => {
//     console.log(x);
//   };

//   return child;
// };

// const inner = parent();

// inner(); //

// const Counter = () => {
//   let count = 0;

//   const inner = () => {
//     count++;
//     console.log(count);
//   };

//   return inner;
// };

// const counter = Counter(); // { count:4}
// const counter1 = Counter(); // { count:3}

// counter(); //1
// counter(); //2
// counter(); //3
// counter1(); //1
// counter(); //4
// counter1(); //2
// counter1(); //3

const Counter = (initialCount = 0) => {
  let count = initialCount;

  const increment = () => {
    count++;
  };

  //! decrement
  const decrement = () => {
    count--;
  };
  //! getCount
  const getCount = () => {
    console.log(count);
    return count;
  };

  return {
    increment: increment,
    decrement,
    getCount,
  };
};

// const counter = Counter(5); // { count:5}
// const counter1 = Counter(); // { count:0}
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment(); //4
// counter.decrement(); //3
// counter.getCount(); // 3

//! function factory
const add = (factor) => {
  return (num) => {
    return factor + num;
  };
};

// const add = (f) => (n) => f + n;

// const add5 = add(5); // {factor:5}
// const add10 = add(10); // {factor:10}
// console.log(add5(10));
// console.log(add5(13));
// console.log(add10(23));

//* caching
const sum = () => {
  let cache = {};

  return (num) => {
    if (cache[num.toString()]) {
      console.log("cache");
      return cache[num.toString()];
    } else {
      let res = 0;
      console.log("calculating");
      for (let i = 0; i < 9000000000; i++) {}
      res = num * 1000;
      cache[num.toString()] = res;
      return cache[num.toString()];
    }
  };
};

// const x = sum();
// console.log(x(2)); //
// console.log(x(2));
// console.log(x(2));
// console.log(x(2));
// console.log(x(4));
// console.log(x(4));

//! Account(acc_name,initial_amt)
//* deposit , withdraw , blc_inq
const Account = (acc_name, initial_amt = 1000) => {
  let name = acc_name;
  let balance = initial_amt;
  //

  // const deposit = () =>{}
  return {
    deposit: (amt) => {
      if (amt < 0) {
        console.log("Invalid amount. Deposit amount must be positive.");
        return;
      }

      balance += amt;
      console.log(`Total balance is: ${balance}`);
    },
    withdraw: (amt) => {
      if (amt < 0) {
        console.log("Invalid amount.Withdraw amount must be positive.");
        return;
      }

      if (balance - amt < 500) {
        console.log("Insufficient balance.");
        return;
      }
      balance -= amt;
      console.log(`Total balance is: ${balance}`);
    },
    balance_inq: () => {
      console.log(`Total balance is: ${balance}`);
    },
    details: () => {
      console.log({
        name,
        balance,
      });
    },
  };
};

//! using closure
const john = Account("John Doe", 1000);

john.deposit(500);
john.withdraw(1200);
