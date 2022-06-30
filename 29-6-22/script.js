import { q, createCard } from "./utils.js";
import { GET, POST, DELETE } from "./api.js";

const BASE_URL = "https://edgemony-backend.herokuapp.com/series";
const addSeriesBtnEl = q(".add-series");
const removeSeriesBtnEl = q(".remove-series");
const deleteInputEl = q(".delete");

// const body = {
//   favorite: true,
//   genres: ["scifi"],
//   new: false,
//   poster: "https://images-na.ssl-images-amazon.com/images/I/91MteSqsrJL.jpg",
//   rating: 50,
//   seasons: 4,
//   title: "Rick e Morty",
// };

GET(BASE_URL).then((data) => {
  data.map((series) => {
    const imgOrPlaceholder = series.poster || "https://picsum.photos/200/300";
    try {
      createCard(
        document.body,
        imgOrPlaceholder,
        series.title,
        series.year,
        series.id
      );
    } catch (error) {
      console.log(error);
    }
  });
});
addSeriesBtnEl.addEventListener("click", () => {
  const titleInputEl = q(".title").value;
  const posterInputEl = q(".poster").value;
  const yearInputEl = q(".year").value;

  const body = {
    title: titleInputEl,
    poster: posterInputEl,
    year: yearInputEl,
  };
  POST(BASE_URL, body).then(() => location.reload());
});

deleteInputEl.addEventListener("input", (eventInput) => {
  removeSeriesBtnEl.addEventListener("click", (eventClick) => {
    DELETE(BASE_URL, eventInput.target.value).then(() => location.reload());
  });
});
