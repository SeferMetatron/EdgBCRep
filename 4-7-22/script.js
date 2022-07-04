console.clear;

const obj1 = { foo: "bar" };
const obj2 = { name: "Mio nome" };
const obj3 = { pippo: "Pluto" };
// const obj4 = { phrase: "All your base are belong to us" };
// const merg1 = { ...obj1, ...obj2 };
// const merg2 = { ...obj1, ...obj2, ...obj3 };
// const merg3 = [{ ...obj1, ...obj2, ...obj3, ...obj4 }];

// Esercizio spread

const merging1 = (x, y) => {
  return { ...x, ...y };
};
console.log(merging1(obj1, obj2));
const merging2 = (x, y, z) => {
  return { ...x, ...y, ...z };
};
console.log(merging2(obj1, obj2, obj3));
// console.log(merg1);
// console.log(merg2);

// Esercizio destructuring
const tenLength = [
  "Django",
  "Supercalifragili",
  "Supercalifragilistiche",
  "Supercalifragilistichespiralidocious",
].filter((element) => {
  return element.length >= 10;
});
console.log(tenLength);

// const tenLength = merg3.filter((value) => {
//   return value.length >= 10;
// });
// console.log(tenLength);

// Esercizio get/set

const shop = {
  _products: [
    { id: 1, name: "TV", price: 40 },
    { id: 2, name: "PC", price: 30 },
  ],

  get getProducts() {
    return this._products;
  },
  set setProducts(val) {
    this._products = [...this._products, val];
  },
};
console.log(shop.getProducts);

shop.setProducts = { id: 3, name: "Amiga", price: 280 };
shop.setProducts = { id: 4, name: "Atari", price: 490 };
console.log(shop.getProducts);

const body = document.querySelector("body");
body.innerHTML = `
<h1>Item List</h1>
<ul>
<li class= "list-item"> <p>Id ${shop.getProducts[0].id}</p>  <p> Name: ${shop.getProducts[0].name}</p> <p>Price: ${shop.getProducts[0].price}</p> </li>
<li class= "list-item"> <p>Id: ${shop.getProducts[1].id}</p>  <p> Name: ${shop.getProducts[1].name}</p> <p>Price: ${shop.getProducts[1].price}</p> </li>
<li class= "list-item"> <p>Id: ${shop.getProducts[2].id}</p>  <p> Name: ${shop.getProducts[2].name}</p> <p>Price: ${shop.getProducts[2].price}</p> </li>
<li class= "list-item"> <p>Id: ${shop.getProducts[3].id}</p>  <p> Name: ${shop.getProducts[3].name}</p> <p>Price: ${shop.getProducts[3].price}</p> </li>
</ul>`;
