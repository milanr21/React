// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.

// const newNumbers = numbers.map(function (x) {
//   return x * 3;
// });

// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// var number1 = [3, 56, 2, 48, 5];

// const filternumber = number1.filter(function (num) {
//   return num > 5;
// });

// console.log(filternumber);

//Reduce - Accumulate a value by doing something to each item in an array.

// var number1 = [3, 56, 2, 48, 5];

// var newNumbers = number1.reduce(function (accumulator, currentNumber) {
//   console.log("accumulator = " + accumulator);
//   console.log("currentNumber = " + currentNumber);

//   return accumulator + currentNumber;
// });

// console.log(newNumbers);

//Find - find the first item that matches from an array.

// var number1 = [3, 5, 12, 48, 5];

// const newNumbers = number1.find(function (num) {
//   return num > 10;
// });

// console.log(newNumbers);

//FindIndex - find the index of the first item that matches.

// var numbers = [1, 7, 11, 26, 54];

// const IndexofNumber = numbers.findIndex(function (num) {
//   return num > 10;
// });

// console.log(IndexofNumber);

import emojipedia from "./emojipedia";

const emojiterm = emojipedia.map((meanings) =>
  meanings.meaning.substring(0, 100)
);

console.log(emojiterm);
