console.clear;
const arrayx = [1, 2, 3, 4, 5, 6, 7, 8];
const arrayz = [10, 1, 2, 5, 6];
const timeMS = 1000;
let timer = 0;
// Esercizio 1

// A
const fnLog = arrayx.forEach((element) => console.log(element));
// const itemList = arrayx.forEach[fnLog];

// B

// for (let index = 0; index < array.length; index++) {
//   setTimeout(function () {
//     console.log(index);
//   }, index * 1000);
// }

const fnTime = arrayx.forEach((element) => {
  setTimeout(() => {
    console.log(`At ${element - 1}s, print`, arrayx[element - 1]);
  }, timer);
  timer = timer + timeMS;
});
// Esercizio 2

// A
const fnEven = arrayx.filter((element) => element % 2 === 0);
console.log(fnEven);

// B
const fnInclude = arrayx.filter((element) => arrayz.includes(element));
console.log(fnInclude);
