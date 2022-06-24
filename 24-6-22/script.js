(function () {
  const $body = document.body;
  let count = 0;
  const $div = document.createElement("div");
  const $button1 = document.createElement("button");
  $button1.innerText = "+";
  const $button2 = document.createElement("button");
  $button2.innerText = "-";
  $body.append($div, $button1, $button2);

  $button2.addEventListener("click", () => {
    if (count > 0) count--;
    $div.innerHTML = count;
  });
  $button1.addEventListener("click", () => {
    if (count < 10) count++;
    $div.innerHTML = count;
  });
})();
