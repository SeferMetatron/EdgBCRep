// localStorage.clear();
const body = document.body;
const newEl = (el) => document.createElement(el);
const navEl = newEl("nav");
const divEl = newEl("div");
const userFirst = prompt("Enter your first name");
// const userSecond = prompt("Enter your second name");
// const arrayN = [{ name: userFirst, surname: userSecond }];
navEl.className = "nav";
body.append(navEl);
navEl.append(divEl);

// localStorage.setItem("username", userFirst);
// localStorage.setItem("surname", userSecond);
// localStorage.getItem("username");
// localStorage.getItem("surname");
navEl.innerHTML = userFirst;

try {
  if (localStorage.getItem("username") !== userFirst) {
    localStorage.setItem("username", userFirst);
  } else throw Error("Enter your credentials");
} catch (error) {
  console.log(error);
  document.body.append(
    (document.createElement("p").textContent = "404, try again")
  );
  throw Error("Uh Oh, something broke");
} finally {
  console.log("All your base are belong to us");
}
