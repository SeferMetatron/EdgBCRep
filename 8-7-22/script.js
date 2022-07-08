const formEl = document.querySelector(".todo-form");
const inputEl = formEl.querySelector("input");
const listEl = document.querySelector(".search-list");
const SITE_URL = "https://openlibrary.org";
const BASE_API_URL = "https://openlibrary.org/search.json?q=";

formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputValue = inputEl.value;
  const searchFormatted = inputValue.replaceAll(" ", "+");
  const apiURL = `${BASE_API_URL}/${searchFormatted}`;

  fetch(apiURL)
    .then((response) => {
      const json = response.json();
      return json;
    })

    .then((json) => {
      listEl.innerHTML = json.docs
        .map((doc) => {
          return `<li>${doc.title} <button data-key="${doc.key}">Read More</button></li>`;
        })
        .join("");
    });
});
