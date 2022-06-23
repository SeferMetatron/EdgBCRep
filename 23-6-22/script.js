console.clear;
const timeMS = 1000;
const arrayInterv = [1, 5, 10];
const arrayNum = [42, 23, 1, 7, 12, 99];
// const hours = new Date().getHours();
// const minutes = new Date().getMinutes();
// const seconds = new Date().getSeconds();

// Esercizio 1

const fn1 = arrayInterv.forEach((element) => {
  setTimeout(() => {
    console.log(`${new Date().getHours()}:${new Date().getMinutes()}`);
  }, timeMS * element);
});

// Esercizio 2

const fnTime = () => {
  console.log(
    `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
  );
};
const timerId = setInterval(fnTime, 1000);
console.log({ timerId });

// Esercizio 3 - Consegna poco chiara; Attempt 1

// const randomizeNumber = () => {
//   const random = Math.floor(Math.random() * array.length);
//   console.log(arrayNum[random]);
//   array.splice[random];
// };
// const stopInterval = () => {
//   clearInterval(timerId2);
// };

// const timerId2 = setInterval(randomizeNumber, 1000);

// setTimeout(stopInterval, 1000 * array.length);

// Attempt 2
// const bingo = () => {const bingoRaffle = }

// Esercizio 4
const fn2 = () => {
  `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;

  document.body.innerHTML = `<div class="clock">
    <h1>
      ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}
    </h1>
    </div>
  `;
};
setInterval(fn2, 1000);
