function getRandomChannel() {
  return Math.floor(Math.random() * 255);
}
function getRandomColor() {
  return `rgb(${getRandomChannel()}, ${getRandomChannel()}, ${getRandomChannel()})`;
}

function randomColorBtn(wrrapper) {
  const btn = document.createElement("button");

  wrapper.append(btn);
  btn.textContent = "hello";

  btn.addEventListener("click", function () {
    const color = getRandomColor();
    btn.style.backgroundColor = color;
  });
}
randomColorBtn(document.querySelector("body"));
