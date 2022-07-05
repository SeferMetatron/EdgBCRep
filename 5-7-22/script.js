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

// Ex 2

const getProductHTML = (product) => {
  const { name, price } = product;
  return `<li>${name} - ${price}€</li>`;
};

const shop = {
  name: "Edgemonics",
  _products: [],
  _page: 1,
  _per_page: 2,

  get getProducts() {
    console.log("Stai leggendo i prodotti di ", this.name);
    const startIndex = 0;
    const endIndex = 0;
    const paginatedProducts = this._products;

    return paginatedProducts;
  },

  set setProducts(newProducts) {
    this._products = newProducts;

    const productsHTML = this.products.map(getProductHTML).join("");
    document.body.innerHTML = `
        <h2>Offerte lampo</h2>
        <ul>${productsHTML}</ul>
    `;
  },

  set page(newPage) {},

  renderHTML() {},
};

shop.setProducts = [
  { id: 1, name: "A", price: 1 },
  { id: 2, name: "B", price: 2 },
  { id: 3, name: "C", price: 3 },
  { id: 4, name: "D", price: 4 },
  { id: 5, name: "E", price: 5 },
  { id: 6, name: "F", price: 6 },
  { id: 7, name: "G", price: 7 },
  { id: 8, name: "H", price: 8 },
  { id: 9, name: "I", price: 9 },
  { id: 10, name: "J", price: 10 },
];

// Computer said no so I just uploaded this
