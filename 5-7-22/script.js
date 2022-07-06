// Ex 1
const product = {
  id: 1,
  name: "TV",
  price: 40,
  addons: {
    decoder: 10,
    qled: 40,
    stereo: 20,
  },
};

const values = Object.values(product.addons);
let add = 0;
const fullOptionalPrice = values.forEach((val) => (add += val));
console.log(add + product.price);

// // Ex 2

const getProductHTML = (product) => {
  const { name, price } = product;
  return `<li>${name} - ${price}€</li>`;
};

const shop = {
  name: "Edgemonics",
  _products: [],
  _page: 1,
  _per_page: 6,

  get products() {
    const indexOfLastPage = this._page * this._per_page;
    const indexOfFirstPage = indexOfLastPage - this._per_page;
    console.log(indexOfFirstPage, indexOfLastPage);

    console.log("Stai leggendo i prodotti di ", this.name);
    const paginatedProducts = this._products.slice(
      indexOfFirstPage,
      indexOfLastPage
    );

    return paginatedProducts;
  },

  set products(newProducts) {
    this._products = newProducts;
    this.renderHTML();
  },

  set page(newPage) {
    this._page = newPage;
    console.log(this._page);
  },

  renderHTML() {
    this._products.remove;
    const productsEl = document.querySelector(".products");
    const productsHTML = this.products.map(getProductHTML).join("");
    productsEl.innerHTML = `
          
          <ul>${productsHTML}</ul>
      `;
  },
};

const button1 = document.querySelector(".first_page");
const button2 = document.querySelector(".second_page");
const button3 = document.querySelector(".third_page");

button1.addEventListener("click", () => {
  shop.page = 1;
  shop.renderHTML();
});
button2.addEventListener("click", () => {
  shop.page = 2;
  shop.renderHTML();
});

button3.addEventListener("click", () => {
  shop.page = 3;
  shop.renderHTML();
});

shop.products = [
  {
    id: 0,
    name: "Apple Iphone 8",
    price: 800,
  },
  {
    id: 1,
    name: "SamsungS8",
    price: 700,
  },
  {
    id: 3,
    name: "Patate",
    price: 6,
  },
  {
    id: 4,
    name: "Tv Samsung 55",
    price: 899,
  },
  {
    id: 5,
    name: "Sony Xperia Mini",
    price: 129,
  },
  {
    id: 6,
    name: "Sony Xperia U",
    price: 189,
  },
  {
    id: 7,
    name: "Huawei Patate",
    price: 299,
  },
  {
    id: 8,
    name: "Banane",
    price: 7,
  },
  {
    id: 9,
    name: "Pesche",
    price: 6,
  },
  {
    id: 10,
    name: "Pesce",
    price: 8,
  },
  {
    id: 11,
    name: "Salmone",
    price: 70,
  },
  {
    id: 12,
    name: "Presonus Studio 24c",
    price: 240,
  },
  {
    id: 13,
    name: "M-Audio BX8",
    price: 230,
  },
  {
    id: 14,
    name: "Macbook Air M1",
    price: 950,
  },
  {
    id: 15,
    name: "Toshiba Schifiu",
    price: 200,
  },
  {
    id: 16,
    name: "Nintendo Switch Lite",
    price: 199,
  },
  {
    id: 17,
    name: "ProductHTML",
    price: 240,
  },
  {
    id: 18,
    name: "Acqua Panna",
    price: 24,
  },
];
