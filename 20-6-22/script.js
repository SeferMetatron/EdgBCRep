// Esercizio 1

let x = Number;
let y = Number;

function sum1(x, y) {
  return x + y;
}
console.log("The result is:", +sum1(7, 9));

// Esercizio 2

function sum2(x, y) {
  if (isNaN(x) || isNaN(y)) {
    console.error("Enter two valid numbers");
  } else if (sum2(x)) {
    console.error("Enter two valid numbers");
  } else {
    console.log("The result is:", +sum2(x, y));
  }
}
console.log("The result is:", +sum2(7, 9));

// Esercizio 3

function sub(x, y) {
  if (isNaN(x) || isNaN(y)) {
    console.error("Enter two valid numbers");
  } else if (sub(x)) {
    console.error("Enter two valid numbers");
  } else {
    console.log("The result is:", +sub(x, y));
  }
}
console.log("The result is:", +sub(9, 7));

function mult(x, y) {
  if (isNaN(x) || isNaN(y)) {
    console.error("Enter two valid numbers");
  } else if (mult(x)) {
    console.error("Enter two valid numbers");
  } else {
    console.log("The result is:", mult(x, y));
  }
}
console.log("The result is:", +mult(9, 7));

function div(x, y) {
  if (y == 0) {
    console.error("Only Chuck Norris can do that");
  } else if (isNaN(x) || isNaN(y)) {
    console.error("Enter two valid numbers");
  } else if (div(x)) {
    console.error("Enter two valid numbers");
  } else {
    console.log("The result is:", +div(x, y));
  }
}
console.log("The result is" + div(4, 2));

// Esercizio 4

const calc = function (x, y, o) {
  o(x, y);
};

calc(sum2, 4, 5);
calc(sub, 5, 3);
calc(mult, 5, 9);
calc(div, 9, 3);
