// localStorage.clear();
const body = document.body;
const newEl = (el) => document.createElement(el);
const navEl = newEl("nav");
const divEl = newEl("div");
const userFirst = prompt("Enter your first name");
const userSecond = prompt("Enter your second name");
// const arrayN = [{ name: userFirst, surname: userSecond }];
navEl.className = "nav";
body.append(navEl);
navEl.append(divEl);

localStorage.setItem("username", userFirst);
localStorage.setItem("surname", userSecond);
localStorage.getItem("username");
localStorage.getItem("surname");
navEl.innerHTML = userFirst + ` ` + userSecond;

try {
  if (userFirst || userSecond != null) {
  }
  throw new Error("Check the data entered");
} catch (error) {
  console.warn(error);
  document.body.append(
    (document.createElement("p").textContent = "404, please try again")
  );
  throw new Error("I am firing up my laser");
} finally {
  console.log("All your base are belong to us");
}
