(function () {
  console.clear();

  const newProducts = Array.from(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    (_, index) => {
      return {
        id: 1,
        name: `Golden Legendary - ${_}`,
        price: 40 + index,
        image: "https://picsum.photos/200/300",
      };
    }
  );
  const shop = {
    page: 0,
    perPage: 6,
    products: [],
    reco: 0,

    setPage(newPage) {
      this.page = newPage;
      this.renderHTML();
    },

    getProducts() {
      const startIndex = this.page * this.perPage;
      const endIndex = startIndex + this.perPage;

      const slicedProducts = this.products.slice(startIndex, endIndex);

      return slicedProducts;
    },
    getPrice() {
      alert(
        `Now on offer: ${this.products[this.reco].price}£, Achtung, only ${
          this.products[this.reco].stock
        }`
      );
    },
    setRecoVal(reco) {
      this.reco = reco;
    },
    setProducts(products) {
      this.products = products;
      this.renderHTML();
    },

    renderHTML() {
      const productsHTML = this.getProducts()
        .map((product) => {
          const { name, price, image } = product;
          return `<li> <img src="${image}"> <p>${name}</p><p>${price}€</p> <button> Purchase </button></li>`;
        })
        .join("");
      document.querySelector(".shop").innerHTML = `
          <h2>Offerte lampo</h2>
          <div>Page: ${this.page}</div>
          <div>Showing: ${this.getProducts().length}/${
        this.products.length
      }</div>
          <ul>${productsHTML}</ul>
      `;
    },
  };

  shop.setProducts(newProducts);

  const $pagination = document.querySelector(".pagination");
  // const $buttons = document.querySelectorAll(".pagination button");

  $pagination.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      event.preventDefault();
      const buttonEl = event.target;
      const newPage = Number(buttonEl.innerText) - 1;

      shop.setPage(newPage);
    }
  });

  const $productsContainer = document.querySelector(".products");
  $productsContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      shop.reco = event.target.id;
      shop.getPrice;
    }
  });
})();
