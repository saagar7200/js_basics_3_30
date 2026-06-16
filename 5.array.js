//! array
// let n1 = 1;
// let n2 = 2;
//? Array constructor
// const arr = new Array();

//? array literal  []

const numbers = [1, 2, 34, 5, 6, 7];

// numbered indexed  & start from 0

//? accessing array elements
// arr_name[index]  -> returns elements
console.log(numbers[0]); // 1
let first_el = numbers[0];
console.log(first_el);

numbers[1] = 20;

//? adding new element
//! from end
//* arr_name.push(ele)
// const res = numbers.push(80, 56, 7, 8);
// console.log(res);

//! from start
//* arr_name.unshift(ele)
// numbers.unshift(12);

//? removing element
//! form end
//* arr_name.pop()
console.log(numbers.pop());

//! from start
//* arr_name.shift()
console.log(numbers.shift());

//! length
numbers.push(34);
numbers.push(340);

console.log(numbers[numbers.length - 1]);
console.log(numbers.length); //

//at()
console.log(numbers.at(0), numbers[0]);
console.log(numbers.at(-2), numbers[-1]);

//! splice()
//* array_name.splice(start_index , delete_count , ...items)
console.log(numbers);

// const res = numbers.splice(1, 2, 123, 45, 6, 7);
// console.log(res); //[34,5]

//! search

//* includes(item)
//? returns boolean
console.log(numbers.includes(45)); //
console.log(numbers.includes(5)); //

//* indexOf(ele)
console.log(numbers.indexOf(34));
console.log(numbers.indexOf(45));
console.log(numbers.lastIndexOf(34));

console.log(numbers);

//todo: array-methods
