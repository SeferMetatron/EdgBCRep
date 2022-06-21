const nameList = ["Pippo", "Paperino", "Topolino", "Pluto", "Paperinik"];

// Esercizio 1
const fn1 = nameList.map((element, index) => index + "-" + element);
console.log(fn1);
// Esercizio 2

const fn2 = nameList.map((_, index, array) => array.length - 1 - index);
console.log(fn2);
// Esercizio 3

const fn3 = nameList.map(
  (_, index, array) => nameList[array.length - 1 - index]
);
console.log(fn3);
