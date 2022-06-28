import { newEl, createCard, q } from "./utils.js";

const userFirst = prompt("Enter your first name");
localStorage.setItem("username", userFirst);

// const body = document.body;
const nameString = newEl("user");
const nameStringF = newEl("userf");
const headerEl = newEl("header");
// const navEl = newEl ("navbar");
const footEl = newEl("footer");
const overEl = q(".over");
const salesEl = q(".sales");
const newCollectionEl = q(".new-collection");
const luxuryEl = q(".luxury");
const loadingEl = q(".loading");
const electronicEl = q(".electronics");
const navbar = q(".navbar");
const footer = q(".footer");

nameString.textContent = `Hi, ${userFirst}`;
nameStringF.textContent = `Hi, ${userFirst}`;

//headerEl.append(navEl);
//body.appendChild(headerEl);
//body.appendChild(footerEl)
navbar.append(nameString);
footer.append(nameStringF);

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    const itemCount = data
      .filter((product) => product.price <= 100)
      .map((product) =>
        createCard(salesEl, product.image, product.title, product.price)
      );

    data
      .filter((product) => product.price >= 100)
      .map((product) =>
        createCard(newCollectionEl, product.image, product.title, product.price)
      );
    data
      .filter((product) => product.price > 200)
      .map((product) =>
        createCard(luxuryEl, product.image, product.title, product.price)
      );
    data
      .filter((product) => product.category === "electronics")
      .map((product) =>
        createCard(electronicEl, product.image, product.title, product.price)
      );
    data
      .filter((product) => product.rating.count >= 200)
      .map((product) =>
        createCard(overEl, product.image, product.title, product.price)
      );

    const itemCountN = itemCount.length;
    headerEl.textContent = `available product: ${itemCountN}`;
    footEl.textContent = `available product: ${itemCountN}`;
  })
  .then(() => (loadingEl.style.display = "none"));
